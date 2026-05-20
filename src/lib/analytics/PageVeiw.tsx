"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gtag } from "@/lib/analytics/gtag";

export default function PageView() {
  const pathname = usePathname();

  useEffect(() => {
    gtag("config", process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
