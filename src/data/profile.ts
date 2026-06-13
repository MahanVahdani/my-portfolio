import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa6";
import type { IconType } from "react-icons";

export type SocialLink = {
  href: string;
  icon: IconType;
  label: string;
};

export type Profile = {
  avatar: string;
  name: string;
  role: string;
  email: string;
  socialLinks: SocialLink[];
};

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/MahanVahdani",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/mahanvahdani",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:dev.vahdani@gmail.com",
    icon: FaEnvelope,
    label: "Email",
  },
  {
    href: "https://instagram.com/mahanvahdani",
    icon: FaInstagram,
    label: "Instagram",
  },
];

const profile: Profile = {
  avatar: "/images/profile.png",
  name: "Mahan Vahdani",
  role: "Frontend Developer",
  email: "dev.vahdani@gmail.com",
  socialLinks,
};

export default profile;
