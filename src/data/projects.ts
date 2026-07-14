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
    image: "/images/projects/AqayePardakht_Status.png",
    description:
      "Real-time uptime monitoring dashboard tracking payment APIs, CDN, authentication, and critical services with interactive charts to enhance transparency and user trust.",
    link: "https://status.aqayepardakht.ir",
    gridSpan: { md: 6, lg: 12, xl: 6 },
  },
  {
    id: 2,
    name: "Aqaye Pardakht",
    logo: "/images/companies/aqa.jpeg",
    image: "/images/projects/AqayePardakht_Panel.png",
    description:
      "High-performance fintech tools including a modern user panel, reusable ticketing chat, interactive dashboards, and automated CI/CD pipelines.",
    link: "https://panel.aqayepardakht.ir",
    gridSpan: { md: 6, lg: 12, xl: 6 },
  },
  {
    id: 3,
    name: "Rivas System",
    logo: "/images/companies/rivas.jpeg",
    image: "/images/projects/Rivas_Panel.png",
    description:
      "Complete redesign and rebuild of the company website and user panel. Delivered modern, responsive websites for multiple clients with improved UX and performance.",
    link: "https://rivasit.com",
    gridSpan: { md: 6, lg: 12, xl: 6 },
  },
  {
    id: 4,
    name: "Dariche-zehn Web Agency",
    logo: "/images/companies/dariche.jpeg",
    image: "/images/projects/Way2Connect.png",
    description:
      "Multi-tenant communication platform with real-time chat, peer-to-peer video calls, screen sharing, session management, and real-time analytics dashboard.",
    link: "https://way2connect.co",
    gridSpan: { md: 6, lg: 12, xl: 6 },
  },
];
