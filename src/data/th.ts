import { site } from "./site";
import type { LocaleContent } from "./types";

export const th: LocaleContent = {
  home: {
    hero: {
      eyebrow: "Web Application Consultant · Backend Specialist",
      headline: "ผมพัฒนา web application ได้ทั้งระบบ — จุดแข็งอยู่ที่ backend และ production",
      sub: "ตั้งแต่ frontend, API, database, การ deploy ไปจนถึงการดูแลระบบหลังขึ้น production — ผมทำ web system เองทั้งกระบวนการ แล้วอยู่ดูแลต่อ ทั้ง messaging platform, order consolidator, reporting pipeline และ internal tool ด้วย Next.js, Angular, NestJS, MongoDB, PostgreSQL และ Kubernetes",
      status: "กรุงเทพฯ · UTC+7 · รับงานโปรเจกต์, consulting และ role",
      primary: { label: "ดู Case Studies", href: "/th/case-studies/" },
      secondary: [
        { label: "ดูความเชี่ยวชาญ", href: "/th/expertise/" },
        { label: "ติดต่อ", href: "/th/contact/" },
      ],
    },
    terminal: {
      title: "ops — ตัวอย่างหนึ่งรอบของ campaign run",
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
      eyebrow: "งานที่ผมสร้าง",
      title: "ระบบที่มีคนขอให้ผมสร้างอยู่เรื่อย ๆ",
      lead: "ตั้งแต่หน้าจอที่คนใช้ API เบื้องหลัง ไปจนถึงข้อมูลและการดูแลที่ทำให้มันอยู่รอด — เป็นซอฟต์แวร์ที่คนอื่นใช้งานจริง ไม่ใช่ demo",
      items: [
        {
          title: "Messaging Platform",
          note: "campaign creation, recipient validation, scheduling, delivery และ reporting ที่พิสูจน์ได้ว่าส่งจริง",
        },
        {
          title: "Campaign & Scheduling System",
          note: "งานตั้งเวลาที่ต้องยิงครั้งเดียว ตรงเวลา และกู้คืนได้เมื่อมีอะไรพลาด",
        },
        {
          title: "E-commerce Order Consolidator",
          note: "รวม Shopee, Lazada และ logistics API มาอยู่ใน workflow เดียว",
        },
        {
          title: "Internal Enterprise Tool",
          note: "ซอฟต์แวร์ภายในที่ธุรกิจใช้ทำงานจริงทุกวัน",
        },
        {
          title: "Reporting & Data Processing System",
          note: "aggregate ข้อมูลปริมาณมากโดยไม่ลาก database ทั้งระบบให้ช้าไปด้วย",
        },
        {
          title: "API & Webhook Integration Platform",
          note: "OAuth 2.0, token refresh, retry และ API ภายนอกที่พฤติกรรมไม่นิ่ง",
        },
        {
          title: "Production Deployment Workflow",
          note: "Docker, GitHub Actions, Kubernetes — ทำให้การ release เป็นเรื่องปกติ ไม่ใช่เรื่องใหญ่",
        },
      ],
    },
    strengths: {
      index: "02",
      eyebrow: "จุดแข็งหลัก",
      title: "สิ่งที่ผมทำได้ดีที่สุด",
      items: [
        {
          title: "Backend Architecture",
          body: "วาง service boundary จาก business workflow จริง ออกแบบ API contract ให้ชัด และคิดเรื่อง failure กับ retry ของ background job ตั้งแต่วันแรก ไม่ใช่หลังระบบพังครั้งแรก",
        },
        {
          title: "Large-scale Data Processing",
          body: "รองรับ input ระดับล้าน record ต่อไฟล์ — แบ่ง batch, ใช้ worker pool และคุม memory ตั้งแต่ตอนออกแบบ ไม่ใช่มาตามแก้หลังโดน OOM kill",
        },
        {
          title: "System Integration",
          body: "Shopee, Lazada, Thailand Post และระบบภายใน — ออกแบบแบบ defensive เผื่อ API ที่พฤติกรรมไม่นิ่ง, sandbox ที่ไม่สมบูรณ์ และ token ที่ชอบหมดอายุตอนที่ไม่ควร",
        },
        {
          title: "MongoDB & PostgreSQL Performance",
          body: "ออกแบบ compound index จาก access pattern จริง เขียน aggregation ที่ไม่ชน memory limit และทำ pagination ที่ยังเร็วอยู่เมื่อข้อมูลโตขึ้นเรื่อย ๆ",
        },
        {
          title: "Kubernetes Deployment",
          body: "Docker, GitHub Actions, ConfigMap, Secret, TLS, NGINX ingress — วางแผน deploy โดยคิดถึงผลกระทบต่อข้อมูล ให้ release ที่พลาดจบที่ rollback ไม่ใช่จบที่ incident",
        },
        {
          title: "Enterprise Product Engineering",
          body: "ส่งมอบ product ครบทั้งก้อนที่ทีมอื่นดูแลและต่อยอดได้ — ทั้ง UI, API และการดูแลเบื้องหลัง เน้น maintainability, observability และ technical decision ที่ยังอธิบายเหตุผลได้หลังผ่านไปครึ่งปี",
        },
      ],
    },
    caseStudies: {
      index: "03",
      eyebrow: "Case studies ที่เลือกมา",
      title: "สามระบบจาก production จริง",
      lead: "งาน messaging ระดับล้าน record, ปัญหา reporting performance และ integration ข้ามหลาย platform — พร้อมข้อจำกัดและ trade-off ที่อยู่เบื้องหลังแต่ละระบบ",
    },
    stack: {
      index: "04",
      eyebrow: "Technical stack",
      title: "เครื่องมือที่ผมหยิบใช้",
      lead: "เลือกตามโจทย์ ไม่ใช่ตามเทรนด์ — ใน case studies จะเห็นว่าแต่ละตัวประกอบกันยังไง",
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
      eyebrow: "วิธีคิดเชิงระบบ",
      title: "ผมเริ่มต้นกับระบบยังไง",
      lead: "ลำดับเดิมทุกครั้ง — เพราะการข้ามขั้นตอนวันนี้ คือสาเหตุที่ระบบพังในวันหน้า",
      steps: [
        {
          title: "เข้าใจ business workflow ก่อนออกแบบระบบ",
          desc: "งานจริงเกิดอะไรขึ้น ใครเป็นคนทำ และวันนี้มันติดตรงไหน",
        },
        {
          title: "แยก system boundary ให้ชัด",
          desc: "อะไรอยู่ในระบบ อะไรเป็น integration และอะไรยังเป็นงาน manual ต่อไป",
        },
        {
          title: "ออกแบบ data model และ API contract",
          desc: "schema กับ contract ต้องมาก่อนโค้ด เพราะมันอยู่ยาวกว่าโค้ด",
        },
        {
          title: "สร้าง processing pipeline ที่ scale ได้",
          desc: "batch, queue, worker pool และ idempotency",
        },
        {
          title: "ปรับ query และ database access pattern ตามการใช้งานจริง",
          desc: "index และ query ออกแบบจากการอ่านข้อมูลจริง ไม่ใช่จากการเดา",
        },
        {
          title: "Deploy และ operate ระบบอย่างระมัดระวัง",
          desc: "release ทีละน้อย มี observability และมีแผน rollback เสมอ",
        },
        {
          title: "ทำให้ระบบดูแลต่อได้ในระยะยาว",
          desc: "ระบบที่ดีคือระบบที่วิศวกรคนถัดไปกล้าแก้โดยไม่ต้องลุ้น",
        },
      ],
    },
    cta: {
      title: "มีระบบที่ต้องรอดใน production ไหมครับ",
      body: "ผมเปิดรับงาน backend engineering, enterprise system development, internal tools, integration platform, system architecture review และ technical consulting",
      primary: { label: "ติดต่อผม", href: "/th/contact/" },
    },
  },

  about: {
    title: "เกี่ยวกับผม",
    heading: "ผมทำ web system ได้ทั้งก้อน — และไม่หายไปตอน deploy",
    paragraphs: [
      `ผมเป็น software engineer และที่ปรึกษา ออกแบบและพัฒนา web application ตั้งแต่ frontend, API, database ไปจนถึงการ deploy และดูแลระบบเบื้องหลัง โดยลงลึกที่สุดในส่วนที่ยาก: backend, ข้อมูลปริมาณมาก, integration และ production ตอนนี้ผมเป็น developer ที่ ${site.company.replace(" Co., Ltd.", "")} และรับงานโปรเจกต์ของลูกค้าควบคู่ไปด้วย`,
      "งานส่วนใหญ่ของผมอยู่ตรงจุดที่ระบบเริ่มยาก — ข้อมูลจำนวนมาก, workflow ที่ซับซ้อน, background processing, integration กับระบบภายนอก, database performance และข้อจำกัดที่โผล่มาหลัง deploy เท่านั้น",
      "ผมเคยออกแบบและพัฒนา messaging platform, ระบบ campaign และ scheduling, reporting และ validation pipeline รวมถึงระบบรวม order จาก Shopee, Lazada — พร้อม dashboard สำหรับผู้ใช้งาน — และ integration กับ Thailand Post บางระบบผมยังดูแลอยู่จนถึงตอนนี้ จึงต้องอยู่กับผลของทุกการตัดสินใจที่ทำไว้ตั้งแต่ตอนสร้างมัน",
    ],
    fits: {
      title: "ระบบแบบไหนที่ผมถนัด",
      items: [
        "ข้อมูลจำนวนมาก",
        "Workflow ซับซ้อน",
        "Background processing",
        "API integration",
        "Database performance",
        "ข้อจำกัดด้าน deployment",
        "Production reliability",
      ],
    },
    focus: {
      title: "สิ่งที่ผมให้ความสำคัญในการออกแบบระบบ",
      items: [
        { term: "Scalability", gloss: "ระบบโตได้โดยไม่ต้องรื้อเขียนใหม่" },
        { term: "Reliability", gloss: "ออกแบบเผื่อ failure ไว้ก่อน ไม่ใช่ภาวนาว่าจะไม่เกิด" },
        { term: "Maintainability", gloss: "วิศวกรคนถัดไปสำคัญพอ ๆ กับคนที่เขียนวันนี้" },
        { term: "Performance", gloss: "วัดจาก access pattern จริง ไม่ใช่ benchmark ในห้องแล็บ" },
        { term: "Production readiness", gloss: "deploy ได้ มองเห็นได้ กู้คืนได้" },
        { term: "Technical decision ที่อธิบายได้", gloss: "ทุก trade-off ต้องมีเหตุผลที่พูดออกมาได้" },
      ],
    },
    direction: {
      title: "สิ่งที่ผมเปิดรับ",
      body: "ทั้งงานโปรเจกต์ของลูกค้าและ senior/lead role พอ ๆ กัน จุดร่วมไม่ใช่ตำแหน่ง แต่คือการเป็นเจ้าของ technical decision ตั้งแต่ต้นจนจบ และรับผิดชอบกับผลที่เกิดใน production",
    },
    engagement: {
      index: "02",
      eyebrow: "การทำงานร่วมกัน",
      title: "ขั้นตอนการทำงานกับผม",
      lead: "ไม่ว่าจะเป็นงาน freelance, งาน consulting หรือบทบาท lead — โครงเดียวกันเสมอ",
      items: [
        {
          step: "01",
          title: "เข้าใจงานก่อน",
          body: "requirement, workflow ปัจจุบัน และ constraint จริง — ปริมาณข้อมูล เวลา ทีม และงบ",
        },
        {
          step: "02",
          title: "ออกแบบก่อนเขียนโค้ด",
          body: "system boundary, data model, API contract และ trade-off เขียนเป็นเอกสาร เพื่อให้เถียงกันได้ตั้งแต่ต้น ไม่ใช่ตอนจบ",
        },
        {
          step: "03",
          title: "ส่งงานเป็น vertical slice",
          body: "มีของใช้งานได้เร็ว และเริ่มจากส่วนที่เสี่ยงที่สุดก่อน — integration, ปริมาณข้อมูล หรือ scheduler",
        },
        {
          step: "04",
          title: "Deploy อย่างระมัดระวัง operate อย่างตรงไปตรงมา",
          body: "CI/CD, observability และแผน rollback — ถ้ามีอะไรพัง คุณจะรู้จากผมก่อน พร้อมสาเหตุและแนวทางแก้ ไม่ใช่รู้จากผู้ใช้",
        },
        {
          step: "05",
          title: "ส่งมอบให้ดูแลต่อได้",
          body: "เอกสาร, handover และเหตุผลของทุกการตัดสินใจที่ย้อนกลับมาอ่านได้ — เป้าหมายคือระบบที่ทีมคุณเป็นเจ้าของเอง ไม่ใช่ระบบที่ต้องเช่าผมไว้ตลอด",
        },
      ],
    },
    cta: {
      title: "กำลังหาวิศวกรแบบนี้อยู่หรือเปล่า",
      body: "ผมเปิดรับ senior role, งาน consulting และโปรเจกต์ freelance ที่เน้น integration",
      primary: { label: "ติดต่อผม", href: "/th/contact/" },
    },
  },

  caseStudiesPage: {
    title: "Case Studies",
    heading: "ระบบที่ผมสร้าง และสิ่งที่มันสอนผม",
    lead: "สามระบบที่ผ่าน production จริง — เล่า context ข้อจำกัด trade-off และสิ่งที่แต่ละระบบเปลี่ยนไปจริง ๆ",
    anonymized: "รายละเอียดลูกค้าและบริษัทถูกปิดไว้ แต่โจทย์และเนื้องาน engineering เป็นของจริง",
  },

  expertise: {
    title: "ความเชี่ยวชาญ",
    heading: "แผนที่ความสามารถ ไม่ใช่กำแพงโลโก้",
    lead: "ผมออกแบบ สร้าง และดูแลอะไรได้บ้าง — และ case study ไหนเป็นหลักฐานของแต่ละแถว",
    groups: [
      {
        title: "Backend Engineering",
        note: "จุดที่ผมลงลึกที่สุด — service ที่แบกธุรกิจไว้",
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
        note: "frontend ระดับ production สำหรับระบบที่ผมสร้าง — dashboard, admin tool และ operational UI",
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
        note: "จุดที่ปัญหา production ส่วนใหญ่มักเกิดขึ้น",
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
        note: "ตั้งแต่ Dockerfile จนถึง rollout — และถอยกลับเมื่อ rollout มีปัญหา",
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
        note: "ส่วนของงานที่ไม่ปรากฏในโค้ด แต่ชี้ขาดว่าโปรเจกต์รอดหรือไม่",
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
      title: "ระดับความลึก พร้อมหลักฐาน",
      lead: "สามระดับ: ใช้ทำงานทุกวัน, เคยใช้จริงใน production, ใช้งานได้ — แต่ละแถวลิงก์ไปยัง case study ที่เป็นหลักฐาน",
      depthLegend: "ใช้ทุกวัน · เคยใช้ใน production · ใช้งานได้",
      scrollHint: "เลื่อนตาราง → เพื่อดูคอลัมน์หลักฐาน",
      columns: { area: "ความสามารถ", depth: "ระดับ", proof: "หลักฐาน" },
      rows: [
        {
          area: "REST API & contract design",
          depth: "ใช้ทุกวัน",
          proofLabel: "Smart Messaging Platform",
          proofHref: "/th/case-studies/smart-messaging-platform/",
        },
        {
          area: "Background jobs & scheduling",
          depth: "ใช้ทุกวัน",
          proofLabel: "Smart Messaging Platform",
          proofHref: "/th/case-studies/smart-messaging-platform/",
        },
        {
          area: "MongoDB aggregation & index design",
          depth: "ใช้ทุกวัน",
          proofLabel: "MongoDB Reporting Optimization",
          proofHref: "/th/case-studies/mongodb-reporting-optimization/",
        },
        {
          area: "Third-party integration & OAuth 2.0",
          depth: "เคยใช้ใน production",
          proofLabel: "E-commerce Order Consolidator",
          proofHref: "/th/case-studies/ecommerce-order-consolidator-system/",
        },
        {
          area: "Webhook processing",
          depth: "เคยใช้ใน production",
          proofLabel: "E-commerce Order Consolidator",
          proofHref: "/th/case-studies/ecommerce-order-consolidator-system/",
        },
        {
          area: "Kubernetes deployment & CI/CD",
          depth: "เคยใช้ใน production",
          proofLabel: "Smart Messaging Platform",
          proofHref: "/th/case-studies/smart-messaging-platform/",
        },
        {
          area: "Relational modeling (PostgreSQL / MySQL)",
          depth: "เคยใช้ใน production",
          proofLabel: "E-commerce Order Consolidator",
          proofHref: "/th/case-studies/ecommerce-order-consolidator-system/",
        },
        {
          area: "Enterprise dashboards (Angular / React / Next.js)",
          depth: "เคยใช้ใน production",
          proofLabel: "E-commerce Order Consolidator",
          proofHref: "/th/case-studies/ecommerce-order-consolidator-system/",
        },
        {
          area: "Sharding & horizontal scaling strategy",
          depth: "ใช้งานได้",
          proofLabel: "MongoDB Reporting Optimization",
          proofHref: "/th/case-studies/mongodb-reporting-optimization/",
        },
      ],
    },
    cta: {
      title: "อยากได้ความสามารถแบบนี้ในทีมหรือโปรเจกต์ของคุณไหม",
      body: "ผมรับงาน backend build, architecture review และงาน consulting",
      primary: { label: "ติดต่อผม", href: "/th/contact/" },
    },
  },

  contact: {
    title: "ติดต่อ",
    heading: "คุยเรื่องระบบของคุณกันครับ",
    lead: "ผมรับงานพัฒนา web application, งาน backend และ integration, internal tool, architecture review และ technical consulting — ไม่ว่าจะสร้างใหม่ทั้งก้อน หรือเสริม backend ให้ของที่มีอยู่แล้ว",
    emailLabel: "อีเมลหาผมโดยตรง",
    socialsLabel: "ช่องทางอื่น",
    form: {
      heading: "หรือเริ่มจากเล่ารายละเอียดคร่าว ๆ",
      note: "ฟอร์มนี้จะเปิดโปรแกรมอีเมลของคุณพร้อมข้อความที่กรอกไว้ — ไม่มี tracking ไม่ผ่าน backend ของใคร",
      name: "ชื่อ",
      email: "อีเมล",
      company: "บริษัท",
      projectType: "ประเภทโปรเจกต์",
      projectTypes: [
        "Full Web Application",
        "Backend System",
        "Enterprise Internal Tool",
        "E-commerce / API Integration",
        "Messaging Platform",
        "Architecture Review",
        "Consulting",
        "อื่น ๆ",
      ],
      message: "รายละเอียด",
      submit: "เขียนอีเมล",
    },
  },
};
