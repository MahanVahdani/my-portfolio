"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PageView = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.gtag) return;

    const consent = localStorage.getItem("cookie-consent");

    if (consent !== "accepted") return;

    window.gtag("event", "page_view", {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
};

export default PageView;
