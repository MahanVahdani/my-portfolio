import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { CustomToaster } from "@/components/layout/CustomToaster";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { portfolioConfig } from "@/config/portfolio.config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  ...portfolioConfig.seo,
  title: {
    default: portfolioConfig.seo.title as string,
    template: `%s | ${portfolioConfig.profile.name}`,
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* Google Analytics script */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-consent" strategy="afterInteractive">
              {`
        window.dataLayer = window.dataLayer || [];

        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;

        gtag('js', new Date());

        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });

        gtag('config', '${GA_ID}', {
          send_page_view: false
        });
      `}
            </Script>
          </>
        )}

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}

          <CustomToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
