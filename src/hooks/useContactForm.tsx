"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

import {
  contactSchema,
  ContactFormValues,
} from "@lib/validations/contactSchema";
import { trackEvent } from "@/lib/analytics";

/** The three lifecycle states of a contact form submission. */
export type SubmitState = "idle" | "loading" | "success";

/**
 * Metadata for the submit button: changes icon and label based on current state.
 * Defined outside the hook so the object is not re-created on every render.
 */
export const buttonContent: Record<
  SubmitState,
  { icon: React.ReactNode; label: string }
> = {
  idle: { icon: <Send className="h-4 w-4" />, label: "Send Message" },
  loading: {
    icon: <Loader2 className="h-4 w-4 animate-spin" />,
    label: "Sending...",
  },
  success: {
    icon: <CheckCircle2 className="h-4 w-4" />,
    label: "Message Sent!",
  },
};

/**
 * Encapsulates all form state, validation, and submission logic for the
 * contact form. Separating this from the JSX keeps ContactForm.tsx focused
 * on rendering and makes the logic independently testable.
 */
export function useContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  // Auto-reset to idle 2.5 s after a successful submission so the button
  // reverts without the user needing to do anything.
  useEffect(() => {
    if (submitState !== "success") return;
    const timer = setTimeout(() => setSubmitState("idle"), 2500);
    return () => clearTimeout(timer);
  }, [submitState]);

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitState("loading");

    const promise = (async () => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result?.message || "Failed to send message");
      }

      return result;
    })();

    toast.promise(promise, {
      loading: "Sending your message...",
      success: () => {
        trackEvent("contact_form_submit", { status: "success" });
        reset();
        return "Message sent successfully! I'll reply soon.";
      },
      error: (err: Error) => {
        trackEvent("contact_form_submit", { status: "error" });
        return err.message;
      },
    });

    try {
      await promise;
      setSubmitState("success");
      reset();
    } catch {
      // Toast already handles the error display.
      setSubmitState("idle");
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    watch,
    onSubmit,
    submitState,
    isDisabled: submitState !== "idle",
    current: buttonContent[submitState],
  };
}
