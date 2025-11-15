import { Project } from "@/types/project.t";
import { TraitsPage } from "@/types/traints.t";

export const USER_DATA = {
  name: "Bhanupratap Singh",

  prefix: "Hi, I'm pratap",

  jobTitle: "Software Engineer",

  org: "KaiFoundry",

  location: "India",

  email: "bhanupratapsingh@gmail.com",

  phone: "",

  github: "https://github.com/wantedbear007",

  linkedin: "https://www.linkedin.com/in/wantedbear007",

  twitter: "https://x.com/pratapbhanu17",

  instagram: "https://instagram.com/bhanupratapsingh",

  facebook: "https://facebook.com/bhanupratapsingh",
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
    pre: `Now building and optimizing backend services at ${USER_DATA.org}, focusing on microservices, performance, and secure architectures.`,

    post: "Based in India",
  },
};

export const IMAGES_PATH = {
  small_profile: "/profile/small_dp.png",
};

export const TRAITS_PAGE: TraitsPage = {
  date: "May 2024 – Present",
  heading: "Experience at QuadB Technologies",
  intro:
    "During my time at QuadB Technologies (Division kaiFoundry), I’ve worked across backend development, system optimization, and infrastructure automation. My work has focused on improving reliability, performance, and developer experience for systems that handle financial transactions and high-volume traffic.",
  subIntro: "Here are the key areas where I contributed:",
  image: "/images/experience.png", // update as needed
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
};

export const PROJECTS: Project[] = [
  {
    id: "tv-compose",
    title: "DexFans",
    subtitle: "Rust Backend",
    description:
      "A decentralized social media backend built in Rust on the Internet Computer, using stable memory for fast, upgrade-safe on-chain data.",
    bullets: [
      "Multi canisters(smart contract) implementation that scales with requirements.",
      "Developed an onchain storage platfrom for media files of platform",
      "Production deployment & developer tooling for IC canisters.",
    ],
    image: "/images/tv-compose.png",
    imageAlt: "Graphics",
    live: "https://7qxcw-pyaaa-aaaaj-qnf6a-cai.icp0.io",
    techs: ["Rust", "dfinity", "bash"],
  },
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
    image: "/images/design-systems.png",
    imageAlt: "Graphics",
    github: "https://github.com/wantedbear007/Guardian-assist",
    techs: ["Python", "FastAPI", "Langchain", "React"],
  },
];
