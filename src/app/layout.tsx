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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Zahid Hasan — Frontend Developer",
    template: "%s | Zahid Hasan",
  },

  description:
    "Zahid Hasan is a Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and Webflow. Explore his projects, skills, experience, and frontend development work.",

  keywords: [
    "Zahid Hasan",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Webflow Developer",
    "JavaScript Developer",
    "Tailwind CSS Developer",
    "Frontend Developer Bangladesh",
    "Web Developer Bangladesh",
  ],

  authors: [
    {
      name: "Zahid Hasan",
    },
  ],

  creator: "Zahid Hasan",
  publisher: "Zahid Hasan",

  metadataBase: new URL("https://your-domain.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Zahid Hasan — Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and Webflow.",
    siteName: "Zahid Hasan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zahid Hasan — Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zahid Hasan — Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and Webflow.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
