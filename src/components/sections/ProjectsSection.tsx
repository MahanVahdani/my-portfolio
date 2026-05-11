import { FolderOpen } from "lucide-react";
import SectionBlock from "@ui/SectionBlock";

const ProjectsSection = () => {
  return (
    <SectionBlock
      id="projects"
      icon={FolderOpen}
      mutedTitle="projects"
      accentTitle=""
      description=""
    />
  );
};

export default ProjectsSection;
