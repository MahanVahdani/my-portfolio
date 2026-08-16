import type { Metadata } from "next";
import { portfolioConfig } from "@/config/portfolio.config";
import Shell from "@/components/layout/Shell";

export const metadata: Metadata = {
  title: portfolioConfig.seo.title, // Explicitly override root metadata if needed
};
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
      {portfolioConfig.sections.about && <AboutSection />}
      {portfolioConfig.sections.experience && <ExperienceSection />}
      {portfolioConfig.sections.skills && <SkillsSection />}
      {portfolioConfig.sections.projects && <ProjectsSection />}
      {portfolioConfig.sections.testimonials && <TestimonialsSection />}
      {portfolioConfig.sections.contact && <ContactSection />}
      <PageView />
    </Shell>
  );
};

export default Home;
