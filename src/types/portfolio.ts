import type { ContactFormValues } from "@/lib/validations/contactSchema";
import type { GridSpan } from "@/lib/gridStyle";
import type { Metadata } from "next";
import { z } from "zod";

const GridSpanSchema = z.custom<GridSpan>();

// Using z.custom to allow any valid React component for icons
const IconSchema = z.custom<React.ComponentType<React.SVGAttributes<SVGElement>>>();

export const SocialLinkSchema = z.object({
  href: z.string().url(),
  icon: IconSchema,
  label: z.string(),
});
export type SocialLink = z.infer<typeof SocialLinkSchema>;

export const ProfileSchema = z.object({
  avatar: z.string(),
  name: z.string(),
  role: z.string(),
  email: z.string().email(),
  socialLinks: z.array(SocialLinkSchema),
});
export type Profile = z.infer<typeof ProfileSchema>;

export const ProjectSchema = z.object({
  id: z.number(),
  name: z.string(),
  logo: z.string(),
  image: z.string(),
  description: z.string(),
  link: z.string().url(),
  gridSpan: GridSpanSchema.optional(),
});
export type Project = z.infer<typeof ProjectSchema>;

export const SkillSchema = z.object({
  id: z.string(),
  name: z.string(),
  percentage: z.number().min(0).max(100),
  logo: z.string(),
});
export type Skill = z.infer<typeof SkillSchema>;

export const ExperienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  role: z.string(),
  period: z.string(),
  logo: z.string(),
  companyType: z.string(),
  achievements: z.array(z.string()),
});
export type Experience = z.infer<typeof ExperienceSchema>;

export const TestimonialTypeSchema = z.object({
  name: z.string(),
  image: z.string(),
  role: z.string(),
  company: z.string(),
  comment: z.string(),
});
export type TestimonialType = z.infer<typeof TestimonialTypeSchema>;

export const ContactFieldSchema = z.object({
  name: z.custom<keyof ContactFormValues>(),
  label: z.string(),
  type: z.enum(["text", "email", "textarea"]).default("text"),
  placeholder: z.string(),
  rows: z.number().optional(),
  maxLength: z.number().optional(),
  showCharacterCount: z.boolean().optional(),
  gridSpan: GridSpanSchema.optional(),
});
export type ContactField = z.infer<typeof ContactFieldSchema>;

export const PortfolioConfigSchema = z.object({
  seo: z.custom<Metadata>(),
  sections: z.object({
    about: z.boolean(),
    experience: z.boolean(),
    projects: z.boolean(),
    skills: z.boolean(),
    testimonials: z.boolean(),
    contact: z.boolean(),
  }),
  profile: ProfileSchema,
  projects: z.array(ProjectSchema),
  skills: z.array(SkillSchema),
  experiences: z.array(ExperienceSchema),
  testimonials: z.array(TestimonialTypeSchema),
  contactFields: z.array(ContactFieldSchema),
});

export type PortfolioConfig = z.infer<typeof PortfolioConfigSchema>;
