import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejsv/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis'
  },
  test: {
    globals: true,
    watch: false,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/setupTests.ts'
  },
  server: {
    open: true,
  }
})