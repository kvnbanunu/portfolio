import { cn } from "@/lib/utils";
import React from "react";

type HoverVariant = "default" | "small";

export const HoverDot: React.FC<{ variant?: HoverVariant }> = ({
  variant = "default",
}) => {
  return (
    <div
      className={cn(
        "absolute bg-radial -top-1 -right-1 from-white from-10% via-amber-500 via-40% to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200",
        variant === "default"
          ? "size-3 md:size-4 lg:size-6"
          : "size-2.5 md:size-3 lg:size-4",
      )}
    ></div>
  );
};
