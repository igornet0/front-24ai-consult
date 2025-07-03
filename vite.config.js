import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',   
    port: 4000, 
    strictPort: true, 
    proxy: {
      '/api': 'http://localhost:8834', // порт твоего backend
    },
  },
  
  build: {
    rollupOptions: {
      output: {
        // Хеширование файлов для кэширования
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  }
})
