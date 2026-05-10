"use client";

import React from "react";
import { Download, Mail } from "lucide-react";
import Button from "@ui/Button";

type HeroActionButtonProps = {
  label: "Download Resume" | "Contact Me";
  variant?: "outlined" | "primary" | "secondary";
};

const HeroActionButton = ({
  label,
  variant = "primary",
}: HeroActionButtonProps) => {
  const Icon = label === "Download Resume" ? Download : Mail;
  const resumePath = "/Resume.pdf";

  const handleClick = () => {
    if (label === "Download Resume") {
      // Create a temporary link and click it to trigger the download
      const link = document.createElement("a");
      link.href = resumePath;
      link.download = "Mahan_Vahdani_Resume_Frontend.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (label === "Contact Me") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Button variant={variant} onClick={handleClick}>
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Button>
  );
};

export default HeroActionButton;
