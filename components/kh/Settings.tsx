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
            <GradientBorder bottom="khd-base" top="khd-grad" radius="lg">
              <div className="py-1 px-12 rounded-lg bg-linear-to-t from-khd-base to-khd-grad text-center">
                SOUND SETTINGS
              </div>
            </GradientBorder>
            <GradientBorder bottom="khd-base" top="khd-grad" radius="2xl">
              <div className="flex flex-col items-center gap-4 p-4 rounded-2xl bg-linear-to-t from-khd-base to-khd-grad">
                <DialogHeader>
                  <DialogTitle className="py-2 w-sm rounded bg-linear-to-t from-khd-highlight to-khd-grad text-center">
                    Welcome to banunu.dev
                  </DialogTitle>
                </DialogHeader>

                <FieldGroup className="px-16 gap-2">
                  <Field
                    orientation="horizontal"
                    className="py-1 px-8 rounded-lg bg-linear-to-t from-black from-90% to-white"
                  >
                    <FieldLabel htmlFor="sfx">Sound Effects</FieldLabel>
                    <Sfx>
                      <Checkbox
                        id="sfx"
                        checked={sfxOn}
                        onCheckedChange={toggleSfx}
                        className="hover:cursor-pointer"
                      />
                    </Sfx>
                  </Field>
                  <Field
                    orientation="horizontal"
                    className="py-1 px-8 rounded-lg bg-linear-to-t from-black from-90% to-white"
                  >
                    <FieldLabel htmlFor="bgm">Background Music</FieldLabel>
                    <Sfx click="select">
                      <Checkbox
                        id="bgm"
                        checked={bgmOn}
                        onCheckedChange={toggleBgm}
                        className="hover:cursor-pointer"
                      />
                    </Sfx>
                  </Field>
                  <Field
                    orientation="horizontal"
                    className="py-1 px-8 rounded-lg bg-linear-to-t from-black from-90% to-white"
                  >
                    <FieldLabel htmlFor="volume">Volume</FieldLabel>
                    <Slider
                      id="volume"
                      value={[vol]}
                      onValueChange={adjustVol}
                      min={0}
                      max={1}
                      step={0.05}
                      className="hover:cursor-pointer"
                    />
                  </Field>
                </FieldGroup>
                <DialogFooter>
                  <div className="flex flex-col gap-2">
                    <Separator />
                    <DialogDescription className="min-w-md mb-4 text-center text-sky-400 text-md">
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
            </GradientBorder>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
};

const GradientBorder: React.FC<{
  bottom: string;
  top: string;
  radius?: string;
  children: React.ReactNode;
}> = ({ bottom, top, radius, children }) => {
  const rounding = radius ? `rounded-${radius}` : "rounded";

  return (
    <div
      className={`pl-0.5 pr-1 pb-1 ${rounding} shadow-[inset_-1px_-2px_4px_rgba(0,0,0,0.9)] bg-linear-to-t from-${bottom} to-${top}`}
    >
      <div
        className={`pt-1 ${rounding} bg-radial-[at_40%_-50%] from-zinc-300 to-transparent from-40% to-70%`}
      >
        <div
          className={`pl-0.5 ${rounding} bg-radial-[at_0%_25%] from-zinc-600 to-transparent from-50% to-65%`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
