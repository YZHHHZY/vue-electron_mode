import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'


export default defineConfig({
  plugins: [
    vue(),
    electron({
      entry: 'src/main/main.js',
      vite: {
        build: {
          outDir: 'node_modules/.cache/vite-electron',
          write: false
        }
      }
    }),
  ],
})
