import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  root: './', // Azt mondjuk neki: itt vagyunk a gyökérben
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html' // Itt keresd a belépési pontot
    }
  }
})
