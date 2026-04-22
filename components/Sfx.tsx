import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { SfxKey, useSfx } from "@/context/SfxContext";

export const Sfx: React.FC<{
  click?: SfxKey;
  up?: SfxKey;
  down?: SfxKey;
  toggleOn?: SfxKey;
  toggleOff?: SfxKey;
  children: React.ReactNode;
}> = ({ click, up, down, children }) => {
  const { play } = useSfx();

  return (
    <Slot
      onMouseEnter={() => {
        play("hover");
      }}
      onMouseDown={() => {
        if (!!down) play(down);
      }}
      onMouseUp={() => {
        if (!!up) play(up);
      }}
      onClick={() => {
        if (!!click) play(click);
      }}
    >
      {children}
    </Slot>
  );
};
