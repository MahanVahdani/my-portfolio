"use client";

import { useState } from "react";
import { m, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * A fixed scroll-to-top button that fades in once the user scrolls past 300px.
 * Uses framer-motion's useMotionValueEvent to avoid re-render overhead from
 * a scroll listener — the state only flips when crossing the threshold.
 */
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 300);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          key="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-white/10 shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-150"
        >
          <ArrowUp size={20} />
        </m.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
