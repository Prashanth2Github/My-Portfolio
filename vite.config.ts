import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Determine if we're building for production (GitHub Pages)
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProd ? '/My-Portfolio/' : '/', // ✅ Use repo name only in production
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
