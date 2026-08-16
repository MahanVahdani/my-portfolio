"use client";

import { BriefcaseBusiness } from "lucide-react";
import SectionBlock from "@ui/SectionBlock";
import ExperienceCard from "@/components/sections/experience/ExperienceCard";
import { portfolioConfig } from "@/config/portfolio.config";
import { motion, useReducedMotion } from "framer-motion";
import { MotionStagger, MotionItem } from "@/components/ui/motion";

const ExperienceSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionBlock
      id="experiences"
      icon={BriefcaseBusiness}
      mutedTitle="My"
      accentTitle="Professional Journey"
      description="My journey building high-performance frontend systems and delivering impactful digital products at scale."
    >
      <MotionStagger
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6"
      >
        {portfolioConfig.experiences.map((exp) => (
          <MotionItem key={exp.company}>
            <ExperienceCard
              company={exp.company}
              role={exp.role}
              period={exp.period}
              logo={exp.logo}
              companyType={exp.companyType}
              achievements={exp.achievements}
            />
          </MotionItem>
        ))}
      </MotionStagger>
    </SectionBlock>
  );
};

export default ExperienceSection;
