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

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  images: string[];
  description: string;
  links: ProjectLink[];
};

const projectList = [
  {
    title: "QuickStyle",
    images: [
      "/thumbnails/quickstyle-main.png",
      "/thumbnails/quickstyle-attributes.png",
      "/thumbnails/quickstyle-text.png",
    ],
    description:
      "Designed to let developers edit the content and styling of a React application directly within a live browser view while automatically updating the underlying code.",
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
  },
  {
    title: "DBTUI",
    images: [
      "/thumbnails/dbtui-main.png",
      "/thumbnails/dbtui-edit.png",
      "/thumbnails/dbtui-info.png",
      "/thumbnails/dbtui-query.png",
    ],
    description: "Visual database manager right in your terminal!",
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
  },
  {
    title: "Flynt",
    images: [
      "/thumbnails/flynt-main.png",
      "/thumbnails/flynt-home.png",
      "/thumbnails/flynt-fyre.png",
      "/thumbnails/flynt-friends.png",
    ],
    description:
      "Habit streak tracker with social features inspired by Snapchat and Strava.",
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
  },
];

export const Projects: React.FC = () => {
  return (
    <div className="h-full w-full max-w-7xl py-4 px-8 flex justify-center items-center">
      <Carousel className="w-11/12" opts={{ loop: true }}>
        <CarouselContent>
          {projectList.map((project, index) => (
            <React.Fragment key={project.title + index}>
              <ProjectItem project={project} />
            </React.Fragment>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
    </div>
  );
};

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  const [selected, setSelected] = useState<string>(project.images[0]);

  return (
    <CarouselItem>
      <div className="w-full flex flex-col gap-4 items-center">
        <HighlightBorder
          shape="diamond"
          gradient
          base="khd-base"
          grad="khd-grad"
        >
          <DiamondContainer
            className={cn(
              "py-1 lg:py-2 w-2xs md:w-xs lg:w-lg bg-linear-to-t from-khd-base to-khd-grad text-sky-400 font-black text-shadow-lg/30 text-center",
              textSize.title,
            )}
          >
            {project.title}
          </DiamondContainer>
        </HighlightBorder>
        <HighlightBorder
          gradient
          base="khd-base"
          grad="khd-grad"
          rounding="2xl"
          className="shadow-none w-full"
        >
          <div className="w-full flex flex-col bg-linear-to-t from-khd-base to-khd-grad rounded-2xl gap-4 p-2">
            <div className="w-full flex gap-2">
              <div className="w-10/12 aspect-video border-4 border-khd-highlight relative overflow-hidden rounded-md">
                <Image
                  src={selected}
                  alt={selected}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col w-2/12 gap-2">
                {project.images.map((image, index) => (
                  <React.Fragment key={index}>
                    <Sfx click="select">
                      <button
                        onClick={() => {
                          setSelected(image);
                        }}
                        className="cursor-pointer relative group"
                      >
                        <div className="relative aspect-video w-full overflow-hidden border-2 border-khd-highlight rounded-md">
                          <Image
                            src={image}
                            alt={project.title + index}
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
            <div className="h-1 w-full bg-linear-to-r from-transparent via-khd-highlight to-transparent"></div>
            <p
              className={cn(
                "text-sky-400 text-shadow-lg/30 font-bold",
                textSize.normal,
              )}
            >
              {project.description}
            </p>
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
                        textSize.normal,
                      )}
                    >
                      {link.label}
                      <HoverDot />
                    </Link>
                  </Sfx>
                </React.Fragment>
              ))}
            </div>
          </div>
        </HighlightBorder>
      </div>
    </CarouselItem>
  );
};
