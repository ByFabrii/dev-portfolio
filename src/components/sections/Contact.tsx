import { Box, Typography, Button, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { Email, GetApp, GitHub, LinkedIn } from '@mui/icons-material'
import CVPdf from '../../assets/FabrizzioDevCV.pdf'

const Contact = () => {
    return (
        <Box
            component="section"
            id="contact"
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
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
                        Contact Me
                    </Typography>

                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    background: 'rgba(13, 13, 30, 0.7)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: 2,
                                }}
                            >
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
                                            href="mailto:your.email@example.com"
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
                        </Grid>
                    </Grid>
                </motion.div>
            </Box>
        </Box>
    )
}

export default Contact