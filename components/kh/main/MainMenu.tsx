"use client";
import { useState } from "react";
import { MenuButton } from "./MainButton";
import { About } from "./About";
import { Footer } from "./Footer";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { cn } from "@/lib/utils";

type MenuItem = {
  key: string;
  title: string;
  component?: React.ReactNode;
};

const list: Record<string, MenuItem> = {
  about: {
    key: "about",
    title: "ABOUT",
    component: <About />,
  },
  projects: {
    key: "projects",
    title: "PROJECTS",
    component: <Projects />,
  },
  experience: {
    key: "experience",
    title: "EXPERIENCE",
    component: <Experience />,
  },
  skills: {
    key: "skills",
    title: "SKILLS",
    component: <Skills />,
  },
};

export const MainMenu: React.FC = () => {
  const [selected, setSelected] = useState<string>(list.about.key);
  const [current, setCurrent] = useState<MenuItem>(list.about);
  // black bg02 bg07 pat01 pat03 pat07 pat09
  // grey pat11
  // gold pat02 pat05 pat08

  return (
    <div
      className={cn("h-dvh bg-cover bg-top-right bg-no-repeat", {
        "bg-[url(/khbg/khpat10.png)]": selected === list.about.key,
        "bg-[url(/khbg/khbg02.png)]": selected === list.projects.key,
        "bg-[url(/khbg/khpat05.png)]": selected === list.experience.key,
        "bg-[url(/khbg/khpat07.png)]": selected === list.skills.key,
      })}
    >
      <div className="h-full flex flex-col gap-2 justify-between bg-radial-[at_100%_0%] from-transparent from-60% to-white/75">
        <div className="flex-1 min-h-0 w-full flex flex-col items-center overflow-hidden">
          {current.component}
        </div>
        <div className="flex flex-col gap-2 2xl:gap-4">
          <Footer />
          {Object.entries(list).map(([key, item]) => (
            <MenuButton
              label={item.title}
              selected={selected === key}
              key={key}
              onClick={() => {
                setSelected(key);
                setCurrent(list[key]);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
