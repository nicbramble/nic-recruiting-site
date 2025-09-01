import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Default base '/' for local dev. The GitHub Action passes --base="/<repo>/" automatically.
export default defineConfig({
  plugins: [react()],
  base: '/'
})
