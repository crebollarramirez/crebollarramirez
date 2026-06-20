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
    degree: "B.S. Mathematics & Computer Science · B.S. Cognitive Science",
    period: "Sep 2021 — Sep 2025",
    detail:
      "Cognitive Science specialization in Machine Learning & Neural Computation. Coursework spanning advanced data structures (C++), algorithm design & analysis, operating systems, computer organization (C/ARM), software engineering, supervised ML, practical data science, ML in practice, and deep learning.",
  },
];

export const EXPERIENCE = [
  {
    id: "iceinmyarea",
    role: "Software Engineer",
    company: "Iceinmyarea.org",
    period: "June 2025 — Present",
    location: "Los Angeles, CA",
    summary:
      "Built a real-time web app for anonymous ICE-activity reports with interactive map-based tracking.",
    highlights: [
      "Supported 2000+ active users with secure anonymous report submissions and image uploads.",
      "Engineered a scalable serverless backend with Firebase and Google Maps API for geolocation and automated report archival.",
      "Built a Firebase Auth moderation workflow with role-protected Cloud Functions for verifier approval before real-time publication.",
      "Wrote unit, integration, and E2E tests wired into GitHub Actions CI/CD to validate releases in staging before production.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
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
    stack: [
      "React.js",
      "Vite",
      "TailwindCSS",
      "Supabase",
      "Stripe",
      "PostgreSQL",
      "Codex",
    ],
    link: "#", // add the company / project URL here
    images: ["images/temptationla1.png", "images/temptationla2.png"],
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
    stack: [
      "Next.js",
      "TailwindCSS",
      "JavaScript",
      "next-intl",
      "Formspree",
      "Vercel",
    ],
    link: "#", // add the company / project URL here
    images: [],
  },
];

// Projects — add in-repo image URLs to `images` when screenshots/assets exist.
// Import project assets above, then place the imported URLs in these arrays.
export const PROJECTS = [
  {
    id: "habitizer",
    name: "Habitizer",
    blurb:
      "An Android productivity app for building multi-task routines with real-time progress tracking.",
    bullets: [
      "Built routine tracking with a custom stopwatch feature and live progress.",
      "Created GitHub Actions CI/CD pipelines to automate builds, testing, and deployment.",
      "Ensured stability through unit, integration, and UI testing with JUnit and Robolectric.",
    ],
    stack: [
      "Java",
      "Kotlin",
      "Android SDK",
      "SQLite",
      "JUnit",
      "Gradle",
      "GitHub Actions",
    ],
    link: "#",
    github: "https://github.com/crebollarramirez", // repo URL
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
