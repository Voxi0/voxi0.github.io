// @ts-check
import { defineConfig } from 'astro/config';

// Tailwind
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://voxi0.github.io/',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
