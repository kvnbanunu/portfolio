import React from "react";
import { jobList, Job, educationList, Education } from "@/data/experience";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FullListButton } from "./FullListButton";
import { cn } from "@/lib/utils";

export const Experience: React.FC = () => {
  return (
    <div className="flex-1 min-h-0 w-full p-2 gap-2 flex flex-col">
      <ScrollArea className="flex-1 min-h-0">
        <div
          className={cn(
            "flex flex-col justify-evenly gap-4 md:gap-2",
            "lg:flex-row lg:justify-around",
          )}
        >
          <JobList jobs={jobList} />
          <EduList edu={educationList} />
        </div>
      </ScrollArea>
    </div>
  );
};

const ExpList: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col font-bold text-khl-tgr gap-2",
        "md:p-2 lg:flex-1",
      )}
    >
      <h1 className="px-8 py-1 bg-linear-to-t from-khl-base to-khl-grad w-fit rounded-full border-4 border-khl-highlight text-khl-tor">
        {title}
      </h1>
      {children}
    </div>
  );
};

const ExpItem: React.FC<{
  date: { from: string; to: string };
  children: React.ReactNode;
}> = ({ date, children }) => {
  return (
    <div
      className={cn(
        "p-2 flex flex-col bg-linear-to-t from-khl-base to-khl-grad rounded-2xl border-4 border-khl-highlight",
        "md:flex-row md:gap-4",
      )}
    >
      <ExpDate date={date} />
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

const ExpDate: React.FC<{ date: { from: string; to: string } }> = ({
  date,
}) => {
  return (
    <div className="text-khl-tgr text-xs flex-none flex flex-row md:flex-col">
      <span>{date.from}</span>
      <span className="md:text-center">&ensp;&mdash;&ensp;</span>
      <span>{date.to}</span>
    </div>
  );
};

const ExpItemHeader: React.FC<{
  primary: string;
  secondary?: string;
  children?: React.ReactNode;
}> = ({ primary, secondary, children }) => {
  if (secondary) {
    return (
      <div className="flex flex-col md:flex-row lg:flex-col 2xl:flex-row text-khl-tor text-sm">
        <span>{primary}</span>
        <span className="hidden md:inline-block lg:hidden 2xl:inline-block">
          &ensp;●&ensp;
        </span>
        <span>{secondary}</span>
      </div>
    );
  }
  return <h2 className="font-black">{children}</h2>;
};

const ExpItemSubHeader: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <h3 className="font-black">{children}</h3>;
};

const JobList: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
  return (
    <ExpList title="Experience">
      {jobs.map((j, index) => (
        <JobItem key={index} job={j} />
      ))}
    </ExpList>
  );
};

const EduList: React.FC<{ edu: Education[] }> = ({ edu }) => {
  return (
    <ExpList title="Education">
      {edu.map((e, index) => (
        <EduItem key={index} edu={e} />
      ))}
      <FullListButton newtab href="/kvnbanunu_resume.pdf">
        View Full Resume
      </FullListButton>
    </ExpList>
  );
};

const JobItem: React.FC<{ job: Job }> = ({ job }) => {
  return (
    <ExpItem date={job.date}>
      <ExpItemHeader primary={job.position} secondary={job.company} />
      {job.desc && (
        <div>
          {job.desc.map((d, index) => (
            <div key={index} className="flex">
              <span>●&ensp;</span>
              <span>{d}</span>
            </div>
          ))}
        </div>
      )}
    </ExpItem>
  );
};

const EduItem: React.FC<{ edu: Education }> = ({ edu }) => {
  return (
    <ExpItem date={edu.date}>
      <ExpItemHeader primary={edu.degree} secondary={edu.major} />
      <ExpItemSubHeader>{edu.school}</ExpItemSubHeader>
      {edu.extra && (
        <div>
          {edu.extra.map((e, index) => (
            <div key={index} className="flex">
              <span>●&ensp;</span>
              <span>{e}</span>
            </div>
          ))}
        </div>
      )}
    </ExpItem>
  );
};
