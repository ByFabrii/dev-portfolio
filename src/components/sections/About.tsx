import { Box, Typography, Grid, Paper, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, BugReport, Storage } from '@mui/icons-material';
import SectionTitle from '../common/SectionTitle';

const About = () => {
  const highlights = [
    { icon: <Code />, label: "Full-Stack Software Engineer" },
    { icon: <BugReport />, label: "QA Automation / SDET" },
    { icon: <Storage />, label: "Java Spring Boot & Node TS" },
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8 // Añadido un poco de padding vertical para respiración
      }}
    >
      <Box  sx={{ mx: 'auto', px: 3 }}>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} md={8}> {/* Aumentado a md={8} para que el texto respire mejor */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle title="About Me" />

              <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center" sx={{ mb: 4 }}>
                {highlights.map((item, index) => (
                  <Chip
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    sx={{
                      background: 'rgba(254, 107, 139, 0.1)',
                      border: '1px solid #FE6B8B',
                      color: '#FE6B8B',
                      '&:hover': {
                        background: 'rgba(254, 107, 139, 0.2)',
                      },
                      m: 1,
                      fontWeight: 500
                    }}
                  />
                ))}
              </Stack>

              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  background: 'rgba(13, 13, 30, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 2
                }}
              >
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.7 }}>
                  Based in Jalisco, Mexico, I am a Full-Stack Software Engineer and QA Automation professional with over 4 years of experience building enterprise-grade applications. At my agency, Malta Digital Agency, I architect end-to-end solutions, advocating for clean, minimalist interfaces backed by robust infrastructure. My core web stack revolves around React, modern PHP frameworks, and Node.js with TypeScript.
                </Typography>

                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.7 }}>
                  Beyond my full-stack foundation, I am deeply passionate about modern backend ecosystems. I specialize in designing highly scalable, RESTful APIs using Java 21 and Spring Boot, parallel to robust Node TS environments. I prefer self-hosted deployments utilizing Docker to maintain strict control over performance and project architecture.
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  My engineering philosophy bridges the gap between development and quality assurance. As an SDET, I build custom testing frameworks utilizing Playwright, RestAssured based custom libraries and JAVA. This dual expertise allows me to write code that is not only functional but rigorously tested, scalable, and built to solve complex, real-world problems.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;