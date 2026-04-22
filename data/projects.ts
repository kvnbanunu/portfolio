export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  images?: string[];
  description: string[];
  links: ProjectLink[];
  tools: string[];
};

export const projectList: Project[] = [
  {
    title: "QuickStyle",
    images: [
      "/thumbnails/quickstyle-main.png",
      "/thumbnails/quickstyle-attributes.png",
      "/thumbnails/quickstyle-text.png",
    ],
    description: [
      "Designed to let developers edit the content and styling of a React application directly within a live browser view while automatically updating the underlying code.",
      "1st Place Winner at Hack The Break 2026!",
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/kvnbanunu/quick-style",
      },
      {
        label: "Npm",
        href: "https://www.npmjs.com/package/quick-style-hackathon",
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/quickstyle",
      },
    ],
    tools: ["JavaScript", "TailwindCSS", "Vite", "Babel"],
  },
  {
    title: "DBTUI",
    images: [
      "/thumbnails/dbtui-main.png",
      "/thumbnails/dbtui-edit.png",
      "/thumbnails/dbtui-info.png",
      "/thumbnails/dbtui-query.png",
    ],
    description: [
      "Visual database manager right in your terminal.",
      "Won Best UI/UX at HTTP Hacks 2025!",
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/kvnbanunu/dbtui",
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/dbtui",
      },
    ],
    tools: ["Go", "BubbleTea", "SQLite"],
  },
  {
    title: "Flynt",
    images: [
      "/thumbnails/flynt-main.png",
      "/thumbnails/flynt-home.png",
      "/thumbnails/flynt-fyre.png",
      "/thumbnails/flynt-friends.png",
    ],
    description: [
      "Habit streak tracker with social features inspired by Snapchat and Strava.",
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/kvnbanunu/flynt",
      },
      {
        label: "Mvp",
        href: "https://flyntapp.io",
      },
    ],
    tools: ["Go", "TypeScript", "SQLite", "NextJS", "React", "TailwindCSS"],
  },
  {
    title: "Habibi's Mediterranean Foods",
    description: ["Intuitive content management system for a local business."],
    links: [
      {
        label: "Github",
        href: "https://github.com/habibisfoods/website",
      },
    ],
    tools: ["TypeScript", "Supabase", "NextJS", "React", "TailwindCSS"],
  },
  {
    title: "Assignment Starter",
    description: [
      "CLI tool used by BCIT DataComm students to quickly bootstrap their assignment projects.",
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/darcy-bcit/assignment-starter",
      },
    ],
    tools: ["JavaScript", "React", "Graphviz"],
  },
  {
    title: "Terminal Chat System",
    description: [
      "Network protocol designed for a real-time chat system. The system is comprised of many distributed programs working in tandem.",
    ],
    links: [
      {
        label: "Docs",
        href: "/terminal-chat-protocol-rfc.pdf",
      },
    ],
    tools: ["C", "Ncurses"],
  },
  {
    title: "Vigenere Cipher",
    description: [
      "Client-server application using network sockets to apply a vigenere cipher.",
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/kvnbanunu/vigenere-cipher",
      },
    ],
    tools: ["Go"],
  },
  {
    title: "UDS Caesar Cipher",
    description: [
      "Client-server application using domain sockets to apply a caesar cipher.",
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/kvnbanunu/uds-caesar-cipher",
      },
    ],
    tools: ["Go"],
  },
  {
    title: "Network Royale",
    description: [
      "Terminal based networked multiplayer game with controller support.",
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/kvnbanunu/networkroyale",
      },
    ],
    tools: ["C", "Ncurses", "SDL2"],
  },
];
