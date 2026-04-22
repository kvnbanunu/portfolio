import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Size = "default" | "small";

export const HeartOverlay: React.FC<{ size?: Size }> = ({
  size = "default",
}) => {
  return (
    <div
      className={cn(
        "absolute -bottom-24 -right-12 opacity-10 pointer-events-none",
        size === "default"
          ? "size-44 sm:size-48 md:size-52 lg:size-64"
          : "size-40 sm:size-48 md:size-52 lg:size-56",
      )}
    >
      <Image
        src="/heart_symbol.png"
        alt="heart_symbol"
        sizes="(max-width: 480px) 25vw"
        fill
        className="object-contain"
      />
    </div>
  );
};
