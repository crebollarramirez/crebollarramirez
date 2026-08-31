import photoUrl from "./assets/meSpain4.jpg";

// data.jsx — Christopher Rebollar-Ramirez · portfolio content.

export const PROFILE = {
  name: "Chris",
  fullName: "Christopher Rebollar-Ramirez",
  title: "Software Engineer",
  tagline: "A Full Stack Software Engineer",
  blurb:
    "I'm a software engineer and UC San Diego graduate with dual B.S. degrees in Mathematics & Computer Science and Cognitive Science (Machine Learning and Neural Computation), completed in September 2025.",
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
  {
    group: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C++",
      "Java",
      "Swift",
      "HTML/CSS",
    ],
  },
  {
    group: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions",
      "GDB",
      "JDB",
      "Valgrind",
      "GPROF",
    ],
  },
  {
    group: "Certifications",
    items: ["PC Core Hardware A+", "PC Operating System A+"],
  },
];

export const EDUCATION = [
  {
    school: "University of California, San Diego",
    degree1: "B.S. Mathematics & Computer Science",
    degree2: "B.S. Cognitive Science with a specialization in Machine Learning & Neural Computation",
    period: "Sep 2021 — Sep 2025",
    detail:
      "Coursework spanning Advanced Data Structures (C++), Algorithm Design & Analysis, Operating Systems, Computer Organization (C/ARM), Software Engineering, Supervised ML, Practical Data Science, ML in Practice, and Deep Learning.",
  },
];

export const EXPERIENCE = [
  {
    id: "iceinmyarea",
    role: "Co-Founder & Lead Software Engineer",
    company: "IceInMyArea.org",
    period: "Jun 2025 — Present",
    location: "Los Angeles, California",
    summary:
      "Co-founded and serve as the sole technical owner of a real-time community reporting platform supporting 2,000+ daily users.",
    highlights: [
      "Architected and built the platform end-to-end, owning frontend, backend, infrastructure, security, testing, CI/CD, and production deployment.",
      "Designed a real-time reporting and moderation architecture using Firebase Auth, Realtime Database, Firestore, Storage, and role-protected Cloud Functions.",
      "Built secure image-upload workflows, geolocation-powered reporting, moderation tooling, and automated report archival before publication.",
      "Developed unit, integration, and E2E testing workflows with GitHub Actions pipelines to validate staging releases before production deployment.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Firebase",
      "Google Maps API",
      "Vercel",
      "Jest",
    ],
    link: "https://iceinmyarea.org",
    images: ["images/iceinmyarea1.png", "images/iceinmyarea2.png","images/iceinmyarea3.png"],
  },
  {
    id: "temptationla",
    role: "Freelance Software Engineer",
    company: "TemptationLA",
    period: "Jan 2026 — May 2026",
    location: "Los Angeles, California",
    summary:
      "Built a scalable wholesale clothing platform for growing catalogs, customer accounts, administrative workflows, and secure Stripe checkout.",
    highlights: [
      "Built full-stack catalog and account-management workflows with Stripe API checkout logic for secure wholesale order processing.",
      "Developed role-protected Supabase Edge Functions and enforced PostgreSQL Row Level Security for administrative, customer, and payment operations.",
      "Implemented product image workflows with Supabase Storage, RLS-backed access controls, and production SQL migrations.",
      "Created AI agent workflows to generate tests, validate coverage, debug broken business logic, and review frontend/backend changes for production readiness.",
      "Worked directly with the client through sprint planning, feedback reviews, and non-technical solution walkthroughs aligned to business goals.",
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "OpenAI Codex",
      "AI-assisted engineering",
      "Vercel",
    ],
    link: "https://temptationla.com",
    images: ["images/temptationla1.png", "images/temptationla2.png"],
  },
  {
    id: "health-care-financial-resource",
    role: "Software Engineer",
    company: "Health Care Financial Resource",
    period: "Jan 2025 — Mar 2026",
    location: "Upland, California",
    summary:
      "Redesigned and migrated the organization's website from Wix to a custom Next.js application deployed on Vercel.",
    highlights: [
      "Improved site discoverability by 25% through performance improvements, responsive design, and accessibility enhancements.",
      "Integrated Formspree for client communication and production form handling workflows.",
      "Collaborated with stakeholders to translate organizational and outreach requirements into technical solutions.",
    ],
    stack: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "next-intl",
      "Formspree",
      "Vercel",
    ],
    link: "https://www.healthcarefinancialresource.com/",
    images: [],
  },
];

