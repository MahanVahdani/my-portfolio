import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),

  email: z.string().email("Please enter a valid email address"),

  subject: z
    .string()
    .min(3, "Subject is too short")
    .max(100, "Subject must be less than 100 characters"),

  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(500, "Message must be less than 500 characters"),

  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
