import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material'
import { GitHub, Launch } from '@mui/icons-material'
import { motion } from 'framer-motion'
import PokedexImage from '../../assets/pokedex.png'
import GuitarLAImage from '../../assets/guitarLA.png'
import RestImage from '../../assets/Rest.png'
import SectionTitle from '../common/SectionTitle'

const projects = [
    {
        title: "Pokedex App",
        description: "Pokedex App made with React and Javascript, using the PokeAPI to fetch data. It also uses Tailwind CSS for styling. The app displays a list of Pokemon and their details when clicked on.",
        image: PokedexImage,
        technologies: ["React", "Javascript", "Tailwind CSS"],
        demoLink: "https://pokedex-tau-tawny.vercel.app/",
        codeLink: "https://github.com/ByFabrii/pokedex"
    },
    {
        title: "GuitarLA Store App",
        description: "GuitarLA is a guitar store app made with React and Typescript. Learned from a tutorial but added some extra features like a shopping cart improved and a checkout page.",
        image: GuitarLAImage,
        technologies: ["React", "Typescript", "Material-UI"],
        demoLink: "https://guitar-shop-virid-pi.vercel.app/",
        codeLink: "https://github.com/ByFabrii/guitarShop"
    },
    {
        title: "Multi language Restaurant Page Sample",
        description: "Multi language Restaurant Page Sample is a page made with React and Typescript just to practice the multi language pages with full support to add more languages using simple JSON.",
        image: RestImage,
        technologies: ["React", "Typescript", "Tailwind CSS"],
        demoLink: "https://rest-template-ruby.vercel.app/",
        codeLink: "https://github.com/ByFabrii/restTemplate"
    },
    // Add more projects here
]

const Projects = () => {
    return (
        <Box
            component="section"
            id="projects"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                py: 12,
                px: { xs: 2, sm: 4, md: 20 }
            }}
        >
            <Box 
                maxWidth="xl" 
                sx={{ 
                    width: '100%',
                    mx: 'auto'
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <SectionTitle title="My Projects" />

                    <Grid 
                        container 
                        spacing={{ xs: 2, sm: 3, md: 4 }}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'stretch'
                        }}
                    >
                        {projects.map((project, index) => (
                            <Grid 
                                item 
                                xs={12} 
                                sm={6} 
                                md={4} 
                                key={project.title}
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Card
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            background: 'rgba(13, 13, 30, 0.7)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: 2,
                                            transition: 'transform 0.3s ease-in-out',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 12px 20px rgba(0,0,0,0.2)'
                                            }
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                height: 220,
                                                objectFit: 'cover'
                                            }}
                                            image={project.image}
                                            alt={project.title}
                                        />
                                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                            <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                                                {project.title}
                                            </Typography>
                                            <Typography>
                                                {project.description}
                                            </Typography>
                                            <Box sx={{ mt: 2 }}>
                                                {project.technologies.map((tech) => (
                                                    <Chip
                                                        key={tech}
                                                        label={tech}
                                                        sx={{
                                                            m: 0.5,
                                                            background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </CardContent>
                                        <CardActions sx={{ p: 3, pt: 0 }}>
                                            <Button
                                                size="medium"
                                                href={project.demoLink}
                                                target="_blank"
                                                variant="contained"
                                                startIcon={<Launch />}
                                                sx={{
                                                    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                                                    color: 'white',
                                                    px: 2,
                                                    '&:hover': {
                                                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                                        transform: 'scale(1.05)',
                                                        transition: 'transform 0.2s',
                                                    }
                                                }}
                                            >
                                                Live Demo
                                            </Button>
                                            <Button
                                                size="medium"
                                                href={project.codeLink}
                                                target="_blank"
                                                variant="outlined"
                                                startIcon={<GitHub />}
                                                sx={{
                                                    borderColor: '#FF8E53',
                                                    color: '#FF8E53',
                                                    px: 2,
                                                    '&:hover': {
                                                        borderColor: '#FE6B8B',
                                                        color: '#FE6B8B',
                                                        background: 'rgba(254, 107, 139, 0.1)',
                                                        transform: 'scale(1.05)',
                                                        transition: 'transform 0.2s',
                                                    }
                                                }}
                                            >
                                                View Code
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Box>
        </Box>
    )
}

export default Projects