import { ContactFormValues } from "@/lib/validations/contactSchema";

type GridSpan = {
  default?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

type BaseField = {
  name: keyof ContactFormValues;
  label: string;
  placeholder: string;
  gridSpan?: GridSpan;
};

type InputField = BaseField & {
  type: "text" | "email";
  as?: "input";
};

type TextareaField = BaseField & {
  as: "textarea";
  rows: number;
  maxLength: number;
};

type ContactFormField = InputField | TextareaField;

export const contactFormFields: ContactFormField[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
    gridSpan: { default: 12, md: 6 },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    gridSpan: { default: 12, md: 6 },
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Subject",
    gridSpan: { default: 12 },
  },
  {
    name: "message",
    label: "Message",
    as: "textarea",
    rows: 6,
    maxLength: 500,
    placeholder: "Tell me about your project...",
    gridSpan: { default: 12 },
  },
];
