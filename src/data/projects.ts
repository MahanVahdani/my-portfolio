import { GridSpan } from "@lib/gridStyle";

export interface Project {
  id: number;
  name: string;
  logo: string;
  image: string;
  description: string;
  link: string;
  gridSpan?: GridSpan;
}

export const portfolioProjects: Project[] = [
  {
    id: 1,
    name: "Aqaye Pardakht",
    logo: "/images/companies/aqa.jpeg",
    image: "/images/projects/AqaPanel.jpeg",
    description:
      "Built a full-stack dashboard using React, Next.js, and Prisma.",
    link: "https://status.aqayepardakht.ir",
    gridSpan: { md: 12, lg: 12, xl: 12 },
  },
  {
    id: 2,
    name: "Aqaye Pardakht",
    logo: "/images/companies/aqa.jpeg",
    image: "/images/projects/AqaPanel.jpeg",
    description:
      "Built a full-stack dashboard using React, Next.js, and Prisma.",
    link: "https://status.aqayepardakht.ir",
    gridSpan: { md: 6, lg: 12, xl: 6 },
  },
  {
    id: 3,
    name: "Aqaye Pardakht",
    logo: "/images/companies/aqa.jpeg",
    image: "/images/projects/AqaPanel.jpeg",
    description:
      "Built a full-stack dashboard using React, Next.js, and Prisma.",
    link: "https://status.aqayepardakht.ir",
    gridSpan: { md: 6, lg: 12, xl: 6 },
  },
  {
    id: 4,
    name: "Aqaye Pardakht",
    logo: "/images/companies/aqa.jpeg",
    image: "/images/projects/AqaPanel.jpeg",
    description:
      "Built a full-stack dashboard using React, Next.js, and Prisma.",
    link: "https://status.aqayepardakht.ir",
    gridSpan: { md: 6, lg: 12, xl: 6 },
  },
  {
    id: 5,
    name: "Aqaye Pardakht",
    logo: "/images/companies/aqa.jpeg",
    image: "/images/projects/AqaPanel.jpeg",
    description:
      "Built a full-stack dashboard using React, Next.js, and Prisma.",
    link: "https://status.aqayepardakht.ir",
    gridSpan: { md: 6, lg: 12, xl: 6 },
  },
];
