import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahan Vahdani | Frontend Developer",
  description: "Frontend Developer specializing in React and Next.js.",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body>
        {/* Google Analytics script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="ga-consent" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;


              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied'
          });
  `}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}

          <CustomToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

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
