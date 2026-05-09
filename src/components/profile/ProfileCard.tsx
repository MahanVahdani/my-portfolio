import GlassCard from "@/components/ui/GlassCard";
import ProfileSocialLinks from "./ProfileSocialLinks";
import profile from "@/data/profile";

const ProfileCard = () => {
  return (
    <GlassCard className="w-70 p-6">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="h-28 w-28 rounded-2xl bg-white/10" />

        {/* Name + Role */}
        <div className="mt-5">
          <h2 className="text-xl font-semibold">{profile.name}</h2>

          <p className="mt-1 text-sm text-muted">{profile.role}</p>
        </div>

        {/* Social Links */}
        <div className="mt-6">
          <ProfileSocialLinks links={profile.socialLinks} />
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="
            mt-6
            inline-flex items-center justify-center
            rounded-xl
            bg-primary px-5 py-3
            text-sm font-medium text-black
            transition-all duration-300
            hover:scale-[1.02]
          "
        >
          Hire Me
        </a>

        {/* Footer */}
        <p className="mt-6 text-xs text-muted">
          © 2026 Mahan. All Rights Reserved.
        </p>
      </div>
    </GlassCard>
  );
};

export default ProfileCard;
