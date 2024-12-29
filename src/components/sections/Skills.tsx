import { Box, Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { 
    SiReact, SiTypescript, SiJavascript, 
    SiHtml5, SiCss3, SiNodedotjs,
    SiMysql, SiPostgresql, SiGit,
    SiFigma, SiVite, SiExpo, 
    SiPhp, SiOpenjdk, SiBootstrap,  // Changed from SiJava to SiOpenjdk
    SiTailwindcss, SiMui,           // Changed from SiMaterialui to SiMui
    SiExpress, SiAdobeillustrator,
    SiCanva
} from 'react-icons/si'

  type IconColorType = {
    [key: string]: string;
    React: string;
    'React Native': string;
    TypeScript: string;
    JavaScript: string;
    HTML5: string;
    CSS3: string;
    'Node.js': string;
    MySQL: string;
    PostgreSQL: string;
    Git: string;
    Figma: string;
    Vite: string;
    Expo: string;
    PHP: string;
    AJAX: string;
    Java: string;
    Bootstrap: string;
    Tailwind: string;
    'Material UI': string;
    Express: string;
    Illustrator: string;
    Canva: string;
  }

  const iconColors: IconColorType = {
    React: '#61DAFB',
    'React Native': '#61DAFB',
    TypeScript: '#3178C6',
    JavaScript: '#F7DF1E',
    HTML5: '#E34F26',
    CSS3: '#1572B6',
    'Node.js': '#339933',
    MySQL: '#4479A1',
    PostgreSQL: '#4169E1',
    Git: '#F05032',
    Figma: '#F24E1E',
    Vite: '#646CFF',
    Expo: '#000020',
    PHP: '#777BB4',
    AJAX: '#4789C1',
    Java: '#007396',
    Bootstrap: '#7952B3',
    Tailwind: '#06B6D4',
    'Material UI': '#007FFF',
    Express: '#F7DF1E',
    Illustrator: '#FF9A00',
    Canva: '#00C4CC'
  }

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "React Native", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "Vite", icon: <SiVite /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "Java", icon: <SiOpenjdk /> },
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Material UI", icon: <SiMui /> },
        { name: "Expo", icon: <SiExpo /> }
      ]
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Illustrator", icon: <SiAdobeillustrator /> },
        { name: "Canva", icon: <SiCanva /> }
      ]
    }
  ]

const Skills = () => {
    return (
        <Box
            component="section"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                py: 8
            }}
        >
            <Box maxWidth="lg" sx={{ mx: 'auto', px: 3 }}>
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
                        Skills & Expertise
                    </Typography>

                    <Grid container spacing={4}>
                        {skillCategories.map((category, index) => (
                        <Grid item xs={12} md={3} key={category.title}>
                            <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            >
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            p: 3,
                                            background: 'rgba(13, 13, 30, 0.7)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: 2,
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                mb: 1,
                                                background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            }}
                                        >
                                            {category.title}
                                        </Typography>

                                        <Grid 
                                            container 
                                            spacing={2}
                                            sx={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(2, 1fr)',
                                                gap: 2,
                                                padding: 1,
                                            }}
                                        >
                                            {category.skills.map((skill, skillIndex) => (
                                                <Grid item xs={6} key={skill.name}>
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.1 }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                alignItems: 'center',
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    fontSize: '2rem',
                                                                    color: 'primary.main',
                                                                    transition: 'all 0.3s ease',
                                                                    '&:hover': {
                                                                        color: theme => iconColors[skill.name] || theme.palette.primary.main,
                                                                        transform: 'translateY(-5px)'
                                                                    },
                                                                }}
                                                            >
                                                                {skill.icon}
                                                            </Box>
                                                            <Typography
                                                                variant="body2"
                                                                sx={{
                                                                    textAlign: 'center',
                                                                    color: 'text.secondary'
                                                                }}
                                                            >
                                                                {skill.name}
                                                            </Typography>
                                                        </Box>
                                                    </motion.div>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Box>
        </Box>
    )
}

export default Skills