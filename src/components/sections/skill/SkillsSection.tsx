"use client";

import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { m, useScroll, useTransform } from "framer-motion";
import SectionBlock from "@ui/SectionBlock";
import { portfolioConfig } from "@/config/portfolio.config";
import SkillCard from "@components/sections/skill/SkillCard";

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0px", "-400px"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-400px", "0px"]);

  const skills = portfolioConfig.skills;
  const mid = Math.ceil(skills.length / 2);
  const topRow = skills.slice(0, mid);
  const bottomRow = skills.slice(mid);

  const topRowInfinite = [...topRow, ...topRow, ...topRow, ...topRow];
  const bottomRowInfinite = [...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow];

  return (
    <SectionBlock
      id="skills"
      icon={Sparkles}
      mutedTitle="My"
      accentTitle="Technical Expertise"
      description="Core technologies and tools I work with daily to build high-performance, scalable web applications."
    >
      <div ref={containerRef} className="w-full overflow-hidden mt-8 py-8 -my-8 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <m.div style={{ x: x1 }} className="flex gap-6 bg-transparent w-max">
          {topRowInfinite.map((skill, index) => (
            <SkillCard
              key={`${skill.id}-${index}`}
              name={skill.name}
              percentage={skill.percentage}
              logo={skill.logo}
            />
          ))}
        </m.div>

        <m.div style={{ x: x2 }} className="flex bg-transparent gap-6 w-max mt-6">
          {bottomRowInfinite.map((skill, index) => (
            <SkillCard
              key={`${skill.id}-${index}`}
              name={skill.name}
              percentage={skill.percentage}
              logo={skill.logo}
            />
          ))}
        </m.div>
      </div>
    </SectionBlock>
  );
};

export default SkillsSection;
