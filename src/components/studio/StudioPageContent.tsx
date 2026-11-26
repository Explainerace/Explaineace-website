"use client";

import React, { useState } from "react";
import StudioHero from "./StudioHero";
import SelectedFilms from "./SelectedFilms";
import CampaignShowcase from "./CampaignShowcase";
import CampaignPackages from "./CampaignPackages";
import PublishingOptions from "./PublishingOptions";
import StudioInquiry from "./StudioInquiry";
import { TrustBlock } from "@/components/TrustBlock";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { HomeFaq } from "@/components/HomeFaq";
import { CampaignPackage, PublishingOption } from "@/data/packages";

export default function StudioPageContent() {
  const [selectedPackage, setSelectedPackage] =
    useState<CampaignPackage["id"]>("product-launch");
  const [selectedPublishing, setSelectedPublishing] =
    useState<PublishingOption["id"]>("self");

  const handleSelectPackage = (id: CampaignPackage["id"]) => {
    setSelectedPackage(id);
    const inquiryEl = document.getElementById("inquiry");
    if (inquiryEl) {
      inquiryEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectPublishing = (id: PublishingOption["id"]) => {
    setSelectedPublishing(id);
  };

  return (
    <>
      {/* 1. Studio Hero */}
      <StudioHero />

      {/* 2. Selected Films (Orbitra One, Bloom, Bybit) */}
      <SelectedFilms />

      {/* 3. Signature Showcase: One feature. Three frames. */}
      <CampaignShowcase />

      {/* 4. Campaign Packages ($249, $499 Featured, $899) */}
      <CampaignPackages
        selectedPackageId={selectedPackage}
        onSelectPackage={handleSelectPackage}
      />

      {/* 5. Who hits publish? Optional publishing + Sample $598 Runway Calendar */}
      <PublishingOptions
        selectedPublishingId={selectedPublishing}
        onSelectPublishing={handleSelectPublishing}
        selectedPackageId={selectedPackage}
      />

      {/* 6. Project Inquiry Form with Live Quote Estimate */}
      <StudioInquiry
        initialPackage={selectedPackage}
        initialPublishing={selectedPublishing}
        onPackageChange={setSelectedPackage}
        onPublishingChange={setSelectedPublishing}
      />

      {/* 7. Verified Social Proof & Track Record */}
      <TrustBlock />

      {/* 8. 4-Step Production Process */}
      <ProcessTimeline />

      {/* 9. Frequently Asked Questions */}
      <HomeFaq />
    </>
  );
}
