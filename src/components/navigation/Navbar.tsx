import { useState, useEffect } from 'react';
import { 
  AppBar, Toolbar, Button, IconButton, Drawer, 
  List, ListItem, Box, useMediaQuery, useTheme 
} from '@mui/material';
import { Menu as MenuIcon, Close } from '@mui/icons-material';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', id: 'root' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={scrolled ? 4 : 0}
        component={motion.div}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          background: scrolled 
            ? 'rgba(13, 13, 30, 0.95)' 
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.2)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="text" 
              onClick={() => scrollToSection('root')}
              sx={{ 
                textTransform: 'none',
                background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              FabrizzioDev
            </Button>
          </motion.div>
          
          {!isMobile ? (
            <Box sx={{ display: 'flex' }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      mx: 1,
                      color: 'white',
                      '&:hover': {
                        background: 'rgba(254, 107, 139, 0.1)'
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </Box>
          ) : (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: '70%',
            maxWidth: '300px',
            background: 'rgba(13, 13, 30, 0.95)',
            backdropFilter: 'blur(10px)',
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle}>
            <Close />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.id}>
              <Button
                fullWidth
                onClick={() => scrollToSection(item.id)}
                sx={{
                  py: 2,
                  justifyContent: 'flex-start',
                  color: 'white',
                  '&:hover': {
                    background: 'rgba(254, 107, 139, 0.1)'
                  }
                }}
              >
                {item.name}
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </>
  );
};

export default Navbar;