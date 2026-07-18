import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel sets the VERCEL env var during its builds → serve from root.
// Local builds (used for GitHub Pages via gh-pages) → serve from the repo subpath.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' || process.env.VERCEL ? '/' : '/hasnaa_portfolio/',
}))