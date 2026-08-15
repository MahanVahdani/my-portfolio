import type { IconType } from "react-icons";
import type { ContactFormValues } from "@/lib/validations/contactSchema";
import type { GridSpan } from "@/lib/gridStyle";

export type SocialLink = {
  href: string;
  icon: IconType;
  label: string;
};

export type Profile = {
  avatar: string;
  name: string;
  role: string;
  email: string;
  socialLinks: SocialLink[];
};

export interface Project {
  id: number;
  name: string;
  logo: string;
  image: string;
  description: string;
  link: string;
  gridSpan?: GridSpan;
}

export type Skill = {
  id: string;
  name: string;
  percentage: number;
  logo: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  logo: string;
  companyType: string;
  achievements: string[];
};

export interface TestimonialType {
  name: string;
  image: string;
  role: string;
  company: string;
  comment: string;
}

export type ContactField = {
  name: keyof ContactFormValues;
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder: string;
  rows?: number;
  maxLength?: number;
  showCharacterCount?: boolean;
  gridSpan?: GridSpan;
};

export interface PortfolioConfig {
  sections: {
    about: boolean;
    experience: boolean;
    projects: boolean;
    skills: boolean;
    testimonials: boolean;
    contact: boolean;
  };
  profile: Profile;
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  testimonials: TestimonialType[];
  contactFields: ContactField[];
}
