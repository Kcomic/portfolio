import type { Locale } from "./config";

/** Small, shared UI strings. Page-level content lives in src/data/{en,th}.ts. */
export const ui = {
  en: {
    "skip.content": "Skip to content",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.caseStudies": "Case Studies",
    "nav.expertise": "Expertise",
    "nav.contact": "Contact",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "nav.main": "Main",
    "nav.footer": "Footer links",
    "lang.label": "Language",
    "lang.switchTo": "อ่านหน้านี้เป็นภาษาไทย",
    "case.read": "Read the case study",
    "case.all": "All case studies",
    "case.back": "Back to case studies",
    "case.next": "Next case study",
    "case.role": "My role",
    "case.stack": "Tech stack",
    "case.context": "Context",
    "case.challenge": "Key challenge",
    "footer.tagline":
      "Web applications from UI to deploy — backend-deep, production-ready — built for the teams that operate them.",
    "footer.colophon": "Designed and built by hand — Astro + Tailwind, no template.",
    "footer.email": "Email",
    "home.viewAll": "View all case studies",
    "filter.label": "Filter by technology",
    "filter.all": "All",
    "filter.count": "{n} case studies",
    "filter.countOne": "1 case study",
  },
  th: {
    "skip.content": "ข้ามไปยังเนื้อหา",
    "nav.home": "หน้าแรก",
    "nav.about": "เกี่ยวกับผม",
    "nav.caseStudies": "Case Studies",
    "nav.expertise": "ความเชี่ยวชาญ",
    "nav.contact": "ติดต่อ",
    "nav.open": "เปิดเมนู",
    "nav.close": "ปิดเมนู",
    "nav.main": "เมนูหลัก",
    "nav.footer": "ลิงก์ท้ายหน้า",
    "lang.label": "ภาษา",
    "lang.switchTo": "Read this page in English",
    "case.read": "อ่าน case study",
    "case.all": "ดู case studies ทั้งหมด",
    "case.back": "กลับไปหน้า case studies",
    "case.next": "Case study ถัดไป",
    "case.role": "บทบาทของผม",
    "case.stack": "Tech stack",
    "case.context": "ที่มา",
    "case.challenge": "โจทย์หลัก",
    "footer.tagline":
      "web application ตั้งแต่ UI ถึง deploy — จุดแข็งที่ backend และ production — สร้างเพื่อทีมที่ต้องดูแลมันต่อ",
    "footer.colophon": "ออกแบบและเขียนเองทั้งหมด — Astro + Tailwind ไม่ใช้ template",
    "footer.email": "อีเมล",
    "home.viewAll": "ดู case studies ทั้งหมด",
    "filter.label": "กรองตามเทคโนโลยี",
    "filter.all": "ทั้งหมด",
    "filter.count": "{n} case studies",
    "filter.countOne": "1 case study",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)["en"];

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui.en[key];
  };
}
