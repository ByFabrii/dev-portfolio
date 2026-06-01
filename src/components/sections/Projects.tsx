import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material'
import { GitHub, Launch, Lock } from '@mui/icons-material'
import { motion } from 'framer-motion'
import QALibraryImage from '../../assets/qa-library.png'
import CashTrackr from '../../assets/cashTrackr.png'
import PokedexImage from '../../assets/pokedex.png'
import GuitarLAImage from '../../assets/guitarLA.png'
import proof from '../../assets/proof.png'
import restaurant from '../../assets/restaurant.png'
import encodeo from '../../assets/encodeo.png'
import SectionTitle from '../common/SectionTitle'

const projects = [
    {
        title: "UDG Automated Justification System",
        type: "Enterprise Work",
        description: "An enterprise-grade workflow automation platform deployed at the local Centro Universitario de la Costa Sur to digitize a highly manual administrative bottleneck. The system features a Role-Based Access Control (RBAC) dashboard where students submit requests and coordinators manage approvals. Upon approval, it dynamically compiles a custom PDF with digital signatures, institutional seals, and backgrounds, automatically dispatching the validated document via email. This architecture reduced processing times from several days to mere minutes.",
        image: proof,
        technologies: ["PHP", "MySQL", "JavaScript", "PDF Automation", "SMTP"],
        demoLink: "https://www.instagram.com/reel/DPA4KcOgAcU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        codeLink: null
    },
    {
        title: "AI-Powered Financial Manager",
        type: "SaaS Platform",
        description: "A next-generation personal finance and budget management platform built with Laravel. It integrates a conversational AI agent capable of understanding natural language queries to perform database operations and provide financial insights. The system features a computer vision pipeline that allows users to upload images of physical receipts, automatically extracting, categorizing, and registering expenses without manual data entry. Designed with a highly scalable architecture suitable for SaaS deployment.",
        image: CashTrackr,
        technologies: ["Laravel", "PHP", "AI / NLP", "OCR Vision", "MySQL", "Tailwind CSS"],
        demoLink: null,
        codeLink: null 
    },
    {
        title: "Dynamic I18n Test Automation Library",
        type: "Automation Utility",
        description: "An enterprise-grade Java utility developed to solve string hardcoding within E2E and API test assertions. By dynamically parsing the system's live JSON translation schemas into runtime Enums, the library eliminated manual synchronization bottlenecks for QA teams. It standardizes localization testing, scales cross-departmentally, and enhances developer experience (DX) across multiple agile squads.",
        image: QALibraryImage,
        technologies: ["Java", "JSON", "Test Automation", "OOP"],
        demoLink: null,
        codeLink: null
    },
    {
        title: "Encodeo - Base64 Encoder/Decoder",
        type: "Developer Tool",
        description: "Fast and secure Base64 encoder/decoder built with React and TypeScript. Features real-time validation, dual-mode interface (encode/decode), 100% client-side processing, and a modern dark UI with educational content about Base64 encoding.",
        image: encodeo,
        technologies: ["React", "TypeScript", "CSS3", "Vite"],
        demoLink: "https://encodeo.fabrizziodev.com/",
        codeLink: "https://github.com/ByFabrii/base64"
    },
    {
        title: "Restaurant Web Page Template",
        type: "Client Solution Template",
        description: "It's a specialized base template for restaurants that is part of a broader ecosystem that allows creating customized websites for different business niches. It also has a system of internationalization that allows changing languages.",
        image: restaurant,
        technologies: ["React", "Typescript", "Vite", "Tailwind", "Framer Motion", "i18Next"],
        demoLink: "https://rest-template-ruby.vercel.app/",
        codeLink: "https://github.com/ByFabrii/restTemplate"
    },
    {
        title: "Pokedex App",
        type: "Open Source / Client Side",
        description: "Pokedex App made with React and Javascript, using the PokeAPI to fetch data. It also uses Tailwind CSS for styling. The app displays a list of Pokemon and their details when clicked on.",
        image: PokedexImage,
        technologies: ["React", "Javascript", "Tailwind CSS"],
        demoLink: "https://pokedex-tau-tawny.vercel.app/",
        codeLink: "https://github.com/ByFabrii/pokedex"
    }
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
                px: { xs: 2, sm: 4, md: 12, lg: 16 },
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Sutil resplandor de fondo estilo interfaz de desarrollo premium */}
            <Box 
                sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(254, 107, 139, 0.05) 0%, rgba(0,0,0,0) 70%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            <Box maxWidth="xl" sx={{ width: '100%', mx: 'auto', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <SectionTitle title="Featured Projects" />

                    <Grid
                        container
                        spacing={{ xs: 3, md: 4 }}
                        sx={{ display: 'flex', alignItems: 'stretch' }}
                    >
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={project.title} sx={{ display: 'flex' }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{ display: 'flex', width: '100%' }}
                                >
                                    <Card
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.45) 0%, rgba(10, 10, 25, 0.7) 100%)',
                                            backdropFilter: 'blur(16px)',
                                            border: '1px solid rgba(255, 255, 255, 0.06)',
                                            borderRadius: 3,
                                            overflow: 'hidden',
                                            position: 'relative',
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                transform: 'translateY(-6px)',
                                                borderColor: 'rgba(254, 107, 139, 0.3)',
                                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.02)',
                                                '& .project-image': {
                                                    transform: 'scale(1.04)',
                                                }
                                            }
                                        }}
                                    >
                                        {/* Contenedor de Imagen con Overlay e Indicador de Tipo */}
                                        <Box sx={{ position: 'relative', overflow: 'hidden', height: 200 }}>
                                            <CardMedia
                                                component="img"
                                                className="project-image"
                                                sx={{
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                                }}
                                                image={project.image}
                                                alt={project.title}
                                            />
                                            {/* Difuminado e integración estética de la imagen hacia el contenido */}
                                            <Box 
                                                sx={{
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '50%',
                                                    background: 'linear-gradient(to top, rgba(10, 10, 25, 1) 0%, rgba(10, 10, 25, 0) 100%)',
                                                }}
                                            />
                                            {/* Badge de Categoría / Tipo de Proyecto */}
                                            <Chip 
                                                label={project.type}
                                                size="small"
                                                sx={{
                                                    position: 'absolute',
                                                    top: 16,
                                                    left: 16,
                                                    background: 'rgba(10, 10, 25, 0.75)',
                                                    backdropFilter: 'blur(8px)',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    color: 'rgba(255, 255, 255, 0.85)',
                                                    fontSize: '0.7rem',
                                                    fontWeight: 600,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px'
                                                }}
                                            />
                                        </Box>

                                        {/* Contenido de la Tarjeta */}
                                        <CardContent sx={{ flexGrow: 1, p: 3, pt: 2 }}>
                                            <Typography 
                                                variant="h5" 
                                                component="h3" 
                                                sx={{ 
                                                    fontWeight: 700, 
                                                    fontSize: '1.25rem',
                                                    color: '#ffffff',
                                                    mb: 1.5,
                                                    lineHeight: 1.3
                                                }}
                                            >
                                                {project.title}
                                            </Typography>
                                            
                                            <Typography 
                                                variant="body2" 
                                                sx={{ 
                                                    color: 'rgba(255, 255, 255, 0.6)', 
                                                    lineHeight: 1.6,
                                                    fontSize: '0.875rem',
                                                    mb: 3
                                                }}
                                            >
                                                {project.description}
                                            </Typography>

                                            {/* Sección de Stack Tecnológico Limpio */}
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                {project.technologies.map((tech) => (
                                                    <Chip
                                                        key={tech}
                                                        label={tech}
                                                        size="small"
                                                        sx={{
                                                            background: 'rgba(255, 255, 255, 0.04)',
                                                            color: 'rgba(255, 255, 255, 0.7)',
                                                            border: '1px solid rgba(255, 255, 255, 0.06)',
                                                            fontSize: '0.75rem',
                                                            fontWeight: 400,
                                                            borderRadius: '6px'
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </CardContent>

                                        {/* Barra de Acciones */}
                                        <CardActions sx={{ p: 3, pt: 0, mt: 'auto' }}>
                                            {project.demoLink && (
                                                <Button
                                                    size="small"
                                                    href={project.demoLink}
                                                    target="_blank"
                                                    variant="contained"
                                                    disableElevation
                                                    endIcon={<Launch sx={{ fontSize: '14px !important' }} />}
                                                    sx={{
                                                        background: 'linear-gradient(45deg, #FF8E53 0%, #FE6B8B 100%)',
                                                        color: 'white',
                                                        fontWeight: 600,
                                                        fontSize: '0.8rem',
                                                        textTransform: 'none',
                                                        px: 2.5,
                                                        py: 0.8,
                                                        borderRadius: '8px',
                                                        transition: 'transform 0.2s ease',
                                                        '&:hover': {
                                                            background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 100%)',
                                                            transform: 'scale(1.02)'
                                                        }
                                                    }}
                                                >
                                                    Live Demo
                                                </Button>
                                            )}

                                            {project.codeLink && (
                                                <Button
                                                    size="small"
                                                    href={project.codeLink}
                                                    target="_blank"
                                                    variant="outlined"
                                                    startIcon={<GitHub sx={{ fontSize: '14px !important' }} />}
                                                    sx={{
                                                        borderColor: 'rgba(255, 255, 255, 0.15)',
                                                        color: 'rgba(255, 255, 255, 0.8)',
                                                        fontWeight: 500,
                                                        fontSize: '0.8rem',
                                                        textTransform: 'none',
                                                        px: 2,
                                                        py: 0.8,
                                                        borderRadius: '8px',
                                                        '&:hover': {
                                                            borderColor: 'rgba(255, 255, 255, 0.3)',
                                                            background: 'rgba(255, 255, 255, 0.03)'
                                                        }
                                                    }}
                                                >
                                                    Repository
                                                </Button>
                                            )}

                                            {/* Badge elegante para proyectos privados de propiedad intelectual corporativa */}
                                            {!project.codeLink && !project.demoLink && (
                                                <Box 
                                                    sx={{ 
                                                        display: 'flex', 
                                                        alignItems: 'center', 
                                                        gap: 1,
                                                        background: 'rgba(255, 255, 255, 0.03)',
                                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                                        py: 0.6,
                                                        px: 1.5,
                                                        borderRadius: '6px'
                                                    }}
                                                >
                                                    <Lock sx={{ color: 'rgba(255,255,255,0.3)', fontSize: 14 }} />
                                                    <Typography 
                                                        variant="caption" 
                                                        sx={{ 
                                                            color: 'rgba(255, 255, 255, 0.4)', 
                                                            fontWeight: 500,
                                                            letterSpacing: '0.2px'
                                                        }}
                                                    >
                                                        Proprietary Code • Internal Tool
                                                    </Typography>
                                                </Box>
                                            )}
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