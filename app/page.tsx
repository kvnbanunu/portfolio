import { AboutMe } from "@/components/AboutMe";
import { ProjectList } from "@/components/ProjectList";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div>
      <div className="px-4 pt-4">
        <Alert className="text-center bg-yellow-100 text-yellow-900">
          <AlertTitle>This site is under construction</AlertTitle>
        </Alert>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        <AboutMe />
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}
