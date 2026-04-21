"use client";
import React, { useState } from "react";
import { useSfx } from "@/context/SfxContext";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Sfx } from "@/components/Sfx";
import { HighlightBorder } from "@/components/kh/shared/HighlightBorder";
import { DiamondContainer } from "./shared/DiamondContainer";
import { buttonStyle, textSize } from "../Styles";
import { cn } from "@/lib/utils";
import { HoverDot } from "./shared/HoverDot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export const Settings: React.FC = () => {
  const {
    init,
    sfxOn,
    bgmOn,
    vol,
    setInit,
    toggleSfx,
    toggleBgm,
    adjustVol,
    reset,
    play,
  } = useSfx();
  const [isOpen, setIsOpen] = useState<boolean>(!init);

  const onOpenChange = (open: boolean) => {
    if (!open) play("bgm");
    if (!init) setInit(true);
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <Sfx click="select">
        <DialogTrigger asChild>
          <button
            className={cn(
              "p-1 px-4 rounded-full border-2 hover:border-khd-highlight/50 bg-white/50 hover:bg-white/80 text-khd-highlight text-center hover:cursor-pointer group relative font-bold",
              textSize.title,
            )}
          >
            <FontAwesomeIcon icon={faGear} />
            <span className={cn("pl-1 align-text-top", textSize.normal)}>
              Sound Settings
            </span>
            <HoverDot />
          </button>
        </DialogTrigger>
      </Sfx>
      <DialogContent
        showCloseButton={false}
        className="bg-transparent border-none shadow-none justify-center"
      >
        <div className="flex flex-col gap-4 items-center">
          <HighlightBorder
            shape="diamond"
            gradient
            base="khd-base"
            grad="khd-grad"
          >
            <DiamondContainer
              className={cn(
                "py-1 lg:py-2 w-2xs md:w-xs lg:w-lg bg-linear-to-t from-khd-base to-khd-grad text-sky-400 font-black text-shadow-lg/30 text-center",
                textSize.title,
              )}
            >
              SOUND SETTINGS
            </DiamondContainer>
          </HighlightBorder>
          <HighlightBorder
            gradient
            base="khd-base"
            grad="khd-grad"
            rounding="2xl"
          >
            <div className="flex flex-col items-center gap-2 lg:gap-4 justify-evenly p-4 w-sm sm:w-lg md:w-xl lg:w-4xl h-72 sm:h-80 md:h-96 lg:h-128 rounded-2xl bg-linear-to-t from-khd-base to-khd-grad">
              <DialogHeader>
                <DialogTitle
                  className={cn(
                    "py-1 lg:p-2 w-88 sm:w-md md:w-lg lg:w-3xl rounded bg-linear-to-t from-khd-highlight to-khd-grad font-bold text-shadow-lg/30 text-center text-white",
                    textSize.title,
                  )}
                >
                  Welcome to banunu.dev
                </DialogTitle>
              </DialogHeader>

              <FieldGroup className="px-8 md:px-16 lg:px-24 gap-2 lg:gap-4 h-24 sm:h-28 md:h-36 lg:h-48 justify-evenly">
                <Option tag="sfx" label="Sound Effects">
                  <Sfx>
                    <Checkbox
                      id="sfx"
                      checked={sfxOn}
                      onCheckedChange={toggleSfx}
                      className="hover:cursor-pointer"
                    />
                  </Sfx>
                </Option>
                <Option tag="bgm" label="Background Music">
                  <Sfx click="select">
                    <Checkbox
                      id="bgm"
                      checked={bgmOn}
                      onCheckedChange={toggleBgm}
                      className="hover:cursor-pointer"
                    />
                  </Sfx>
                </Option>
                <Option tag="volume" label="Volume">
                  <Slider
                    id="volume"
                    value={[vol]}
                    onValueChange={adjustVol}
                    min={0}
                    max={1}
                    step={0.05}
                    className="hover:cursor-pointer"
                  />
                </Option>
              </FieldGroup>
              <div className="h-1 w-full bg-linear-to-r from-transparent via-khd-highlight to-transparent"></div>
              <DialogFooter>
                <div className="flex flex-col gap-2">
                  <DialogDescription
                    className={cn(
                      "min-w-md mb-4 text-center text-sky-400 font-bold",
                      textSize.heading,
                    )}
                  >
                    I've added sound effects to this site.
                    <br />
                    Please adjust your settings accordingly.
                  </DialogDescription>
                  <div className="flex justify-center gap-2">
                    <Sfx click="cancel">
                      <button
                        className={cn(
                          buttonStyle.base,
                          buttonStyle.bgBlack,
                          buttonStyle.hoverRed,
                          textSize.heading,
                          "cursor-pointer",
                        )}
                        onClick={reset}
                      >
                        Reset
                        <HoverDot />
                      </button>
                    </Sfx>
                    <Sfx click="save">
                      <DialogClose asChild>
                        <button
                          className={cn(
                            buttonStyle.base,
                            buttonStyle.bgBlack,
                            buttonStyle.hoverRed,
                            textSize.heading,
                            "cursor-pointer",
                          )}
                          onClick={() => {
                            if (bgmOn) play("bgm");
                          }}
                        >
                          Save
                          <HoverDot />
                        </button>
                      </DialogClose>
                    </Sfx>
                  </div>
                </div>
              </DialogFooter>
            </div>
          </HighlightBorder>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Option: React.FC<{
  tag: string;
  label: string;
  children: React.ReactNode;
}> = ({ tag, label, children }) => {
  return (
    <Field
      orientation="horizontal"
      className={cn(
        buttonStyle.base,
        buttonStyle.bgBlack,
        buttonStyle.hoverRed,
      )}
    >
      <FieldLabel htmlFor={tag} className={cn("font-bold", textSize.normal)}>
        {label}
      </FieldLabel>
      {children}
      <HoverDot />
    </Field>
  );
};
