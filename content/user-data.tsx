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
  date: "21 Apr, 2025",
  heading: "Key traits for success",
  intro:
    "Last week, I wrote about having a bias towards action—and a few people reached out asking, “What other qualities do you really value in teammates?”",
  subIntro: "Here are 6 traits I look up to and try to practice myself:",
  image: "/images/attention.png", // put image at public/images/attention.png
  items: [
    {
      title: "Bias towards action",
      body:
        "They don't wait for the perfect plan—they just start. They move things forward when others hesitate."
    },
    {
      title: "Attention to detail",
      body:
        "Nothing is too small to fix. Whether it's a misaligned slide or a mismatched color, they care enough to make it right. That mindset compounds."
    },
    {
      title: "Cautious ambition",
      body:
        "It's easy to be ambitious. Harder to be ambitious and realistic. The best people know how to read the room, aim high—and still stay grounded."
    },
    {
      title: "Respect for the problem",
      body:
        "They don't rush to solutions or hide behind “first principles.” They pause. Think. Put in the time a real problem deserves."
    },
    {
      title: "Consistency",
      body:
        "Not once. Not twice. But every single time. These are the people you can count on."
    },
    {
      title: "Empathy",
      body:
        "They try to understand teammates and users. That empathy shapes better decisions and kinder feedback."
    }
  ]
};