import type { Locale } from "@/i18n/config";

export const site = {
  name: "Bawonsak Petchbunjerdkul",
  shortName: "Bawonsak P.",
  role: "Senior Software Developer",
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
    title: "Bawonsak Petchbunjerdkul | Senior Software Developer",
    description:
      "Senior Software Developer specializing in enterprise backend systems, scalable platforms, system integration, MongoDB, PostgreSQL, NestJS, Angular, React, Next.js, Docker, and Kubernetes.",
    titleTemplate: (page) => `${page} — Bawonsak Petchbunjerdkul`,
  },
  th: {
    title: "Bawonsak Petchbunjerdkul | Senior Software Developer",
    description:
      "Senior Software Developer ที่เชี่ยวชาญ enterprise backend systems, scalable platforms, system integration, MongoDB, PostgreSQL, NestJS, Angular, React, Next.js, Docker และ Kubernetes",
    titleTemplate: (page) => `${page} — Bawonsak Petchbunjerdkul`,
  },
};
