import type { Metadata } from "next";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahan Vahdani | Frontend Developer",
  description: "Frontend Developer specializing in React and Next.js.",
};

const CustomToaster = () => {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}

          <CustomToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
