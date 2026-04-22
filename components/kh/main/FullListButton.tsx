import { Sfx } from "@/components/Sfx";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { HoverDot } from "../shared/HoverDot";

export const FullListButton: React.FC<{
  href?: string;
  children: React.ReactNode;
}> = ({ href = "#", children }) => {
  return (
    <div className="w-full flex justify-end">
      <Sfx click="save">
        <Link
          href={href}
          className="px-2 py-1 rounded-full text-xs cursor-pointer border-2 hover:border-khd-highlight/50 bg-white/50 hover:bg-white text-khd-highlight text-center font-bold relative group"
        >
          {children} <FontAwesomeIcon icon={faUpRightFromSquare} />
          <HoverDot variant="small" />
        </Link>
      </Sfx>
    </div>
  );
};
