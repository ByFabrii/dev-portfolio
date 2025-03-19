import { useState, useEffect } from 'react';
import { 
  TextField, Button, Box, Alert, CircularProgress, 
  Paper, Typography, Grid, InputAdornment
} from '@mui/material';
import { Send } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // Campo honeypot invisible
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [submitCount, setSubmitCount] = useState(0);

  // Limpiar el contador de envíos después de 24 horas
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSubmitCount(0);
    }, 24 * 60 * 60 * 1000); // 24 horas

    return () => clearTimeout(timeoutId);
  }, [submitCount]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      message: formData.message.trim() === ''
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación del formulario
    if (!validateForm()) return;
    
    // Protección contra múltiples envíos rápidos
    const now = Date.now();
    if (now - lastSubmitTime < 10000) { // 10 segundos entre envíos
      setSubmitStatus({
        success: false,
        message: 'Please wait a moment before sending another message'
      });
      return;
    }

    // Protección contra exceso de envíos
    if (submitCount >= 5) { // Máximo 5 envíos por sesión
      setSubmitStatus({
        success: false,
        message: 'Maximum message limit reached for today'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Si el campo honeypot tiene contenido, simulamos una respuesta exitosa pero no enviamos
      if (formData.website) {
        console.log('Honeypot detected');
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '', website: '' });
        return;
      }

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
          // No incluimos el campo website (honeypot)
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '', website: '' });
        setLastSubmitTime(Date.now());
        setSubmitCount(prev => prev + 1);
      } else {
        throw new Error(data.error || 'Failed to send email');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        background: 'rgba(13, 13, 30, 0.7)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 2,
        mb: 4
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: '#FE6B8B' }}>
        Send Me a Message
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              helperText={errors.name ? 'Name is required' : ''}
              required
              variant="outlined"
              autoComplete="name"
              inputProps={{ maxLength: 50 }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#FE6B8B',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FE6B8B',
                  }
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email ? 'Please enter a valid email' : ''}
              required
              variant="outlined"
              autoComplete="email"
              inputProps={{ maxLength: 100 }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#FE6B8B',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FE6B8B',
                  }
                }
              }}
            />
          </Grid>
          {/* Campo honeypot - invisible para usuarios pero visible para bots */}
          <div style={{ display: 'none' }}>
            <TextField
              fullWidth
              label="Website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin="normal"
              label="Your Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              helperText={errors.message ? 'Message is required' : ''}
              required
              variant="outlined"
              inputProps={{ maxLength: 250 }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#FE6B8B',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FE6B8B',
                  }
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Typography variant="caption" color="text.secondary">
                      {formData.message.length}/250
                    </Typography>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        
        {submitStatus && (
          <Alert 
            severity={submitStatus.success ? 'success' : 'error'}
            sx={{ mt: 2 }}
          >
            {submitStatus.message}
          </Alert>
        )}
        
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              startIcon={isSubmitting ? <CircularProgress size={20} /> : <Send />}
              sx={{
                background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                color: 'white',
                p: 2,
                px: 4,
                '&:hover': {
                  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                  boxShadow: '0 8px 16px rgba(254, 107, 139, 0.3)',
                },
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Paper>
  );
};

export default ContactForm;