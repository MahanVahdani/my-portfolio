import Shell from "@/components/layout/Shell";
import AboutSection from "@/components/sections/about/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/experience/ExperienceSection";
import HeroSection from "@/components/sections/hero/HeroSection";
import PlansSection from "@/components/sections/PlansSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const Home = () => {
  return (
    <Shell>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <PlansSection />
      <ContactSection />
    </Shell>
  );
};

export default Home;
