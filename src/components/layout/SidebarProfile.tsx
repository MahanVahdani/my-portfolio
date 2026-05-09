import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import ProfileSocialLinks from "@/components/profile/ProfileSocialLinks";
import CopyEmailButton from "@components/profile/CopyEmailButton";
import profile from "@/data/profile";

const SidebarProfile = () => {
  return (
    <GlassCard className="w-70 h-full p-6 flex flex-col justify-evenly text-center">
      {/* Avatar */}
      <div
        className="h-24 w-24 xl:h-28 xl:w-28 overflow-hidden rounded-full
       bg-white flex self-center"
      >
        <Image
          className="object-contain"
          src={profile.avatar}
          alt={profile.name}
          width={100}
          height={100}
        />
      </div>

      {/* Middle Part */}
      <div className="mt-2 flex flex-col justify-between md:flex-row lg:flex-col">
        {/* Name + Role */}
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-sm text-muted">{profile.role}</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center mt-3 md:-mt-1 lg:mt-3">
          <ProfileSocialLinks links={profile.socialLinks} />
          <CopyEmailButton email={profile.email} />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col gap-4 mt-6">
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
