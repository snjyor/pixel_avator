import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Google Analytics ID
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  title: {
    default: "Pixel Art NFT Generator - Create Unique 8-bit Characters",
    template: "%s | Pixel Art NFT Generator"
  },
  description: "Create stunning pixel art NFT characters with 1 million unique combinations. Free online pixel art generator with customizable parts, instant download, and professional quality output.",
  keywords: [
    "pixel art generator",
    "NFT creator",
    "8-bit art generator",
    "pixel character creator",
    "digital art generator",
    "retro game art",
    "pixel art maker",
    "NFT art generator",
    "crypto art",
    "blockchain art",
    "pixel art NFT",
    "character generator",
    "avatar creator",
    "pixel graphics",
    "8-bit graphics"
  ],
  authors: [{ name: "snjyor", url: "https://github.com/snjyor/pixel_nft" }],
  creator: "snjyor",
  publisher: "snjyor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pixelnft.top"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixelnft.top",
    title: "Pixel Art NFT Generator - Create Unique 8-bit Characters",
    description: "Create stunning pixel art NFT characters with 1 million unique combinations. Free online pixel art generator with customizable parts and instant download.",
    siteName: "Pixel Art NFT Generator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pixel Art NFT Generator Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Art NFT Generator - Create Unique 8-bit Characters",
    description: "Create stunning pixel art NFT characters with 1 million unique combinations. Free online generator!",
    site: "@jinghui30",
    creator: "@jinghui30",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Digital Art",
};

// Global type declarations for Google Analytics
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
