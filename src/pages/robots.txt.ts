import type { APIRoute } from "astro";

// Dynamic so the Sitemap line tracks the build-time `site` (see astro.config.mjs)
// rather than a hardcoded domain. Prerendered to /robots.txt in the static build.
export const GET: APIRoute = ({ site }) => {
  const sitemap = site ? new URL("sitemap-index.xml", site).href : "/sitemap-index.xml";
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
