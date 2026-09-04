import React from "react";
import Link from "next/link";
import { KeyRound, FileText, Video, CheckCircle2, ArrowRight } from "lucide-react";
import { processSteps } from "@/data/process";

const ICONS = [KeyRound, FileText, Video, CheckCircle2];

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 relative bg-surface-card/40 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
            How It Works
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            From product to polished video.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            A frictionless, transparent 4-stage workflow designed for busy product managers, founders, and customer success leaders.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => {
            const Icon = ICONS[idx] || CheckCircle2;
            return (
              <div
                key={step.number}
                className="group relative p-7 rounded-2xl bg-surface-card border border-white/[0.06] hover:border-brand-500/40 transition-all duration-300 hover:shadow-card hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-white/20 group-hover:text-brand-400 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-600/10 border border-brand-500/20 text-brand-400 flex items-center justify-center group-hover:bg-brand-600/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-brand-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block mb-1">
                    Key Deliverable
                  </span>
                  <p className="text-xs font-medium text-slate-300">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group"
          >
            <span>Explore the complete production methodology & FAQs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
