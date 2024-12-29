import { Box, Container, Typography } from '@mui/material';
import { TimelineItem, Timeline, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { Work } from '@mui/icons-material';

const Experience = () => {
  const experiences = [
    {
      title: "PHP Developer",
      company: "Malta Digital Agency",
      period: "2018 - present",
      description: "Leading development of web applications using HTML, CSS, JS, PHP and MySQL",
    },
    {
      title: "React Developer",
      company: "Malta Digital Agency",
      period: "2023 - present",
      description: "Developing web applications using React, TypeScript, and Material-UI / Tailwind CSS components",
    },
    {
      title: "React Native Developer",
      company: "Malta Digital Agency",
      period: "August 2024 - present",
      description: "Developing a directory app using React Native, TypeScript, and Postgre SQL database",
    },
    {
      title: "QA Engineer",
      company: "SICAR Solutions",
      period: "Abril 2024 - present",
      description: "Manual testing to web aplication 'Sicar X' and testing Rest API with Postman and Rest Assured similar libraries",
    }
  ];

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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
            Experience
          </Typography>

          <Timeline position="alternate">
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot sx={{ 
                    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)'
                  }}>
                    <Work />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: '#FE6B8B' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Typography variant="h6" color="#FE6B8B">
                      {exp.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {exp.company}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {exp.period}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {exp.description}
                    </Typography>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;