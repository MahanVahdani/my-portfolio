"use client";

import { UseFormRegister } from "react-hook-form";
import { ContactFormValues } from "@/lib/validations/contactSchema";
import type { ContactField } from "@/types/portfolio";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  field: ContactField;
  register: UseFormRegister<ContactFormValues>;
  value?: string;
  error?: string;
};

export default function FormField({
  field,
  value,
  register,
  error,
}: FormFieldProps) {
  const isTextarea = field.type === "textarea";
  const characterCount = value?.length ?? 0;

  const inputClasses = cn(
    "w-full rounded-xl border bg-transparent px-4 py-3 outline-none transition-all duration-300",
    "border-surface-border focus:border-primary focus:ring-2 focus:ring-primary/40",
    "focus:shadow-[0_0_20px_rgba(20,184,166,0.15)]",
    "placeholder:text-muted-foreground",
    error && "border-red-500 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.15)]",
    isTextarea && "resize-y min-h-[140px]",
  );

  return (
    <div className="space-y-2">
      <label
        htmlFor={field.name}
        className="block text-sm font-medium text-foreground"
      >
        {field.label}
      </label>

      {isTextarea ? (
        <textarea
          id={field.name}
          rows={field.rows ?? 5}
          placeholder={field.placeholder}
          maxLength={field.maxLength}
          {...register(field.name)}
          className={inputClasses}
        />
      ) : (
        <input
          id={field.name}
          type={field.type ?? "text"}
          placeholder={field.placeholder}
          {...register(field.name)}
          className={inputClasses}
        />
      )}

      <div className="flex justify-between items-center min-h-0">
        <p className="text-sm text-red-500">{error}</p>

        {field.showCharacterCount && field.maxLength && (
          <span className="text-xs text-muted-foreground">
            {characterCount}/{field.maxLength}
          </span>
        )}
      </div>
    </div>
  );
}
