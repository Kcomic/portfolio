import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "@/i18n/config";

/**
 * Entry ids look like "en/smart-messaging-platform" (locale dir + filename).
 * The slug is the filename part — shared between locales so the language
 * switcher can map detail pages 1:1.
 */
export function caseStudySlug(entry: CollectionEntry<"caseStudies">): string {
  return entry.id.split("/").pop() ?? entry.id;
}

/**
 * The locale is the leading segment of the entry id ("en/smart-messaging-platform"
 * -> "en"). The folder is the single source of truth, so a stray frontmatter
 * value can never silently put a page under the wrong language.
 */
export function caseStudyLocale(entry: CollectionEntry<"caseStudies">): Locale {
  return entry.id.split("/")[0] as Locale;
}

export interface CaseStudyRoute {
  params: { slug: string };
  props: {
    entry: CollectionEntry<"caseStudies">;
    next: { slug: string; title: string } | null;
  };
}

/**
 * All case studies for one locale, sorted by `order`. Single source of the
 * filter+sort used by the index, the home page, and the `[slug]` routes.
 */
export async function getCaseStudies(locale: Locale): Promise<CollectionEntry<"caseStudies">[]> {
  return (await getCollection("caseStudies", (entry) => caseStudyLocale(entry) === locale)).sort(
    (a, b) => a.data.order - b.data.order,
  );
}

/**
 * Build the static paths for one locale's case studies, each linked to the
 * next entry (wrapping) for the in-page "next" navigation. Shared by the EN
 * and TH `[slug]` routes so the logic lives in one place.
 */
export async function getCaseStudyRoutes(locale: Locale): Promise<CaseStudyRoute[]> {
  const entries = await getCaseStudies(locale);
  return entries.map((entry, i) => {
    const next = entries.length > 1 ? entries[(i + 1) % entries.length] : null;
    return {
      params: { slug: caseStudySlug(entry) },
      props: {
        entry,
        next: next ? { slug: caseStudySlug(next), title: next.data.title } : null,
      },
    };
  });
}
