import { defaultLocale, locales, type Locale } from "./config";

/** Strip a trailing slash (except for the root path). */
function normalize(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

/** Resolve the locale of a pathname ("/th/about" -> "th", "/about" -> "en"). */
export function getLocaleFromPath(pathname: string): Locale {
  const path = normalize(pathname);
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (path === `/${locale}` || path.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return defaultLocale;
}

/** Return the locale-independent ("canonical English") path of a pathname. */
export function getBasePath(pathname: string): string {
  const path = normalize(pathname);
  const locale = getLocaleFromPath(path);
  if (locale === defaultLocale) return path;
  const stripped = path.slice(`/${locale}`.length);
  return stripped === "" ? "/" : stripped;
}

/**
 * Localize a canonical path ("/about") into the given locale ("/th/about/").
 * Emits trailing slashes to match Astro's directory-format build output,
 * so canonical/hreflang URLs and internal links never go through a redirect.
 */
export function localizePath(basePath: string, locale: Locale): string {
  const path = normalize(basePath.startsWith("/") ? basePath : `/${basePath}`);
  const localized = locale === defaultLocale ? path : path === "/" ? `/${locale}` : `/${locale}${path}`;
  return localized === "/" ? "/" : `${localized}/`;
}

/**
 * Route-aware language switching: map the current pathname to the
 * equivalent page in the target locale. "/case-studies/x" <-> "/th/case-studies/x".
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localizePath(getBasePath(pathname), target);
}
