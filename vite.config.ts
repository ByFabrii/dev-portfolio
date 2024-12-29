import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // o la ruta específica si no está en la raíz
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})