"use client";

import React, { useState } from "react";
import {
  publishingOptions,
  PublishingOption,
  campaignPackages,
} from "@/data/packages";

interface PublishingOptionsProps {
  selectedPublishingId?: PublishingOption["id"];
  onSelectPublishing?: (id: PublishingOption["id"]) => void;
  selectedPackageId?: string;
}

export default function PublishingOptions({
  selectedPublishingId = "launch",
  onSelectPublishing,
  selectedPackageId = "product-launch",
}: PublishingOptionsProps) {
  const [activeTab, setActiveTab] = useState<"calendar" | "scope">("calendar");

  const currentPkg =
    campaignPackages.find((p) => p.id === selectedPackageId) ||
    campaignPackages[1];

  const handleSelect = (id: PublishingOption["id"]) => {
    if (onSelectPublishing) {
      onSelectPublishing(id);
    }
  };

  // Sample calendar data for the $598 combination (Product Launch $499 + Launch Publishing $99)
  const calendarSchedule = [
    {
      period: "T-3 Days",
      phase: "Teaser",
      phaseBadge: "Pre-Launch Runway",
      badgeColor: "border-sky-500/30 text-sky-400 bg-sky-950/40",
      asset: "Teaser Edit (1:1 & 9:16 cuts)",
      channels: ["X / Twitter", "LinkedIn"],
      placementsCount: 2,
      objective:
        "Build anticipation with the 15s motion teaser. Hook followers and link early access signup.",
    },
    {
      period: "Launch Day",
      phase: "Announcement",
      phaseBadge: "Peak Conversion",
      badgeColor: "border-accent-lime/40 text-accent-lime bg-accent-lime/10",
      asset: "Launch Master Film (16:9) + Thread Clip",
      channels: ["X / Twitter", "LinkedIn"],
      placementsCount: 2,
      objective:
        "Drive instant traffic to Product Hunt or landing page with the main film and launch story thread.",
    },
    {
      period: "Day +5",
      phase: "Feature Spotlight",
      phaseBadge: "Mid-Campaign Retention",
      badgeColor: "border-purple-500/30 text-purple-400 bg-purple-950/40",
      asset: "Spotlight Edit (16:9 & 9:16 cuts)",
      channels: ["X / Twitter", "LinkedIn"],
      placementsCount: 2,
      objective:
        "Re-engage users who saw the launch announcement by zooming into the core workflow that saves them hours.",
    },
  ];

  return (
    <section
      id="publishing"
      className="relative py-24 sm:py-32 border-t border-white/[0.08] bg-[#0A0B0E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-white/[0.04] border border-white/[0.1] text-accent-lime mb-5">
            <span>Step 02</span>
            <span className="text-white/30">•</span>
            <span>Optional Distribution</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-warm-50 font-display">
            Who hits publish?
          </h2>

          <p className="mt-5 text-base sm:text-xl text-warm-300 leading-relaxed font-light">
            Once your video campaign is approved, you can publish internally with
            our organized assets and captions, or have me handle the launch
            calendar and scheduling for you.
          </p>
        </div>

        {/* 3 Publishing Options Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {publishingOptions.map((option) => {
            const isSelected = selectedPublishingId === option.id;

            return (
              <div
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`relative rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#14161C] border-2 border-accent-lime shadow-[0_0_30px_rgba(212,255,58,0.12)] -translate-y-1"
                    : "bg-[#101217] border border-white/[0.08] hover:border-white/[0.2] hover:bg-[#13151B]"
                }`}
              >
                {/* Radio selection indicator */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-warm-400">
                      Option {option.id === "self" ? "A" : option.id === "launch" ? "B" : "C"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-warm-50 mt-1">
                      {option.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-semibold px-2.5 py-1 rounded-full ${
                        isSelected
                          ? "bg-accent-lime text-black"
                          : "bg-white/[0.06] text-warm-200 border border-white/[0.08]"
                      }`}
                    >
                      {option.priceLabel}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected
                          ? "border-accent-lime bg-accent-lime"
                          : "border-white/30 bg-transparent"
                      }`}
                    >
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-black" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-warm-300 leading-relaxed mb-6">
                  {option.summary}
                </p>

                {/* Included Checklist */}
                <div className="pt-6 border-t border-white/[0.06] space-y-3 mb-6 flex-1">
                  <div className="text-xs uppercase font-mono tracking-wider text-warm-400 mb-2">
                    Included with this choice:
                  </div>
                  {option.includedDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-warm-200"
                    >
                      <svg
                        className="w-4 h-4 text-accent-lime shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Card footer / Selection Button */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-warm-400 font-mono">
                    {option.id === "self"
                      ? "Zero extra fee"
                      : option.id === "launch"
                      ? "2 agreed accounts · 2 wks"
                      : "Monthly retainer"}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(option.id);
                    }}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                      isSelected
                        ? "bg-accent-lime text-black"
                        : "bg-white/[0.08] text-warm-200 hover:bg-white/[0.14]"
                    }`}
                  >
                    {isSelected ? "Selected" : "Select this"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Placement Definition Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-warm-300">
          <div className="flex items-start gap-3">
            <span className="text-accent-lime text-lg font-mono">ℹ</span>
            <div>
              <span className="font-semibold text-warm-100">
                Scope clarity:
              </span>{" "}
              One placement means one post on one agreed account (e.g. X or
              LinkedIn). New video production, paid advertising ad spend, and
              community or inbox management are separately scoped.
            </div>
          </div>
          <a
            href="#inquiry"
            className="shrink-0 text-accent-lime hover:underline font-mono text-xs"
          >
            Ask about custom publishing →
          </a>
        </div>

        {/* Sample Launch Calendar for the $598 Combination */}
        <div className="rounded-3xl border border-white/[0.1] bg-[#0E1015] p-6 sm:p-10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-lime mb-2">
                <span>Sample Launch Runway</span>
                <span>•</span>
                <span>The $598 Package in Practice</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-warm-50 font-display">
                Product Launch ($499) + Launch Publishing ($99)
              </h3>
              <p className="mt-2 text-sm sm:text-base text-warm-300 max-w-2xl">
                3 distinct edits distributed across 2 channels (e.g. X &
                LinkedIn) delivers <strong className="text-warm-100">6 high-impact organic placements</strong> without
                fatiguing your audience with repetitive clips.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 bg-black/40 p-1.5 rounded-xl border border-white/[0.08]">
              <button
                type="button"
                onClick={() => setActiveTab("calendar")}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                  activeTab === "calendar"
                    ? "bg-accent-lime text-black font-semibold"
                    : "text-warm-300 hover:text-white"
                }`}
              >
                Launch Calendar
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("scope")}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                  activeTab === "scope"
                    ? "bg-accent-lime text-black font-semibold"
                    : "text-warm-300 hover:text-white"
                }`}
              >
                Deliverables Math
              </button>
            </div>
          </div>

          {activeTab === "calendar" ? (
            <div className="mt-8">
              {/* Desktop Timeline Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08] text-xs font-mono uppercase text-warm-400">
                      <th className="pb-4 font-normal">Timing</th>
                      <th className="pb-4 font-normal">Phase</th>
                      <th className="pb-4 font-normal">Video Asset Used</th>
                      <th className="pb-4 font-normal">Channels</th>
                      <th className="pb-4 font-normal text-right">Placements</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {calendarSchedule.map((row, idx) => (
                      <tr key={idx} className="group hover:bg-white/[0.02]">
                        <td className="py-5 font-mono text-warm-300 font-medium">
                          {row.period}
                        </td>
                        <td className="py-5">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-mono border ${row.badgeColor}`}
                          >
                            {row.phase}
                          </span>
                        </td>
                        <td className="py-5">
                          <div className="font-semibold text-warm-100">
                            {row.asset}
                          </div>
                          <div className="text-xs text-warm-400 mt-0.5">
                            {row.objective}
                          </div>
                        </td>
                        <td className="py-5">
                          <div className="flex gap-1.5">
                            {row.channels.map((ch, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded bg-white/[0.06] text-warm-300 text-xs font-mono"
                              >
                                {ch}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-5 text-right font-mono font-bold text-accent-lime">
                          {row.placementsCount} placements
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-white/[0.1] text-warm-200">
                      <td colSpan={4} className="pt-4 font-medium">
                        Total Campaign Runway Placements
                      </td>
                      <td className="pt-4 text-right font-mono font-bold text-base text-accent-lime">
                        6 Placements
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Mobile Agenda View */}
              <div className="md:hidden space-y-4">
                {calendarSchedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-warm-200">
                        {item.period}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-mono border ${item.badgeColor}`}
                      >
                        {item.phase}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-warm-100">
                        {item.asset}
                      </h4>
                      <p className="text-xs text-warm-400 mt-1">
                        {item.objective}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] text-xs">
                      <div className="flex gap-1">
                        {item.channels.map((ch, i) => (
                          <span
                            key={i}
                            className="px-1.5 py-0.5 rounded bg-white/[0.06] text-warm-300 font-mono"
                          >
                            {ch}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-accent-lime font-bold">
                        {item.placementsCount} placements
                      </span>
                    </div>
                  </div>
                ))}

                <div className="p-3 rounded-lg bg-accent-lime/10 border border-accent-lime/20 flex items-center justify-between text-xs font-mono">
                  <span className="text-warm-200">Total Launch Placements:</span>
                  <span className="text-accent-lime font-bold">6 across 2 accounts</span>
                </div>
              </div>
            </div>
          ) : (
            /* Deliverables Math view */
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xs font-mono text-warm-400 uppercase mb-2">
                  1. Production Assets
                </div>
                <div className="text-2xl font-bold text-warm-100 mb-1">
                  10 Video Files
                </div>
                <p className="text-xs text-warm-300 leading-relaxed">
                  1 landscape 4K master + 3 distinct edits × 3 formats (16:9,
                  1:1, 9:16) with on-screen captions.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xs font-mono text-warm-400 uppercase mb-2">
                  2. Channel Strategy
                </div>
                <div className="text-2xl font-bold text-warm-100 mb-1">
                  2 Agreed Accounts
                </div>
                <p className="text-xs text-warm-300 leading-relaxed">
                  Platform-adapted post copy tailored for each network (e.g.
                  LinkedIn technical audience vs. X viral hooks).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xs font-mono text-warm-400 uppercase mb-2">
                  3. Total Investment
                </div>
                <div className="text-2xl font-bold text-accent-lime mb-1">
                  $598 USD
                </div>
                <p className="text-xs text-warm-300 leading-relaxed">
                  $499 Product Launch production + $99 launch publishing. No
                  hidden platform fees or setup surprise.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
