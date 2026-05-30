import Image from "next/image";
import GlassCard from "@ui/GlassCard";
import profile from "@data/profile";
import ProfileSocialLinks from "@components/sections/profile/ProfileSocialLinks";
import ProfileHireButton from "@components/sections/profile/ProfileHireButton";
import CopyButton from "@/components/ui/CopyButton";
import CoockieSettingButton from "../sections/profile/CoockieSettingButton";

const SidebarProfile = () => {
  return (
    <GlassCard className="w-70 h-full p-6 rounded-2xl flex flex-col justify-evenly text-center">
      {/* Avatar */}
      <div
        className="
          relative h-24 w-24 xl:h-28 xl:w-28 overflow-hidden
          rounded-2xl bg-white self-center"
      >
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1280px) 96px, 112px"
        />
      </div>

      {/* Middle Part */}
      <div className="flex flex-col justify-between md:flex-row lg:flex-col mt-2 lg:mt-0 lg:gap-4">
        {/* Name + Role */}
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-sm text-muted">{profile.role}</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center mt-3 md:-mt-1 lg:mt-3 lg:gap-1">
          <ProfileSocialLinks links={profile.socialLinks} />
          <CopyButton value={profile.email}>{profile.email}</CopyButton>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col gap-4 mt-6">
        <ProfileHireButton />

        <CoockieSettingButton />
      </div>
    </GlassCard>
  );
};

export default SidebarProfile;
