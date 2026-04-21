"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import useSound from "use-sound";

export type SfxKey =
  | "hover"
  | "select"
  | "cancel"
  | "save"
  | "get"
  | "error"
  | "bgm";

interface SfxContextType {
  init: boolean;
  sfxOn: boolean;
  bgmOn: boolean;
  bgmPlaying: boolean;
  vol: number;
  setInit: Dispatch<SetStateAction<boolean>>;
  toggleSfx: () => void;
  toggleBgm: () => void;
  adjustVol: (amount: number[]) => void;
  reset: () => void;
  play: (key: SfxKey) => void;
}

const defaultValues: SfxContextType = {
  init: false,
  sfxOn: true,
  bgmOn: true,
  bgmPlaying: false,
  vol: 0,
  setInit: () => {},
  toggleSfx: () => {},
  toggleBgm: () => {},
  adjustVol: () => {},
  reset: () => {},
  play: () => {},
};

const SfxContext = createContext<SfxContextType>(defaultValues);

export const SfxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [init, setInit] = useState<boolean>(defaultValues.init);
  const [sfxOn, setSfxOn] = useState<boolean>(defaultValues.sfxOn);
  const [bgmOn, setBgmOn] = useState<boolean>(defaultValues.bgmOn);
  const [bgmPlaying, setBgmPlaying] = useState<boolean>(
    defaultValues.bgmPlaying,
  );
  const [vol, setVol] = useState<number>(defaultValues.vol);
  const [playHover] = useSound("/sfx/cursor_move.mp3", { volume: vol });
  const [playSelect] = useSound("/sfx/select.mp3", { volume: vol });
  const [playCancel] = useSound("/sfx/cancel.mp3", { volume: vol });
  const [playSave] = useSound("/sfx/save_load.mp3", { volume: vol });
  const [playGet] = useSound("/sfx/item_get.mp3", { volume: vol });
  const [playError] = useSound("/sfx/error_select.mp3", { volume: vol });
  const [playBgm, { stop }] = useSound("/sfx/dearly_beloved.mp3", {
    volume: vol,
    loop: true,
  });

  const sounds: Record<SfxKey, () => void> = {
    hover: playHover,
    select: playSelect,
    cancel: playCancel,
    save: playSave,
    get: playGet,
    error: playError,
    bgm: playBgm,
  };

  const play = (key: SfxKey) => {
    if (key === "bgm" && (bgmPlaying || !bgmOn)) return;
    if (sfxOn) sounds[key]();
    if (key === "bgm") setBgmPlaying(true);
  };

  const toggleSfx = () => {
    setSfxOn((prev) => {
      const next = !prev;
      if (!prev) sounds.select();
      return next;
    });
  };

  const toggleBgm = () => {
    if (!bgmOn) {
      setBgmOn(true);
    } else {
      stop();
      setBgmOn(false);
      setBgmPlaying(false);
    }
  };

  const adjustVol = (amount: number[]) => {
    let v = amount[0];
    if (v > 1) v = 1;
    if (v < 0) v = 0;

    setVol(v);
    if (sfxOn) sounds.hover();
  };

  const reset = () => {
    setSfxOn(defaultValues.sfxOn);
    setVol(defaultValues.vol);
    setBgmOn(defaultValues.bgmOn);
  };

  return (
    <SfxContext.Provider
      value={{
        init,
        setInit,
        sfxOn,
        bgmOn,
        bgmPlaying,
        vol,
        toggleSfx,
        toggleBgm,
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
