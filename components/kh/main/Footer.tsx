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
    <div className="pl-2 sm:pl-3 pr-2 w-full flex justify-between items-center">
      <div className="flex flex-col">
        <p className={cn("pl-1 font-bold", textSize.normal)}>
          Developed by kvnbanunu
        </p>
        <Socials />
      </div>
      <Settings />
    </div>
  );
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
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "aspect-square rounded-full group relative hover:cursor-pointer hover:bg-white",
          "text-center text-khd-highlight",
          textSize.title,
        )}
      >
        {children}
        <HoverDot variant="small" />
      </Link>
    </Sfx>
  );
};
