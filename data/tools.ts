export type ToolType = "Language" | "Database" | "Tool";
export type Tool =
  | "Go"
  | "TypeScript"
  | "JavaScript"
  | "C"
  | "SQLite"
  | "Supabase"
  | "NextJS"
  | "React"
  | "Graphviz"
  | "Ncurses"
  | "SDL2"
  | "Bubbletea";

export const tools: Record<Tool, ToolType> = {
  Go: "Language",
  TypeScript: "Language",
  JavaScript: "Language",
  C: "Language",
  SQLite: "Database",
  Supabase: "Database",
  NextJS: "Tool",
  React: "Tool",
  Graphviz: "Tool",
  Ncurses: "Tool",
  SDL2: "Tool",
  Bubbletea: "Tool",
};
