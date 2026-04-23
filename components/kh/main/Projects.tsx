"use client";
import { buttonStyle, textSize } from "@/components/Styles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HighlightBorder } from "../shared/HighlightBorder";
import { Sfx } from "@/components/Sfx";
import { HoverDot } from "../shared/HoverDot";
import { DiamondContainer } from "../shared/DiamondContainer";
import { Separator } from "../shared/Separator";
import { projectList, Project } from "@/data/projects";
import { FullListButton } from "./FullListButton";
import { HeartOverlay } from "../shared/HeartOverlay";

export const Projects: React.FC = () => {
  const projects = projectList.slice(0, 3);

  return (
    <div className="h-full w-full py-4 px-8 max-w-4xl 2xl:max-w-7xl flex flex-col justify-center items-center min-h-0">
      <Carousel className="w-[95%]" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {projects.map((project, index) => (
            <ProjectItem project={project} key={project.title + index} />
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={cn(
            "cursor-pointer -left-9 lg:-left-12 text-white",
            "bg-linear-to-t from-khd-base to-khd-grad border-none transition-none",
            buttonStyle.hoverRed,
          )}
        />
        <CarouselNext
          className={cn(
            "cursor-pointer -right-9 lg:-right-12 text-white",
            "bg-linear-to-t from-khd-base to-khd-grad border-none transition-none",
            buttonStyle.hoverRed,
          )}
        />
      </Carousel>
    </div>
  );
};

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <CarouselItem>
      <div className="w-full flex flex-col gap-2 items-center px-1">
        <HighlightBorder
          shape="diamond"
          gradient
          base="khd-base"
          grad="khd-grad"
        >
          <DiamondContainer
            className={cn(
              "py-1 w-2xs md:w-xs bg-linear-to-t from-khd-base to-khd-grad text-sky-400 font-black text-shadow-lg/30 text-center",
              textSize.heading,
            )}
          >
            {project.title}
          </DiamondContainer>
        </HighlightBorder>
        <div className="w-full flex flex-col gap-2 items-center">
          <HighlightBorder
            gradient
            base="khd-base"
            grad="khd-grad"
            rounding="2xl"
            className="shadow-none w-full"
          >
            <div className="w-full flex flex-col bg-linear-to-t from-khd-base to-khd-grad rounded-2xl gap-4 md:gap-2 p-2 relative overflow-hidden">
              <HeartOverlay size="small" />
              {project.images && <ImageSelector project={project} />}
              <LinkButtons project={project} />
              <Separator />
              <Description project={project} />
              <BadgeList badges={project.tools} />
            </div>
          </HighlightBorder>
          <FullListButton href="#">View Full Project List</FullListButton>
        </div>
      </div>
    </CarouselItem>
  );
};

const Description: React.FC<{ project: Project }> = ({ project }) => {
  const elements = [];

  elements.push(<span key={0}>{project.description[0]}</span>);

  for (let i = 1; i < project.description.length; i++) {
    elements.push(<br key={"br" + i} />);
    elements.push(<span key={i}>{project.description[i]}</span>);
  }

  return (
    <p
      className={cn(
        "text-sky-400 text-shadow-lg/30 font-bold text-center",
        "text-xs sm:text-sm md:text-base",
      )}
    >
      {elements}
    </p>
  );
};

const ImageSelector: React.FC<{
  project: Project;
}> = ({ project }) => {
  const defaultImage = project.images ? project.images[0] : "";
  const [selected, setSelected] = useState<string>(defaultImage);

  return (
    <div className="w-full flex gap-1 md:gap-2">
      <div className="w-10/12 aspect-video border-2 md:border-4 border-sky-500 relative overflow-hidden rounded">
        <Image
          src={selected}
          alt={selected}
          sizes="(max-width: 768px) 100vw, 83vw"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col w-2/12 gap-1 md:gap-2">
        {project.images &&
          project.images.map((image, index) => (
            <React.Fragment key={index}>
              <Sfx click="select">
                <button
                  onClick={() => {
                    setSelected(image);
                  }}
                  className="cursor-pointer relative group aspect-video w-full"
                >
                  <div className="relative h-full w-full overflow-hidden border-2 md:border-4 border-sky-500 rounded">
                    <Image
                      src={image}
                      alt={project.title + index}
                      sizes="(max-width: 768px) 100vw, 17vw"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <HoverDot />
                </button>
              </Sfx>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

const LinkButtons: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:justify-center">
      {project.links.map((link) => (
        <React.Fragment key={project.title + link.label}>
          <Sfx click="select">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "cursor-pointer",
                buttonStyle.base,
                buttonStyle.bgBlack,
                buttonStyle.hoverRed,
                "text-xs sm:text-sm md:text-base text-center",
              )}
            >
              {link.label}
              <HoverDot />
            </Link>
          </Sfx>
        </React.Fragment>
      ))}
    </div>
  );
};

const BadgeList: React.FC<{ badges: string[] }> = ({ badges }) => {
  return (
    <div className="flex gap-2 justify-center flex-wrap">
      {badges.map((b, index) => (
        <div
          key={b + index}
          className={cn(
            "px-2 py-0.5 text-yellow-300 bg-yellow-400/30 rounded-full text-[0.5rem] sm:text-xs",
          )}
        >
          {b}
        </div>
      ))}
    </div>
  );
};
