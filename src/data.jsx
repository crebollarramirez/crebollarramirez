import photoUrl from "./assets/meSpain4.jpg";

// data.jsx — Christopher Rebollar-Ramirez · portfolio content.

export const PROFILE = {
  name: "Chris",
  fullName: "Christopher Rebollar-Ramirez",
  title: "Full Stack Software Engineer",
  tagline: "A Full Stack Software Engineer",
  blurb:
    "I'm a recent graduate from the University of California, San Diego, where I earned degrees in Math–Computer Science and Cognitive Science with a specialization in Machine Learning and Neural Computation.",
  interests:
    "My interests include Software Engineering, Full Stack Development, and Machine Learning.",
  location: "Los Angeles, CA",
  photo: photoUrl,
  links: {
    linkedin: "https://www.linkedin.com/in/christopher-rebollar-ramirez/",
    github: "https://github.com/crebollarramirez",
    email: "mailto:christopherrebollar0@icloud.com",
    cv: "#", // link to your resume/CV (PDF) here
  },
};

export const SKILLS = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "C++", "Java", "Swift", "HTML/CSS"] },
  { group: "Developer Tools", items: ["Git", "GitHub", "Docker", "GitHub Actions", "GDB", "JDB", "Valgrind", "GPROF"] },
  { group: "Certifications", items: ["PC Core Hardware A+", "PC Operating System A+"] },
];

export const EDUCATION = [
  {
    school: "University of California, San Diego",
    degree: "B.S. Mathematics & Computer Science · B.S. Cognitive Science",
    period: "Sep 2021 — Sep 2025",
    detail:
      "Cognitive Science specialization in Machine Learning & Neural Computation. Coursework spanning advanced data structures (C++), algorithm design & analysis, operating systems, computer organization (C/ARM), software engineering, supervised ML, practical data science, ML in practice, and deep learning.",
  },
];

export const EXPERIENCE = [
  {
    id: "temptationla",
    role: "Freelance Software Engineer",
    company: "TemptationLA",
    period: "Jan 2026 — May 2026",
    location: "Los Angeles, CA",
    summary:
      "Built a scalable wholesale clothing platform supporting growing product catalogs, customer accounts, admin workflows, and secure Stripe checkout.",
    highlights: [
      "Designed admin workflows and Stripe API checkout logic for secure order processing.",
      "Developed role-protected Supabase Edge Functions and enforced PostgreSQL RLS to secure admin, customer, and payment operations.",
      "Implemented admin product image uploads via Supabase Storage with RLS-backed access controls and production SQL migrations.",
      "Created AI agent workflows to generate tests, validate coverage, debug business logic, and review changes for production readiness.",
      "Partnered with the client through sprint planning, feedback reviews, and non-technical walkthroughs to align features with business goals.",
    ],
    stack: ["React.js", "Vite", "TailwindCSS", "Supabase", "Stripe", "PostgreSQL", "Codex"],
    link: "#", // add the company / project URL here
    images: ["images/temptationla1.png", "images/temptationla2.png"]
  },
  {
    id: "apf",
    role: "Software Engineer",
    company: "APF Hospice Inc.",
    period: "Jan 2025 — Mar 2026",
    location: "Upland, CA",
    summary:
      "Redesigned and migrated the company website from Wix to a custom Next.js app on Vercel.",
    highlights: [
      "Boosted site discoverability ~25% through faster load times, fully responsive design, and improved accessibility.",
      "Implemented multilingual support with next-intl, improving SEO and reach across English and Spanish.",
      "Integrated Formspree for streamlined client communication via efficient form handling.",
      "Collaborated with stakeholders to align technical solutions with the organization's mission and community outreach.",
    ],
    stack: ["Next.js", "TailwindCSS", "JavaScript", "next-intl", "Formspree", "Vercel"],
    link: "#", // add the company / project URL here
    images: [],
  },
];

// Projects — add in-repo image URLs to `images` when screenshots/assets exist.
// Import project assets above, then place the imported URLs in these arrays.
export const PROJECTS = [
  {
    id: "iceinmyarea",
    name: "Iceinmyarea.org",
    blurb: "A real-time web app for anonymous ICE-activity reports with interactive map-based tracking.",
    bullets: [
      "Supported 2000+ active users with secure anonymous report submissions and image uploads.",
      "Engineered a scalable serverless backend with Firebase and Google Maps API for geolocation and automated report archival.",
      "Built a Firebase Auth moderation workflow with role-protected Cloud Functions for verifier approval before real-time publication.",
      "Wrote unit, integration, and E2E tests wired into GitHub Actions CI/CD to validate releases in staging before production.",
    ],
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Firebase", "Google Maps API", "Vercel", "Jest"],
    link: "https://iceinmyarea.org",
    github: "https://github.com/crebollarramirez", // repo URL
    images: ["images/iceinmyarea1.png", "images/iceinmyarea2.png"],
    featured: true,
  },
  {
    id: "habitizer",
    name: "Habitizer",
    blurb: "An Android productivity app for building multi-task routines with real-time progress tracking.",
    bullets: [
      "Built routine tracking with a custom stopwatch feature and live progress.",
      "Created GitHub Actions CI/CD pipelines to automate builds, testing, and deployment.",
      "Ensured stability through unit, integration, and UI testing with JUnit and Robolectric.",
    ],
    stack: ["Java", "Kotlin", "Android SDK", "SQLite", "JUnit", "Gradle", "GitHub Actions"],
    link: "#",
    github: "https://github.com/crebollarramirez", // repo URL
    images: [],
  },
];
