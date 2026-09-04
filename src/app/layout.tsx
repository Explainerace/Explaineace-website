import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08090E",
};

export const metadata: Metadata = {
  title: {
    default: "EXPLAINERACE | Software Tutorials & SaaS Walkthroughs",
    template: "%s | EXPLAINERACE",
  },
  description:
    "Professional software tutorial videos, SaaS product walkthroughs, app demos, and training content for software companies, startups, and product teams by Ali.",
  keywords: [
    "software tutorial video creator",
    "SaaS tutorial video",
    "software walkthrough video",
    "app demo video",
    "mobile app tutorial video",
    "website walkthrough video",
    "software training video",
    "product explainer video",
    "screen recording tutorial",
    "SaaS onboarding video",
    "software demo video",
  ],
  authors: [{ name: "Ali", url: siteConfig.fiverr.profileUrl }],
  creator: "Ali (EXPLAINERACE)",
  publisher: "EXPLAINERACE",
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    title: "EXPLAINERACE | Software Tutorials & SaaS Walkthrough Specialist",
    description: siteConfig.subheadline,
    images: [
      {
        url: "https://img.youtube.com/vi/W6-glP7Ct5o/maxresdefault.jpg",
        width: 1280,
        height: 720,
        alt: "EXPLAINERACE - Software & SaaS Video Specialist Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EXPLAINERACE | Software Tutorials & SaaS Walkthroughs",
    description: siteConfig.subheadline,
    images: ["https://img.youtube.com/vi/W6-glP7Ct5o/maxresdefault.jpg"],
  },
  verification: {
    google: "google7fedbc811ad45851",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "EXPLAINERACE",
  "alternateName": "ExplainerAce Software Video Production",
  "description":
    "Professional software tutorial videos, SaaS product walkthroughs, app demos, and training content for software companies, startups, and product teams.",
  "url": siteConfig.siteUrl,
  "image": "https://img.youtube.com/vi/W6-glP7Ct5o/maxresdefault.jpg",
  "telephone": siteConfig.whatsapp.number,
  "email": siteConfig.contactEmail,
  "priceRange": "$$$",
  "founder": {
    "@type": "Person",
    "name": "Ali",
    "jobTitle": "Software Tutorial & SaaS Video Specialist",
    "sameAs": [
      siteConfig.fiverrProfiles[0].url,
      siteConfig.fiverrProfiles[1].url,
      siteConfig.youtube.playlistUrl,
    ],
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "157",
    "bestRating": "5.0",
    "worstRating": "1.0",
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Video Production Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SaaS Walkthrough & Onboarding Videos",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Demo & Gesture Walkthroughs",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software Feature Tutorials & Documentation Videos",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#08090E] text-slate-100 antialiased selection:bg-brand-600 selection:text-white overflow-x-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
