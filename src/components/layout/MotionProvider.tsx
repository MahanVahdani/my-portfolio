"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps children in Framer Motion's LazyMotion with the domAnimation feature
 * bundle. This defers loading the full animation engine until needed,
 * reducing the initial JS payload. All child components must use `m.*`
 * instead of `motion.*` to benefit from this optimization.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
