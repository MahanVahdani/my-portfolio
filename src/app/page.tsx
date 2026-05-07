import Shell from "@/components/layout/Shell";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import PlansSection from "@/components/sections/PlansSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GlassCard from "@/components/ui/GlassCard";
import ThemeToggle from "@/lib/theme/ThemeToggle";

const Home = () => {
  return (
    <>
      <GlassCard className="w-40 h-60 fixed top-20 right-20">
        <h3 className="text-lg font-semibold">Fixed Card</h3>
        <p className="text-sm mt-2">
          If this card stays in place while page scrolls, glass/fixed behavior
          is correct.
        </p>
      </GlassCard>

      <ThemeToggle />

      <Shell>
        <div className="space-y-6 pb-10 pt-2">
          <p className="text-sm">
            Scroll down and confirm the fixed card does not move.
          </p>
        </div>

        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <PlansSection />
        <ContactSection />
      </Shell>
    </>
  );
};

export default Home;
