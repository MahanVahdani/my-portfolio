import { UserRound } from "lucide-react";
import SectionBlock from "@ui/SectionBlock";

const AboutSection = () => {
  return (
    <SectionBlock
      id="about"
      icon={UserRound}
      mutedTitle="More than code"
      accentTitle="The story behind the interfaces"
      description="I’m a Senior Frontend Developer with over 6 years of experience building high-performance web applications using React and Next.js. I’ve worked on SaaS, fintech, and e-commerce platforms serving more than 40,000 users, turning complex problems into clean, intuitive, and scalable interfaces.
                  I enjoy creating reusable systems, optimizing performance, and designing architectures that make products easier to scale and teams more productive. I’ve also mentored junior developers and worked closely with cross-functional teams to deliver polished, production-ready experiences.
                  Currently based in Iran and open to international opportunities and relocation, I’m always excited to take on new challenges and build digital products that truly make an impact."
    />
  );
};

export default AboutSection;
