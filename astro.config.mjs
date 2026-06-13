// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// TODO: change to the real domain before going live (also update README).
const SITE = "https://bawonsak.dev";

export default defineConfig({
  site: SITE,
  trailingSlash: "always",
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
