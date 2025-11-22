import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure CSS is inlined into JS
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // Optimize chunk splitting
        manualChunks: undefined,
      },
    },
  },
})
