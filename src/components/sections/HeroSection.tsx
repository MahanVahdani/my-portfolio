import React from "react";
import SectionBlock from "@ui/SectionBlock";

const HeroSection = () => {
  return (
    <SectionBlock
      id="about"
      mutedTitle="Hi, I’m Mahan Vahdani"
      accentTitle="Senior Frontend Developer"
      description="
          I build fast, clean, and scalable web experiences with Next.js and React. 
          Focused on high-performance interfaces, thoughtful architecture,
          and delivering measurable business impact.
      "
      className="scroll-mt-24 py-20"
    >
      <p>Hero Section</p>
    </SectionBlock>
  );
};

export default HeroSection;
