import React from "react";
import { Project } from "@/data/projects";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "./ui/item";
import { Button } from "./ui/button";
import Link from "next/link";
import { BadgeList } from "./BadgeList";

export const ProjectList: React.FC<{ projects: Project[] }> = ({
  projects,
}) => {
  return (
    <Item>
      <ItemContent>
        <ItemTitle className="text-xl font-bold">Project List</ItemTitle>
        <div className="flex flex-col gap-2 mt-2">
          {projects.map((p) => (
            <ProjectCard project={p} key={`project-${p.name}`} />
          ))}
        </div>
      </ItemContent>
    </Item>
  );
};

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle className="text-lg font-semibold">{project.name}</ItemTitle>
        <ItemDescription>{project.description}</ItemDescription>
        <BadgeList tools={project.tools} />
      </ItemContent>
      <ItemActions>
        <Button asChild>
          <Link href={project.github}>Github</Link>
        </Button>
      </ItemActions>
    </Item>
  );
};
