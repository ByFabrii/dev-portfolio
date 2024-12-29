import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1000,
          }}
        >
          <IconButton
            onClick={scrollToTop}
            sx={{
              background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            }}
          >
            <KeyboardArrowUp />
          </IconButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;