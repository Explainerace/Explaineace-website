import React from "react";
import type { Metadata } from "next";
import { VideoGrid } from "@/components/VideoGrid";
import { projects } from "@/data/projects";
import { CTA } from "@/components/CTA";
import { Layers, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Work & Video Portfolio | 21 Verified Software Demos",
  description:
    "Explore 21 software tutorials, SaaS walkthroughs, mobile app demos, and training videos produced by Ali for international product teams.",
};

export default function WorkPage() {
  return (
    <div className="pt-28 sm:pt-36">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>21 Verified Portfolio Projects</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Software Tutorials, App Demos & SaaS Walkthroughs.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Browse genuine screencast videos created for healthcare portals, fintech exchanges, AI automation tools, mobile applications, and B2B SaaS platforms.
          </p>
        </div>
      </div>

      {/* Full Video Grid with Search & Filters */}
      <VideoGrid
        projects={projects}
        isHomeView={false}
        title="All Projects"
        subtitle="Filter by application category or use search to find specific software features."
      />

      {/* Conversion Section */}
      <CTA />
    </div>
  );
}
