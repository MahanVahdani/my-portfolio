import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

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
    <div className="relative w-full aspect-4/3 sm:aspect-video rounded-2xl overflow-hidden shadow-lg group border border-surface-border">
      <Image
        src={image}
        alt={`Screenshot of ${name} project`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="absolute top-4 left-4 z-10 flex items-center gap-3 group/logo">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 shadow-md">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-cover"
          />
        </div>

        <span className="text-white font-bold text-sm tracking-wide drop-shadow-md md:hidden">
          {name}
        </span>

        <div className="hidden md:block absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md text-xs font-semibold text-white opacity-0 invisible group-hover/logo:opacity-100 group-hover/logo:visible transition-all duration-300 bg-black/80 backdrop-blur-sm border border-white/10 whitespace-nowrap shadow-xl">
          {name}
        </div>
      </div>

      {/* Bottom Link Section */}
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="glass !bg-slate-900/20 dark:!bg-slate-900/40 !absolute bottom-0 inset-x-0 z-10 flex items-center justify-between px-4 pb-2 pt-3.5 hover:bg-white/50 dark:hover:bg-slate-900/80 transition-all duration-300 group/link 
             [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12px)] 
             mask-[linear-gradient(to_bottom,transparent_0%,black_12px)]"
      >
        <p className="text-gray-600 dark:text-gray-100 text-sm font-medium line-clamp-1 pr-4 drop-shadow-sm">
          {description}
        </p>

        <span className="text-gray-700 dark:text-gray-300 group-hover/link:text-black dark:group-hover/link:text-white transition-colors">
          <ExternalLink size={18} strokeWidth={2} />
        </span>
      </Link>
    </div>
  );
};

export default ProjectCard;
