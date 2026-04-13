"use client";
import React, { useState } from "react";
import { useSfx } from "@/context/SfxContext";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
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
import { SettingsIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { HighlightBorder } from "@/components/kh/shared/HighlightBorder";
import { DiamondContainer } from "./shared/DiamondContainer";

export const Settings: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { sfxOn, bgmOn, vol, toggleSfx, toggleBgm, adjustVol, reset, play } =
    useSfx();

  const onOpenChange = (open: boolean) => {
    if (!open) play("bgm");
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <form>
        <DialogTrigger>
          <Sfx click="select">
            <Button
              asChild
              size="icon-lg"
              className="fixed top-4 right-4 px-1 rounded-full bg-pal4 text-center hover:cursor-pointer"
            >
              <SettingsIcon />
            </Button>
          </Sfx>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="bg-transparent border-none justify-center"
        >
          <div className="flex flex-col gap-4 items-center">
            <HighlightBorder
              shape="diamond"
              gradient
              base="khd-base"
              grad="khd-grad"
            >
              <DiamondContainer className="py-1 px-24 bg-linear-to-t from-khd-base to-khd-grad text-sky-400 font-black text-shadow-lg/30 text-md">
                SOUND SETTINGS
              </DiamondContainer>
            </HighlightBorder>
            <HighlightBorder
              gradient
              base="khd-base"
              grad="khd-grad"
              rounding="2xl"
            >
              <div className="flex flex-col items-center gap-4 p-4 min-w-xl rounded-2xl bg-linear-to-t from-khd-base to-khd-grad">
                <DialogHeader>
                  <DialogTitle className="py-2 w-sm rounded bg-linear-to-t from-khd-highlight to-khd-grad font-bold text-shadow-lg/30 text-center">
                    Welcome to banunu.dev
                  </DialogTitle>
                </DialogHeader>

                <FieldGroup className="px-16 gap-2">
                  <Option>
                    <FieldLabel htmlFor="sfx" className="font-bold">
                      Sound Effects
                    </FieldLabel>
                    <Sfx>
                      <Checkbox
                        id="sfx"
                        checked={sfxOn}
                        onCheckedChange={toggleSfx}
                        className="hover:cursor-pointer"
                      />
                    </Sfx>
                  </Option>
                  <Option>
                    <FieldLabel htmlFor="bgm" className="font-bold">
                      Background Music
                    </FieldLabel>
                    <Sfx click="select">
                      <Checkbox
                        id="bgm"
                        checked={bgmOn}
                        onCheckedChange={toggleBgm}
                        className="hover:cursor-pointer"
                      />
                    </Sfx>
                  </Option>
                  <Option>
                    <FieldLabel htmlFor="volume" className="font-bold">
                      Volume
                    </FieldLabel>
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
                    <DialogDescription className="min-w-md mb-4 text-center text-sky-400 text-md font-bold">
                      I've added sound effects to this site.
                      <br />
                      Please adjust your settings accordingly.
                    </DialogDescription>
                    <div className="flex justify-end gap-2">
                      <Sfx click="cancel">
                        <Button
                          onClick={reset}
                          variant="outline"
                          className="hover:cursor-pointer"
                        >
                          Reset
                        </Button>
                      </Sfx>
                      <Sfx click="save">
                        <DialogClose asChild>
                          <Button
                            className="bg-pal6 border hover:cursor-pointer"
                            onClick={() => {
                              if (bgmOn) play("bgm");
                            }}
                          >
                            Save
                          </Button>
                        </DialogClose>
                      </Sfx>
                    </div>
                  </div>
                </DialogFooter>
              </div>
            </HighlightBorder>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
};

const Option: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Field
      orientation="horizontal"
      className="py-1 px-8 rounded-full bg-linear-to-t from-black from-90% to-white"
    >
      {children}
    </Field>
  );
};
