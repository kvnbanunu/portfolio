import { Sfx } from "@/components/Sfx";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { HoverDot } from "../shared/HoverDot";

export const FullListButton: React.FC<{
  newtab?: boolean;
  href?: string;
  children: React.ReactNode;
}> = ({ newtab = false, href = "#", children }) => {
  return (
    <div className="w-full flex justify-end">
      <Sfx click="save">
        <Link
          href={href}
          className="px-2 py-1 rounded-full text-xs cursor-pointer bg-white/75 hover:bg-white text-khd-highlight text-center font-bold relative group"
          target={newtab ? "_blank" : "_self"}
          rel={newtab ? "noopener noreferrer" : ""}
        >
          {children} <FontAwesomeIcon icon={faUpRightFromSquare} />
          <HoverDot variant="small" />
        </Link>
      </Sfx>
    </div>
  );
};
