import { Resend } from 'resend';

// Valores para restricciones
const MAX_EMAILS_PER_IP = 5; // Máximo de correos por IP en el período
const TIME_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
const MAX_CONTENT_LENGTH = 250; // Caracteres máximos para el mensaje

// Almacenamiento simple para tracking de IPs (en una implementación real usarías Redis o similar)
// Este objeto se resetea cuando la función serverless se reinicia
const ipTracker = {};

// Función para limpiar IPs antiguas (más de 24 horas)
const cleanupOldEntries = () => {
  const now = Date.now();
  Object.keys(ipTracker).forEach(ip => {
    ipTracker[ip] = ipTracker[ip].filter(timestamp => now - timestamp < TIME_WINDOW_MS);
    if (ipTracker[ip].length === 0) {
      delete ipTracker[ip];
    }
  });
};

// Función para validar el contenido del correo
const validateEmailContent = (name, email, message) => {
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return { valid: false, error: 'Invalid name' };
  }

  if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
    return { valid: false, error: 'Invalid email address' };
  }

  if (!message || typeof message !== 'string' || message.trim() === '') {
    return { valid: false, error: 'Message cannot be empty' };
  }

  if (message.length > MAX_CONTENT_LENGTH) {
    return { valid: false, error: `Message too long (max ${MAX_CONTENT_LENGTH} characters)` };
  }

  // Comprobar contenido malicioso (simplificado)
  const suspiciousPatterns = [
    /<script/i, 
    /javascript:/i, 
    /onclick/i,
    /href=/i,
    /eval\(/i
  ];

  const containsMaliciousContent = suspiciousPatterns.some(pattern => 
    pattern.test(name) || pattern.test(message)
  );

  if (containsMaliciousContent) {
    return { valid: false, error: 'Suspicious content detected' };
  }

  return { valid: true };
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Verificar método HTTP
  if (!process.env.RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY environment variable');
    return res.status(500).json({ 
      error: 'Server configuration error',
      message: 'Email service not properly configured' 
    });
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const clientIP = req.headers['x-forwarded-for'] || 
                  req.headers['x-real-ip'] || 
                  req.socket.remoteAddress || 
                  'unknown';

  cleanupOldEntries(); // Limpiar entradas antiguas
  
  if (!ipTracker[clientIP]) {
    ipTracker[clientIP] = [];
  }

  // Si ha excedido el límite de correos por período
  if (ipTracker[clientIP].length >= MAX_EMAILS_PER_IP) {
    console.warn(`Rate limit exceeded for IP: ${clientIP}`);
    return res.status(429).json({ 
      error: 'Too many requests. Please try again later.',
      retryAfter: '24 hours' 
    });
  }

  try {
    const { name, email, message, recaptchaToken } = req.body;

    const validation = validateEmailContent(name, email, message);
    if (!validation.valid) {
      return res.status(400).json({ error: validation.error });
    }

    if (req.body.website || req.body.company) { // Campos que deben estar vacíos
      // Silenciosamente registra el intento pero responde como si fuera exitoso
      console.log('Honeypot triggered, probable bot');
      return res.status(200).json({ success: true }); 
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <formulario@fabrizziodev.com>',
      to: 'contacto@fabrizziodev.com',
      subject: `Portfolio Contact: ${name}`,
      reply_to: email,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });
    
    ipTracker[clientIP].push(Date.now());
    
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email', 
      message: process.env.NODE_ENV === 'production' ? 'Server error' : error.message 
    });
  }
}