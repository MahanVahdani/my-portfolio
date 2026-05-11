export type Skill = {
  id: string;
  name: string;
  percentage: number;
  logo: string;
};

export const skills: Skill[] = [
  {
    id: "nextjs",
    name: "Next.js",
    percentage: 95,
    logo: "/images/skills/NextJs.svg",
  },
  {
    id: "react",
    name: "React.js",
    percentage: 95,
    logo: "/images/skills/React.svg",
  },
  {
    id: "typescript",
    name: "TypeScript",
    percentage: 90,
    logo: "/images/skills/TypeScript.svg",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    percentage: 90,
    logo: "/images/skills/TailwindCSS.svg",
  },
  {
    id: "redux",
    name: "Redux Toolkit",
    percentage: 85,
    logo: "/images/skills/Redux.svg",
  },
  {
    id: "git",
    name: "Git",
    percentage: 90,
    logo: "/images/skills/GitHub.svg",
  },
  {
    id: "docker",
    name: "Docker",
    percentage: 80,
    logo: "/images/skills/Docker.svg",
  },
  {
    id: "jest",
    name: "Jest",
    percentage: 75,
    logo: "/images/skills/Jest.svg",
  },
];
