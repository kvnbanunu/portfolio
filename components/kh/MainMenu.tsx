import React from "react";
import { Sfx } from "../Sfx";
import { cn } from "@/lib/utils";
import { textSize } from "../Styles";

export const MainMenu: React.FC = () => {
  return (
    <div className="mt-32 p-4 flex flex-col gap-2">
      <MenuButton label="NEW GAME" />
      <MenuButton label="LOAD" />
      <MenuButton label="BACK" />
    </div>
  );
};

const MenuButton: React.FC<{ label: string }> = ({ label }) => {
  return (
    <Sfx click="select">
      <button className="group cursor-pointer">
        <div className="pb-1 bg-linear-to-r from-gray-400 group-hover:from-gray-950 from-25% to-transparent">
          <div className="flex gap-2 justify-start bg-linear-to-l from-gray-400 group-hover:from-amber-600 to-white to-45%">
            <div className="rounded-full size-8 bg-radial from-gray-400 group-hover:from-amber-100 via-gray-400 group-hover:via-amber-600 to-gray-400 group-hover:to-gray-950 from-10% via-30%">
              <div className="size-8 justify-center items-center border-6 border-gray-400 group-hover:border-gray-950 bg-transparent"></div>
            </div>
            <p
              className={cn(
                "text-gray-400 group-hover:text-gray-950 font-black self-end",
                textSize.title,
              )}
            >
              {label}
            </p>
          </div>
        </div>
      </button>
    </Sfx>
  );
};
