import { Project } from "@/types/project.t";
import { TraitsPage } from "@/types/traints.t";

export const BETA = true;

export const USER_DATA = {
  name: "Bhanupratap Singh",

  prefix: "Hi, I'm pratap",

  jobTitle: "Software Engineer",

  org: "Griphic (Skets Studio)",

  location: "India",

  email: "bhanupratapsingh@gmail.com",

  phone: "",

  github: "https://github.com/wantedbear007",

  linkedin: "https://www.linkedin.com/in/wantedbear007",

  twitter: "https://x.com/pratapbhanu17",

  instagram: "https://instagram.com/bhanupratapsingh",

  facebook: "https://facebook.com/bhanupratapsingh",

  resume:
    "https://drive.google.com/file/d/10WTX285lIoyUWMopgEH6E7Ib-amKcsXp/view?usp=sharing",
};

export const TAG_LINES = {
  // check for hero.tsx for impl
  heroSection: {
    sentence:
      "Backend engineer who treats performance bottlenecks the same way Thanos treats half the universe—perfectly balanced.",

    highlight: [
      "performance",
      "bottlenecks",
      "Thanos",
      "treats",
      "half",
      "the",
      "universe—perfectly",
      "balanced.",
    ],
  },

  subText: {
    pre: `Now building and optimizing backend services at ${USER_DATA.org}, focusing on stability, performance, and secure architectures.`,

    post: "Based in India",
  },
};

export const IMAGES_PATH = {
  small_profile: "/profile/small_dp.png",
};

export const TRAITS_PAGE: TraitsPage[] = [

  {
    date: "February 2026 – Present",
    heading: "Experience at Griphic (Skets Studio)",
    intro:
      "At Griphic, I’ve been focused on backend reliability, distributed system resilience, and platform security. My work centers around building fault-tolerant infrastructure and improving authentication and service stability for production systems.",
    subIntro: "Here are the key areas where I contributed:",
    image: "/backgrounds/skets.jpg",
    items: [
      {
        title: "Secure authentication architecture",
        body: "Migrated authentication from localStorage to a secure HTTP-only cookie-based architecture with token rotation, significantly improving protection against XSS attacks.",
      },
      {
        title: "Automated backend health monitoring",
        body: "Built a background health-check system in Go using goroutines to periodically monitor backend services, automatically marking unhealthy services after configurable retry thresholds and rechecking them for recovery.",
      },
      {
        title: "Circuit breaker implementation",
        body: "Implemented a per-upstream 3-state circuit breaker system (closed, open, half-open) with configurable thresholds and cooldown timing to prevent cascading failures and improve service resilience.",
      },
    ],
  },
  {
    date: "May 2024 – February 2026",
    heading: "Experience at QuadB Technologies",
    intro:
      "During my time at QuadB Technologies (Division kaiFoundry), I’ve worked across backend development, system optimization, and infrastructure automation. My work has focused on improving reliability, performance, and developer experience for systems that handle financial transactions and high-volume traffic.",
    subIntro: "Here are the key areas where I contributed:",
    image: "/backgrounds/exp.jpg",
    items: [
      {
        title: "Secure system design",
        body: "Designed and built an encrypted endpoint routing system used for financial transactions. It improved backend reliability, tightened API security, and reduced exposure of sensitive routes.",
      },
      {
        title: "SEO engineering with Go",
        body: "Introduced an SEO-friendly React setup by creating a lightweight Go proxy server to generate dynamic meta tags, enabling accurate social media previews for dynamic pages.",
      },
      {
        title: "Microservice migration",
        body: "Migrated three monolithic backends into Node.js (Express) and Spring Boot microservices, integrating Redis caching to boost API response times by 30–40% and support 10K+ daily requests.",
      },
      {
        title: "Fixing performance bottlenecks",
        body: "Took ownership of a backend suffering from heavy database failures. Replaced nested manual queries with ORM-driven optimized queries, resolving bottlenecks and stabilizing the system.",
      },
      {
        title: "CI/CD automation",
        body: "Built a complete CI/CD pipeline that replaced manual deployment steps and reduced production deployment time by more than 80%.",
      },
      {
        title: "Backend development & documentation",
        body: "Developed scalable RESTful APIs and backend services in Node.js and Spring Boot, documented system workflows, and containerized services with Docker to simplify deployments and eliminate dependency issues.",
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "nexctl",
    title: "Nexctl",
    subtitle: "Unified Infrastructure Control Plane",
    description:
      "An enterprise-grade infrastructure orchestration and multi-provider integration platform that centralizes SSH node management, RBAC, provider integrations, automation jobs, and secure credential handling into a single control plane.",
    bullets: [
      "Built a provider plugin architecture supporting GitHub, Cloudflare, Google, Vercel, Telegram, and infrastructure providers through a unified integration system.",
      "Implemented SSH-based infrastructure orchestration with Docker, nginx, systemd, cron, deployments, backups, metrics, and package management without requiring agents.",
      // "Developed a deny-by-default RBAC engine with policy documents, provider-scoped permissions, role templates, audit logging, and encrypted credential management.",
      "Created a Docker-isolated multi-runtime job runner supporting Python, Bash, and Node.js workloads with scheduling, retries, resource limits, and encrypted secrets.",
    ],
    image: "/backgrounds/cardbg1.jpg",
    imageAlt: "Nexctl Infrastructure Control Plane Dashboard",
    // github: "https://github.com/your-username/nexctl",
    live: "https://nexctl.pratap.world",
    page: "/nexctl",
    techs: [
      "Go",
      "Fiber",
      "PostgreSQL",
      "GORM",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "SSH",
      "JWT",
      "AES-GCM"
    ]
  },
  // {
  //
  //   id: "tv-compose",
  //   title: "DexFans",
  //   subtitle: "Rust Backend",
  //   description:
  //     "A decentralized social media backend built in Rust on the Internet Computer, using stable memory for fast, upgrade-safe on-chain data.",
  //   bullets: [
  //     "Multi canisters(smart contract) implementation that scales with requirements.",
  //     "Developed an onchain storage platfrom for media files of platform",
  //     "Production deployment & developer tooling for IC canisters.",
  //   ],
  //   image: "/backgrounds/cardbg1.jpg",
  //   imageAlt: "Graphics",
  //   live: "",
  //   techs: ["Rust", "dfinity", "bash"],
  // },
  {
    id: "design-systems",
    title: "Guardian Assist",
    subtitle: "Full Stack AI RAG",
    description:
      "A full-stack web app that lets users upload PDFs to AWS S3, and then chat with the document’s content via a conversational interface.",
    bullets: [
      "Turns static documents into interactive searchable assets",
      "Allows users to upload PDF documents, store them aws and then process them for further usage.",
      "Uses an LLM or retrieval-augmented generation to respond to user questions.",
    ],
    image: "/backgrounds/card2.jpg",
    imageAlt: "Graphics",
    github: "https://github.com/wantedbear007/Guardian-assist",
    techs: ["Python", "FastAPI", "Langchain", "React"],
  },
];

export const FOOTER_DATA = {
  title: "Oh, hello.",

  description:
    "Feel free to reach out for collaborations or just a friendly hello.",

  email: "me@pratap.world",
  socials: [
    { name: "Twitter", url: "https://x.com/pratapbhanu17" },
    { name: "Github", url: "https://github.com/wantedbear007" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/wantedbear007/" },
    { name: "Resume", url: USER_DATA.resume },
  ],
  image: "/backgrounds/footer.jpg",
};
