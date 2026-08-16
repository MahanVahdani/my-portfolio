"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface TickerProps {
  items: React.ReactNode[];
  offset: any;
}

const Ticker = ({ items, offset }: TickerProps) => {
  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex whitespace-nowrap"
        style={{ x: offset }}
      >
        {/* Repeat the items a few times to ensure it covers the screen width */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-4 px-2">
            {items}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function ScrollingTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // If the user prefers reduced motion, we won't move the ticker text.
  const scrollY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "-50%"]
  );
  const invertScroll = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["-50%", "-50%"] : ["-50%", "0%"]
  );

  const lines = [
    { text: "REACT • NEXT.JS • TYPESCRIPT • TAILWIND CSS • ", reverse: false },
    { text: "REDUX • GIT • DOCKER • JEST • ", reverse: true },
  ];

  return (
    <div ref={containerRef} className="w-full py-8 overflow-hidden opacity-50">
      <div className="flex flex-col gap-4">
        {lines.map((line, index) => (
          <Ticker
            key={index}
            items={[
              <span
                key="solid"
                className="font-bold text-4xl whitespace-nowrap text-foreground"
              >
                {line.text}
              </span>,
              <span
                key="outline"
                className="font-bold text-4xl text-transparent whitespace-nowrap"
                style={{ WebkitTextStroke: "1px currentColor" }}
              >
                {line.text}
              </span>,
            ]}
            offset={line.reverse ? invertScroll : scrollY}
          />
        ))}
      </div>
    </div>
  );
}
