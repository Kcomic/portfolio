export interface CTA {
  label: string;
  href: string;
}

export interface BuildItem {
  title: string;
  note: string;
}

export interface Strength {
  title: string;
  body: string;
}

export interface FlowStep {
  title: string;
  desc: string;
}

export interface TerminalLine {
  text: string;
  tone?: "ok" | "warn" | "dim" | "accent" | "cmd";
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface TimelineItem {
  step: string;
  title: string;
  body: string;
}

export interface SkillGroupData {
  title: string;
  note: string;
  skills: string[];
}

export interface MatrixRow {
  area: string;
  depth: string;
  proofLabel: string;
  proofHref: string | null;
}

export interface SectionIntro {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
}

export interface HomeContent {
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    status: string;
    primary: CTA;
    secondary: CTA[];
  };
  terminal: {
    title: string;
    lines: TerminalLine[];
  };
  build: SectionIntro & { items: BuildItem[] };
  strengths: SectionIntro & { items: Strength[] };
  caseStudies: SectionIntro;
  stack: SectionIntro & { groups: StackGroup[] };
  thinking: SectionIntro & { steps: FlowStep[] };
  cta: { title: string; body: string; primary: CTA };
}

export interface AboutContent {
  title: string;
  /** Keyword-rich <title> (before the name suffix); falls back to `title`. */
  metaTitle?: string;
  /** Unique <meta description>; without it the page inherits the home fallback. */
  metaDescription?: string;
  heading: string;
  paragraphs: string[];
  fits: { title: string; items: string[] };
  focus: { title: string; items: { term: string; gloss: string }[] };
  direction: { title: string; body: string };
  engagement: SectionIntro & { items: TimelineItem[] };
  cta: { title: string; body: string; primary: CTA };
}

export interface CaseStudiesPageContent {
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  heading: string;
  lead: string;
  anonymized: string;
}

export interface ExpertiseContent {
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  heading: string;
  lead: string;
  groups: SkillGroupData[];
  matrix: SectionIntro & {
    depthLegend: string;
    scrollHint: string;
    columns: { area: string; depth: string; proof: string };
    rows: MatrixRow[];
  };
  cta: { title: string; body: string; primary: CTA };
}

export interface ContactContent {
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  heading: string;
  lead: string;
  emailLabel: string;
  socialsLabel: string;
  form: {
    heading: string;
    note: string;
    name: string;
    email: string;
    company: string;
    projectType: string;
    projectTypes: string[];
    message: string;
    submit: string;
  };
}

export interface LocaleContent {
  home: HomeContent;
  about: AboutContent;
  caseStudiesPage: CaseStudiesPageContent;
  expertise: ExpertiseContent;
  contact: ContactContent;
}
