import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  //base: '/Lab7.1/', // дуже важливо для правильних шляхів
});
