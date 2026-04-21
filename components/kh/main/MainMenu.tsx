"use client";
import { useState } from "react";
import { MenuButton } from "./MainButton";
import { About } from "./About";
import { Footer } from "./Footer";

type MenuItem = {
  title: string;
  component?: React.ReactNode;
};

const Experience: React.FC = () => {
  return <div>Experience</div>;
};

const list: Record<string, MenuItem> = {
  about: {
    title: "ABOUT",
    component: <About />,
  },
  experience: {
    title: "EXPERIENCE",
    component: <Experience />,
  },
  projects: {
    title: "PROJECTS",
  },
  education: {
    title: "EDUCATION",
  },
  skills: {
    title: "SKILLS",
  },
};

export const MainMenu: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [current, setCurrent] = useState<MenuItem>(list.about);

  return (
    <div className="h-dvh bg-[url(/khpattern10.png)]">
      <div className="h-full flex flex-col justify-between bg-radial-[at_100%_0%] from-transparent to-white">
        <div className="h-full flex flex-col justify-between">
          {current.component}
          <Footer />
        </div>
        <div className="flex flex-col gap-4 my-4">
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
