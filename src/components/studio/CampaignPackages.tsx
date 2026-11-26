"use client";

import React from "react";
import { Check, Clock, Sparkles, ArrowRight, ShieldCheck, FileVideo, Layers } from "lucide-react";
import { campaignPackages, CampaignPackage, packageInclusionsNote } from "@/data/packages";

interface CampaignPackagesProps {
  onSelectPackage?: (pkgId: CampaignPackage["id"]) => void;
  selectedPackageId?: CampaignPackage["id"];
}

export const CampaignPackages: React.FC<CampaignPackagesProps> = ({
  onSelectPackage,
  selectedPackageId,
}) => {
  const handleChoose = (id: CampaignPackage["id"]) => {
    if (onSelectPackage) {
      onSelectPackage(id);
    }
    const inquiryElem = document.getElementById("inquiry");
    if (inquiryElem) {
      inquiryElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#inquiry";
    }
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#0A0D14]" id="packages" aria-label="Campaign Packages">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#D4FF3A] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Introductory Studio Packages</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#FAF8F5] tracking-tight">
            Complete video systems.
            <br />
            <span className="text-[#D4FF3A]">Ready for every screen.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#C8C2B7] leading-relaxed">
            One master film is rarely enough. Every package delivers a landscape flagship plus matching social edits exported in 16:9, 1:1, and 9:16.
          </p>

          {/* Quick trust reassurance */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-[#D4FF3A]">
              <ShieldCheck className="w-4 h-4" />
              100% Commercial Broadcast Rights
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              2 Consolidated Revision Rounds
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              Multi-Format Social Exports
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {campaignPackages.map((pkg) => {
            const isFeatured = Boolean(pkg.featured);
            const isChosen = selectedPackageId === pkg.id;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-gradient-to-b from-[#131724] to-[#0D101A] border-2 border-[#D4FF3A] shadow-lime-glow -translate-y-1.5 z-20"
                    : "bg-[#0E111A] border border-white/[0.08] hover:border-white/20 shadow-card"
                }`}
              >
                {/* Featured Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-md ${
                        isFeatured
                          ? "bg-[#D4FF3A] text-black"
                          : "bg-surface-hover text-slate-200 border border-white/20"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Top Details */}
                <div>
                  <div className="space-y-1 mb-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-white/[0.08] space-y-1.5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        ${pkg.price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">USD one time</span>
                    </div>

                    {/* Plain Language Metric: 1 launch film · 3 social edits · 3 formats per edit */}
                    <div className="pt-2">
                      <p className="text-xs font-semibold text-[#D4FF3A]">
                        {pkg.headlineSummary}
                      </p>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {pkg.filesSummary}
                      </p>
                    </div>
                  </div>

                  {/* Turnaround & Scope */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.04] mb-6 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Estimated turnaround:</span>
                    <span className="font-semibold text-white flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{pkg.turnaround}</span>
                    </span>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Deliverables included:
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-snug">
                          <Check className="w-4 h-4 text-[#D4FF3A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Edits Breakdown */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] mb-6 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Distinct Social Edits:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.socialEditsList.map((edit, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-white/[0.06] text-slate-300">
                          {edit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6 border-t border-white/[0.06] space-y-3">
                  <button
                    type="button"
                    onClick={() => handleChoose(pkg.id)}
                    className={`w-full py-3.5 px-5 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                      isFeatured
                        ? "bg-[#D4FF3A] hover:bg-[#C2F028] text-black shadow-lime-glow"
                        : "bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.1]"
                    }`}
                  >
                    <span>{isChosen ? "Selected — Continue below" : `Choose ${pkg.name}`}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    2 consolidated revision rounds included
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inclusions Scope Footer */}
        <div className="mt-12 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] max-w-3xl mx-auto text-center">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Standard Scope:</strong> {packageInclusionsNote}
          </p>
        </div>

      </div>
    </section>
  );
};

export default CampaignPackages;
