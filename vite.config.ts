import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const platform = process.env.VITE_PLATFORM;
const isGithubPages = platform === 'gh-pages';

export default defineConfig(({ command }) => {
  const isProduction = command === 'build';

  return {
    base: isProduction && isGithubPages ? '/My-Portfolio/' : '/',
    plugins: [react()],
    build: {
      outDir: 'dist', // Output directory for Vite
      emptyOutDir: true
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