// Projects — add in-repo image URLs to `images` when screenshots/assets exist.
// Import project assets above, then place the imported URLs in these arrays.
export const PROJECTS = [
  {
    id: "ai-3d-design-agent-platform",
    name: "AI 3D Design Agent Platform",
    period: "Jun 2026 — Present",
    status: "Actively under development",
    blurb:
      "Agentic CAD system that translates natural-language design requests into structured goals and executable plans for iterative 3D model generation.",
    bullets: [
      "Architected a bounded tool-calling loop where the model proposes typed actions while deterministic system boundaries control state, execution, and commits.",
      "Designed orchestration with semantic retrieval, isolated candidate workspaces, and plan-and-execute workflows for reliable CAD iteration.",
      "Implemented validation-and-repair loops that independently verify generated CAD source and measured geometry before guarded commits.",
      "Built durable asynchronous worker infrastructure with Supabase Postgres, leases, replayable events, optimistic concurrency, and specialized indexing/validation/render/export workers.",
      "Actively testing and iterating the agent execution loop through a CLI while user-facing UI integration is still in progress.",
    ],
    stack: [
      "Python",
      "TypeScript",
      "NestJS",
      "OpenAI API",
      "Supabase",
      "PostgreSQL",
      "CadQuery",
      "Docker",
    ],
    link: "#",
    github: "https://github.com/crebollarramirez/manifest_server",
    images: [],
  },
  {
    id: "digits-classifier-knn",
    name: "Digits Classifier KNN",
    blurb: "KNN-based classifier built for MNIST and classic ML evaluations.",
    bullets: [
      "Built a KNN model for MNIST classification, achieving 92.2% accuracy using cosine distance (outperforming Euclidean distance).",
      "Improved Wine dataset classification accuracy from 71% to 97% through feature normalization.",
      "Conducted detailed performance evaluations, including training vs. test accuracy comparisons and error analysis on misclassified samples.",
      "Developed a custom KNN model with support for multiple distance metrics and hyperparameter optimization, matching scikit-learn's performance.",
    ],
    stack: ["Python", "pandas", "NumPy", "scikit-learn", "Matplotlib"],
    link: "#",
    github: "https://github.com/crebollarramirez/digits-classifier-KNN",
    images: [],
  },

  {
    id: "breast-cancer-classifier",
    name: "Perceptron & Logistic Regression — Breast Cancer",
    blurb:
      "Custom Perceptron and Logistic Regression implementations evaluated on the Breast Cancer Wisconsin dataset.",
    bullets: [
      "Achieved 98.25% training/testing accuracy with a custom Perceptron model after 900 epochs on the Breast Cancer Wisconsin dataset.",
      "Compared Perceptron and Logistic Regression models, utilizing NumPy and scikit-learn for binary classification.",
      "Applied data normalization and visualized performance trends using Matplotlib for deeper model insights.",
    ],
    stack: ["Python", "pandas", "NumPy", "scikit-learn", "Matplotlib"],
    link: "#",
    github:
      "https://github.com/crebollarramirez/Perceptron---Logistic-Regression-for-Breast-Cancer",
    images: [],
  },

  {
    id: "fcn-segmentation-optimization",
    name: "FCN Semantic Segmentation Optimization",
    blurb:
      "Optimized CNN-based semantic segmentation (U-Net / FCN / DeepLab) on PASCAL VOC-2012.",
    bullets: [
      "Developed and optimized CNN-based segmentation models (U-Net, FCN, DeepLab) in PyTorch on PASCAL VOC-2012, improving Mean IoU from 0.0553 to 0.084 and Pixel Accuracy from 72.8% to 73.6% using class weighting and data augmentation.",
      "Accelerated model training by 5x with GPU utilization, optimized learning rate scheduling (CosineAnnealingLR), and transfer learning using a pre-trained ResNet34 encoder.",
      "Enhanced segmentation accuracy by 3.2% through Xavier weight initialization, batch normalization, and dropout, reducing overfitting and improving generalization.",
    ],
    stack: ["Python", "PyTorch", "NumPy", "Matplotlib"],
    link: "#",
    github:
      "https://github.com/crebollarramirez/FCN-Semantic-Segmentation-Optimization",
    images: [],
  },

  {
    id: "jmgworkscape",
    name: "JMGWorkScape",
    blurb:
      "House management iOS app for tracking work orders, invoices, and routing.",
    bullets: [
      "Co-developed JMGWorkScape, a house management app for tracking work orders and service schedules.",
      "Implemented an optimized search feature to efficiently retrieve houses by name.",
      "Created a PDF invoice generator for seamless creation and export of invoices.",
      "Designed a SwiftUI-based interface to enhance user experience and accessibility.",
      "Developed a routing feature to optimize service team schedules and resource allocation.",
      "Implemented full CRUD operations for efficient house management.",
    ],
    stack: ["Swift", "Xcode", "SwiftUI"],
    link: "#",
    github: "https://github.com/mikxvii/JMGWorkScape",
    images: [],
  },

  {
    id: "shakespeare-rnn",
    name: "Shakespeare RNN",
    blurb: "LSTM/RNN models for character-level Shakespeare text generation.",
    bullets: [
      "Achieved record-low test loss of 1.3237 by developing LSTM and RNN models with up to 512-character sequence handling, optimized further with a 300-neuron dual-hidden-layer configuration.",
      "Enhanced training convergence and text quality using teacher forcing, significantly improving model performance across various temperature settings.",
      "Balanced grammar and creativity in text generation to mimic Shakespeare at medium temperatures.",
    ],
    stack: ["Python", "PyTorch", "NumPy", "Matplotlib"],
    link: "#",
    github: "https://github.com/crebollarramirez/Shakespeare-RNN",
    images: [],
  },

  {
    id: "fourier-number-embeddings",
    name: "Fourier Number Embeddings for GPT-2",
    blurb:
      "Fine-tuned GPT-2 with Fourier Number Embeddings to improve arithmetic reasoning.",
    bullets: [
      "Engineered and fine-tuned GPT-2 with Fourier Number Embeddings (FoNE), achieving 99%+ accuracy on addition and 15× improvement on integer division over baseline.",
      "Conducted in-depth Fourier space analysis of MLP and attention layers, uncovering frequency-specific roles in arithmetic reasoning (magnitude vs. modularity).",
      "Built custom arithmetic datasets (720k+ samples), optimized training with cosine scheduling, and added WandB logging and inference profiling tools.",
    ],
    stack: ["Python", "PyTorch", "Matplotlib"],
    link: "#",
    github: "",
    images: [],
  },

  {
    id: "study-buddy",
    name: "Study Buddy",
    blurb:
      "Real-time study assistant with chat powered by OpenAI and WebSockets.",
    bullets: [
      "Developed the responsive frontend using Next.js and TailwindCSS for a clean, modern UI.",
      "Integrated Google OAuth for secure authentication, enabling role-based access for students and teachers.",
      "Utilized MongoDB to manage user profiles, chatbot conversations, and application data.",
      "Built a Flask backend with WebSockets and the OpenAI API to power real-time, interactive chatbot conversations.",
    ],
    stack: ["Next.js", "Flask", "TailwindCSS", "MongoDB", "OpenAI"],
    link: "#",
    github: "https://github.com/nickswetlin/study-buddy",
    images: [],
  },
];
