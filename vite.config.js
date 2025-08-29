import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Doctor-Appointment-Booking-Client/', // 👈 Base path for GitHub Pages project site
  plugins: [react()],
  server: {
    port: 5173,  // Optional: specify your dev server port
  },
})
