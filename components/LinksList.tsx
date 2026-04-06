import React from "react";
import { DataLink } from "@/data/about";
import Link from "next/link";
import { Button } from "./ui/button";

export const LinksList: React.FC<{ links: DataLink[] }> = ({ links }) => {
  return (
    <div className="flex justify-center lg:justify-start gap-2">
      {links.map((link: DataLink) => (
        <LinkComponent key={link.label} link={link} />
      ))}
    </div>
  );
};

const LinkComponent: React.FC<{ link: DataLink }> = ({ link }) => {
  return (
    <Button asChild className="bg-pal6 hover:border hover:border-pal6">
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
