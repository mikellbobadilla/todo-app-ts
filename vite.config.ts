import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/server': {
        target: 'http://192.168.100.135:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/server/, '')
      }
    }
  }
})
