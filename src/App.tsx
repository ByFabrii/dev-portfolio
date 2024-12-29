import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import ScrollToTop from './components/others/ScrollToTop'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App