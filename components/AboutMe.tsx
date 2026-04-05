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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-3xl">Kevin Van Nguyen</CardTitle>
        <CardDescription className="text-foreground">{About}</CardDescription>
      </CardHeader>
      <CardContent>
        <LinksList links={links} />
      </CardContent>
    </Card>
  );
};
