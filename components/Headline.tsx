"use client";
import React from "react";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { FileText } from "lucide-react";
import { Sfx, SfxDialog } from "@/components/Sfx";

export const Headline: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1>Kevin Van Nguyen</h1>
      <p>
        I enjoy building tools that everyone can use to improve their developer
        experience
      </p>
      <Socials />
      <SfxDialog />
    </div>
  );
};

const Socials: React.FC = () => {
  return (
    <div className="flex justify-start">
      <SocialButton href="https://github.com/kvnbanunu">
        <FontAwesomeIcon icon={faGithub} />
      </SocialButton>
      <SocialButton href="https://linkedin.com/in/kvnbanunu">
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialButton>
      <SocialButton href="/kvnbanunu_resume.pdf">
        <FileText />
      </SocialButton>
      <Sfx click="error">
        <Button asChild className="bg-pal6">
          <Link href="#">Test</Link>
        </Button>
      </Sfx>
    </div>
  );
};

const SocialButton: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <Sfx click="select">
      <Button asChild size="icon-lg">
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
      </Button>
    </Sfx>
  );
};
