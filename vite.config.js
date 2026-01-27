import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/portfolio/', 
  build: {
    rollupOptions: {
      input: {
        gate: resolve(__dirname, 'index.html'),
        main: resolve(__dirname, 'pages/index.html'),
        guide: resolve(__dirname, 'pages/guide.html'),
      }
    }
  }
})