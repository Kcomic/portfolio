import type { CollectionEntry } from "astro:content";

/**
 * Entry ids look like "en/smart-messaging-platform" (locale dir + filename).
 * The slug is the filename part — shared between locales so the language
 * switcher can map detail pages 1:1.
 */
export function caseStudySlug(entry: CollectionEntry<"caseStudies">): string {
  return entry.id.split("/").pop() ?? entry.id;
}
