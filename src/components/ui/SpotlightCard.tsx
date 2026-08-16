"use client";

import { useRef, useCallback } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * SpotlightCard
 *
 * A glass-morphism card that renders a radial gradient spotlight
 * following the user's cursor via CSS custom properties.
 *
 * The spotlight is skipped entirely when the user prefers reduced motion.
 */
const SpotlightCard = ({ children, className }: SpotlightCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      containerRef.current.style.setProperty(
        "--mouse-x",
        `${e.clientX - rect.left}px`
      );
      containerRef.current.style.setProperty(
        "--mouse-y",
        `${e.clientY - rect.top}px`
      );
    },
    [shouldReduceMotion]
  );

  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return;
    // Reset to center so the gradient fades out gracefully
    const rect = containerRef.current.getBoundingClientRect();
    containerRef.current.style.setProperty("--mouse-x", `${rect.width / 2}px`);
    containerRef.current.style.setProperty(
      "--mouse-y",
      `${rect.height / 2}px`
    );
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("glass relative overflow-hidden group", className)}
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Spotlight gradient overlay */}
      {!shouldReduceMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(20, 184, 166, 0.12), transparent 40%)",
          }}
        />
      )}

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
