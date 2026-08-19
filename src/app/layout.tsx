import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "Cambria", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  title: "Apex Medical College | Premier Healthcare & Clinical Education",

  description:
    "Apex Medical College in Mumbai delivers world-class medical education, NMC-accredited MBBS & BDS programs, MD/MS specializations, and hands-on 1,200-bed hospital training.",

  keywords: [
    "Apex Medical College",
    "MBBS Admission Mumbai",
    "BDS Medical Course",
    "Postgraduate Medical MD MS",
    "NMC Accredited Medical College",
    "Clinical Medical Training",
  ],

  authors: [{ name: "Apex Medical College" }],

  metadataBase: new URL("https://apex-medical-college-seo.onrender.com"),

  alternates: {
    canonical: "https://apex-medical-college-seo.onrender.com",
  },

  openGraph: {
    title: "Apex Medical College | Shaping Tomorrow's Healthcare Leaders",
    description:
      "NMC Accredited & WHO Listed Institution. Offering top-tier medical education, state-of-the-art simulation labs, and hands-on hospital exposure.",
    url: "https://apex-medical-college-seo.onrender.com",
    siteName: "Apex Medical College",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Apex Medical College | Excellence in Medical Education",
    description:
      "Join Mumbai's premier medical institution. NMC-accredited programs with 1,200-bed affiliated teaching hospital.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1F3C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/hero.jpg" type="image/jpeg" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
