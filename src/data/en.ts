import type { LocaleContent } from "./types";
import { site } from "./site";

export const en: LocaleContent = {
  home: {
    hero: {
      eyebrow: "Web Application Consultant · Backend Specialist",
      headline: "I build complete web applications — strongest in backend and production.",
      sub: "Frontend, API, database, deployment, and the on-call that follows — I take web systems end to end, then stay to keep them running. Messaging platforms, order consolidators, reporting pipelines, internal tools — built with Next.js, Angular, NestJS, MongoDB, PostgreSQL and Kubernetes.",
      status: "Bangkok · UTC+7 · open to client projects, consulting & roles",
      primary: { label: "View case studies", href: "/case-studies/" },
      secondary: [
        { label: "Explore expertise", href: "/expertise/" },
        { label: "Contact", href: "/contact/" },
      ],
    },
    terminal: {
      title: "ops — what a campaign run looks like",
      lines: [
        { text: "$ kubectl rollout status deploy/campaign-worker", tone: "cmd" },
        { text: 'deployment "campaign-worker" rolled out', tone: "ok" },
        { text: "[job 8f3a] validate-recipients · 1,000,000 rows", tone: "dim" },
        { text: "[job 8f3a] split into 200 batches · workers=8", tone: "dim" },
        { text: "agenda — campaign:dispatch scheduled · 09:00 ICT", tone: "accent" },
        { text: "warn  $facet near memory cap — early $match + window", tone: "warn" },
      ],
    },
    build: {
      index: "01",
      eyebrow: "What I build",
      title: "The systems I get asked to build, again and again",
      lead: "The screens people use, the API behind them, and the data and ops that keep them alive — web systems other people operate, not demos.",
      items: [
        {
          title: "Messaging platforms",
          note: "Campaign creation, recipient validation, scheduling, delivery — and the reporting that proves it actually went out.",
        },
        {
          title: "Campaign & scheduling systems",
          note: "Time-based jobs that have to fire once, on time, and recover cleanly when they don't.",
        },
        {
          title: "E-commerce order consolidators",
          note: "Shopee, Lazada, and logistics APIs unified into one operational workflow.",
        },
        {
          title: "Internal enterprise tools",
          note: "The unglamorous software a business actually runs on every day.",
        },
        {
          title: "Reporting & data processing systems",
          note: "Aggregation over high-volume collections without melting the database.",
        },
        {
          title: "API & webhook integration platforms",
          note: "OAuth 2.0, token refresh, retries, and third-party APIs that don't always behave.",
        },
        {
          title: "Production deployment workflows",
          note: "Docker, GitHub Actions, Kubernetes — so releases stay routine.",
        },
      ],
    },
    strengths: {
      index: "02",
      eyebrow: "Core strengths",
      title: "Where I'm strongest",
      items: [
        {
          title: "Backend Architecture",
          body: "Service boundaries drawn from the business workflow. NestJS services, clear API contracts, and background jobs designed around failure and retry from day one.",
        },
        {
          title: "Large-scale Data Processing",
          body: "Campaign inputs of up to 1,000,000 records. Batching, worker pools, and memory control decided at design time, long before the first OOM kill can force the issue.",
        },
        {
          title: "System Integration",
          body: "Shopee, Lazada, Thailand Post, internal services. Defensive handling for inconsistent APIs, incomplete sandboxes, and access tokens that expire at the worst possible moment.",
        },
        {
          title: "MongoDB & PostgreSQL Performance",
          body: "Compound indexes designed from real access patterns. Aggregation pipelines that respect memory limits. Pagination that holds up when collections stop being small.",
        },
        {
          title: "Kubernetes Deployment",
          body: "Docker images, GitHub Actions pipelines, ConfigMaps, Secrets, TLS, NGINX ingress. Releases planned around the data they touch, so a bad deploy is a rollback — not an incident.",
        },
        {
          title: "Enterprise Product Engineering",
          body: "Shipping complete products other people operate and extend — UI, API, and the operations behind them. Maintainability, observability, and technical decisions that can still be explained six months later.",
        },
      ],
    },
    caseStudies: {
      index: "03",
      eyebrow: "Selected case studies",
      title: "Three production systems",
      lead: "Messaging at scale, reporting performance, and multi-platform integration — with the constraints and trade-offs that shaped each one.",
    },
    stack: {
      index: "04",
      eyebrow: "Technical stack",
      title: "Tools I reach for",
      lead: "Picked per problem; the case studies show how they fit together.",
      groups: [
        {
          title: "Backend",
          items: ["NestJS", "Node.js", "Express.js", "REST API design", "OAuth 2.0", "JWT", "Background jobs", "Webhooks"],
        },
        {
          title: "Frontend",
          items: ["Angular", "React", "Next.js", "TypeScript", "Enterprise dashboards"],
        },
        {
          title: "Data",
          items: ["MongoDB", "Mongoose", "PostgreSQL", "MySQL", "Aggregation pipelines", "Index design", "Bulk writes"],
        },
        {
          title: "Infrastructure",
          items: ["Docker", "Kubernetes", "NGINX Ingress", "GitHub Actions", "CI/CD", "TLS / Secrets"],
        },
      ],
    },
    thinking: {
      index: "05",
      eyebrow: "System thinking",
      title: "How I approach a system",
      lead: "The same sequence every time — because skipping a step is how systems fail later.",
      steps: [
        {
          title: "Understand the business workflow",
          desc: "What actually happens, who does it, and where it breaks today.",
        },
        {
          title: "Draw the system boundary",
          desc: "What's inside the system, what's an integration, what stays manual.",
        },
        {
          title: "Design the data model & API contracts",
          desc: "Schemas and contracts before code — they outlive both.",
        },
        {
          title: "Build processing pipelines that scale",
          desc: "Batches, queues, worker pools, idempotency.",
        },
        {
          title: "Optimize for real access patterns",
          desc: "Indexes and queries tuned to how data is actually read.",
        },
        {
          title: "Deploy and operate safely",
          desc: "Small releases, observable systems, planned rollbacks.",
        },
        {
          title: "Keep it maintainable",
          desc: "A system is good if the next engineer can change it without fear.",
        },
      ],
    },
    cta: {
      title: "Have a system that needs to survive production?",
      body: "I'm open to backend engineering, enterprise system development, internal tools, integration platforms, architecture review, and technical consulting.",
      primary: { label: "Contact me", href: "/contact/" },
    },
  },

  about: {
    title: "About",
    heading: "I build complete web systems — and I don't leave at deploy.",
    paragraphs: [
      `I'm a software engineer and consultant. I design and build web applications end to end — frontend, API, database, and the deployment and operations behind them — and I go deepest where it gets hard: backend, large data, integration, and production. I'm currently a developer at ${site.company.replace(" Co., Ltd.", "")} and take on client projects alongside that.`,
      "Most of my work lives where systems get difficult: large data volumes, complex workflows, background processing, third-party integration, database performance, and the constraints that only show up after deployment.",
      "I've built messaging platforms, campaign and scheduling systems, reporting and validation pipelines, and an e-commerce order consolidator — operator dashboards and all — integrating Shopee, Lazada, and Thailand Post. Some of those systems I still run, which keeps me honest about the decisions I made building them.",
    ],
    fits: {
      title: "I work well on systems that involve",
      items: [
        "Large data volume",
        "Complex workflow",
        "Background processing",
        "API integration",
        "Database performance",
        "Deployment constraints",
        "Production reliability",
      ],
    },
    focus: {
      title: "What I optimize for",
      items: [
        { term: "Scalability", gloss: "growth shouldn't require a rewrite" },
        { term: "Reliability", gloss: "failure paths are part of the design" },
        { term: "Maintainability", gloss: "the next engineer matters as much as this one" },
        { term: "Performance", gloss: "measured against real access patterns" },
        { term: "Production readiness", gloss: "deployable, observable, recoverable" },
        { term: "Clear decisions", gloss: "every trade-off should have a reason you can say out loud" },
      ],
    },
    direction: {
      title: "What I'm open to",
      body: "Client projects and senior or lead roles, equally. The throughline isn't a job title — it's owning technical decisions end to end and being accountable for how they behave in production.",
    },
    engagement: {
      index: "02",
      eyebrow: "Working together",
      title: "What an engagement with me looks like",
      lead: "Whether it's a freelance build, a consulting review, or a lead role — the shape is the same.",
      items: [
        {
          step: "01",
          title: "Understand first",
          body: "Requirements, the current workflow, and the real constraints — data volume, deadlines, team, and budget.",
        },
        {
          step: "02",
          title: "Architecture before code",
          body: "System boundaries, data model, API contracts, and the trade-offs — written down, so we can disagree early instead of late.",
        },
        {
          step: "03",
          title: "Build in vertical slices",
          body: "Working software early, starting with the riskiest part — the integration, the data volume, or the scheduler.",
        },
        {
          step: "04",
          title: "Deploy carefully, operate honestly",
          body: "CI/CD, observability, rollback plans. If something breaks, you hear it from me first, with a diagnosis and a plan.",
        },
        {
          step: "05",
          title: "Leave it maintainable",
          body: "Documentation, handover, and decisions that can be explained later. The goal is a system your team owns, not one you rent from me.",
        },
      ],
    },
    cta: {
      title: "Sound like the kind of engineer you need?",
      body: "I'm open to senior roles, consulting engagements, and integration-heavy freelance projects.",
      primary: { label: "Get in touch", href: "/contact/" },
    },
  },

  caseStudiesPage: {
    title: "Case Studies",
    heading: "Systems I've built and what they taught me",
    lead: "Three production systems — the context, the constraints, the trade-offs, and what each one changed.",
    anonymized: "Client and company specifics are anonymized. The problems and the engineering are real.",
  },

  expertise: {
    title: "Expertise",
    heading: "A capability map, not a list of logos",
    lead: "What I can design, build, and operate — and which case study backs each row up.",
    groups: [
      {
        title: "Backend Engineering",
        note: "Where I go deepest — services that carry the business.",
        skills: [
          "NestJS",
          "Node.js",
          "Express.js",
          "REST API Design",
          "Microservices",
          "Authentication & Authorization",
          "OAuth 2.0",
          "JWT",
          "Background Jobs",
          "File Processing",
          "Worker Pool / Concurrency",
          "Error Handling & Logging",
          "Webhook Handling",
          "External API Integration",
        ],
      },
      {
        title: "Frontend Engineering",
        note: "Production frontends for the systems I build — dashboards, admin tools, operational UIs.",
        skills: [
          "Angular",
          "React",
          "Next.js",
          "TypeScript",
          "Enterprise Dashboard UI",
          "Form Validation",
          "API Integration",
          "Auth Guard",
          "SSR / SEO awareness",
          "Component-based UI",
        ],
      },
      {
        title: "Database & Performance",
        note: "Where most production pain actually lives.",
        skills: [
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "Mongoose",
          "Aggregation Pipeline",
          "Index Design",
          "Sharding Concepts",
          "Bulk Write",
          "Query Optimization",
          "Large Data Processing",
          "Reporting Workloads",
        ],
      },
      {
        title: "Infrastructure & DevOps",
        note: "From Dockerfile to rollout — and back, when a rollout goes wrong.",
        skills: [
          "Docker",
          "Kubernetes",
          "NGINX Ingress",
          "GitHub Actions",
          "ConfigMap / Secret",
          "TLS / Certificate Handling",
          "CI/CD",
          "Deployment Planning",
          "Production Operations",
        ],
      },
      {
        title: "Architecture & Leadership",
        note: "The part of the job that doesn't show up in code.",
        skills: [
          "Requirement Breakdown",
          "Architecture Decision",
          "Technical Planning",
          "Code Review",
          "Developer Interviewing",
          "Production Issue Analysis",
          "Consulting Mindset",
          "System Design",
          "Trade-off Analysis",
        ],
      },
    ],
    matrix: {
      index: "02",
      eyebrow: "Capability matrix",
      title: "Capability depth, with proof",
      lead: "Three levels: daily work, production experience, working knowledge. Each row links to the case study that backs it up.",
      depthLegend: "daily work · production experience · working knowledge",
      scrollHint: "Scroll the table → for the proof column",
      columns: { area: "Capability", depth: "Depth", proof: "Proof" },
      rows: [
        {
          area: "REST API & contract design",
          depth: "daily work",
          proofLabel: "Smart Messaging Platform",
          proofHref: "/case-studies/smart-messaging-platform/",
        },
        {
          area: "Background jobs & scheduling",
          depth: "daily work",
          proofLabel: "Smart Messaging Platform",
          proofHref: "/case-studies/smart-messaging-platform/",
        },
        {
          area: "MongoDB aggregation & index design",
          depth: "daily work",
          proofLabel: "MongoDB Reporting Optimization",
          proofHref: "/case-studies/mongodb-reporting-optimization/",
        },
        {
          area: "Third-party integration & OAuth 2.0",
          depth: "production experience",
          proofLabel: "E-commerce Order Consolidator",
          proofHref: "/case-studies/ecommerce-order-consolidator-system/",
        },
        {
          area: "Webhook processing",
          depth: "production experience",
          proofLabel: "E-commerce Order Consolidator",
          proofHref: "/case-studies/ecommerce-order-consolidator-system/",
        },
        {
          area: "Kubernetes deployment & CI/CD",
          depth: "production experience",
          proofLabel: "Smart Messaging Platform",
          proofHref: "/case-studies/smart-messaging-platform/",
        },
        {
          area: "Relational modeling (PostgreSQL / MySQL)",
          depth: "production experience",
          proofLabel: "E-commerce Order Consolidator",
          proofHref: "/case-studies/ecommerce-order-consolidator-system/",
        },
        {
          area: "Enterprise dashboards (Angular / React / Next.js)",
          depth: "production experience",
          proofLabel: "E-commerce Order Consolidator",
          proofHref: "/case-studies/ecommerce-order-consolidator-system/",
        },
        {
          area: "Sharding & horizontal scaling strategy",
          depth: "working knowledge",
          proofLabel: "MongoDB Reporting Optimization",
          proofHref: "/case-studies/mongodb-reporting-optimization/",
        },
      ],
    },
    cta: {
      title: "Need this capability on your team or your project?",
      body: "I take on backend builds, architecture reviews, and consulting engagements.",
      primary: { label: "Contact me", href: "/contact/" },
    },
  },

  contact: {
    title: "Contact",
    heading: "Let's talk about your system.",
    lead: "I take on web applications, backend and integration-heavy systems, internal tools, architecture reviews, and technical consulting — whether you need a full build or backend depth on an existing product.",
    emailLabel: "Email me directly",
    socialsLabel: "Elsewhere",
    form: {
      heading: "Or start with a few details",
      note: "This form opens your email client with everything pre-filled. No tracking, no third-party backend.",
      name: "Name",
      email: "Email",
      company: "Company",
      projectType: "Project type",
      projectTypes: [
        "Full Web Application",
        "Backend System",
        "Enterprise Internal Tool",
        "E-commerce / API Integration",
        "Messaging Platform",
        "Architecture Review",
        "Consulting",
        "Other",
      ],
      message: "Message",
      submit: "Compose email",
    },
  },
};
