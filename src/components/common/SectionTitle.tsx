import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
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
        {title}
      </Typography>
    </motion.div>
  );
};

export default SectionTitle;