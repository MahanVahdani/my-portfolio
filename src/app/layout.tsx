import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahan Vahdani | Frontend Developer",
  description:
    "Frontend Developer specializing in React and Next.js. Building modern, performant web applications.",
};

// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
