"use client";

import Button from "@ui/Button";

const ProfileHireButton = () => {
  const scrollToContact = () => {
    document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button variant="primary" onClick={scrollToContact}>
      Hire Me
    </Button>
  );
};

export default ProfileHireButton;
