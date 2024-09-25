import "./globals.css";
import "./theme.css"
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sayed Arfat Ali — Web Developer & Digital Marketer",
  description:
    "Frontend Engineer and Web Designer, currently at Anayatechbd. Focused on interfaces and experiences, working remotely from Dhaka,Bangladesh.",
  generator: "Next.js",
  applicationName: "Henry Joy Saha",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Henry jobel — Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer, currently at Anayatechbd. Focused on interfaces and experiences, working remotely from Dhaka,Bangladesh.",
    url: "https://henryjobel.vercel.app",
    siteName: "www.henryjobel.vercel.app",
    images: [
      {
        url: "https://i.ibb.co/rxffGP8/henry-picture.png",
        width: 1200,
        height: 630,
        alt: "Henry Jobel",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henry Jobel — Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer, currently at Anayatechbd. Focused on interfaces and experiences, working remotely from Dhaka,Bangladesh.",
    creator: "Henry Jobel",
    creatorId: "1243720976552144897",
    images: [
      "https://i.ibb.co/rxffGP8/henry-picture.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
