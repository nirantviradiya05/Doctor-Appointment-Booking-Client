import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Doctor-Appointment-Booking-Client/', // Base path for GitHub Pages repo subfolder
  plugins: [react()],
  server: {
    port: 5173,  // Optional: your local dev server port
  },
  build: {
    outDir: 'dist', // Default output folder, you can customize if needed
  },
})
