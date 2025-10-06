import React from "react";
import links from "@/data/links.json";
import projects from "@/data/projects.json";
import { Badge, getBadge } from "@/data/badges";

export const TempComponent: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gray-50 text-gray-800 p-8 space-y-8">
      <div className="w-full bg-yellow-100 text-yellow-900 text-center py-4 rounded-lg border border-yellow-300 shadow">
        This site is under construction
      </div>

      <h1 className="text-3xl font-bold mt-4 text-center">
        Kevin Van Nguyen
        <br />
        (kvnbanunu)
      </h1>

      <div>
        <h2 className="w-full text-xl text-center">Important Links</h2>
        <nav className="flex flex-wrap justify-center gap-4 text-lg">
          {links &&
            links.map((val: LinkProps, index: number) => {
              return (
                <LinkComponent label={val.label} url={val.url} key={index} />
              );
            })}
        </nav>
      </div>

      <section className="w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ProjectList />
      </section>
    </main>
  );
};

interface LinkProps {
  label: string;
  url: string;
}

const LinkComponent: React.FC<LinkProps> = (props) => {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 underline"
    >
      {props.label}
    </a>
  );
};

const ProjectList: React.FC = () => {
  if (projects.length === 0) {
    return (
      <p className="text-gray-500 text-center">
        No projects yet. Check back soon.
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {projects.map((p, index) => (
        <li
          key={index}
          className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition"
        >
          <h2 className="text-2xl font-bold">{p.name}</h2>
          {p.tools && (
            <div>
              {p.tools.map((tool, index) => (
                <ToolBadge tool={tool} key={index} />
              ))}
            </div>
          )}
          <p className="text-gray-600">{p.description}</p>
          {p.github !== "" && <LinkComponent label="github" url={p.github} />}
        </li>
      ))}
    </ul>
  );
};

const ToolBadge: React.FC<{ tool: string }> = (props) => {
  const { tool } = props;

  const badge: Badge = getBadge(tool);

  return (
    <button
      className={`text-xs rounded-sm px-1 py-0.5 mr-1 border-2 ${badge.border} ${badge.bg} ${badge.stroke}`}
    >
      {tool}
    </button>
  );
};

export default TempComponent;
