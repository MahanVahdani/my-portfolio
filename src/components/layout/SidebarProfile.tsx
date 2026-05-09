import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import ProfileSocialLinks from "@/components/profile/ProfileSocialLinks";
import profile from "@/data/profile";

const SidebarProfile = () => {
  return (
    <GlassCard className="w-70 h-full p-6 flex flex-col justify-evenly text-center">
      {/* TOP */}
      <div className="flex flex-col items-center gap-4">
        {/* Avatar */}
        <div className="h-24 w-24 xl:h-28 xl:w-28 overflow-hidden rounded-full bg-white flex items-center justify-center">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={96}
            height={96}
          />
        </div>

        {/* Name + Role */}
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-sm text-muted">{profile.role}</p>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="flex flex-col items-center gap-3 mt-3">
        <ProfileSocialLinks links={profile.socialLinks} />
        <p className="text-sm text-muted">{profile.email}</p>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col gap-4 mt-3">
        <a
          href="#contact"
          className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-black transition-all hover:scale-[1.02]"
        >
          Hire Me!
        </a>

        <p className="text-[11px] xl:text-xs text-muted">
          © 2026 Mahan. All Rights Reserved.
        </p>
      </div>
    </GlassCard>
  );
};

export default SidebarProfile;
