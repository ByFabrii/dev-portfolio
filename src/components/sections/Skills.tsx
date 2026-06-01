import { Box, Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { 
    SiReact, SiTypescript, SiJavascript, 
    SiHtml5, SiCss3, SiNodedotjs,
    SiMysql, SiPostgresql, SiGit,
    SiFigma, SiVite, SiExpo, 
    SiPhp, SiOpenjdk, 
    SiTailwindcss, SiMui,          
    SiSpringboot, SiAdobeillustrator,
    SiCanva, SiLaravel, SiTestinglibrary, 
    SiKotlin, SiPostman, SiDocker
} from 'react-icons/si'
import SectionTitle from '../common/SectionTitle';

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
    Laravel: string;
    Java: string;
    'Spring Boot': string;
    Tailwind: string;
    'Material UI': string;
    Playwright: string;
    Kotlin: string;
    Postman: string;
    Docker: string;
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
    Laravel: '#FF2D20',
    Java: '#007396',
    'Spring Boot': '#6DB33F',
    Tailwind: '#06B6D4',
    'Material UI': '#007FFF',
    'Testing Library': '#E5135A',
    Playwright: '#2EAD33',
    Kotlin: '#7F52FF',
    Postman: '#FF6C37',
    Docker: '#2496ED',
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
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Material UI", icon: <SiMui /> }
      ]
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "Java", icon: <SiOpenjdk /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> }
      ]
    },
    {
      title: "QA & Infra",
      skills: [
        { name: "Testing Library", icon: <SiTestinglibrary /> },
        { name: "Kotlin", icon: <SiKotlin /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Git", icon: <SiGit /> },
        { name: "MySQL", icon: <SiMysql /> }
      ]
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Vite", icon: <SiVite /> },
        { name: "Expo", icon: <SiExpo /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Canva", icon: <SiCanva /> }
      ]
    }
  ]

const Skills = () => {
    return (
        <Box
            component="section"
            id="skills"
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
                    <SectionTitle title="Skills & Expertise" />

                    <Grid container spacing={4}>
                        {skillCategories.map((category, index) => (
                        <Grid item xs={12} md={3} key={category.title}>
                            <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{ height: '100%' }} // Asegura que las tarjetas midan lo mismo
                            >
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            p: 3,
                                            height: '100%', // Hace que todas las tarjetas tengan la misma altura
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
                                                mb: 3, // Aumenté el margen para dar más respiro al título
                                                background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                fontSize: '1.25rem', // Ajuste de tamaño para nombres de categoría más largos
                                                fontWeight: 'bold',
                                                textAlign: 'center'
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
                                                flexGrow: 1 // Empuja el contenido para llenar el espacio
                                            }}
                                        >
                                            {category.skills.map((skill, skillIndex) => (
                                                <Grid item xs={12} key={skill.name} sx={{ padding: '0 !important' }}> {/* Reseteo de padding del item para usar solo el gap del grid CSS */}
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.1 }}
                                                        viewport={{ once: true }}
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
                                                                    color: 'text.secondary',
                                                                    mt: 0.5,
                                                                    fontSize: '0.75rem' // Evita que los nombres largos rompan el diseño
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