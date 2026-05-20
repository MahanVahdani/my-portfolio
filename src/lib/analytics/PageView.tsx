"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const getConsent = () => {
  if (typeof window === "undefined") return "denied";
  return localStorage.getItem("cookie-consent") || "unknown";
};

const PageView = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_ID) return;
    if (typeof window === "undefined") return;
    if (!window.gtag) return;

    const consent = getConsent();

    if (consent === "rejected") return;

    window.gtag("consent", "update", {
      analytics_storage: consent === "accepted" ? "granted" : "denied",
    });

    window.gtag("config", GA_ID, {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
};

export default PageView;
