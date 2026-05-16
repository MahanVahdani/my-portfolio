"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

import {
  contactSchema,
  ContactFormValues,
} from "@/lib/validations/contactSchema";

import { contactFormFields } from "@/data/contact";

import FormField from "@/components/ui/FormField";
import GlassCard from "@ui/GlassCard";
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
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const formValues = watch();

  const onSubmit = async (data: ContactFormValues) => {
    const promise = fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      return response.json();
    });

    toast.promise(promise, {
      loading: "Sending your message...",
      success: () => {
        reset();
        return "Message sent! I'll get back to you soon.";
      },
      error: "Could not send message. Please try again.",
    });

    await promise;
  };

  return (
    <section id="contact" className="mx-auto w-full">
      <GlassCard className="p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-6"
        >
          {contactFormFields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              register={register}
              value={formValues[field.name] as string}
              error={errors[field.name]?.message}
            />
          ))}

          <div className="col-span-12">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-full md:w-auto"
            >
              <Send className="h-4 w-4" />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </Button>
          </div>
        </form>
      </GlassCard>
    </section>
  );
}
