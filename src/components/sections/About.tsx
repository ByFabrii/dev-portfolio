import { Box, Typography, Grid, Paper, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, School, Work } from '@mui/icons-material';

const About = () => {
  const highlights = [
    { icon: <Code />, label: "Full Stack Developer" },
    { icon: <School />, label: "Teleinformatics Engineer" },
    { icon: <Work />, label: "3+ Years Experience" },
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
        pb: 12,
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
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 6,
                  textAlign: 'center'
              }}
              >
                About Me
              </Typography>

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
                  Actually i'm working as a Full Stack Developer at my own company called Malta Digital Agency, i have been working with web development for 3 years now, i have experience with React, PHP as Backend and Frontend Technology, Node.js, Express, MySQL, PostgreSQL, and other technologies like testing and design.
                  <br /> <br />Im also a professional QA engineer with almost 1 year of experience, i have worked with automation testing, manual testing, and performance testing. I have experience with tools like Selenium, RestAssured, Postman, JAVA and Kotlin using InteliJ as the IDE.
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