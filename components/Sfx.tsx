"use client";
import { Slot } from "@radix-ui/react-slot";
import React, { useState } from "react";
import { SfxKey, useSfx } from "@/context/SfxContext";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";

export const Sfx: React.FC<{
  click?: SfxKey;
  up?: SfxKey;
  down?: SfxKey;
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

export const SfxDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { on, vol, toggleOn, adjustVol, reset } = useSfx();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome to banunu.dev</DialogTitle>
            <DialogDescription>
              I've added sound effects to this site. Please adjust your
              settings.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="sound">Sound Effects</FieldLabel>
              <Sfx>
                <Checkbox id="sound" checked={on} onCheckedChange={toggleOn} />
              </Sfx>
            </Field>
            <Field orientation="horizontal">
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
                <Button className="bg-pal6 hover:border hover:cursor-pointer">
                  Save
                </Button>
              </DialogClose>
            </Sfx>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
