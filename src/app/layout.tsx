import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/providers/MotionProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display-var",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body-var",
});

export const metadata: Metadata = {
  title: "Carl Shawn Watkins Consulting™",
  description: "Where emotional intelligence, courageous vulnerability, and purpose-driven leadership meet.",
  openGraph: {
    title: "Carl Shawn Watkins Consulting™",
    description: "Where emotional intelligence, courageous vulnerability, and purpose-driven leadership meet.",
    url: "https://carlshawnwatkins.com",
    siteName: "Carl Shawn Watkins Consulting™",
    images: [
      {
        url: "/assets/seologo.png",
        width: 1200,
        height: 630,
        alt: "Carl Shawn Watkins Consulting™ Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carl Shawn Watkins Consulting™",
    description: "Where emotional intelligence, courageous vulnerability, and purpose-driven leadership meet.",
    images: ["/assets/seologo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <MotionProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
