import React from "react";

import { cn } from "@/lib/utils";

type SectionBlockProps = {
  id?: string;
  mutedTitle: string;
  accentTitle: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

const SectionBlock = ({
  id,
  mutedTitle,
  accentTitle,
  description,
  className,
  children,
}: SectionBlockProps) => {
  return (
    <section id={id} className={cn("scroll-mt-24 space-y-8", className)}>
      {/* Header */}
      <div className="space-y-3">
        <h2 className="text-3xl tracking-tight font-semibold">
          <span className="text-heading-muted">{mutedTitle} </span>

          <span className="text-primary font-bold">{accentTitle}</span>
        </h2>

        {description && (
          <p className="max-w-2xl text-sm leading-relaxed text-foreground/80">
            {description}
          </p>
        )}
      </div>

      {/* Content */}
      <div>{children}</div>
    </section>
  );
};

export default SectionBlock;
