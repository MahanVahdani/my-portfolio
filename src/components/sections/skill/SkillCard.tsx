import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

type SkillCardProps = {
  name: string;
  percentage: number;
  logo: string;
  className?: string;
};

const SkillCard = ({ name, percentage, logo, className }: SkillCardProps) => {
  return (
    <GlassCard
      className={cn(
        `
      rounded-2xl
      max-w-45
      flex flex-col items-center justify-center
      gap-4 p-5
      text-center
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-lg
    `,
        className,
      )}
    >
      {/* Logo */}
      <div
        className="
        h-18 w-18
        rounded-2xl
      bg-black/5 dark:bg-white/10
        flex items-center justify-center
    "
      >
        <Image
          src={logo}
          alt={name}
          width={45}
          height={45}
          className="object-contain "
        />
      </div>

      <div className="flex flex-col gap-1">
        {/* Percentage */}
        <div className="text-sm text-primary font-semibold ">{percentage}%</div>

        {/* Name */}
        <div className=" text-sm text-muted-foreground font-medium">{name}</div>
      </div>
    </GlassCard>
  );
};

export default SkillCard;
