import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://2bhai.tech";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "2BHAI.tech", template: "%s — 2BHAI.tech" },
  description: "2BHAI.tech — production foundation.",
  applicationName: "2BHAI.tech",
  alternates: { canonical: "/" },
  icons: { icon: "/logo.png", apple: "/logo.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0e16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
