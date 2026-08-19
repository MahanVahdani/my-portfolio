"use client";

import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import { m, useReducedMotion } from "framer-motion";

import { HoverCard } from "@/components/ui/motion";

type SkillCardProps = {
  name: string;
  percentage: number;
  logo: string;
  className?: string;
};

const SkillCard = ({ name, percentage, logo, className }: SkillCardProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <HoverCard className="h-full">
      <GlassCard
        className={cn(
          `
        rounded-2xl
        min-w-44 min-h-44
        flex flex-col items-center justify-center
        gap-4 p-6
        text-center
        shadow-none border-black/5 dark:border-white/10
        hover:shadow-xl hover:-translate-y-1
        transition-all duration-300
      `,
          className,
        )}
      >
        {/* Logo */}
        <div
          className="
          h-18 w-18
          rounded-2xl
        bg-black/5 dark:bg-white/10
          flex items-center justify-center
      "
        >
          <Image
            src={logo}
            alt={name}
            width={45}
            height={45}
            className="object-contain "
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          {/* Percentage */}
          <div className="text-sm text-primary font-semibold ">{percentage}%</div>

          {/* Name */}
          <div className=" text-sm text-muted-foreground font-medium">{name}</div>

          {/* Animated Progress Bar */}
          <div className="w-full h-1 rounded-full bg-surface-border overflow-hidden mt-1">
            <m.div
              className="h-full rounded-full bg-primary/70"
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              viewport={{ once: true, margin: "-50px" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
              }
            />
          </div>
        </div>
      </GlassCard>
    </HoverCard>
  );
};

export default SkillCard;
