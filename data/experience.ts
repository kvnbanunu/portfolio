export type Job = {
  company: string;
  position: string;
  date: string;
  desc?: string[];
};

export const jobList: Job[] = [
  {
    company: "British Columbia Institute of Technology",
    position: "Lab Proctor / Systems Adiminstrator",
    date: "SEP 2025 - MAY 2026",
    desc: [
      "Developed and tested automation scripts to simultaneously re-image 25+ lab machines weekly, improving reliability and turnaround time.",
      "Collaborated with BCIT Computing faculty to automate system configuration and integrity checks across instructional lab environments.",
      "Supported maintenance of Linux systems, ensuring consistent, secure, and reproducible lab setups.",
    ],
  },
  {
    company: "Steve's Poke Bar",
    position: "Assistant General Manager",
    date: "SEP 2021 - AUG 2024",
    desc: [
      "Created initiatives for promoting sales and employee skill development while systematically handling supply management.",
    ],
  },
  {
    company: "Self-employed",
    position: "Strength Coach",
    date: "SEP 2020 - DEC 2023",
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
  date: string;
  extra?: string[];
};

export const educationList: Education[] = [
  {
    school: "British Columbia Institute of Technology",
    degree: "Bachelor of Science in Applied Computer Science",
    major: "Network Security Applications Development",
    date: "SEP 2025 - MAY 2027",
    extra: ["Co-op Program", "Set Representative"],
  },
  {
    school: "British Columbia Institute of Technology",
    degree: "Computer Systems Technology Diploma",
    major: "Datacommunications and Internetworking",
    date: "SEP 2023 - MAY 2025",
    extra: ["Set Representative", "Graduated with Distinction"],
  },
  {
    school: "Douglas College",
    degree: "Undergraduate Studies",
    major: "Sport Science",
    date: "JAN 2019 - SEP 2023",
  },
  {
    school: "Beedie School of Business at Simon Fraser University",
    degree: "Undergraduate Studies",
    major: "Business Administration",
    date: "SEP 2015 - MAY 2018",
  },
];
