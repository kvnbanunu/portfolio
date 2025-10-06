export type ToolType = "Language" | "Database" | "Tool";

export interface Badge {
  border: string;
  bg: string;
  stroke: string;
}

export const badges: Record<ToolType, Badge> = {
  Language: {
    border: "border-sky-700",
    bg: "bg-sky-300",
    stroke: "stroke-sky-700",
  },
  Database: {
    border: "border-emerald-700",
    bg: "bg-emerald-300",
    stroke: "stroke-emerald-700",
  },
  Tool: {
    border: "border-slate-700",
    bg: "bg-slate-300",
    stroke: "stroke-slate",
  },
};

export const tools: Record<string, ToolType> = {
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
};

export const getBadge = (tool: string): Badge => {
  const category = tools[tool] ? tools[tool] : "Tool"
  return badges[category];
}
