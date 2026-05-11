import { BriefcaseBusiness } from "lucide-react";
import SectionBlock from "@ui/SectionBlock";
import ExperienceCard from "@/components/sections/experience/ExperienceCard";
import { experiences } from "@/data/experiences";

const ExperienceSection = () => {
  return (
    <SectionBlock
      id="experiences"
      icon={BriefcaseBusiness}
      mutedTitle="My"
      accentTitle="Professional Journey"
      description="My journey building high-performance frontend systems and delivering impactful digital products at scale."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-1 xl:md:grid-cols-2 gap-6">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.company}
            company={exp.company}
            role={exp.role}
            period={exp.period}
            logo={exp.logo}
            companyType={exp.companyType}
            achievements={exp.achievements}
          />
        ))}
      </div>
    </SectionBlock>
  );
};

export default ExperienceSection;
