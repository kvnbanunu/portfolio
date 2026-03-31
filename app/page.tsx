import { AboutMe } from "@/components/AboutMe";
import { LinksList } from "@/components/LinksList";
import { ProjectList } from "@/components/ProjectList";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { links } from "@/data/about";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Alert className="text-center bg-yellow-100 text-yellow-900">
        <AlertTitle>This site is under construction</AlertTitle>
      </Alert>
      <Card>
        <AboutMe />
        <LinksList links={links} />
      </Card>
      <Card>
        <CardContent>
          <ProjectList projects={projects} />
        </CardContent>
      </Card>
    </div>
  );
}
