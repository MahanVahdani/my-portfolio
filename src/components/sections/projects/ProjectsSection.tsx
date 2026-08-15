import { FolderOpen } from "lucide-react";
import SectionBlock from "@ui/SectionBlock";
import Grid from "@ui/Grid";
import GridItem from "@ui/GridItem";
import ProjectCard from "@components/sections/projects/ProjectCard";
import { portfolioConfig } from "@/config/portfolio.config";

const ProjectsSection = () => {
  return (
    <SectionBlock
      id="projects"
      icon={FolderOpen}
      mutedTitle="Things I've"
      accentTitle="Built"
      description="A collection of meaningful projects where I helped turn ideas into scalable, high-performance digital experiences."
    >
      <Grid className="gap-y-8">
        {portfolioConfig.projects.map((project) => (
          <GridItem key={project.id} gridSpan={project.gridSpan}>
            <ProjectCard
              name={project.name}
              logo={project.logo}
              image={project.image}
              description={project.description}
              link={project.link}
            />
          </GridItem>
        ))}
      </Grid>
    </SectionBlock>
  );
};

export default ProjectsSection;
