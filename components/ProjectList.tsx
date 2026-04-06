import React from "react";
import { Project } from "@/data/projects";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "./ui/item";
import { Button } from "./ui/button";
import Link from "next/link";
import { BadgeList } from "./BadgeList";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

export const ProjectList: React.FC<{ projects: Project[] }> = ({
  projects,
}) => {
  return (
    <Card className="py-4 gap-2">
      <CardHeader className="px-4">
        <CardTitle className="text-xl font-bold text-center lg:text-start">
          Project List
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex flex-col gap-2">
          {projects.map((p) => (
            <ProjectCard project={p} key={`project-${p.name}`} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Item variant="default" className="bg-pal4">
      <div className="flex flex-col sm:flex-row gap-2 justify-start sm:justify-between sm:w-full">
        <ItemContent>
          <ItemTitle className="text-lg font-semibold">
            {project.name}
          </ItemTitle>
          <ItemDescription>{project.description}</ItemDescription>
          <BadgeList tools={project.tools} />
        </ItemContent>

        <div className="flex flex-col items-start md:items-end justify-center gap-2">
          {project.thumbnail && (
            <ItemMedia className="border-4 border-pal5 rounded">
              <Image
                src={project.thumbnail}
                width={160}
                height={90}
                alt={project.name}
              />
            </ItemMedia>
          )}
          <ItemActions>
            {project.mvp && (
              <Button asChild variant="outline" className="w-20">
                <Link
                  href={project.mvp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mvp
                </Link>
              </Button>
            )}
            {project.devpost && (
              <Button asChild variant="outline" className="w-20">
                <Link
                  href={project.devpost}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Devpost
                </Link>
              </Button>
            )}
            {project.github && (
              <Button
                asChild
                className="w-20 bg-pal6 hover:border hover:border-pal6"
              >
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Link>
              </Button>
            )}
            {project.docs && (
              <Button
                asChild
                className="w-20 bg-pal6 hover:border hover:border-pal6"
              >
                <Link
                  href={project.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Docs
                </Link>
              </Button>
            )}
          </ItemActions>
        </div>
      </div>
    </Item>
  );
};
