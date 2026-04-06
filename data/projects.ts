import { Tool } from "./tools";

export interface Project {
  name: string;
  description: string;
  tools: Tool[];
  github?: string;
  mvp?: string;
  npm?: string;
  docs?: string;
  devpost?: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    name: "QuickStyle",
    description:
      "Designed to let developers edit the content and styling of a React application directly within a live browser view while automatically updating the underlying code.",
    github: "https://github.com/kvnbanunu/quick-style",
    npm: "https://www.npmjs.com/package/quick-style-hackathon",
    devpost: "https://devpost.com/software/quickstyle",
    tools: ["JavaScript", "TailwindCSS", "Vite", "Babel"],
    thumbnail: "/thumbnails/quickstyle-main.png",
  },
  {
    name: "DBTUI",
    description: "Visual database manager right in your terminal!",
    github: "https://github.com/kvnbanunu/dbtui",
    devpost: "https://devpost.com/software/dbtui",
    tools: ["Go", "Bubbletea", "SQLite"],
    thumbnail: "/thumbnails/dbtui-main.png",
  },
  {
    name: "Flynt",
    description:
      "Habit streak tracker with social features inspired by Snapchat and Strava.",
    github: "https://github.com/kvnbanunu/flynt",
    mvp: "https://flyntapp.io",
    tools: ["Go", "TypeScript", "SQLite", "NextJS", "React", "TailwindCSS"],
    thumbnail: "/thumbnails/flynt-main.png",
  },
  {
    name: "Habibi's Mediterranean Foods",
    description: "Intuitive content management system for a local business.",
    github: "https://github.com/habibisfoods/website",
    tools: ["TypeScript", "Supabase", "NextJS", "React", "TailwindCSS"],
  },
  {
    name: "Assignment Starter",
    description:
      "CLI tool used by BCIT DataComm students to quickly bootstrap their assignment projects.",
    github: "https://github.com/darcy-bcit/assignment-starter",
    tools: ["JavaScript", "React", "Graphviz"],
  },
  {
    name: "Terminal Chat System",
    description:
      "Network protocol designed for a real-time chat system. The system is comprised of many distributed programs working in tandem.",
    docs: "/terminal-chat-protocol-rfc.pdf",
    tools: ["C", "Ncurses"],
  },
  {
    name: "Vigenere Cipher",
    description:
      "Client-server application using network sockets to apply a vigenere cipher.",
    github: "https://github.com/kvnbanunu/vigenere-cipher",
    tools: ["Go"],
  },
  {
    name: "UDS Caesar Cipher",
    description:
      "Client-server application using domain sockets to apply a caesar cipher.",
    github: "https://github.com/kvnbanunu/uds-caesar-cipher",
    tools: ["Go"],
  },
  {
    name: "Network Royale",
    description:
      "Terminal based networked multiplayer game with controller support.",
    github: "https://github.com/kvnbanunu/networkroyale",
    tools: ["C", "Ncurses", "SDL2"],
  },
];
