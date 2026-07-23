import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Pe GitHub Pages (proiect), site-ul e servit de la /nume-repo/, deci `base`
// trebuie sa fie exact numele repo-ului. Il deducem automat din variabila
// GITHUB_REPOSITORY setata de GitHub Actions — nu trebuie sa il scrii de mana.
//
// Local (npm run dev / build) ramane '/'.
// Cand legi un domeniu propriu, seteaza BASE_PATH=/ in workflow (vezi README).
const numeRepo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.BASE_PATH ?? (numeRepo ? `/${numeRepo}/` : '/')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
})
