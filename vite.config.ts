/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // comment in dev mode
  base: '/react_ts_ShopEase-app',
  resolve: {
    alias: {
      src: '/src',
    },
  },
  test: {
    environment: 'jsdom',
  },
});
