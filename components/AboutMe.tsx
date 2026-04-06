import React from "react";
import { About, links } from "@/data/about";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { LinksList } from "./LinksList";

export const AboutMe: React.FC = () => {
  return (
    <Card className="w-full py-4 lg:w-3xl">
      <CardHeader className="px-4">
        <CardTitle className="text-3xl text-center lg:text-start">
          Kevin Van Nguyen
        </CardTitle>
        <CardDescription className="text-foreground">{About}</CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <LinksList links={links} />
      </CardContent>
    </Card>
  );
};
