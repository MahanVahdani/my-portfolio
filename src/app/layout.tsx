import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mahan Vahdani | Frontend Developer",
  description:
    "Frontend Developer specializing in React and Next.js. Building modern, performant web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
    const storedTheme = localStorage.getItem("theme");

    const isDark =
      storedTheme === "dark" ||
      (
        storedTheme !== "light" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );

    document.documentElement.classList.toggle("dark", isDark);
  `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
