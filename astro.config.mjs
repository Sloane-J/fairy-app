// File: astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react({
      include: ['**/react/*', '**/React/*', '**/*.tsx'],
      // Enable React Fast Refresh
      fastRefresh: true,
    }),
    tailwind({
      // Enable Just-in-Time mode
      config: { applyBaseStyles: false }
    }),
  ],
  site: 'https://yourcoachingwebsite.com',
  output: 'static',
  vite: {
    ssr: {
      noExternal: ['framer-motion'],
    },
    // Add build optimizations
    build: {
      // Enable minification
      minify: 'terser',
      // Improve chunk loading
      rollupOptions: {
        output: {
          manualChunks: {
            'framer-motion': ['framer-motion'],
          },
        },
      },
    },
    // Add dev optimizations
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion'],
    },
  },
});