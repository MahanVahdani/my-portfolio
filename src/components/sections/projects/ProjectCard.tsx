import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  image: string;
  logo: string;
  name: string;
  description: string;
  link: string;
}

const ProjectCard = ({
  image,
  logo,
  name,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <div className={cn("flex flex-col group/card h-full")}>
      <GlassCard className="p-3 rounded-2xl">
        <div className="relative w-full aspect-4/3 sm:aspect-video rounded-2xl overflow-hidden shadow-lg group border border-surface-border">
          <Image
            src={image}
            alt={`${name} project screenshot`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className="absolute top-3 left-3 right-3 z-10 flex items-center gap-3 group/logo pointer-events-none">
            <div className="relative w-1/12 min-w-8 max-w-16 aspect-square shrink-0 pointer-events-auto">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20 shadow-md">
                <Image
                  src={logo}
                  alt={`${name} logo`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="hidden md:block absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-2xl text-xs font-semibold text-white opacity-0 invisible group-hover/logo:opacity-100 group-hover/logo:visible transition-all duration-300 bg-black/80 backdrop-blur-sm border border-white/10 whitespace-nowrap shadow-xl">
                {name}
              </div>
            </div>

            <span className="text-white font-bold text-sm tracking-wide drop-shadow-md md:hidden pointer-events-auto">
              {name}
            </span>
          </div>
        </div>
      </GlassCard>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-4 mt-4 px-2 group/link"
      >
        <p className="flex-1 text-gray-800 dark:text-gray-100 text-sm font-medium truncate drop-shadow-sm transition-colors group-hover/link:text-black dark:group-hover/link:text-white">
          {description}
        </p>

        <span className="shrink-0 text-gray-700 dark:text-gray-300 group-hover/link:text-black dark:group-hover/link:text-white transition-colors">
          <ExternalLink size={18} strokeWidth={2} />
        </span>
      </Link>
    </div>
  );
};

export default ProjectCard;
