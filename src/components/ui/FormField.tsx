// "use client";

// import { useMemo } from "react";
// import { UseFormRegister } from "react-hook-form";
// import { ContactFormValues } from "@/lib/validations/contactSchema";
// import { contactFormFields } from "@/data/contact";
// import { cn } from "@/lib/utils";

// type ContactField = (typeof contactFormFields)[number];

// type FormFieldProps = {
//   field: ContactField;
//   register: UseFormRegister<ContactFormValues>;
//   error?: string;
// };

// const getGridClasses = (gridSpan: ContactField["gridSpan"]) => {
//   return cn(
//     gridSpan?.default ? `col-span-${gridSpan.default}` : "col-span-12",
//     gridSpan?.sm && `sm:col-span-${gridSpan.sm}`,
//     gridSpan?.md && `md:col-span-${gridSpan.md}`,
//     gridSpan?.lg && `lg:col-span-${gridSpan.lg}`,
//     gridSpan?.xl && `xl:col-span-${gridSpan.xl}`,
//   );
// };

// export default function FormField({ field, register, error }: FormFieldProps) {
//   const isTextarea = field.as === "textarea";

//   const gridClasses = useMemo(
//     () => getGridClasses(field.gridSpan),
//     [field.gridSpan],
//   );

//   return (
//     <div className={cn("group relative space-y-1", gridClasses)}>
//       <div className="relative">
//         {/* 1. THE LABEL: Purely text, no background color needed */}
//         <label
//           htmlFor={field.name}
//           className={cn(
//             "absolute left-4 transition-all duration-200 pointer-events-none z-10 text-muted-foreground",
//             "top-1/2 -translate-y-1/2 text-base", // Initial centered state
//             "group-focus-within:-top-0 group-focus-within:text-xs group-focus-within:text-primary group-focus-within:translate-y-[-50%]", // Floating focus
//             "peer-not-placeholder-shown:-top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:translate-y-[-50%]", // Floating filled
//             isTextarea &&
//               "top-7 group-focus-within:top-0 peer-not-placeholder-shown:top-0",
//           )}
//         >
//           {field.label}
//         </label>

//         {/* 2. THE INPUT: Border is removed here; the Fieldset below provides it */}
//         {isTextarea ? (
//           <textarea
//             id={field.name}
//             placeholder={field.placeholder}
//             rows={field.rows}
//             {...register(field.name)}
//             className={cn(
//               "peer w-full bg-transparent px-4 pt-4 pb-3 outline-none transition-all placeholder:opacity-0 focus:placeholder:opacity-100 min-h-[120px] resize-none",
//               error ? "text-red-500" : "text-foreground",
//             )}
//           />
//         ) : (
//           <input
//             id={field.name}
//             type={field.type}
//             placeholder={field.placeholder}
//             {...register(field.name)}
//             className={cn(
//               "peer w-full h-14 bg-transparent px-4 outline-none transition-all placeholder:opacity-0 focus:placeholder:opacity-100",
//               error ? "text-red-500" : "text-foreground",
//             )}
//           />
//         )}

//         {/* 3. THE NOTCH BORDER (Fieldset & Legend) */}
//         <fieldset
//           className={cn(
//             "pointer-events-none absolute inset-0 -top-[6px] rounded-xl border transition-all duration-200",
//             "group-focus-within:border-primary",
//             error ? "border-red-500" : "border-surface-border",
//           )}
//         >
//           <legend
//             className={cn(
//               "ml-3 text-xs font-medium invisible leading-none transition-all duration-200",
//               "max-w-[0.01px] group-focus-within:max-w-full",
//               "peer-not-placeholder-shown:max-w-full", // Keeps notch open when input has text
//             )}
//           >
//             {/* The hidden span mimics the label width to cut the border accurately */}
//             <span className="opacity-0 pl-1.5">{field.label}</span>
//           </legend>
//         </fieldset>
//       </div>

//       {error && (
//         <p className="text-xs font-medium text-red-500 ml-1 leading-none">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// }

"use client";

import { useMemo } from "react";
import { UseFormRegister } from "react-hook-form";
import { ContactFormValues } from "@/lib/validations/contactSchema";
import { contactFormFields } from "@/data/contact";
import { cn } from "@/lib/utils";

type ContactField = (typeof contactFormFields)[number];

type FormFieldProps = {
  field: ContactField;
  register: UseFormRegister<ContactFormValues>;
  error?: string;
};

const getGridClasses = (gridSpan: ContactField["gridSpan"]) => {
  return cn(
    gridSpan?.default ? `col-span-${gridSpan.default}` : "col-span-12",
    gridSpan?.sm && `sm:col-span-${gridSpan.sm}`,
    gridSpan?.md && `md:col-span-${gridSpan.md}`,
    gridSpan?.lg && `lg:col-span-${gridSpan.lg}`,
    gridSpan?.xl && `xl:col-span-${gridSpan.xl}`,
  );
};

export default function FormField({ field, register, error }: FormFieldProps) {
  const isTextarea = field.as === "textarea";

  const gridClasses = useMemo(
    () => getGridClasses(field.gridSpan),
    [field.gridSpan],
  );

  return (
    <div className={cn("group relative space-y-1", gridClasses)}>
      <div className="relative">
        {isTextarea ? (
          <textarea
            id={field.name}
            placeholder=" "
            rows={field.rows}
            {...register(field.name)}
            className={cn(
              "peer w-full min-h-[120px] resize-none bg-transparent px-4 pt-6 pb-3 outline-none transition-all",
              error ? "text-red-500" : "text-foreground",
            )}
          />
        ) : (
          <input
            id={field.name}
            type={field.type}
            placeholder=" "
            {...register(field.name)}
            className={cn(
              "peer h-14 w-full bg-transparent px-4 outline-none transition-all",
              error ? "text-red-500" : "text-foreground",
            )}
          />
        )}

        <label
          htmlFor={field.name}
          className={cn(
            "pointer-events-none absolute left-4 z-10 text-muted-foreground transition-all duration-200",

            // base position
            isTextarea
              ? "top-7 text-base"
              : "top-1/2 -translate-y-1/2 text-base",

            // when focused OR has content -> float up
            "peer-focus:top-0 peer-focus:translate-y-[-50%] peer-focus:text-xs peer-focus:text-primary",
            "peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:translate-y-[-50%] peer-not-placeholder-shown:text-xs",

            // when empty and not focused -> return to place
            "peer-placeholder-shown:translate-y-0",

            // textarea specific initial position
            isTextarea && "peer-placeholder-shown:top-7",
          )}
        >
          {field.label}
        </label>

        <fieldset
          className={cn(
            "pointer-events-none absolute inset-0 -top-[6px] rounded-xl border transition-all duration-200",
            "group-focus-within:border-primary",
            error ? "border-red-500" : "border-surface-border",
          )}
        >
          <legend
            className={cn(
              "ml-3 text-xs font-medium invisible leading-none transition-all duration-200",
              "max-w-[0.01px] group-focus-within:max-w-full",
              "peer-not-placeholder-shown:max-w-full",
              "peer-focus:max-w-full",
            )}
          >
            <span className="opacity-0 pl-1.5">{field.label}</span>
          </legend>
        </fieldset>
      </div>

      {error && (
        <p className="ml-1 text-xs font-medium leading-none text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
