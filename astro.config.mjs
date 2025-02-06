import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://affeliate-nexus.vercel.app/',
  output: 'static',
  integrations: [
    react(),
    tailwind({
      config: { applyBaseStyles: false }
    }),
    sitemap()
  ],
  vite: {
    ssr: {
      noExternal: ['framer-motion']
    }
  }
});