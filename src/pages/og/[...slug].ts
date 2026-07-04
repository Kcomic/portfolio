import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";
import { caseStudyLocale, caseStudySlug } from "@/lib/caseStudies";
import { site } from "@/data/site";

// Build-time per-case-study Open Graph cards. Static Astro on Cloudflare Pages
// has no runtime, so each 1200x630 PNG is rendered here at build via canvaskit.
// Content is English (title + subtitle), so one card per slug is shared by the
// EN and TH pages — the accompanying og:title meta already localises the text
// shown beneath the card in each social preview.
//
// NOTE: the file is [...slug].ts (no .png) on purpose — astro-og-canvas appends
// ".png" to each page key itself, so the emitted asset is /og/<slug>.png.
const enEntries = (await getCollection("caseStudies")).filter((e) => caseStudyLocale(e) === "en");

const pages = Object.fromEntries(
  enEntries.map((e) => [caseStudySlug(e), { title: e.data.title, subtitle: e.data.subtitle }]),
);

// OGImageRoute is async in astro-og-canvas ≥0.13, so it must be awaited before
// the { getStaticPaths, GET } endpoint handlers can be destructured out.
export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: `${page.subtitle}\n\n${site.name} · Case Study`,
    // Dark brand field (#060a12 → #0b101a) with the emerald accent as a spine.
    bgGradient: [
      [6, 10, 18],
      [11, 16, 26],
    ],
    border: { color: [52, 211, 153], width: 14, side: "inline-start" },
    padding: 80,
    font: {
      title: { color: [233, 236, 241], size: 62, weight: "Bold", lineHeight: 1.15 },
      description: { color: [160, 170, 185], size: 28, lineHeight: 1.4 },
    },
  }),
});
