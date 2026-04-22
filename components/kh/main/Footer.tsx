import { Sfx } from "@/components/Sfx";
import { textSize } from "@/components/Styles";
import { cn } from "@/lib/utils";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { HoverDot } from "../shared/HoverDot";
import { Settings } from "../Settings";

export const Footer: React.FC = () => {
  return (
    <div className="pl-2 sm:pl-3 pr-2 w-full flex justify-between">
      <div className="flex flex-col">
        <p className={cn("pl-2 font-bold", textSize.normal)}>
          Developed by kvnbanunu
        </p>
        <Socials />
      </div>
      <Settings />
    </div>
  );
  // return (
  //   <div className="pl-2 sm:pl-3 pr-2 w-full flex flex-col">
  //     <p className={cn("pl-2 font-bold", textSize.normal)}>
  //       Developed by kvnbanunu
  //     </p>
  //     <div className="flex justify-between">
  //       <Socials />
  //       <Settings />
  //     </div>
  //   </div>
  // );
};

const Socials: React.FC = () => {
  return (
    <div className="flex justify-start">
      <SocialButton href="https://github.com/kvnbanunu">
        <FontAwesomeIcon icon={faGithub} />
      </SocialButton>
      <SocialButton href="https://www.linkedin.com/in/kvnbanunu">
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialButton>
      <SocialButton href="/kvnbanunu_resume.pdf">
        <FontAwesomeIcon icon={faFile} />
      </SocialButton>
    </div>
  );
};

const SocialButton: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <Sfx click="select">
      <button className="aspect-square rounded-full group relative hover:cursor-pointer border-2 hover:border-khd-highlight/50 bg-white/50 hover:bg-white">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("text-center text-khd-highlight", textSize.title)}
        >
          {children}
        </Link>
        <HoverDot variant="small" />
      </button>
    </Sfx>
  );
};
