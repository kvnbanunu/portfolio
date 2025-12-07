import { LinksList } from "@/components/LinksList";
import { ProjectList } from "@/components/ProjectList";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { links } from "@/data/links";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <Card className="px-4">
      <Alert className="text-center bg-yellow-100 text-yellow-900">
        <AlertTitle>
          This site is under construction
        </AlertTitle>
      </Alert>
      <CardHeader>
        <CardTitle className="text-center text-3xl">
          Kevin Van Nguyen
          <br />
          (kvnbanunu)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <LinksList links={links} />
        <ProjectList projects={projects} />
      </CardContent>
    </Card>
  );
}
