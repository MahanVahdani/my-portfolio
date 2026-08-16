import { FolderOpen } from "lucide-react";
import SectionBlock from "@ui/SectionBlock";
import Grid from "@ui/Grid";
import GridItem from "@ui/GridItem";
import ProjectCard from "@components/sections/projects/ProjectCard";
import { portfolioConfig } from "@/config/portfolio.config";
import { gridStyle } from "@/lib/gridStyle";

import { MotionStagger, MotionItem } from "@/components/ui/motion";

const ProjectsSection = () => {
  return (
    <SectionBlock
      id="projects"
      icon={FolderOpen}
      mutedTitle="Things I've"
      accentTitle="Built"
      description="A collection of meaningful projects where I helped turn ideas into scalable, high-performance digital experiences."
    >
      <MotionStagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
        {portfolioConfig.projects.map((project) => (
          <MotionItem key={project.id}>
            <ProjectCard
              name={project.name}
              logo={project.logo}
              image={project.image}
              description={project.description}
              link={project.link}
            />
          </MotionItem>
        ))}
      </MotionStagger>
    </SectionBlock>
  );
};

export default ProjectsSection;
