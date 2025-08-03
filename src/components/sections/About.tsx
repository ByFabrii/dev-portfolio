import { Box, Typography, Grid, Paper, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, School, Work } from '@mui/icons-material';
import SectionTitle from '../common/SectionTitle';

const About = () => {
  const highlights = [
    { icon: <Code />, label: "Full Stack Developer" },
    { icon: <School />, label: "Teleinformatics Engineer" },
    { icon: <Work />, label: "4+ Years Experience" },
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Add this
        
      }}
    >
      <Box maxWidth="lg" sx={{ mx: 'auto', px: 3 }}>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle title="About me" />

              <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 4 }}>
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
                      m: 1
                    }}
                  />
                ))}
              </Stack>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  background: 'rgba(13, 13, 30, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 2
                }}
              >
                <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                I am currently working as a Full Stack Developer at my own company, Malta Digital Agency. I have been involved in web development for 4 years, with experience in technologies such as React, PHP (for both backend and frontend), Node.js, Express, MySQL, PostgreSQL, and other tools related to testing and design.
                  <br /> <br />In addition, I am a professional QA engineer with over than 1 year of experience. My expertise includes automation testing, manual testing, and performance testing. I am proficient with tools like Playwright, RestAssured, and Postman, as well as programming languages such as Java and Kotlin, using IntelliJ as my primary IDE.
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