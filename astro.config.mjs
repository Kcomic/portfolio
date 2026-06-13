// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// TODO: change to the real domain before going live (also update README + robots.txt).
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
  integrations: [
    mdx(),
    sitemap({
      // Emits <xhtml:link rel="alternate" hreflang> entries per URL so search
      // engines pair the EN/TH versions. Values are the hreflang codes, kept
      // language-only to match the in-page <link hreflang> (see lib/seo.ts) and
      // <html lang>. The content is not region-specific, so no en-US/th-TH.
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", th: "th" },
      },
    }),
  ],
  // Astro 6 Fonts API (stable): fonts are subset + self-hosted at build time.
  // Astro names each generated @font-face with a hashed family (e.g.
  // "IBM Plex Sans Thai-<hash>") and exposes it via the cssVariable. Because a
  // cross-family fallback by *plain* name ("IBM Plex Sans Thai") would not
  // match that hashed face, we disable the per-family fallback chain here and
  // compose the real multi-script stack ourselves in global.css, where the
  // Thai face is referenced by its variable and a single generic ends the list.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Space Grotesk",
      cssVariable: "--font-space-grotesk",
      weights: ["300 700"],
      styles: ["normal"],
      fallbacks: [],
    },
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Sans",
      cssVariable: "--font-ibm-plex-sans",
      weights: [400, 500, 600],
      styles: ["normal"],
      fallbacks: [],
    },
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Sans Thai",
      cssVariable: "--font-ibm-plex-sans-thai",
      weights: [400, 500, 600],
      styles: ["normal"],
      // Thai glyphs only — Latin in the /th content is served by IBM Plex Sans.
      subsets: ["thai"],
      fallbacks: [],
    },
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Mono",
      cssVariable: "--font-ibm-plex-mono",
      weights: [400, 500],
      styles: ["normal"],
      fallbacks: [],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
