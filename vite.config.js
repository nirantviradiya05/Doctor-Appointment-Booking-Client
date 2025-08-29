import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Base public path when served in production.
  // For GitHub Pages, set it to your repo name (including slashes).
  base: '/Doctor-Appointment-Booking-Client/',

  plugins: [react()],

  // Development server config (optional)
  server: {
    port: 5173, // Specify your dev server port if needed
  },
})
