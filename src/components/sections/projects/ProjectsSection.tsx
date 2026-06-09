import { FolderOpen } from "lucide-react";
import SectionBlock from "@ui/SectionBlock";
import ProjectCard from "@components/sections/projects/ProjectCard";
import { portfolioProjects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <SectionBlock
      id="projects"
      icon={FolderOpen}
      mutedTitle="Things I've"
      accentTitle="Built"
      description="A collection of meaningful projects where I helped turn ideas into scalable, high-performance digital experiences."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioProjects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            logo={project.logo}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </SectionBlock>
  );
};

export default ProjectsSection;
