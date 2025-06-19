import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:ProcessingInstruction.env.VITE_BASE_URL || "/intervue.io_frontend",
})
