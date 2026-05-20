"use client";

import { trackEvent } from "@/lib/analytics";
import Button from "@ui/Button";

const ProfileHireButton = () => {
  const scrollToContact = () => {
    document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });

    trackEvent("button_click", {
      button_name: "hire_me",
    });
  };

  return (
    <Button variant="primary" onClick={scrollToContact}>
      Hire Me
    </Button>
  );
};

export default ProfileHireButton;
