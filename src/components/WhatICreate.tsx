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
} from "lucide-react";

interface CategoryCard {
  title: string;
  description: string;
  icon: React.ElementType;
  filterSlug: string;
}

const CARDS: CategoryCard[] = [
  {
    title: "Software Tutorials",
    description:
      "Step-by-step instructional screencasts that guide users through technical workflows and configuration settings.",
    icon: MonitorPlay,
    filterSlug: "Tutorials",
  },
  {
    title: "SaaS Walkthroughs",
    description:
      "High-converting platform tours designed to onboard new accounts and showcase value-driving features.",
    icon: Layers,
    filterSlug: "SaaS",
  },
  {
    title: "Mobile App Videos",
    description:
      "Fluid demonstrations of iOS and Android applications with native touch ripples and vertical-to-horizontal framing.",
    icon: Smartphone,
    filterSlug: "Mobile Apps",
  },
  {
    title: "Training Videos",
    description:
      "Structured learning modules for customer success, employee SOPs, and product education academies.",
    icon: GraduationCap,
    filterSlug: "Training",
  },
  {
    title: "Product Explainers",
    description:
      "Fast-paced overview videos summarizing product architecture, pain points, and core differentiators in 2-3 minutes.",
    icon: Sparkles,
    filterSlug: "Explainers",
  },
  {
    title: "Website & App Demos",
    description:
      "Polished website navigations and software demonstrations that turn casual visitors into registered users.",
    icon: Laptop,
    filterSlug: "Web Apps",
  },
];

export const WhatICreate: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-surface/50 border-y border-white/[0.04] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
            Core Production Focus
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Videos built to make software easier to understand.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Every product has unique complexities. I craft targeted video assets designed specifically for your audience&apos;s technical familiarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative p-7 rounded-2xl bg-surface-card border border-white/[0.06] hover:border-brand-500/40 transition-all duration-300 hover:shadow-card hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-500/20 text-brand-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-600/20 transition-all duration-300 mb-5">
                    <Icon className="w-6 h-6" />
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
