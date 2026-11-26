import React from "react";
import type { Metadata } from "next";
import StudioPageContent from "@/components/studio/StudioPageContent";

export const metadata: Metadata = {
  title: "ExplainerAce — Product Films in Motion | SaaS Launch Promos & UI Walkthroughs",
  description:
    "Launch your software with a product film, show people how it works with clear tutorials, and get social cuts ready for every screen (16:9, 1:1, 9:16).",
  openGraph: {
    title: "ExplainerAce — Product Films in Motion",
    description:
      "Launch your software with a product film, show people how it works with clear tutorials, and get social cuts ready for every screen.",
    url: "https://explainerace.com",
    siteName: "ExplainerAce",
    images: [
      {
        url: "https://img.youtube.com/vi/ruSnnvafJdc/maxresdefault.jpg",
        width: 1280,
        height: 720,
        alt: "ExplainerAce — Product Films in Motion",
      },
    ],
  },
};

export default function HomePage() {
  return <StudioPageContent />;
}
