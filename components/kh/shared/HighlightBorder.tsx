import { cn } from "@/lib/utils";
import React from "react";
import { DiamondContainer } from "./DiamondContainer";

export const HighlightBorder: React.FC<{
  shape?: "square" | "diamond";
  gradient?: boolean;
  base?: string;
  grad?: string;
  rounding?: string;
  className?: string;
  children: React.ReactNode;
}> = ({
  shape = "square",
  gradient,
  base,
  grad,
  rounding,
  className,
  children,
}) => {
  const radius =
    rounding && shape === "square"
      ? rounding === ""
        ? "rounded"
        : `rounded-${rounding}`
      : "rounding-none";

  const Comp = shape === "square" ? "div" : DiamondContainer;

  return (
    <Comp
      className={cn(
        "pb-1 pr-1",
        shape === "square"
          ? `pl-0.5 shadow-[inset_-1px_-2px_4px_rgba(0,0,0,0.9)]`
          : "pl-0",
        gradient
          ? shape === "square"
            ? `bg-linear-to-t from-${base} to-${grad}`
            : `bg-linear-to-br from-${base} to-${grad}`
          : `bg-${base}`,
        radius,
        className,
      )}
    >
      <div
        className={cn(
          `pt-1 bg-radial-[at_40%_-50%] from-zinc-300 to-transparent from-40% to-70%`,
          radius,
        )}
      >
        <Comp
          className={cn(
            "bg-radial-[at_0%_25%] from-zinc-600 to-transparent",
            shape === "square"
              ? `pl-0.5 from-50% to-65%`
              : "pl-1 from-0% to-25%",
            radius,
          )}
        >
          {children}
        </Comp>
      </div>
    </Comp>
  );
};
