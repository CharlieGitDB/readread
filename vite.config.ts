import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/@ionic/')) {
            return 'ion';
          }
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('/components/')) {
            return 'components';
          }
          if (id.includes('/data/')) {
            return 'data';
          }
          if (id.includes('/pages/')) {
            return 'pages';
          }
          if (id.includes('/util/')) {
            return 'pages';
          }
        }
      }
    }
  },
  plugins: [
    react(),
    legacy()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@util": path.resolve(__dirname, "./src/util"),
      "@tests": path.resolve(__dirname, "./tests")
    }
  }
})
