import { FolderOpen } from "lucide-react";
import SectionBlock from "@ui/SectionBlock";

const ProjectsSection = () => {
  return (
    <SectionBlock
      id="projects"
      icon={FolderOpen}
      mutedTitle="Things I've"
      accentTitle="Built"
      description="A collection of meaningful projects where I helped turn ideas into scalable, high-performance digital experiences."
    >
      {/* Your project cards/components go here */}
    </SectionBlock>
  );
};

export default ProjectsSection;
