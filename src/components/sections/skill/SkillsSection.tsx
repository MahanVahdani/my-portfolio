import { Sparkles } from "lucide-react";
import SectionBlock from "@ui/SectionBlock";
import { portfolioConfig } from "@/config/portfolio.config";
import SkillCard from "@components/sections/skill/SkillCard";
import ScrollingTicker from "@components/sections/skill/ScrollingTicker";

import { MotionStagger, MotionItem } from "@/components/ui/motion";

const SkillsSection = () => {
  return (
    <SectionBlock
      id="skills"
      icon={Sparkles}
      mutedTitle="My"
      accentTitle="Technical Expertise"
      description="Core technologies and tools I work with daily to build high-performance, scalable web applications."
    >
      <ScrollingTicker />

      <MotionStagger
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 
                gap-5 
                justify-items-center mt-8"
      >
        {portfolioConfig.skills.map((skill) => (
          <MotionItem key={skill.id} className="w-full">
            <SkillCard
              name={skill.name}
              percentage={skill.percentage}
              logo={skill.logo}
            />
          </MotionItem>
        ))}
      </MotionStagger>
    </SectionBlock>
  );
};

export default SkillsSection;
