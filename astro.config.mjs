import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),  // The include patterns aren't needed, Astro handles this automatically
    tailwind({
      config: { applyBaseStyles: false }
    }),
  ],
  // Remove the site URL unless you're specifically using it for something
  output: 'static',
  vite: {
    ssr: {
      noExternal: ['framer-motion']
    },
    // Remove the manual build optimizations - Vite handles these well by default
    // and they might be causing the Terser error
  }
});