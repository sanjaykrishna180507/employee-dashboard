import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the built site loads from any folder or
  // sub-path (GitHub Pages, Netlify, Vercel, opening dist/ on a server...)
  base: './',
})
