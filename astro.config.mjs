// @ts-check
import { defineConfig } from 'astro/config';

// Astro integrations and plugins
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Astro configuration
export default defineConfig({
  site: 'https://voxi0.github.io/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
