import { ContactFormValues } from "@/lib/validations/contactSchema";

type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridSpan = {
  default?: ColSpan;
  sm?: ColSpan;
  md?: ColSpan;
  lg?: ColSpan;
  xl?: ColSpan;
};

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

export const contactFormFields: ContactField[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "John Doe",
    gridSpan: { md: 6 },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "john@example.com",
    gridSpan: { md: 6 },
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
];
