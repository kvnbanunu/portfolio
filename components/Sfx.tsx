"use client";
import { sfx, SoundEffect } from "@/data/sfx";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import useSound from "use-sound";

export const SfxButton: React.FC<{
  sound?: SoundEffect;
  children: React.ReactNode;
}> = ({ sound = "select", children }) => {
  const [playHover] = useSound(sfx.hover, { volume: 0.5 });
  const [playClick] = useSound(sfx[sound], { volume: 0.5 });

  return (
    <Slot onMouseEnter={() => playHover()} onMouseDown={() => playClick()}>
      {children}
    </Slot>
  );
};
