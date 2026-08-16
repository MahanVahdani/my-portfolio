"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  contactSchema,
  ContactFormValues,
} from "@lib/validations/contactSchema";
import { portfolioConfig } from "@/config/portfolio.config";

import GlassCard from "@ui/GlassCard";
import FormField from "@ui/FormField";
import Grid from "@ui/Grid";
import GridItem from "@ui/GridItem";
import Button from "@ui/Button";
import { trackEvent } from "@/lib/analytics";

type SubmitState = "idle" | "loading" | "success";

const buttonContent: Record<
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

export default function ContactForm() {
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

  // Auto-reset to idle 2.5s after success
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
      // Toast already handles the error display
      setSubmitState("idle");
    }
  };

  const isDisabled = submitState !== "idle";
  const current = buttonContent[submitState];

  return (
    <GlassCard className="p-6 rounded-2xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          {...register("website")}
        />

        <Grid>
          {portfolioConfig.contactFields.map((field) => (
            <GridItem key={field.name} gridSpan={field.gridSpan}>
              <FormField
                key={field.name}
                field={field}
                register={register}
                error={errors[field.name]?.message}
                value={watch(field.name)}
              />
            </GridItem>
          ))}
        </Grid>

        <div className="pt-8">
          <Button
            type="submit"
            variant={submitState === "success" ? "outlined" : "primary"}
            disabled={isDisabled}
            className="w-full md:w-auto relative overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={submitState}
                className="inline-flex items-center gap-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {current.icon}
                {current.label}
              </motion.span>
            </AnimatePresence>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
