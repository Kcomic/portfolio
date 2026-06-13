import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    locale: z.enum(["en", "th"]),
    order: z.number(),
    /** One-paragraph context shown on cards. */
    summary: z.string(),
    /** The key challenge, one sentence, shown on cards. */
    challenge: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
  }),
});

export const collections = { caseStudies };
