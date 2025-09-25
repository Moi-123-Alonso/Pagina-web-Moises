import { defineConfig } from 'vite'

// Vite config mínima para servir un sitio estático desde la raíz del proyecto
export default defineConfig({
  root: '.',
  server: {
    open: true,
    port: 5173
  }
})
