// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  site: "https://voxi0.github.io/",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
});
