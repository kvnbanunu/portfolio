import { Tool } from "./tools";

export interface Project {
  name: string;
  description: string;
  github: string;
  tools: Tool[];
}

export const projects: Project[] = [
  {
    name: "dbtui",
    description: "Visual database manager right in your terminal!",
    github: "https://github.com/kvnbanunu/dbtui",
    tools: ["Go", "Bubbletea", "SQLite"],
  },
  {
    name: "Flynt",
    description:
      "Habit streak tracker with social features inspired by Snapchat and Strava.",
    github: "https://github.com/kvnbanunu/flynt",
    tools: ["Go", "TypeScript", "SQLite", "NextJS", "React"],
  },
  {
    name: "Habibi's Mediterranean Foods",
    description: "Intuitive content management system for a local business.",
    github: "https://github.com/habibisfoods/website",
    tools: ["TypeScript", "Supabase", "NextJS", "React"],
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
    github: "",
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
