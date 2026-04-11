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
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogTrigger>
          <Sfx>
            <Button asChild size="icon-lg">
              <SettingsIcon />
            </Button>
          </Sfx>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="bg-transparent border-none justify-center"
        >
          <div className="flex flex-col gap-4 items-center">
            <div className="p-0.5 rounded-2xl bg-linear-to-t from-slate-950 to-white">
              <div className="py-1 px-12 rounded-2xl bg-indigo-950 text-center">
                SOUND SETTINGS
              </div>
            </div>
            <div className="p-0.5 rounded-2xl bg-linear-to-t from-slate-950 to-white from-90%">
              <div className="flex flex-col items-center gap-4 p-4 rounded-2xl bg-linear-to-t from-indigo-950 from-40% to-slate-900 to-80%">
                <DialogHeader>
                  <DialogTitle className="py-2 w-sm rounded bg-linear-to-t from-indigo-900 to-slate-900 text-center">
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
                    <Sfx>
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
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
};
