"use client";
import { useState } from "react";
import { MenuButton } from "./MainButton";
import { About } from "./About";
import { Footer } from "./Footer";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

type MenuItem = {
  title: string;
  component?: React.ReactNode;
};

const list: Record<string, MenuItem> = {
  about: {
    title: "ABOUT",
    component: <About />,
  },
  projects: {
    title: "PROJECTS",
    component: <Projects />,
  },
  experience: {
    title: "EXPERIENCE",
    component: <Experience />,
  },
  skills: {
    title: "SKILLS",
    component: <Skills />,
  },
};

export const MainMenu: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [current, setCurrent] = useState<MenuItem>(list.about);

  return (
    <div className="h-dvh bg-[url(/khpattern10.png)] bg-cover bg-top-right bg-no-repeat">
      <div className="h-full flex flex-col gap-2 justify-between bg-radial-[at_100%_0%] from-transparent to-white">
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
