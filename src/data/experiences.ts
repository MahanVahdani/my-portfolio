export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  logo: string;
  companyType: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    id: "aqaye-pardakht",
    company: "Aqaye Pardakht",
    role: "Senior Frontend Developer",
    period: "Apr 2022 — Jan 2026",
    logo: "/images/companies/aqa.jpeg",
    companyType: "Fintech company providing online payment solutions",
    achievements: [
      "Led architecture of configurable form-builder with React & JSON schemas, reducing form creation time by 70%.",
      "Built scalable reusable chat package used across 5+ client products.",
      "Improved admin panel Lighthouse score from 45% to 95% through optimization and code splitting.",
      "Implemented CI/CD pipelines and mentored 4 junior developers, cutting deployment time by 50%.",
    ],
  },
  {
    id: "dariche-zehn",
    company: "Dariche-zehn Web Agency",
    role: "Senior Frontend Developer",
    period: "Jan 2022 — Dec 2025",
    logo: "/images/companies/dariche.jpeg",
    companyType: "Digital agency specializing in FinTech and E-commerce",
    achievements: [
      "Led frontend architecture for high-traffic platforms using React & Next.js with Micro-Frontend patterns.",
      "Increased Lighthouse scores by 60%+ through performance optimization and code splitting.",
      "Built reusable type-safe component library that reduced technical debt across projects.",
      "Mentored juniors and collaborated with cross-functional teams on complex FinTech solutions.",
    ],
  },
  {
    id: "rivas-system",
    company: "Rivas System",
    role: "Frontend Developer",
    period: "Feb 2020 — Jan 2022",
    logo: "/images/companies/rivas.jpeg",
    companyType: "Software company building reusable e-commerce tools",
    achievements: [
      "Developed reusable shop-builder system used in 20+ projects.",
      "Built responsive interfaces for 15+ client projects, improving mobile experience.",
      "Created 60+ interactive HTML/CSS templates for faster project delivery.",
    ],
  },
  {
    id: "axell-accelerator",
    company: "Axell Accelerator",
    role: "Web Developer",
    period: "Nov 2018 — Jan 2020",
    logo: "/images/companies/axell.jpg",
    companyType: "Startup accelerator focused on digital products",
    achievements: [
      "Launched WordPress marketing site that increased game downloads by 30%.",
      "Designed multiple responsive HTML/CSS templates for various projects.",
      "Collaborated with stakeholders to deliver clean and user-friendly web solutions.",
    ],
  },
];
