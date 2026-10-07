import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      // Proxies any call to http://localhost:3000/api/meme -> http://localhost:5000/api/meme
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});

