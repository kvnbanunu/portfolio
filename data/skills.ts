export type Skill = {
  category: string;
  list: string[];
};

export const skillList = [
  {
    category: "Languages",
    list: [
      "Go",
      "C",
      "C++",
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "SQL",
      "Bash",
      "Lua",
    ],
  },
  {
    category: "Web",
    list: ["React", "NextJS", "TailwindCSS", "HTML", "CSS"],
  },
  {
    category: "Databases",
    list: ["SQLite", "Postgres", "Supabase", "MongoDB", "MySQL", "Gdbm"],
  },
  {
    category: "Systems / Tools",
    list: [
      "Linux",
      "NPM",
      "NodeJS",
      "Docker",
      "Git",
      "Nginx",
      "Neovim",
      "CMake",
    ],
  },
];
