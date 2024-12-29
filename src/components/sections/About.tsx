import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  background: 'rgba(13, 13, 30, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%'
                }}
              >
                <Typography variant="h5" sx={{ mb: 2, color: '#FE6B8B' }}>
                  Professional Journey
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                  Actually i'm working as a Full Stack Developer at my own company called Malta Digital Agency, i have been working with web development for 3 years now, i have experience with React, PHP as Backend and Frontend Technology, Node.js, Express, MySQL, PostgreSQL, and other technologies like testing and design.
                  <br /> <br />Im also a professional QA engineer with almost 1 year of experience, i have worked with automation testing, manual testing, and performance testing. I have experience with tools like Selenium, RestAssured, Postman, JAVA and Kotlin using InteliJ as the IDE.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  background: 'rgba(13, 13, 30, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%'
                }}
              >
                <Typography variant="h5" sx={{ mb: 2, color: '#FF8E53' }}>
                  Personal Side
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  I'm a 24 years old guy from Mexico, i love coding and learning new things, i'm always looking for new challenges and opportunities to grow as a professional and as a person. I love to play video games, watch movies and series, and spend time with my family and friends.
                    <br /> <br />I'm a passionate person who loves to help others and share my knowledge with the people around me, i'm always looking for ways to improve myself and be a better person every day.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;