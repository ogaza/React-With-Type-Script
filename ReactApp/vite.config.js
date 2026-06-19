import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'src/index.html'),
        components: resolve(import.meta.dirname, '_presentation/index.html'),
      },
    },
  },
});