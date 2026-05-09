import type { SocialLink } from "@/data/profile";

type ProfileSocialLinksProps = {
  links: SocialLink[];
};

const ProfileSocialLinks = ({ links }: ProfileSocialLinksProps) => {
  return (
    <div className="flex items-center justify-center gap-3">
      {links.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              text-foreground/70
              transition-all duration-300
              hover:bg-white/10
              hover:text-primary
            "
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
};

export default ProfileSocialLinks;
