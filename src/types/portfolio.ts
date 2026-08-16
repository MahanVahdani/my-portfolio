import type { ContactFormValues } from "@/lib/validations/contactSchema";
import type { GridSpan } from "@/lib/gridStyle";
import type { Metadata } from "next";
import { z } from "zod";

const ColSpanSchema = z.union([
  z.literal(1), z.literal(2), z.literal(3), z.literal(4),
  z.literal(5), z.literal(6), z.literal(7), z.literal(8),
  z.literal(9), z.literal(10), z.literal(11), z.literal(12)
]);

const GridSpanSchema = z.object({
  default: ColSpanSchema.optional(),
  sm: ColSpanSchema.optional(),
  md: ColSpanSchema.optional(),
  lg: ColSpanSchema.optional(),
  xl: ColSpanSchema.optional(),
});

// Using z.custom to allow any valid React component for icons
const IconSchema = z.custom<React.ComponentType<React.SVGAttributes<SVGElement>>>().refine(
  (val) => typeof val === "function",
  { message: "icon must be a React component" }
);

const PublicPathSchema = z.string().startsWith("/", {
  message: "Image paths must start with '/' and reference a file in the /public directory",
});

export const SocialLinkSchema = z.object({
  href: z.string().url(),
  icon: IconSchema,
  label: z.string().min(1),
});
export type SocialLink = z.infer<typeof SocialLinkSchema>;

export const ProfileSchema = z.object({
  avatar: PublicPathSchema,
  name: z.string().min(1),
  role: z.string().min(1),
  email: z.string().email(),
  socialLinks: z.array(SocialLinkSchema),
});
export type Profile = z.infer<typeof ProfileSchema>;

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  logo: PublicPathSchema,
  image: PublicPathSchema,
  description: z.string().min(1),
  link: z.string().url(),
  gridSpan: GridSpanSchema.optional(),
});
export type Project = z.infer<typeof ProjectSchema>;

export const SkillSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  percentage: z.number().min(0).max(100),
  logo: PublicPathSchema,
});
export type Skill = z.infer<typeof SkillSchema>;

export const ExperienceSchema = z.object({
  id: z.string(),
  company: z.string().min(1),
  role: z.string().min(1),
  period: z.string().min(1),
  logo: PublicPathSchema,
  companyType: z.string().min(1),
  achievements: z.array(z.string().min(1)),
});
export type Experience = z.infer<typeof ExperienceSchema>;

export const TestimonialTypeSchema = z.object({
  name: z.string().min(1),
  image: PublicPathSchema,
  role: z.string().min(1),
  company: z.string().min(1),
  comment: z.string().min(1),
});
export type TestimonialType = z.infer<typeof TestimonialTypeSchema>;

export const ContactFieldSchema = z.object({
  name: z.enum(["name", "email", "subject", "message"]),
  label: z.string().min(1),
  type: z.enum(["text", "email", "textarea"]).default("text"),
  placeholder: z.string(),
  rows: z.number().optional(),
  maxLength: z.number().optional(),
  showCharacterCount: z.boolean().optional(),
  gridSpan: GridSpanSchema.optional(),
});
export type ContactField = z.infer<typeof ContactFieldSchema>;

const SeoSchema = z.object({
  metadataBase: z.instanceof(URL),
  title: z.string().min(1),
  description: z.string().min(1),
  keywords: z.array(z.string()).optional(),
  openGraph: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    siteName: z.string(),
    images: z.array(z.object({
      url: z.string().url(),
      width: z.number(),
      height: z.number(),
      alt: z.string(),
    })),
    locale: z.string().optional(),
    type: z.enum(["website", "article"]).optional(),
  }).optional(),
  twitter: z.object({
    card: z.enum(["summary", "summary_large_image"]),
    title: z.string(),
    description: z.string(),
    images: z.array(z.string()),
  }).optional(),
  robots: z.object({
    index: z.boolean(),
    follow: z.boolean(),
  }).optional(),
  alternates: z.object({
    canonical: z.string().url(),
  }).optional(),
});

export const PortfolioConfigSchema = z.object({
  seo: SeoSchema,
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
  contactFields: z.array(ContactFieldSchema).min(1),
}).superRefine((data, ctx) => {
  if (data.sections.projects && data.projects.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Projects array cannot be empty when the projects section is enabled",
      path: ["projects"],
    });
  }
  if (data.sections.skills && data.skills.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Skills array cannot be empty when the skills section is enabled",
      path: ["skills"],
    });
  }
  if (data.sections.experience && data.experiences.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Experiences array cannot be empty when the experience section is enabled",
      path: ["experiences"],
    });
  }
  if (data.sections.testimonials && data.testimonials.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Testimonials array cannot be empty when the testimonials section is enabled",
      path: ["testimonials"],
    });
  }
});

export type PortfolioConfig = z.infer<typeof PortfolioConfigSchema>;
