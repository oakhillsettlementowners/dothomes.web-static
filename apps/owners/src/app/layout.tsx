import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecallBanner from "@/components/RecallBanner";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#166534",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Oak Hill Settlement Homeowners - Community Hub",
  description: "Independent community hub for Oak Hill Settlement homeowners in Forest Grove, Oregon. By homeowners, for homeowners.",
  robots: {
    index: false,
    follow: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Oak Hill HOA",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://owners.oakhillsettlement.homes",
    siteName: "Oak Hill Settlement Homeowners",
    title: "Oak Hill Settlement Homeowners - Community Hub",
    description: "Independent community hub for Oak Hill Settlement homeowners in Forest Grove, Oregon. By homeowners, for homeowners.",
  },
  twitter: {
    card: "summary",
    title: "Oak Hill Settlement Homeowners - Community Hub",
    description: "Independent community hub for Oak Hill Settlement homeowners in Forest Grove, Oregon.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecallBanner variant="mobile" />
        {children}
      </body>
    </html>
  );
}

