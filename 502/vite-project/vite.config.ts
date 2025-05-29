import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, 'index.html'),
        menu: path.resolve(__dirname, 'src/menu/A01028038/index.html'),
        class1: path.resolve(__dirname, 'src/class1/A01028038/index.html'),
        class2: path.resolve(__dirname, 'src/class2/A01028038/index.html'),
        class3: path.resolve(__dirname, 'src/class3/A01028038/index.html'),
        class4: path.resolve(__dirname, 'src/class4/A01028038/index.html'),
        class5: path.resolve(__dirname, 'src/class5/A01781321/index.html'),
        class6: path.resolve(__dirname, 'src/class6/A01198339/index.html'),
        class7: path.resolve(__dirname, 'src/class7/A01028038/index.html'),
        class8: path.resolve(__dirname, 'src/class8/A01198339/index.html'),
      }
    },
    outDir: 'dist', // carpeta de salida común
    emptyOutDir: true
  }
})
