"use client";

import { UseFormRegister } from "react-hook-form";

import { ContactFormValues } from "@/lib/validations/contactSchema";
import { ContactField } from "@/data/contact";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  field: ContactField;
  register: UseFormRegister<ContactFormValues>;
  error?: string;
  value?: string;
};

const getGridClasses = (gridSpan?: ContactField["gridSpan"]) =>
  cn(
    gridSpan?.default ? `col-span-${gridSpan.default}` : "col-span-12",
    gridSpan?.sm && `sm:col-span-${gridSpan.sm}`,
    gridSpan?.md && `md:col-span-${gridSpan.md}`,
    gridSpan?.lg && `lg:col-span-${gridSpan.lg}`,
    gridSpan?.xl && `xl:col-span-${gridSpan.xl}`,
  );

export default function FormField({
  field,
  register,
  value,
  error,
}: FormFieldProps) {
  const isTextarea = field.type === "textarea";

  const characterCount = value?.length ?? 0;
  const limit = field.maxLength ?? 0;
  const isOverLimit = limit > 0 && characterCount > limit;
  const isWarning = limit > 0 && characterCount > limit;

  const inputClasses = cn(
    "w-full rounded-xl border bg-transparent px-4 py-3 outline-none transition",
    "border-surface-border focus:border-primary",
    "placeholder:text-muted-foreground",
    error && "border-red-500",
    isTextarea && "resize-none",
    isOverLimit && "border-red-500",
  );

  return (
    <div className={cn("space-y-2", getGridClasses(field.gridSpan))}>
      <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium">
        {field.label}
      </label>

      {isTextarea ? (
        <div className="space-y-2">
          <textarea
            id={field.name}
            rows={field.rows ?? 5}
            placeholder={field.placeholder}
            maxLength={field.maxLength ? field.maxLength + 1 : undefined}
            {...register(field.name)}
            className={inputClasses}
          />
        </div>
      ) : (
        <input
          id={field.name}
          type={field.type ?? "text"}
          placeholder={field.placeholder}
          {...register(field.name)}
          className={inputClasses}
        />
      )}

      <div className="flex justify-between items-center">
        <p className="text-sm text-red-500">{error}</p>

        {field.showCharacterCount && field.maxLength && (
          <div className="flex justify-end">
            <span
              className={cn(
                "text-xs text-muted-foreground transition-colors",
                isWarning && "text-red-500",
              )}
            >
              {characterCount}/{field.maxLength}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
