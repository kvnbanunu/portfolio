"use client";
import React, { createContext, useContext, useState } from "react";
import useSound from "use-sound";

type PlayFunction = ReturnType<typeof useSound>[0];

export type SfxKey = "hover" | "select" | "cancel" | "save" | "get" | "error";

interface SfxContextType {
  on: boolean;
  vol: number;
  toggleOn: () => void;
  adjustVol: (amount: number[]) => void;
  reset: () => void;
  play: (key: SfxKey) => void;
}

const defaultValues: SfxContextType = {
  on: true,
  vol: 0.25,
  toggleOn: () => {},
  adjustVol: () => {},
  reset: () => {},
  play: () => {},
};

const SfxContext = createContext<SfxContextType>(defaultValues);

const safe = (fn: PlayFunction | undefined): (() => void) => {
  return () => fn?.();
};

export const SfxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [on, setOn] = useState<boolean>(defaultValues.on);
  const [vol, setVol] = useState<number>(defaultValues.vol);
  const [hoverRaw] = useSound("/sfx/cursor_move.mp3", { volume: vol });
  const [selectRaw] = useSound("/sfx/select.mp3", { volume: vol });
  const [cancelRaw] = useSound("/sfx/cancel.mp3", { volume: vol });
  const [saveRaw] = useSound("/sfx/save_load.mp3", { volume: vol });
  const [getRaw] = useSound("/sfx/item_get.mp3", { volume: vol });
  const [errorRaw] = useSound("/sfx/error_select.mp3", { volume: vol });

  const soundMap: Record<SfxKey, PlayFunction | undefined> = {
    hover: hoverRaw,
    select: selectRaw,
    cancel: cancelRaw,
    save: saveRaw,
    get: getRaw,
    error: errorRaw,
  };

  const sounds: Record<SfxKey, () => void> = {
    hover: safe(soundMap.hover),
    select: safe(soundMap.select),
    cancel: safe(soundMap.cancel),
    save: safe(soundMap.save),
    get: safe(soundMap.get),
    error: safe(soundMap.error),
  };

  const play = (key: SfxKey) => {
    if (on) sounds[key]();
  };

  const toggleOn = () => {
    setOn((prev) => {
      const next = !prev;
      if (!prev) sounds.select();
      return next;
    });
  };

  const adjustVol = (amount: number[]) => {
    let v = amount[0];
    if (v > 1) v = 1;
    if (v < 0) v = 0;

    setVol(v);
    if (on) sounds.hover();
  };

  const reset = () => {
    setOn(defaultValues.on);
    setVol(defaultValues.vol);
  };

  return (
    <SfxContext.Provider
      value={{
        on,
        vol,
        toggleOn,
        adjustVol,
        reset,
        play,
      }}
    >
      {children}
    </SfxContext.Provider>
  );
};

export const useSfx = () => {
  return useContext(SfxContext);
};
