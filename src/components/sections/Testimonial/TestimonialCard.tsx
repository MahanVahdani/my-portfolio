import Image from "next/image";
import GlassCard from "@components/ui/GlassCard";
import type { TestimonialType } from "@/types/portfolio";

type TestimonialCardProps = {
  testimonial: TestimonialType;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { name, image, role, company, comment } = testimonial;

  return (
    <GlassCard className="p-6 rounded-2xl flex flex-col gap-4 border border-foreground/5 shadow-sm h-full">
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-foreground/10">
          <Image
            src={image}
            alt=""
            fill
            sizes="48px"
            className="object-cover"
            priority={false}
          />
        </div>

        <div className="flex flex-col min-w-0">
          <h3 className="font-bold text-primary text-base tracking-tight truncate">
            {name}
          </h3>

          <p className="text-xs sm:text-sm text-heading-muted truncate">
            {role} <span className="text-foreground/60 font-light">at</span>{" "}
            <span className="font-medium text-foreground/80">{company}</span>
          </p>
        </div>
      </div>

      <blockquote className="text-sm leading-relaxed text-foreground/80 whitespace-pre-line">
        <p>{comment}</p>
      </blockquote>
    </GlassCard>
  );
};

export default TestimonialCard;
