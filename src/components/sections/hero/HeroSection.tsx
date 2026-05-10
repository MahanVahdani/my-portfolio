import SectionBlock from "@ui/SectionBlock";
import HeroActionButton from "@/components/sections/hero/HeroActionButton";

const HeroSection = () => {
  return (
    <SectionBlock
      id="hello"
      mutedTitle="Hi, I’m Mahan Vahdani"
      accentTitle="Senior Frontend Developer"
      description="I build fast, clean, and scalable web experiences with Next.js and React. Focused on high-performance interfaces, thoughtful architecture, and delivering measurable business impact."
      className="scroll-mt-24 py-20"
    >
      <div className="flex flex-wrap gap-3">
        <HeroActionButton label="Download Resume" variant="primary" />
        <HeroActionButton label="Contact Me" variant="outlined" />
      </div>
    </SectionBlock>
  );
};

export default HeroSection;
