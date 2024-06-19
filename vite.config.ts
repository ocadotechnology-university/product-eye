import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejsv/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis'
  },
  resolve: {
    alias:{
      src: '/src'
    }
  },
  test: {
    globals: true,
    watch: false,
    environment: 'jsdom',
    css: true,
<<<<<<< HEAD
    setupFiles: './src/setupTests.ts',
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['text'],
      include: [
        './src/**/*.{js,jsx,ts,tsx}'
      ],
      exclude: [
        './node_modules'
      ]
    }
  },
  server: {
    open: true,
    port: 3000
=======
    setupFiles: './src/setupTests.ts'
  },
  server: {
    open: true,
>>>>>>> origin/iter3-rotation-calculator
  }
})