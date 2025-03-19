import { Box, Typography, Button, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { Email, GetApp, GitHub, LinkedIn } from '@mui/icons-material'
import CVPdf from '../../assets/FabrizzioDevCV.pdf'
import ContactForm from '../others/ContactForm' // Importar el componente
import SectionTitle from '../common/SectionTitle'

const Contact = () => {
    return (
        <Box
            component="section"
            id="contact"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                py: 8, // Añadir padding vertical
            }}
        >
            <Box maxWidth="lg" sx={{ mx: 'auto', px: 3 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <SectionTitle title="Contact me" />

                    <Grid container spacing={4} justifyContent="center">
                        {/* Formulario de contacto - columna izquierda */}
                        <Grid item xs={12} md={7}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <ContactForm />
                            </motion.div>
                        </Grid>

                        {/* Links de contacto - columna derecha */}
                        <Grid item xs={12} md={5}>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        background: 'rgba(13, 13, 30, 0.7)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography variant="h5" gutterBottom sx={{ color: '#FE6B8B', mb: 3 }}>
                                        Connect With Me
                                    </Typography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                href={CVPdf}
                                                download
                                                startIcon={<GetApp />}
                                                sx={{
                                                    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                                                    p: 2,
                                                    '&:hover': {
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: '0 8px 16px rgba(254, 107, 139, 0.3)',
                                                    },
                                                }}
                                            >
                                                Download CV
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                href="mailto:contacto@fabrizziodev.com"
                                                startIcon={<Email />}
                                                sx={{
                                                    borderColor: '#FE6B8B',
                                                    color: '#FE6B8B',
                                                    p: 2,
                                                    '&:hover': {
                                                        borderColor: '#FF8E53',
                                                        backgroundColor: 'rgba(254, 107, 139, 0.1)',
                                                    }
                                                }}
                                            >
                                                Email Me
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                href="https://github.com/ByFabrii"
                                                target="_blank"
                                                startIcon={<GitHub />}
                                                sx={{
                                                    borderColor: '#FE6B8B',
                                                    color: '#FE6B8B',
                                                    p: 2,
                                                    '&:hover': {
                                                        borderColor: '#FF8E53',
                                                        backgroundColor: 'rgba(254, 107, 139, 0.1)',
                                                    }
                                                }}
                                            >
                                                GitHub
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                href="https://www.linkedin.com/in/fabrizzio-carbonell/"
                                                target="_blank"
                                                startIcon={<LinkedIn />}
                                                sx={{
                                                    borderColor: '#FE6B8B',
                                                    color: '#FE6B8B',
                                                    p: 2,
                                                    '&:hover': {
                                                        borderColor: '#FF8E53',
                                                        backgroundColor: 'rgba(254, 107, 139, 0.1)',
                                                    }
                                                }}
                                            >
                                                LinkedIn
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </Box>
        </Box>
    )
}

export default Contact