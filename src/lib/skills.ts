import type { CollectionEntry } from "astro:content";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/utils";
import { getCaseStudies } from "./caseStudies";

/**
 * Stable slug for a tech label — the single place this transform happens, used
 * for both the URL `?skill=` param and the card `data-skills` attribute.
 * "React / Next.js" -> "react-next-js", "OAuth 2.0" -> "oauth-2-0".
 */
export function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export interface TechFacet {
  slug: string;
  label: string;
  count: number;
}

/**
 * Unique technologies across a locale's case studies, with how many use each.
 * Sorted by count desc then label, so the most cross-cutting tech leads.
 * Derived entirely from the existing `stack` arrays — no separate taxonomy.
 */
export async function getTechFacets(locale: Locale): Promise<TechFacet[]> {
  const entries = await getCaseStudies(locale);
  const map = new Map<string, TechFacet>();
  for (const entry of entries) {
    for (const label of entry.data.stack) {
      const slug = slugify(label);
      const facet = map.get(slug);
      if (facet) facet.count += 1;
      else map.set(slug, { slug, label, count: 1 });
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

/** Space-separated tech slugs for a card's `data-skills` attribute. */
export function techSlugs(entry: CollectionEntry<"caseStudies">): string {
  return entry.data.stack.map(slugify).join(" ");
}

/**
 * Expertise skill label -> case-study tech slug. The Expertise vocabulary is
 * finer/different from the stack ("React" + "Next.js" vs "React / Next.js",
 * "Webhook Handling" vs "Webhooks"), so the mismatches are mapped explicitly;
 * every other skill matches by its own slug. Skill labels are identical EN/TH,
 * so one map serves both locales.
 */
export const SKILL_ALIASES: Record<string, string> = {
  React: "react-next-js",
  "Next.js": "react-next-js",
  "REST API Design": "rest-api",
  "Webhook Handling": "webhooks",
};

/**
 * For the given Expertise skill labels, a map of label -> /case-studies link
 * pre-filtered to its tech — but only for skills that actually have a backing
 * case study (so we never link to an empty filter). Skills with no case study
 * are absent from the map and render as plain text.
 */
export async function getExpertiseSkillHrefs(
  locale: Locale,
  skillLabels: string[],
): Promise<Map<string, string>> {
  const facetSlugs = new Set((await getTechFacets(locale)).map((f) => f.slug));
  const base = localizePath("/case-studies", locale);
  const hrefs = new Map<string, string>();
  for (const label of skillLabels) {
    const slug = SKILL_ALIASES[label] ?? slugify(label);
    if (facetSlugs.has(slug)) hrefs.set(label, `${base}?skill=${slug}`);
  }
  return hrefs;
}
