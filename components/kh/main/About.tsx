import { textSize } from "@/components/Styles";
import { cn } from "@/lib/utils";
import React from "react";

export const About: React.FC = () => {
  return (
    <div className="h-full p-2 flex flex-col md:flex-row md:justify-between gap-2 text-khd-highlight">
      <Section>
        <h1 className={cn("font-black text-3xl mb-2")}>Kevin Van Nguyen</h1>
        <p className={cn("font-bold mb-2", textSize.heading)}>
          Software Developer
        </p>
        <p className={cn("font-bold opacity-70", textSize.normal)}>
          My friends call me Banunu.
          <br />I build useful tools that make life easier.
        </p>
      </Section>
      <Section variant="content">
        <p className={cn("font-bold", textSize.normal)}>
          I'm a systems-focused software developer based in Vancouver, BC with
          over three years of experience building performant and reliable
          software in C, Go, and TypeScript. My work spans distributed systems,
          network protocols, backend services, and developer tooling, with an
          emphasis on correctness, scalability, and clean system design. I’m
          motivated by solving complex technical problems and creating software
          that is both efficient under the hood and intuitive to use.
          <br />
          <br />
          Currently I'm finishing my BSc in Applied Computer Science at British
          Columbia Institute of Technology with a specialization in Network
          Security Applications Development. I'm also employed as a Lab Proctor
          / Systems Administrator under my program's option head.
          <br />
          <br />
          Outside of programming, I'm currently trying to teach myself how to
          play piano as well as draw art. For fitness I train for powerlifting
          and running. Also as you can probably guess from the design of this
          site, I'm a huge fan of Kingdom Hearts!
        </p>
      </Section>
    </div>
  );
};

const Section: React.FC<{ variant?: string; children: React.ReactNode }> = ({
  variant,
  children,
}) => {
  return (
    <div
      className={cn(
        "p-4 w-full rounded-2xl bg-white/50 hover:bg-white/70 text-shadow-sm",
        variant === "content" ? "md:w-2/3 h-full" : "md:w-1/3 md:h-full",
      )}
    >
      {children}
    </div>
  );
};
