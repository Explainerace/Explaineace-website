import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  KeyRound,
  FileText,
  Video,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Layers,
} from "lucide-react";
import { processSteps, processFaqs } from "@/data/process";
import { ProcessInfographic } from "@/components/ProcessInfographic";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Production Process | From Product to Polished Video",
  description:
    "Explore the 5-stage interactive production pipeline Ali uses to turn complex software into clear, high-converting video walkthroughs and tutorials.",
};

const ICONS = [KeyRound, FileText, Video, CheckCircle2];

export default function ProcessPage() {
  return (
    <div className="pt-28 sm:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Production Framework</span>
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            From product to polished video.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A battle-tested production sequence designed for speed, clarity, and zero hassle. Explore the interactive production pipeline below to see how your interface transforms from raw screen capture into a master video.
          </p>
        </div>

        {/* 1. Centerpiece: Interactive Visual Infographic Animation */}
        <div className="mb-24">
          <ProcessInfographic />
        </div>

        {/* 2. Detailed Breakdown Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
            Step-by-Step Breakdown
          </span>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-white">
            What happens behind each stage
          </h2>
          <p className="mt-2 text-slate-400 text-sm">
            Everything is structured so you get maximum quality with minimal time required from your product team.
          </p>
        </div>

        {/* Detailed Timeline Visuals */}
        <div className="space-y-8 mb-24 max-w-5xl">
          {processSteps.map((step, idx) => {
            const Icon = ICONS[idx] || CheckCircle2;
            return (
              <div
                key={step.number}
                className="group relative p-8 sm:p-10 rounded-3xl bg-surface-card border border-white/[0.08] hover:border-brand-500/40 transition-all duration-300 shadow-card"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                  {/* Step Badge */}
                  <div className="shrink-0 flex sm:flex-col items-center gap-3">
                    <span className="font-mono text-4xl sm:text-5xl font-extrabold text-white/25 group-hover:text-brand-400 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-600/10 border border-brand-500/20 text-brand-400 flex items-center justify-center group-hover:bg-brand-600/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-400 border border-white/[0.05]">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-300 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>

                    <div className="pt-3 flex items-center gap-2 text-xs font-medium text-slate-400">
                      <span className="text-accent-cyan font-semibold">Key Deliverable:</span>
                      <span className="text-slate-200">{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQs Section */}
        <div className="mb-20 max-w-4xl">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
              Common Questions
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-slate-400 text-sm">
              Answers regarding product access, revisions, voiceover, and platform ordering.
            </p>
          </div>

          <div className="space-y-4">
            {processFaqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-surface-card border border-white/[0.06] space-y-2"
              >
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
}
