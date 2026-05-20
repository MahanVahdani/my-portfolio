"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

import {
  contactSchema,
  ContactFormValues,
} from "@lib/validations/contactSchema";
import { contactFormFields } from "@data/contact";

import GlassCard from "@ui/GlassCard";
import FormField from "@ui/FormField";
import Grid from "@ui/Grid";
import Button from "@ui/Button";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormValues) => {
    const promise = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(async (res) => {
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    });

    toast.promise(promise, {
      loading: "Sending your message...",
      success: "Message sent successfully! I'll reply soon.",
      error: "Failed to send message. Please try again.",
    });

    await promise;
    reset();
  };

  return (
    <GlassCard className="p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          {...register("website")}
        />

        <Grid>
          {contactFormFields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              register={register}
              error={errors[field.name]?.message}
              value={watch(field.name)}
            />
          ))}
        </Grid>

        <div className="pt-8">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full md:w-auto"
          >
            <Send className="h-4 w-4" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
