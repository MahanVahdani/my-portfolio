import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";

type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  logo: string;
  companyType: string;
  achievements: string[];
};

const ExperienceCard = ({
  company,
  role,
  period,
  logo,
  companyType,
  achievements,
}: ExperienceCardProps) => {
  return (
    <GlassCard className="p-6 space-y-6 hover:-translate-y-1 transition-transform duration-300">
      {/* Header */}
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-surface-border bg-background/40">
          <Image src={logo} alt={company} fill className="object-cover" />
        </div>

        {/* Company Info */}
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold tracking-tight">{company}</h3>

          <p className="text-sm text-primary font-medium">{role}</p>

          <p className="text-xs text-muted-foreground">{period}</p>
        </div>
      </div>

      {/* Company Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {companyType}
      </p>

      {/* Achievements */}
      <ul className="space-y-3">
        {achievements.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm text-foreground/90"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
};

export default ExperienceCard;
