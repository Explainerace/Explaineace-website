import React from "react";
import Link from "next/link";
import {
  MonitorPlay,
  Layers,
  Smartphone,
  GraduationCap,
  Sparkles,
  Laptop,
  ArrowRight,
  Bot,
  Video,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";

interface CategoryCard {
  title: string;
  description: string;
  priceTag?: string;
  icon: React.ElementType;
  filterSlug: string;
}

const CARDS: CategoryCard[] = [
  {
    title: "AI UGC & Product Ads",
    description:
      "High-converting short ads featuring hyper-realistic AI creators, kinetic captions, and product motion for TikTok, Reels, & Shorts.",
    priceTag: "$200 – $300 / ad",
    icon: Bot,
    filterSlug: "AI UGC & Product Ads",
  },
  {
    title: "Fancy SaaS Walkthroughs",
    description:
      "Polished platform tours with dynamic 3D focal zooms, cursor smoothing, click ripples, and spotlight UI framing.",
    priceTag: "$220 / 60 seconds",
    icon: Layers,
    filterSlug: "SaaS",
  },
  {
    title: "Simple Screencast Tutorials",
    description:
      "Clean, high-definition screen recording tutorials without fancy animations. Focused on pure instruction and fast delivery.",
    priceTag: "$120 / 60 seconds",
    icon: Video,
    filterSlug: "Tutorials",
  },
  {
    title: "Custom UI Motion Explainers",
    description:
      "Bespoke SaaS explainers featuring custom 2D/3D vector UI recreations, abstract flows, and cinematic animations.",
    priceTag: "$800 – $1,200 / scope",
    icon: Sparkles,
    filterSlug: "Explainers",
  },
  {
    title: "Mobile App Demonstrations",
    description:
      "Fluid demonstrations of iOS & Android apps with native touch gesture ripples and device frame mockups.",
    priceTag: "Vertical & Landscape",
    icon: Smartphone,
    filterSlug: "Mobile Apps",
  },
  {
    title: "Training & Knowledge Bases",
    description:
      "Structured learning modules and SOP guides for customer success teams, employee onboarding, and academy centers.",
    priceTag: "Batch Discounts Available",
    icon: GraduationCap,
    filterSlug: "Training",
  },
];

export const WhatICreate: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-surface/50 border-y border-white/[0.04] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
            Core Production Focus
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Videos built to make software easier to understand.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Every product has unique complexities. I craft targeted video assets designed specifically for your audience&apos;s technical familiarity.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={(idx % 3) * 90} className="h-full">
              <Spotlight
                className="h-full group relative p-7 rounded-2xl bg-surface-card border border-white/[0.06] hover:border-brand-500/40 transition-all duration-300 hover:shadow-card hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-500/20 text-brand-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-600/20 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {card.priceTag && (
                      <span className="text-[11px] font-bold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-2.5 py-1 rounded-full shadow-sm">
                        {card.priceTag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-brand-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <Link
                    href={`/work?category=${encodeURIComponent(card.filterSlug)}`}
                    className="text-xs font-medium text-slate-400 group-hover:text-brand-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Browse {card.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Spotlight>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
