import React from "react";

export const HoverDot: React.FC = () => {
  return (
    <div className="absolute -top-1 -right-1 size-3 md:size-4 lg:size-6 bg-radial from-white from-10% via-amber-500 via-40% to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
  );
};
