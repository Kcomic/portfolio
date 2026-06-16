import type { Locale } from "@/i18n/config";

export const site = {
  name: "Bawonsak Petchbunjerdkul",
  shortName: "Bawonsak P.",
  role: "Web Application Consultant · Backend Specialist",
  company: "Entronica Co., Ltd.",
  email: "bawonsak.p@entronica.co.th",
  location: "Bangkok, Thailand",
  // TODO: replace with real profile URLs before going live.
  github: "https://github.com/bawonsak",
  linkedin: "https://www.linkedin.com/in/bawonsak-petchbunjerdkul",
  ogImage: "/og.png",
} as const;

export const seo: Record<
  Locale,
  { title: string; description: string; titleTemplate: (page: string) => string }
> = {
  en: {
    title: "Bawonsak Petchbunjerdkul | Web Application Consultant · Backend Specialist",
    description:
      "I design and build web applications — UI, API, database, deployment, and the operations after — with backend and production reliability as my core strength. Full-stack development with NestJS, Node.js, Express, React, Next.js, Angular, MongoDB, PostgreSQL, Docker, and Kubernetes.",
    titleTemplate: (page) => `${page} — Bawonsak Petchbunjerdkul`,
  },
  th: {
    title: "Bawonsak Petchbunjerdkul | Web Application Consultant · Backend Specialist",
    description:
      "ผมออกแบบและพัฒนา web application ตั้งแต่ UI, API, database, การ deploy ไปจนถึงการดูแลหลังขึ้น production โดยมีจุดแข็งที่ backend และความน่าเชื่อถือใน production ทำงาน full-stack ด้วย NestJS, Node.js, Express, React, Next.js, Angular, MongoDB, PostgreSQL, Docker และ Kubernetes",
    titleTemplate: (page) => `${page} — Bawonsak Petchbunjerdkul`,
  },
};
