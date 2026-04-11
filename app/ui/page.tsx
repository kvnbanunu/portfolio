import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";
import React from "react";

export default function Test() {
  return (
    <div className="h-full w-screen">
      <div className="h-full flex flex-col justify-around m-8 gap-4">
        <div className="border-1 flex flex-col text-center p-2">
          <div>Colour palette</div>
          <div className="bg-pal1">pal1</div>
          <div className="bg-pal2">pal2</div>
          <div className="bg-pal3">pal3</div>
          <div className="bg-pal4">pal4</div>
          <div className="bg-pal5">pal5</div>
          <div className="bg-pal6">pal6</div>
        </div>
        <div className="border-1 flex flex-col items-center text-center p-2">
          <div>Buttons</div>
          <div className="flex justify-between gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="link">Link</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
        <div className="border-1 flex flex-col items-center text-center p-2">
          <div>Badges</div>
          <div className="flex justify-between gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content p</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer p</p>
          </CardFooter>
        </Card>
        <div className="flex w-full max-w-md flex-col gap-6 self-center">
          <div className="text-center">Item</div>
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Basic Item</ItemTitle>
              <ItemDescription>
                A simple item with title and description.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Action
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline" size="sm" asChild>
            <a href="#">
              <ItemMedia>
                <BadgeCheckIcon className="size-5" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Your profile has been verified.</ItemTitle>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>
        </div>
        <div className="border-1 flex flex-col items-center p-2">
          <div>Carousel</div>
          <Carousel
            className="w-full max-w-[24rem] md:max-w-md"
            opts={{ align: "start" }}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="border-1 flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
            {tags.map((tag) => (
              <React.Fragment key={tag}>
                <div className="text-sm">{tag}</div>
                <Separator className="my-2" />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);
