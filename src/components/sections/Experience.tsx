import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Work } from '@mui/icons-material';
import SectionTitle from '../common/SectionTitle';

const Experience = () => {
  const experiences = [
    {
      title: "QA Automation Engineer / SDET",
      company: "SICAR Solutions",
      period: "April 2024 - Present",
      description: "Led frontend automation using Playwright and backend testing via a custom proprietary framework. Promoted to a leadership role within agile teams, architecting an internal Java library that standardizes JSON translations into dynamic Enums, eliminating hardcoded strings and scaling custom test assertions department-wide.",
    },
    {
      title: "Full-Stack PHP & Laravel Developer",
      company: "Malta Digital Agency / Independent",
      period: "2021 - Present",
      description: "Architecting end-to-end PHP web solutions specializing in workflow automation and AI integrations. Engineered a university-wide digital justification system that reduced administrative processing time by over 90%. Currently developing a scalable Laravel financial platform featuring an NLP-driven AI agent for dynamic budget querying and automated receipt parsing via computer vision.",
    },
    {
      title: "React Developer",
      company: "Malta Digital Agency",
      period: "2023 - Present",
      description: "Engineered scalable web applications and customizable niche ecosystems using React and TypeScript. Developed a specialized, multi-tenant restaurant platform architecture featuring i18Next for internationalization and Framer Motion for advanced UI interactions. Additionally, built responsive, data-driven interfaces utilizing Tailwind CSS and third-party REST API integrations, ensuring optimized client-side performance.",
    },
    {
      title: "React Native Developer",
      company: "Malta Digital Agency",
      period: "August 2024 - Present",
      description: "Leading the development of a high-performance cross-platform mobile directory application using React Native and TypeScript. Architected robust client-server communication to seamlessly interface with a PostgreSQL database. Focused on efficient data synchronization, optimized list rendering for large datasets, and delivering a fluid, native-like user experience across both iOS and Android platforms.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <SectionTitle title="Experience" />

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={cardVariants} style={{ height: '100%' }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      borderRadius: 3,
                      // Transición al estilo Glassmorphism premium
                      background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.45) 0%, rgba(10, 10, 25, 0.7) 100%)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        // Iluminación sutil del borde en hover para coincidir con la paleta
                        borderColor: 'rgba(254, 107, 139, 0.3)', 
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.02)',
                        '& .icon-bg': {
                          transform: 'scale(1.1)',
                        },
                      },
                    }}
                  >
                    {/* Línea decorativa superior */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                      }}
                    />

                    {/* Encabezado de la Tarjeta */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                      <Box
                        className="icon-bg"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 42,
                          height: 42,
                          borderRadius: '50%',
                          background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                          color: 'white',
                          transition: 'transform 0.3s ease',
                          flexShrink: 0, // Evita que el icono se deforme
                        }}
                      >
                        <Work fontSize="small" />
                      </Box>
                      <Box>
                        <Typography variant="h6" component="h3" sx={{ color: '#ffffff', fontWeight: 600, lineHeight: 1.2 }}>
                          {exp.title}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: '#FE6B8B', fontWeight: 500, mt: 0.5 }}>
                          {exp.company}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Periodo de tiempo destacado */}
                    <Typography 
                        variant="caption" 
                        sx={{ 
                            mb: 2, 
                            display: 'block', 
                            fontStyle: 'italic', 
                            fontWeight: 500,
                            color: 'rgba(255, 255, 255, 0.4)' // Ajuste para mejor contraste en dark mode
                        }}
                    >
                      {exp.period}
                    </Typography>

                    {/* Descripción del puesto */}
                    <Typography 
                        variant="body2" 
                        sx={{ 
                            mt: 'auto', 
                            lineHeight: 1.6,
                            color: 'rgba(255, 255, 255, 0.7)' // Gris claro para legibilidad superior
                        }}
                    >
                      {exp.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;