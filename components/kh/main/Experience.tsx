import React from "react";
import { jobList, Job, educationList, Education } from "@/data/experience";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FullListButton } from "./FullListButton";

export const Experience: React.FC = () => {
  return (
    <div className="flex-1 min-h-0 w-full p-2 flex flex-col gap-2">
      <ScrollArea className="flex-1 min-h-0 bg-white/50">
        {jobList.map((j, index) => (
          <React.Fragment key={index}>
            <JobItem job={j} />
          </React.Fragment>
        ))}
        {educationList.map((e, index) => (
          <React.Fragment key={index}>
            <EduItem edu={e} />
          </React.Fragment>
        ))}
      </ScrollArea>
      <FullListButton href="#">View Full Resume</FullListButton>
    </div>
  );
};

const JobItem: React.FC<{ job: Job }> = ({ job }) => {
  return (
    <div>
      <div>{job.position}</div>
      <div>{job.company}</div>
      <div>{job.date}</div>
      {job.desc && (
        <div>
          {job.desc.map((d, index) => (
            <div key={index}>{d}</div>
          ))}
        </div>
      )}
    </div>
  );
};

const EduItem: React.FC<{ edu: Education }> = ({ edu }) => {
  return (
    <div>
      <div>{edu.school}</div>
      <div>{edu.degree}</div>
      <div>{edu.major}</div>
      <div>{edu.date}</div>
      {edu.extra && (
        <div>
          {edu.extra.map((e, index) => (
            <div key={index}>{e}</div>
          ))}
        </div>
      )}
    </div>
  );
};
