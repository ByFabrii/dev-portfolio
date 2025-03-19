import { Box, Typography, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import BackgroundCanvas from '../others/BackgroundCanvas'

const roles = [
  "Full Stack Developer",
  "Web Designer",
  "React Developer"
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 100
    const currentRole = roles[roleIndex]

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000)
      return
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev =>
        isDeleting
          ? prev.slice(0, -1)
          : currentRole.slice(0, prev.length + 1)
      )
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -40; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box
      component="section"
      id="root"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <BackgroundCanvas maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '4.5rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
              textAlign: 'center'
            }}
          >
            Fabrizzio Dev
          </Typography>
          <motion.div
            animate={{ opacity: [0.5, 1] }}
            transition={{ duration: 0.3 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                color: 'text.secondary',
                mb: 4,
                textAlign: 'center',
                minHeight: '3.5rem'
              }}
            >
              {displayText}
              <span className="cursor">|</span>
            </Typography>
          </motion.div>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => scrollToSection('projects')}
              sx={{
                background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 16px rgba(254, 107, 139, 0.3)',
                },
                transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out'
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollToSection('contact')}
              sx={{
                borderColor: '#FE6B8B',
                color: '#FE6B8B',
                '&:hover': {
                  borderColor: '#FF8E53',
                  backgroundColor: 'rgba(254, 107, 139, 0.1)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              Contact Me
            </Button>
          </Box>
        </BackgroundCanvas>
      </motion.div>
    </Box>
  )
}

export default Hero