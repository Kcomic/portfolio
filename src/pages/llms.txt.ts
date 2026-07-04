import type { APIRoute } from "astro";
import { getCaseStudies, caseStudySlug } from "@/lib/caseStudies";
import { site } from "@/data/site";

// /llms.txt — a curated, LLM-friendly map of the site (llmstxt.org convention).
// Dynamic (like robots.txt.ts) so absolute URLs track the build-time `site` and
// the case-study list stays in sync with the content collection. Prerendered to
// /llms.txt in the static build.
export const GET: APIRoute = async ({ site: origin }) => {
  const base = origin ? origin.origin : "";
  const abs = (path: string) => `${base}${path}`;

  const entries = await getCaseStudies("en");
  const caseStudyLines = entries
    .map((e) => {
      const stack = e.data.stack.slice(0, 5).join(", ");
      return `- [${e.data.title}](${abs(`/case-studies/${caseStudySlug(e)}/`)}): ${e.data.summary} Stack: ${stack}.`;
    })
    .join("\n");

  const body = `# ${site.name} — ${site.role}

> ${site.name} is a ${site.location}-based software engineer and consultant who designs, builds, and operates complete web applications end to end. Core strengths: backend architecture, large-scale data processing, third-party/API integration, database performance (MongoDB, PostgreSQL), and production reliability on Docker and Kubernetes. Open to freelance and client projects, consulting engagements, and senior or lead roles.

Currently a developer at ${site.company}, taking on client projects alongside. Based in ${site.location} (UTC+7). Primary stack: NestJS, Node.js, Express, Angular, React, Next.js, TypeScript, MongoDB, PostgreSQL, MySQL, Docker, Kubernetes, and CI/CD. The site is bilingual: English (default) and Thai under /th/.

## Pages

- [Home](${abs("/")}): What he builds, core strengths, selected case studies, technical stack, and how he approaches a system.
- [About](${abs("/about/")}): Background, what an engagement looks like, and what he optimizes for.
- [Expertise](${abs("/expertise/")}): Capability map across backend, frontend, database & performance, infrastructure & DevOps, and architecture — each row backed by a case study.
- [Case Studies](${abs("/case-studies/")}): Production systems with their context, constraints, and trade-offs (client details anonymized).
- [Contact](${abs("/contact/")}): Get in touch by email, or via LinkedIn and GitHub.

## Case studies

${caseStudyLines}

## Links

- [GitHub](${site.github})
- [LinkedIn](${site.linkedin})
- [Email](mailto:${site.email})

## Optional

- [Thai version (ภาษาไทย)](${abs("/th/")}): The full site in Thai.
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
