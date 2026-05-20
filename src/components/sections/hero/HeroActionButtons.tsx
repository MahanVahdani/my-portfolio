"use client";

import { Download, Mail } from "lucide-react";
import Button from "@ui/Button";
import { trackEvent } from "@/lib/analytics";

const HeroActionButtons = () => {
  const resumePath = "/Resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Mahan_Vahdani_Resume_Frontend.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    trackEvent("cv_download_click", {
      location: "hero",
    });
  };

  const handleContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });

    trackEvent("button_click", {
      button_name: "contact_me",
    });
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary" onClick={handleDownload}>
        <Download className="h-4 w-4" />
        <span>Download Resume</span>
      </Button>

      <Button variant="outlined" onClick={handleContact}>
        <Mail className="h-4 w-4" />
        <span>Contact Me</span>
      </Button>
    </div>
  );
};

export default HeroActionButtons;
