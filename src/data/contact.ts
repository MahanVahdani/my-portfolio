import { ContactFormValues } from "@/lib/validations/contactSchema";
import { GridSpan } from "@lib/gridStyle";

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
];
