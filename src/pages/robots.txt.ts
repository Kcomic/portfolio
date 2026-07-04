import type { APIRoute } from "astro";

// Dynamic so the Sitemap line tracks the build-time `site` (see astro.config.mjs)
// rather than a hardcoded domain. Prerendered to /robots.txt in the static build.
export const GET: APIRoute = ({ site }) => {
  const sitemap = site ? new URL("sitemap-index.xml", site).href : "/sitemap-index.xml";
  // Cloudflare Pages preview/branch deploys inject CF_PAGES but not SITE_URL.
  // Keep those per-commit URLs fully out of the crawl so they can never compete
  // with production in the index.
  const isPreview = !process.env.SITE_URL && !!process.env.CF_PAGES;
  const body = isPreview
    ? `User-agent: *
Disallow: /
`
    : `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
