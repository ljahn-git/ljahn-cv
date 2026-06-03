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

export const metadata: Metadata = {
  title: "Leo Jahn CV",
  description: "The Online CV of Leo Jahn",
};

import type { Viewport } from 'next';
export const viewport: Viewport = {
  width: 'device-width',
  // height: 'device-height',
  viewportFit: 'cover',
  initialScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-red-400`}
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    >
      <body className="min-h-full flex flex-col bg-red-400">{children}</body>
    </html>
  );
}
