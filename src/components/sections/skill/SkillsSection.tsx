import { Sparkles } from "lucide-react";
import SectionBlock from "@ui/SectionBlock";
import { portfolioConfig } from "@/config/portfolio.config";
import SkillCard from "@components/sections/skill/SkillCard";

const SkillsSection = () => {
  return (
    <SectionBlock
      id="skills"
      icon={Sparkles}
      mutedTitle="My"
      accentTitle="Technical Expertise"
      description="Core technologies and tools I work with daily to build high-performance, scalable web applications."
    >
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 
                gap-5 
                justify-items-center"
      >
        {portfolioConfig.skills.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            percentage={skill.percentage}
            logo={skill.logo}
          />
        ))}
      </div>
    </SectionBlock>
  );
};

export default SkillsSection;
