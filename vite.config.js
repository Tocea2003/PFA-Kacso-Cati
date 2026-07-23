import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // La hosting pe GitHub Pages, seteaza aici `base: '/nume-repo/'`.
  // Pentru Netlify/Vercel sau domeniu propriu, lasa base implicit ('/').
})
