import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite';


export default defineConfig({
  plugins: [react(), tailwindcss(),],
     build: {
       rollupOptions: {
         output: {
           manualChunks: {
             lodash: ['lodash']
           }
         }
       }
     }
});
