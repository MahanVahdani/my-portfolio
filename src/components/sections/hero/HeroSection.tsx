import { Home } from "lucide-react";
import SectionBlock from "@ui/SectionBlock";
import HeroActionButtons from "@/components/sections/hero/HeroActionButtons";

const HeroSection = () => {
  return (
    <SectionBlock
      id="hello"
      icon={Home}
      mutedTitle="Hi, I’m Mahan Vahdani"
      accentTitle="Senior Frontend Developer"
      description="I build fast, clean, and scalable web experiences with Next.js and React. Focused on high-performance interfaces, thoughtful architecture, and delivering measurable business impact."
    >
      <HeroActionButtons />
    </SectionBlock>
  );
};

export default HeroSection;
