/**
 * ContactForm render tests.
 *
 * These are integration-level smoke tests that verify the form renders
 * correctly and that all key interactive elements are present and accessible.
 * They deliberately avoid testing submit logic (that lives in useContactForm.ts)
 * keeping each layer independently testable.
 */
import React from "react";
import { render, screen } from "@testing-library/react";

// ─── Module Mocks ────────────────────────────────────────────────────────────

// framer-motion: replace m.span / AnimatePresence with inert passthrough
// components so the DOM renders synchronously without animation delays.
jest.mock("framer-motion", () => ({
  m: {
    span: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
      <span {...props}>{children}</span>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// useContactForm: return a stable mock so the test is not coupled to the
// real form state machine or the fetch API.
jest.mock("@/hooks/useContactForm", () => ({
  useContactForm: () => ({
    register: () => ({}),
    handleSubmit: (fn: (data: unknown) => void) => (e: React.FormEvent) => {
      e.preventDefault();
      fn({});
    },
    errors: {},
    watch: () => "",
    onSubmit: jest.fn(),
    submitState: "idle" as const,
    isDisabled: false,
    current: { icon: null, label: "Send Message" },
  }),
}));

// portfolioConfig: minimal stub so the component renders without the real config.
jest.mock("@/config/portfolio.config", () => ({
  portfolioConfig: {
    contactFields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "John Doe",
        gridSpan: undefined,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "john@example.com",
        gridSpan: undefined,
      },
    ],
  },
}));

// UI primitives: render children directly to keep tests focused on ContactForm.
jest.mock("@ui/GlassCard", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));
jest.mock("@ui/Grid", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));
jest.mock("@ui/GridItem", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));
jest.mock("@ui/FormField", () => ({
  __esModule: true,
  default: ({ field }: { field: { label: string } }) => (
    <label>{field.label}</label>
  ),
}));
jest.mock("@ui/Button", () => ({
  __esModule: true,
  default: ({
    children,
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string }) => (
    <button {...props}>{children}</button>
  ),
}));

// ─── Tests ───────────────────────────────────────────────────────────────────

import ContactForm from "@/components/forms/ContactForm";

describe("ContactForm", () => {
  it("renders without crashing", () => {
    render(<ContactForm />);
  });

  it("renders a form element", () => {
    const { container } = render(<ContactForm />);
    // <form> without aria-label is not accessible via getByRole('form') per ARIA spec.
    // We verify it exists structurally instead.
    expect(container.querySelector("form")).toBeInTheDocument();
  });

  it("renders field labels for all configured contact fields", () => {
    render(<ContactForm />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders the submit button with idle label", () => {
    render(<ContactForm />);
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("submit button is enabled when form is idle", () => {
    render(<ContactForm />);
    const button = screen.getByRole("button", { name: /send message/i });
    expect(button).not.toBeDisabled();
  });
});
