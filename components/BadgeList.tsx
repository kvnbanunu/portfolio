import { Tool, tools, ToolType } from "@/data/tools";
import React from "react";
import { Badge } from "./ui/badge";

export const BadgeList: React.FC<{ tools: Tool[] }> = ({ tools }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      {tools.map((tool: Tool) => (
        <ToolBadge key={`tool-${tool}`} tool={tool} />
      ))}
    </div>
  );
};

export type ToolBadgeColour = {
  border: string;
  bg: string;
  stroke: string;
};

export const toolBadgeColours: Record<ToolType, ToolBadgeColour> = {
  Language: {
    border: "border-sky-700",
    bg: "bg-sky-300",
    stroke: "text-sky-900",
  },
  Database: {
    border: "border-emerald-700",
    bg: "bg-emerald-300",
    stroke: "text-emerald-900",
  },
  Tool: {
    border: "border-slate-900",
    bg: "bg-slate-300",
    stroke: "text-slate",
  },
};

export const ToolBadge: React.FC<{ tool: Tool }> = ({ tool }) => {
  const tooltype: ToolType = tools[tool];
  const colours: ToolBadgeColour = toolBadgeColours[tooltype];
  return <Badge className={`${colours.bg} ${colours.stroke}`}>{tool}</Badge>;
};
