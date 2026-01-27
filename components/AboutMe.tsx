import React from "react";
import { About } from "@/data/about";
import { CardDescription, CardHeader, CardTitle } from "./ui/card";

export const AboutMe: React.FC = () => {
  return (
    <CardHeader>
      <CardTitle className="text-lg">Kevin Van Nguyen</CardTitle>
      <CardDescription className="text-foreground">{About}</CardDescription>
    </CardHeader>
  );
};
