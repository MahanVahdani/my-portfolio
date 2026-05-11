import React from "react";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type SectionBlockProps = {
  id?: string;
  mutedTitle: string;
  accentTitle: string;
  description?: string;
  className?: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
};

const SectionBlock = ({
  id,
  mutedTitle,
  accentTitle,
  description,
  className,
  icon: Icon,
  children,
}: SectionBlockProps) => {
  return (
    <section id={id} className={cn("scroll-mt-24 py-10 space-y-8", className)}>
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          {Icon && <Icon className="h-6 w-6 shrink-0 mt-1.5 text-primary" />}

          <h2 className="text-3xl tracking-tight font-semibold">
            <span className="text-heading-muted">{mutedTitle} </span>

            <span className="text-primary font-bold">{accentTitle}</span>
          </h2>
        </div>

        {description && (
          <p className="text-sm leading-relaxed text-foreground/80">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
};

export default SectionBlock;
