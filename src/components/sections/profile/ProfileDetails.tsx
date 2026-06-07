import profile from "@data/profile";
import ProfileSocialLinks from "@components/sections/profile/ProfileSocialLinks";
import CopyButton from "@/components/ui/CopyButton";

const ProfileDetails = () => {
  return (
    <>
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
    </>
  );
};

export default ProfileDetails;
