import React from "react";
import { DataLink } from "@/data/about";
import Link from "next/link";
import { Button } from "./ui/button";

export const LinksList: React.FC<{ links: DataLink[] }> = ({ links }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {links.map((link: DataLink) => (
          <LinkComponent key={link.label} link={link} />
        ))}
      </div>
    </div>
  );
};

const LinkComponent: React.FC<{ link: DataLink }> = ({ link }) => {
  return (
    <Button asChild>
      <Link
        key={`link-${link.label}`}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
      </Link>
    </Button>
  );
};
