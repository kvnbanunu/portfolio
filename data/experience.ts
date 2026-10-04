export type Job = {
  company: string;
  position: string;
  date: { from: string; to: string };
  desc?: string[];
};

export const jobList: Job[] = [
  {
    company: "Incognito Software Inc.",
    position: "QA Software Engineer",
    date: { from: "SEP 2026", to: "APR 2027" },
    desc: [
      "Develop and maintain automated test suites for distributed systems.",
      "Monitor and analyze system logs for performance bottlenecks and security threats.",
      "Collaborate with development teams on CI/CD pipeline improvements.",
      "Participate in code reviews and quality assurance processes.",
    ],
  },
  {
    company: "British Columbia Institute of Technology",
    position: "Lab Proctor / Systems Adiminstrator",
    date: { from: "SEP 2025", to: "AUG 2026" },
    desc: [
      "Developed and tested automation scripts to simultaneously re-image 25+ lab machines weekly, improving reliability and turnaround time.",
      "Collaborated with BCIT Computing faculty to automate system configuration and integrity checks across instructional lab environments.",
      "Supported maintenance of Linux systems, ensuring consistent, secure, and reproducible lab setups.",
    ],
  },
  {
    company: "Steve's Poke Bar",
    position: "Assistant General Manager",
    date: { from: "SEP 2021", to: "AUG 2024" },
    desc: [
      "Created initiatives for promoting sales and employee skill development while systematically handling supply management.",
    ],
  },
  {
    company: "Self-employed",
    position: "Strength Coach",
    date: { from: "SEP 2020", to: "DEC 2023" },
    desc: [
      "Provided athletes with training programs geared towards increasing strength in fundamental movements.",
      "Analyzed athlete feedback and training data to determine strength patterns and refine training programs.",
      "Optimized movement patterns through video analysis and application of relevant biomechanical concepts.",
      "Increased the strength of my athletes by 25-50% every year through personalized application of training modalities.",
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  major: string;
  date: { from: string; to: string };
  extra?: string[];
};

export const educationList: Education[] = [
  {
    school: "British Columbia Institute of Technology",
    degree: "Bachelor of Science in Applied Computer Science",
    major: "Network Security Applications Development",
    date: { from: "SEP 2025", to: "MAY 2028" },
    extra: ["Co-op Program", "Set Representative"],
  },
  {
    school: "British Columbia Institute of Technology",
    degree: "Computer Systems Technology Diploma",
    major: "Datacommunications and Internetworking",
    date: { from: "SEP 2023", to: "MAY 2025" },
    extra: ["Set Representative", "Graduated with Distinction"],
  },
  {
    school: "Douglas College",
    degree: "Undergraduate Studies",
    major: "Sport Science",
    date: { from: "JAN 2019", to: "SEP 2023" },
  },
  {
    school: "Beedie School of Business at Simon Fraser University",
    degree: "Undergraduate Studies",
    major: "Business Administration",
    date: { from: "SEP 2015", to: "MAY 2018" },
  },
];
