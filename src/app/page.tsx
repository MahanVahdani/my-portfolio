import Shell from "@/components/layout/Shell";
import CookieBanner from "@/components/layout/CookieBanner";
import AboutSection from "@/components/sections/about/AboutSection";
import ContactSection from "@/components/sections/contact/ContactSection";
import ExperienceSection from "@/components/sections/experience/ExperienceSection";
import HeroSection from "@/components/sections/hero/HeroSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import SkillsSection from "@/components/sections/skill/SkillsSection";
import TestimonialsSection from "@/components/sections/Testimonial/TestimonialsSection";
import PageView from "@/lib/analytics/PageView";

const Home = () => {
  return (
    <Shell>
      <CookieBanner />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <PageView />
    </Shell>
  );
};

export default Home;
