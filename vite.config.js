import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    // eslint-disable-next-line no-undef
    'process.env.VITE_KEY': JSON.stringify(process.env.VITE_KEY)
  }
})
