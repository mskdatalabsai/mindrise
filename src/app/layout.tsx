import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://themindrise.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TheMindRise.ai | AI Training, Consulting & Product Innovation",
    template: "%s | TheMindRise.ai",
  },
  description:
    "TheMindRise.ai empowers individuals and organizations through AI & Data Science training, strategic AI consulting, and end-to-end product innovation. Predict. Innovate. Empower.",
  keywords: [
    "AI training",
    "AI consulting",
    "Generative AI bootcamp",
    "Agentic AI course",
    "MLOps consulting",
    "Data Science training",
    "AI product development",
  ],
  authors: [{ name: "MSKDATALABS PRIVATE LIMITED" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "TheMindRise.ai",
    title: "TheMindRise.ai | AI Training, Consulting & Product Innovation",
    description:
      "Cutting-edge AI training, strategic consulting, and innovative product solutions that drive intelligent growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheMindRise.ai | AI Training, Consulting & Product Innovation",
    description:
      "Cutting-edge AI training, strategic consulting, and innovative product solutions that drive intelligent growth.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0d18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-midnight font-sans text-fog-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
