import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MonitorPlay,
  Smartphone,
  GraduationCap,
  Sparkles,
  Layers,
  CheckCircle2,
  ArrowRight,
  Video,
  Mic,
  Subtitles,
  MousePointerClick,
  ZoomIn,
} from "lucide-react";
import { services, valueAddItems } from "@/data/services";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services & Capabilities | Software Tutorials & SaaS Walkthroughs",
  description:
    "Comprehensive video production services for software, SaaS platforms, mobile apps, customer education, and product teams.",
};

const ICONS_MAP: Record<string, React.ElementType> = {
  MonitorPlay,
  Smartphone,
  GraduationCap,
  Sparkles,
  Layers,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
            Specialized Video Production Services
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Clarity for software, websites & mobile products.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every software package is built to resolve specific customer friction points—whether you need a fast-paced product explainer, an onboarding walkthrough, or an in-depth customer training series.
          </p>
        </div>

        {/* 5 Main Service Categories */}
        <div className="space-y-12 mb-24">
          {services.map((service, index) => {
            const Icon = ICONS_MAP[service.iconName] || MonitorPlay;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="p-8 sm:p-10 rounded-3xl bg-surface-card border border-white/[0.08] shadow-card hover:border-brand-500/30 transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left info */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{service.category}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {service.title}
                    </h2>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="pt-2">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                        Included Video Formats & Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat) => (
                          <div
                            key={feat}
                            className="flex items-center gap-2 text-xs sm:text-sm text-slate-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Deliverables Card */}
                  <div className="lg:col-span-5 p-6 rounded-2xl bg-surface/80 border border-white/[0.06] space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                      Standard Deliverables
                    </h3>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((deliv) => (
                        <li
                          key={deliv}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-white/[0.06]">
                      <Link
                        href="/contact"
                        className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-xs font-semibold text-white flex items-center justify-center gap-1.5 shadow-glow transition-all"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Production Add-ons / Craft Showcase */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
              Technical Foundation
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
              Every package includes full post-production tooling.
            </h2>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              No hidden fees for cursor smoothing, subtitle files, or high-definition framing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueAddItems.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-surface-card border border-white/[0.06] hover:border-brand-500/30 transition-all"
              >
                <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{val.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {val.desc}
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
