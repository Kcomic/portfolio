import type { Locale } from "@/i18n/config";

export const site = {
  name: "Bawonsak Petchbunjerdkul",
  shortName: "Bawonsak P.",
  role: "Web Application Consultant · Backend Specialist",
  company: "Entronica Co., Ltd.",
  email: "bawonsak.petch@gmail.com",
  location: "Bangkok, Thailand",
  github: "https://github.com/Kcomic",
  linkedin: "https://www.linkedin.com/in/bawonsak-petchbunjerdkul-100590163",
  ogImage: "/og.png",
  /** Google Search Console verification token (rendered as a <meta> in <head>). */
  googleSiteVerification: "br4Jlu_lPl3A8rSfUNSQXO1drcgLIuD3Nu_D-MrDzKY",
} as const;

export const seo: Record<
  Locale,
  { title: string; description: string; titleTemplate: (page: string) => string }
> = {
  en: {
    title: "Bawonsak Petchbunjerdkul | Web Application & Backend Consultant",
    description:
      "I design, build, and run web applications end to end — UI, API, database, and deployment — with backend and production reliability as my core strength.",
    titleTemplate: (page) => `${page} — Bawonsak Petchbunjerdkul`,
  },
  th: {
    title: "รับพัฒนา Web Application และระบบ Backend | Bawonsak Petchbunjerdkul",
    description:
      "ผมออกแบบและพัฒนา web application ตั้งแต่ UI, API, database ไปจนถึงการ deploy และดูแลหลังขึ้น production โดยมีจุดแข็งที่ backend และความน่าเชื่อถือของระบบ",
    titleTemplate: (page) => `${page} — Bawonsak Petchbunjerdkul`,
  },
};
