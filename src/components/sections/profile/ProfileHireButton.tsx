"use client";

import { trackEvent } from "@/lib/analytics";
import Button from "@ui/Button";

interface ProfileHireButtonProps {
  onCloseMenu?: () => void;
}

const ProfileHireButton = ({ onCloseMenu }: ProfileHireButtonProps) => {
  const handleClick = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });

    trackEvent("button_click", {
      button_name: "contact_me",
    });

    if (onCloseMenu) {
      onCloseMenu();
    }
  };

  return (
    <Button variant="primary" onClick={handleClick}>
      Hire Me
    </Button>
  );
};

export default ProfileHireButton;
