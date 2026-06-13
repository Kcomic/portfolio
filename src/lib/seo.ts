import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/utils";

export interface AlternateLink {
  hreflang: string;
  href: string;
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
