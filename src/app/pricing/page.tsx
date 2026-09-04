import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Check,
  Clock,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
} from "lucide-react";
import { pricingTiers, pricingFaqs } from "@/data/pricing";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppIcon, UpworkIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pricing | Transparent SaaS & Software Video Rates",
  description:
    "Simple, fixed-price packages for software walkthroughs, SaaS product tours, and animated explainers. From $99 for under 60 seconds to comprehensive 4K productions.",
};

export default function PricingPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-accent-cyan/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Simple, Predictable Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Transparent pricing for software teams.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Zero hidden fees, zero agency markups. Fixed-rate production packages for software walkthroughs, SaaS platform tours, and animated explainers.
          </p>

          {/* Quick trust reassurance */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              100% Commercial Broadcast Rights
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <RotateCcw className="w-3.5 h-3.5 text-brand-400" />
              Revisions Included in Every Tier
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Fast 48h to 5-Day Turnaround
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {pricingTiers.map((tier) => {
            const isPopular = Boolean(tier.popular);

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-gradient-to-b from-[#141828] to-surface-card border-2 border-brand-500 shadow-glow-lg -translate-y-1"
                    : "bg-surface-card border border-white/[0.08] hover:border-white/20 shadow-card"
                }`}
              >
                {/* Popular / Badge Flag */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-md ${
                        isPopular
                          ? "bg-gradient-to-r from-brand-500 to-indigo-500 text-white"
                          : "bg-surface-hover text-accent-cyan border border-accent-cyan/30"
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Top Section */}
                <div>
                  <div className="space-y-1 mb-4">
                    <h2 className="text-xl font-bold text-white tracking-tight">
                      {tier.name}
                    </h2>
                    <p className="text-xs font-medium text-brand-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{tier.duration}</span>
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="my-6 pb-6 border-b border-white/[0.08] flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      / per video
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  {/* Ideal For */}
                  <div className="p-3 rounded-xl bg-surface-subtle/70 border border-white/[0.04] mb-6">
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Best For
                    </span>
                    <p className="text-xs text-slate-200">
                      {tier.idealFor}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="block text-xs font-semibold text-white uppercase tracking-wider">
                      Included in package:
                    </span>
                    <ul className="space-y-2.5">
                      {tier.features.map((feat, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs text-slate-300 leading-snug"
                        >
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action & Meta */}
                <div className="space-y-4 pt-6 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{tier.turnaround}</span>
                    </span>
                    <span className="text-emerald-400 font-medium">
                      {tier.revisions}
                    </span>
                  </div>

                  <Link
                    href={`/contact?package=${tier.id}&price=${encodeURIComponent(tier.price)}`}
                    className={`w-full py-3.5 px-5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                      isPopular
                        ? "bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-glow hover:shadow-glow-lg"
                        : "bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.1]"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/923139110721?text=Hi%20Ali,%20I%20am%20interested%20in%20the%20${encodeURIComponent(tier.name)}%20(${encodeURIComponent(tier.price)}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center block text-[11px] text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    Quick WhatsApp inquiry →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment & Contract Methods */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-10 rounded-3xl bg-surface-card border border-white/[0.08] shadow-card">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
              Safe & Flexible Payment
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              How we work together safely
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Choose the hiring method that best matches your company workflow and security requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Upwork Direct */}
            <div className="p-6 rounded-2xl bg-surface-subtle border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  0% Buyer Fee
                </span>
                <UpworkIcon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Upwork Direct Contract
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full Upwork escrow and milestone payment protection, with **0% client marketplace fees** on direct contracts.
              </p>
            </div>

            {/* Payoneer Direct */}
            <div className="p-6 rounded-2xl bg-surface-subtle border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand-300 bg-brand-500/10 px-2.5 py-1 rounded-full border border-brand-500/20">
                  Global Wire & Card
                </span>
                <ShieldCheck className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Payoneer Invoicing
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Official business invoice with secure payment via corporate credit card, ACH, or local bank wire transfer.
              </p>
            </div>

            {/* Fiverr Profile */}
            <div className="p-6 rounded-2xl bg-surface-subtle border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  4.8★ (157 Reviews)
                </span>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Fiverr Level 2
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prefer standard freelance platform ordering? Hire through our vetted Fiverr profiles with verified track record.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="mt-16 sm:mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Common questions about pricing & delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingFaqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-surface-card border border-white/[0.06] space-y-2"
              >
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                  <h3 className="text-sm font-semibold text-white">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-6.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-900/40 via-surface-card to-indigo-950/40 border border-brand-500/30 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need a multi-video bundle or ongoing product updates?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            If you need an entire tutorial series, feature update retainer, or custom animated explainer, let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-glow transition-all"
            >
              Get a Custom Quote
            </Link>
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
