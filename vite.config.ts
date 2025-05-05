import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Read from env for platform-specific base path
const platform = process.env.VITE_PLATFORM;
const isGithubPages = platform === 'gh-pages';

export default defineConfig(({ command }) => {
  const isProduction = command === 'build';

  return {
    base: isProduction && isGithubPages ? '/My-Portfolio/' : '/', // Use repo name only for GitHub Pages
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
