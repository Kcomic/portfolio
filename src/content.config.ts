import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const caseStudies = defineCollection({
  // Scoped to locale folders so the id always carries a valid locale prefix
  // (see caseStudyLocale); a stray top-level .mdx is then simply not a case study.
  loader: glob({ pattern: "{en,th}/**/*.mdx", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    order: z.number(),
    /** One-paragraph context shown on cards. */
    summary: z.string(),
    /** The key challenge, one sentence, shown on cards. */
    challenge: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    /** Engagement start — becomes datePublished + article:published_time. */
    startDate: z.coerce.date(),
    /** Engagement end — becomes dateModified + article:modified_time. Omit for ongoing work. */
    endDate: z.coerce.date().optional(),
    /** SEO <title>/og:title override (before the name suffix). The VISIBLE
     *  heading and JSON-LD headline still use `title`; used mainly to give TH
     *  pages a Thai-leading title. Falls back to `title`. */
    metaTitle: z.string().optional(),
    /** Trimmed meta/OG description (~155 chars); falls back to `summary`
     *  (which stays the longer card copy). */
    metaDescription: z.string().optional(),
  }),
});

export const collections = { caseStudies };
