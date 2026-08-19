"use client";

import { m, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const MotionSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={
        shouldReduceMotion
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 24, filter: "blur(6px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  );
};

export const MotionStagger = ({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
          },
        },
        hidden: {},
      }}
    >
      {children}
    </m.div>
  );
};

export const MotionItem = ({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      style={style}
      variants={{
        hidden: shouldReduceMotion
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 24, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </m.div>
  );
};

export const HoverCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className={cn("transition-all duration-100 group", className)}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
};
