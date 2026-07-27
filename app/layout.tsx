import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f0d0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kashan — Digital Creator & Brand Collaborator",
  description: "Official portfolio and media kit for Kashan (@connect.kashan). Relatable Pakistani digital creator engineering high-trust brand integrations.",
  keywords: [
    "Kashan",
    "Muhammad Kashan",
    "connect.kashan",
    "Pakistani Content Creator",
    "Digital Creator Pakistan",
    "Brand Collaborations",
    "The Idiotz Kashan",
    "Relatable Comedy Reels",
    "Influencer Marketing Pakistan"
  ],
  authors: [{ name: "Kashan" }],
  openGraph: {
    title: "Kashan — Digital Creator & Brand Collaborator",
    description: "Not a star. Just an ordinary guy — with a following that shows up.",
    url: "https://kashan.com",
    siteName: "Kashan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashan — Digital Creator & Brand Collaborator",
    description: "Relatable Pakistani digital creator engineering high-performing brand collabs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-surface-base text-text-primary antialiased selection:bg-text-tertiary selection:text-surface-base">
        {children}
      </body>
    </html>
  );
}
