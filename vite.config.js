import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves at /Sam-Works/ — set VITE_BASE_PATH=/Sam-Works/ in CI
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [react()],
})
