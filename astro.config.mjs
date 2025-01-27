import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react({
      include: ['**/react/*', '**/React/*', '**/*.tsx'],
    }),
    tailwind(),
  ],
  site: 'https://yourcoachingwebsite.com',
  output: 'static',
  vite: {
    ssr: {
      noExternal: ['framer-motion'],
    },
  },
});