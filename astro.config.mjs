// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  site: "https://voxi0.github.io",
  vite: {
    plugins: [tailwindcss()]
  }
});
