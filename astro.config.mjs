import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from 'astro-i18next'
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), astroI18next()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
        prefixDefaultLocale: false
    }
  }
});