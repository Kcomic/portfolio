import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/utils";
import { site } from "@/data/site";

export interface AlternateLink {
  hreflang: string;
  href: string;
}

/**
 * Locale-independent sitewide schema.org entity graph (Person + Organization +
 * WebSite). @ids are origin-based and IDENTICAL on EN and TH because these are
 * the same real-world entities — deriving @id from the per-locale canonical
 * would split one person into two. Rendered on every page by BaseLayout, so any
 * per-page node (ProfilePage, TechArticle, BreadcrumbList) can reference
 * `#person` / `#website` and resolve. Values come from src/data/site.ts so the
 * graph and the meta tags can never drift apart.
 */
export function buildSiteGraph(origin: string, _locale: Locale): Record<string, unknown>[] {
  return [
    {
      "@type": "Person",
      "@id": `${origin}/#person`,
      name: site.name,
      jobTitle: site.role,
      url: `${origin}/`,
      email: `mailto:${site.email}`,
      worksFor: { "@id": `${origin}/#entronica` },
      address: { "@type": "PostalAddress", addressLocality: "Bangkok", addressCountry: "TH" },
      sameAs: [site.github, site.linkedin],
      knowsAbout: [
        "NestJS", "Node.js", "Express.js", "REST API design", "OAuth 2.0",
        "MongoDB", "PostgreSQL", "MySQL", "Aggregation pipelines", "Index design",
        "Docker", "Kubernetes", "CI/CD", "Angular", "React", "Next.js",
        "TypeScript", "System design",
      ],
    },
    { "@type": "Organization", "@id": `${origin}/#entronica`, name: site.company },
    {
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      url: `${origin}/`,
      name: site.name,
      inLanguage: ["en", "th"],
      publisher: { "@id": `${origin}/#person` },
    },
  ];
}

/**
 * Build canonical + hreflang alternate URLs for a canonical (English) path.
 * x-default points at the English version.
 */
export function buildAlternates(basePath: string, site: URL | string): AlternateLink[] {
  const origin = typeof site === "string" ? site : site.origin;
  const abs = (path: string) => new URL(path, origin).href;

  return [
    { hreflang: "en", href: abs(localizePath(basePath, "en")) },
    { hreflang: "th", href: abs(localizePath(basePath, "th")) },
    { hreflang: "x-default", href: abs(localizePath(basePath, "en")) },
  ];
}

export function ogLocale(locale: Locale): string {
  return locale === "th" ? "th_TH" : "en_US";
}
