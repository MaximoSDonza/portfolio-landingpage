import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  // GitHub Pages publica el sitio en https://maximosdonza.github.io/portfolio-landingpage/,
  // así que el build necesita ese prefijo. En desarrollo (pnpm dev) se sigue usando la raíz.
  base: command === 'build' || isPreview ? '/portfolio-landingpage/' : '/',
  plugins: [react(), tailwindcss()],
}))
