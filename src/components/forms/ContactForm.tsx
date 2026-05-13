"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

import {
  contactSchema,
  ContactFormValues,
} from "@/lib/validations/contactSchema";
import { contactFormFields } from "@/data/contact";

import Button from "@ui/Button";
import { cn } from "@/lib/utils";
import FormField from "@/components/ui/FormField";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    const promise = new Promise(async (resolve, reject) => {
      try {
        // Replace with your actual API endpoint (e.g., /api/contact)
        await new Promise((res) => setTimeout(res, 2000));

        console.log("Submission successful:", data);
        reset();
        resolve(data);
      } catch (err) {
        reject(err);
      } finally {
        setIsSubmitting(false);
      }
    });

    toast.promise(promise, {
      loading: "Sending your message...",
      success: "Message sent! I'll get back to you soon.",
      error: "Could not send message. Please try again.",
    });
  };

  return (
    <section id="contact" className="w-full max-w-4xl mx-auto py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-x-4 gap-y-6"
      >
        {contactFormFields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            register={register}
            error={errors[field.name]?.message}
          />
        ))}

        <div className="col-span-12 flex justify-start mt-2">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full md:w-auto min-w-[180px] h-12 shadow-lg shadow-primary/20"
          >
            <Send
              className={cn(
                "h-4 w-4 transition-transform",
                isSubmitting ? "animate-pulse" : "group-hover:translate-x-1",
              )}
            />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </Button>
        </div>
      </form>
    </section>
  );
}
