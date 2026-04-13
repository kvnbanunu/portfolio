import { cn } from "@/lib/utils";
import React from "react";

export const DiamondContainer: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "[clip-path:polygon(12px_0%,_calc(100%-12px)_0%,_100%_50%,_calc(100%-12px)_100%,_12px_100%,_0%_50%)]",
        className,
      )}
    >
      {children}
    </div>
  );
};
