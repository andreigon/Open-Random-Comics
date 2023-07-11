import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: { exclude: ['fsevents'] },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/apiURL/': {
        target: 'https://xkcd.com',
        ws: true,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/apiURL/, '')
      }

      //  '/apiNUM/':{
      //   target: '11',
      //   ws: true ,
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: (path) => path.replace(/^\/apiNUM/, '')
      //  },

      //  '/apiUrlFormat/':{
      //   target: 'info.0.json',
      //   ws: true ,
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: (path) => path.replace(/^\/apiUrlFormat/, '')
      //  }

      // '/api/ComicNumber/':{
      //   target: '650',
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: (path) => path.replace(/^\/ComicNumber/, '')
      // }
    }
  }
  // some other configuration
})
