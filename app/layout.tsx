import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Header from "./components/Header";
import Footer from "./components/Footer";
import portfolioData from "@/app/data/home.json";

export const metadata: Metadata = {
  title: `${portfolioData.name} - Portfolio`,
  description: portfolioData.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
