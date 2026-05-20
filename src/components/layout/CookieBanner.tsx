"use client";

import { useEffect, useState } from "react";

import GlassCard from "@ui/GlassCard";
import Button from "@ui/Button";

const STORAGE_KEY = "cookie-consent";

type Consent = "accepted" | "rejected" | null;

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent;

    if (!stored) {
      setVisible(true);
    }
  }, []);

  const updateConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, value);

    window.gtag?.("consent", "update", {
      analytics_storage: value === "accepted" ? "granted" : "denied",
      ad_storage: value === "accepted" ? "granted" : "denied",
    });

    if (value === "accepted") {
      window.gtag?.("config", process.env.NEXT_PUBLIC_GA_ID!, {
        page_path: window.location.pathname,
      });
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 px-4 flex items-center justify-center">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      <GlassCard className="relative z-10 w-full max-w-md p-6 space-y-4">
        <h2 className="text-lg font-semibold">We use cookies 🍪</h2>

        <p className="text-sm opacity-80 leading-relaxed">
          We use cookies to improve your experience, analyze website traffic,
          and understand how visitors interact with the site. These cookies help
          us measure performance (e.g. page views and interactions) using tools
          like Google Analytics. We do not collect or store personal information
          such as your name, email address, or phone number.
          <br />
          <br />
          You can choose to accept or reject analytics cookies. Rejecting will
          disable analytics tracking, but the website will still work normally.
          <br />
          <b className="text-primary font-semibold">
            You can change your preferences at any time.
          </b>
        </p>

        <div className="flex justify-end gap-2 pt-2">
          <Button variant="outlined" onClick={() => updateConsent("rejected")}>
            Reject
          </Button>

          <Button variant="primary" onClick={() => updateConsent("accepted")}>
            Accept
          </Button>
        </div>
      </GlassCard>
    </div>
  );
};

export default CookieBanner;
