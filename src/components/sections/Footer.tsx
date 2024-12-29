import { Box, Container, IconButton, Typography, Stack } from '@mui/material';
import { GitHub, Instagram, Facebook } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: 'linear-gradient(180deg, rgba(13, 13, 30, 0) 0%, rgba(13, 13, 30, 0.7) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                textAlign: { xs: 'center', sm: 'center' }
              }}
            >
              © {new Date().getFullYear()} Fabrizzio Dev. All rights reserved.
            </Typography>

            <Stack direction="row" spacing={2}>
              <IconButton
                href="https://github.com/ByFabrii"
                target="_blank"
                sx={{
                  color: '#FE6B8B',
                  '&:hover': {
                    color: '#FF8E53',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s'
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/fabrizzio_carbonell/"
                target="_blank"
                sx={{
                  color: '#FE6B8B',
                  '&:hover': {
                    color: '#FF8E53',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s'
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/profile.php?id=100073780393616"
                sx={{
                  color: '#FE6B8B',
                  '&:hover': {
                    color: '#FF8E53',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s'
                }}
              >
                <Facebook />
              </IconButton>
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;