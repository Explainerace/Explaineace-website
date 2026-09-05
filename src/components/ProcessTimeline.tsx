"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ProcessInfographic } from "@/components/ProcessInfographic";

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative bg-surface-card/40 border-y border-white/[0.04] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-600/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Interactive Production Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            From product to polished video.
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Watch how raw software interfaces transform into dynamic, high-converting product walkthroughs with zero hassle for your team.
          </p>
        </div>

        {/* The Visual Infographic Engine */}
        <div className="max-w-5xl mx-auto mb-10">
          <ProcessInfographic />
        </div>

        {/* Bottom Navigation Link */}
        <div className="text-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-300 hover:text-white transition-colors group px-5 py-2.5 rounded-full bg-surface-card border border-white/[0.08] hover:border-brand-500/40 shadow-sm"
          >
            <span>Read full step-by-step breakdown & production FAQs</span>
            <ArrowRight className="w-4 h-4 text-brand-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
