import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // For GitHub Pages (project pages), set VITE_BASE to "/<repo>/".
  // For a custom domain or user pages, keep it as "/".
  base: process.env.VITE_BASE || '/Site/',
  plugins: [react()],
})
