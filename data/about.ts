export const About: string =
  "Systems-focused software developer based in Vancouver, BC with over three years of experience building performant and reliable software in C, Go, and TypeScript. My work spans distributed systems, network protocols, backend services, and developer tooling, with an emphasis on correctness, scalability, and clean system design. I’m motivated by solving complex technical problems and creating software that is both efficient under the hood and intuitive to use.";

export interface DataLink {
  label: string;
  url: string;
}

export const links: DataLink[] = [
  {
    label: "Github",
    url: "https://github.com/kvnbanunu",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/kvnbanunu",
  },
  {
    label: "Resume",
    url: "/resume-kvnbanunu.pdf",
  },
];
