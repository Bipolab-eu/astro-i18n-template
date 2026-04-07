// @ts-check
import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  },

  adapter: node({
    mode: "standalone"
  }),
  
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  }
});