import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa6";
import type { PortfolioConfig } from "@/types/portfolio";

/**
 * Master Portfolio Configuration
 * 
 * This file serves as the central configuration for the entire portfolio.
 * As a junior developer customizing this template, you can modify the text,
 * update the image paths, and toggle sections on/off from here.
 */
export const portfolioConfig: PortfolioConfig = {
  seo: {
    metadataBase: new URL("https://yourwebsite.com"),
    title: "Mahan Vahdani | Frontend Developer",
    description: "Frontend Developer specializing in React and Next.js.",
    keywords: ["Frontend Developer", "React", "Next.js", "Mahan Vahdani", "Portfolio"],
    openGraph: {
      title: "Mahan Vahdani | Frontend Developer",
      description: "Frontend Developer specializing in React and Next.js.",
      url: "https://yourwebsite.com",
      siteName: "Mahan Vahdani Portfolio",
      images: [
        {
          url: "/images/profile.png",
          width: 800,
          height: 600,
          alt: "Mahan Vahdani",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mahan Vahdani | Frontend Developer",
      description: "Frontend Developer specializing in React and Next.js.",
      images: ["/images/profile.png"],
    },
  },
  /**
   * Section Visibility Toggles
   * Set a section to `false` to hide it completely from the portfolio.
   */
  sections: {
    about: true,
    experience: true,
    projects: true,
    skills: true,
    testimonials: true,
    contact: true,
  },

  /**
   * Profile Information
   * Update your name, role, email, and social links here.
   * `avatar` should point to an image in your public directory (e.g., `/images/your-photo.jpg`).
   */
  profile: {
    avatar: "/images/profile.png",
    name: "Mahan Vahdani",
    role: "Frontend Developer",
    email: "your.email@example.com",
    socialLinks: [
      {
        href: "https://github.com/MahanVahdani",
        icon: FaGithub,
        label: "GitHub",
      },
      {
        href: "https://www.linkedin.com/in/mahanvahdani",
        icon: FaLinkedin,
        label: "LinkedIn",
      },
      {
        href: "mailto:your.email@example.com",
        icon: FaEnvelope,
        label: "Email",
      },
      {
        href: "https://instagram.com/mahanvahdani",
        icon: FaInstagram,
        label: "Instagram",
      },
    ],
  },

  /**
   * Projects Section
   * Add or remove your projects. You can specify a gridSpan to control
   * how much space a project takes on different screen sizes.
   */
  projects: [
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
  ],

  /**
   * Skills Section
   * List your technical skills along with a proficiency percentage and a logo icon.
   */
  skills: [
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
  ],

  /**
   * Work Experience
   * Document your career journey, roles, and achievements.
   */
  experiences: [
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
  ],

  /**
   * Testimonials
   * Add recommendations from colleagues or clients.
   */
  testimonials: [
    {
      name: "Nima Poorali",
      image: "/images/testimonials/Poorali.jpeg",
      role: "Senior Frontend Developer",
      company: "mvneco GmbH",
      comment:
        "I had the pleasure of working with Mahan at Dariche-zehn Web Agency. He stood out with his professionalism, sharp problem-solving skills, and incredible attention to detail. He has a real talent for turning complex ideas into clean, practical frontend solutions.\n\nMahan is a genuinely supportive and reliable teammate who communicates clearly and is always ready to help others. His positive attitude and calm approach make working together smooth and enjoyable.\n\nI highly recommend him as a skilled and dependable frontend developer.",
    },
    {
      name: "Tahereh Hassanzadeh, Ph.D.",
      image: "/images/testimonials/Hassanzadeh.jpeg",
      role: "Senior Research Associate",
      company: "UNSW",
      comment:
        "Mahan was one of the strongest students in my classes at Islamic Azad University. He demonstrated excellent programming skills, strong problem-solving abilities, and real creativity in his software development projects.\n\nHe was always supportive of his classmates and willing to help others understand difficult concepts. His responsibility, teamwork, and positive attitude made him stand out from the rest.\n\nI’m confident in his technical abilities and dedication, and I highly recommend him.",
    },
    {
      name: "Soheil Farzaneh",
      image: "/images/testimonials/Farzaneh.jpeg",
      role: "Senior Backend Developer",
      company: "AqayePardakht",
      comment:
        "I had the chance to work with Mahan and can confidently say he’s a very strong React.js developer. He has a great eye for UI/UX and always builds clean, reusable code with smart architecture.\n\nBeyond his coding skills, Mahan excels at teamwork and project management. He’s highly disciplined and responsible — someone you can always count on to deliver quality work on time.\n\nI highly recommend him to any team looking for a reliable frontend developer.",
    },
    {
      name: "Sahar Mokarrami",
      image: "/images/testimonials/Mokarami.jpeg",
      role: "Backend Developer",
      company: "Bonyadiha",
      comment:
        "Mahan is a highly skilled frontend developer. He writes clean, well-structured code and keeps working on challenges until he finds the best solution.\n\nHe’s a great team player who actively helps others, shares his knowledge, and offers guidance whenever needed. His positive energy and reliability make the workplace much more enjoyable.\n\nHe’s truly committed to delivering high-quality work. I highly recommend him to any team looking for a talented and dependable developer.",
    },
    {
      name: "Masoomeh Mokhtari",
      image: "/images/testimonials/Mokhtari.png",
      role: "Software Engineer",
      company: "Freelancer",
      comment:
        "Mahan is one of the best frontend engineers I’ve ever worked with. He’s patient, collaborative, and extremely reliable — always making sure the team keeps moving forward while delivering polished, cutting-edge products.\n\nHis adaptability and strong problem-solving skills help prevent issues before they happen. As a mentor, he’s very generous with his knowledge and focuses on building clean, efficient, and maintainable solutions.\n\nI strongly recommend him as an experienced and outstanding engineer.",
    },
    {
      name: "Arian Nargesi",
      image: "/images/testimonials/Nargesi.jpeg",
      role: "Frontend Engineer",
      company: "Seko Coworking",
      comment:
        "I had the pleasure of meeting Mahan through the Sakoo coworking community, and I’ve been consistently impressed by his professionalism, dedication, and drive.\n\nHe’s a highly motivated person who creates opportunities for others to learn and grow. He organized several AI-focused gatherings, bringing talented people together to collaborate and build exciting projects.\n\nI owe a good part of my knowledge in AI and MCP servers to him. Beyond his technical skills, he stands out for his responsibility, curiosity, and commitment to continuous improvement. I confidently recommend him to any team.",
    },
  ],

  /**
   * Contact Form Fields
   * Customize the fields that appear in your contact form.
   */
  contactFields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "John Doe",
      gridSpan: { md: 6, lg: 12, xl: 6 },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "john@example.com",
      gridSpan: { md: 6, lg: 12, xl: 6 },
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      placeholder: "Let's build something great",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      rows: 6,
      maxLength: 500,
      showCharacterCount: true,
      placeholder: "Tell me about your project, goals, or idea...",
    },
  ],
};
