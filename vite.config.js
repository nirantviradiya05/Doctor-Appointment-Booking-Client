import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Doctor-Appointment-Booking-Client/', // 👈 Required for GitHub Pages
  plugins: [react()],
  server: { port: 5173 }
})
