"use client";

import { Toaster } from "sonner";

export const CustomToaster = () => {
  return (
    <Toaster
      position="bottom-right"
      theme="system"
      richColors
      toastOptions={{
        className: "glass-card border-surface-border",
        style: {
          background: "var(--surface)",
          color: "var(--foreground)",
          backdropFilter: "blur(11px)",
        },
      }}
    />
  );
};
