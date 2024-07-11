import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://13.51.146.181:8080',
  //       changeOrigin: true,
  //       secure:false,
        
  //     },
  //   },
  // },
})
