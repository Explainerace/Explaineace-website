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
  ExternalLink,
  Video,
} from "lucide-react";
import { pricingTiers, pricingFaqs } from "@/data/pricing";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppIcon, UpworkIcon } from "@/components/Icons";
import { PricingCalculator } from "@/components/PricingCalculator";
import CampaignPackages from "@/components/studio/CampaignPackages";
import PublishingOptions from "@/components/studio/PublishingOptions";

export const metadata: Metadata = {
  title: "SaaS Video Campaign Packages & Single-Video Pricing | ExplainerAce",
  description:
    "Complete video systems from $249: 1 landscape master + tailored social edits in 16:9, 1:1, and 9:16. Or single-video rates from $120. View transparent rates.",
  alternates: {
    canonical: "https://explainerace.com/pricing",
  },
  openGraph: {
    title: "SaaS Video Campaign Packages & Single-Video Pricing | ExplainerAce",
    description:
      "Complete video systems from $249: 1 landscape master + tailored social edits in 16:9, 1:1, and 9:16. Or single-video rates from $120. View transparent rates.",
    url: "https://explainerace.com/pricing",
    type: "website",
    images: [
      {
        url: "https://img.youtube.com/vi/ruSnnvafJdc/maxresdefault.jpg",
        width: 1280,
        height: 720,
        alt: "ExplainerAce Campaign Packages & Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Video Campaign Packages & Single-Video Pricing | ExplainerAce",
    description:
      "Complete video systems from $249: 1 landscape master + tailored social edits in 16:9, 1:1, and 9:16. Or single-video rates from $120. View transparent rates.",
    images: ["https://img.youtube.com/vi/ruSnnvafJdc/maxresdefault.jpg"],
  },
};

export default function PricingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pt-24 sm:pt-32 pb-24 relative overflow-hidden bg-[#07080B]">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-lime/[0.04] blur-[150px] rounded-full" />
        </div>

        {/* 1. Featured Campaign Packages */}
        <CampaignPackages />

        {/* 2. Optional Distribution & Publishing */}
        <PublishingOptions />

        {/* 3. Standalone Single-Video Section: "Need just one video?" */}
        <section
          id="single-videos"
          className="relative py-20 sm:py-28 border-t border-white/[0.08] bg-[#0A0D14]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-accent-lime text-xs font-mono uppercase tracking-wider mb-4">
                <Video className="w-3.5 h-3.5 text-accent-lime" />
                <span>Standalone Video Rates</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-warm-50 font-display">
                Need just one video?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-warm-300 leading-relaxed max-w-2xl mx-auto">
                If you only need a single instructional screencast, focused
                walkthrough, or custom animated explainer without the
                multi-format campaign package, choose a standalone tier below.
              </p>

              {/* Quick trust reassurance */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-warm-400">
                <span className="flex items-center gap-1.5 text-accent-lime">
                  <ShieldCheck className="w-4 h-4" />
                  100% Commercial Broadcast Rights
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-warm-300">
                  <RotateCcw className="w-3.5 h-3.5 text-warm-400" />
                  2 Rounds of Revisions Included
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-warm-300">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Fast Turnarounds (2–4 Days)
                </span>
              </div>
            </div>

            {/* Single Video Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
              {pricingTiers.map((tier) => {
                const isPopular = Boolean(tier.popular);

                return (
                  <div
                    key={tier.id}
                    className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                      isPopular
                        ? "bg-[#14161C] border-2 border-accent-lime shadow-[0_0_25px_rgba(212,255,58,0.15)] -translate-y-1"
                        : "bg-[#101217] border border-white/[0.08] hover:border-white/20 shadow-card"
                    }`}
                  >
                    {/* Badge Flag */}
                    {tier.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span
                          className={`px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-md ${
                            isPopular
                              ? "bg-accent-lime text-black"
                              : "bg-surface-hover text-warm-200 border border-white/20"
                          }`}
                        >
                          {tier.badge}
                        </span>
                      </div>
                    )}

                    {/* Top Section */}
                    <div>
                      <div className="space-y-1 mb-4">
                        <h3 className="text-xl font-bold text-warm-50 tracking-tight">
                          {tier.name}
                        </h3>
                        <p className="text-xs font-medium text-warm-400 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{tier.duration}</span>
                        </p>
                      </div>

                      {/* Price Display */}
                      <div className="my-6 pb-6 border-b border-white/[0.08] space-y-1.5">
                        <div className="flex items-baseline gap-1.5 flex-wrap">
                          <span className="text-2xl sm:text-3xl font-extrabold text-warm-50 tracking-tight font-mono">
                            {tier.price}
                          </span>
                          {tier.priceUnit && (
                            <span className="text-xs text-warm-400 font-medium">
                              {tier.priceUnit}
                            </span>
                          )}
                        </div>
                        {tier.discountNote && (
                          <p className="text-[11px] text-accent-lime font-medium leading-tight">
                            {tier.discountNote}
                          </p>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-warm-300 leading-relaxed mb-6">
                        {tier.description}
                      </p>

                      {/* Ideal For */}
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] mb-6">
                        <span className="block text-[10px] font-semibold text-warm-400 uppercase tracking-wider mb-1">
                          Best For
                        </span>
                        <p className="text-xs text-warm-200">{tier.idealFor}</p>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3 mb-8">
                        <span className="block text-xs font-semibold text-warm-100 uppercase tracking-wider">
                          Included in tier:
                        </span>
                        <ul className="space-y-2.5">
                          {tier.features.map((feat, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-xs text-warm-300 leading-snug"
                            >
                              <Check className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action & Meta */}
                    <div className="space-y-4 pt-6 border-t border-white/[0.06]">
                      <div className="flex items-center justify-between text-xs text-warm-400">
                        <span className="flex items-center gap-1 font-mono">
                          <Clock className="w-3.5 h-3.5 text-warm-500" />
                          <span>{tier.turnaround}</span>
                        </span>
                        <span className="text-accent-lime font-medium">
                          {tier.revisions}
                        </span>
                      </div>

                      <Link
                        href={`/contact?package=${tier.id}`}
                        className={`w-full py-3.5 px-5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                          isPopular
                            ? "bg-accent-lime text-black hover:bg-accent-limeHover shadow-[0_0_15px_rgba(212,255,58,0.2)]"
                            : "bg-white/[0.08] hover:bg-white/[0.14] text-warm-100 border border-white/[0.1]"
                        }`}
                      >
                        <span>{tier.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={`https://wa.me/923139110721?text=Hi%20Ali,%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                          tier.name
                        )}%20(${encodeURIComponent(tier.price)}).`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center block text-[11px] text-warm-400 hover:text-accent-lime transition-colors"
                      >
                        Quick WhatsApp inquiry →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Interactive Pricing & ROI Calculator */}
          <div className="mt-16 sm:mt-24">
            <PricingCalculator />
          </div>

          {/* Payment & Contract Methods */}
          <div className="mt-16 sm:mt-24 p-8 sm:p-10 rounded-3xl bg-[#0E1015] border border-white/[0.08] shadow-card">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-accent-lime">
                Safe & Flexible Invoicing
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-warm-50 mt-1 font-display">
                How we work together safely
              </h2>
              <p className="mt-2 text-sm text-warm-300">
                Choose the payment method that best matches your company
                accounting and security policies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Upwork Direct */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    0% Client Fee
                  </span>
                  <UpworkIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-warm-50">
                  Upwork Direct Contract
                </h3>
                <p className="text-xs text-warm-400 leading-relaxed">
                  Full escrow and milestone release with 0% marketplace fees on
                  direct contracts.
                </p>
              </div>

              {/* Payoneer Direct */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-accent-lime bg-accent-lime/10 px-2.5 py-1 rounded-full border border-accent-lime/20">
                    Global Wire & Card
                  </span>
                  <ShieldCheck className="w-5 h-5 text-accent-lime" />
                </div>
                <h3 className="text-lg font-semibold text-warm-50">
                  Business Invoicing (ACH / Wire)
                </h3>
                <p className="text-xs text-warm-400 leading-relaxed">
                  Official commercial invoice with corporate credit card, ACH,
                  or international bank wire transfer.
                </p>
              </div>

              {/* Fiverr Gig & Profile */}
              <a
                href={siteConfig.fiverr.gigUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-accent-lime/40 transition-all duration-200 space-y-3 group block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                    4.8★ (157 Reviews)
                  </span>
                  <ExternalLink className="w-4 h-4 text-warm-400 group-hover:text-accent-lime transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-warm-50 group-hover:text-accent-lime transition-colors flex items-center justify-between">
                  <span>Fiverr Gig Order</span>
                  <span className="text-[10px] uppercase font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Level 2
                  </span>
                </h3>
                <p className="text-xs text-warm-400 leading-relaxed">
                  Prefer platform escrow? Hire directly through my active Fiverr
                  Gig with 150+ verified client ratings.
                </p>
                <div className="pt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-lime group-hover:underline">
                  <span>Order on Fiverr Gig</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          </div>

          {/* Pricing FAQs */}
          <div className="mt-16 sm:mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-mono uppercase tracking-wider text-accent-lime">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-warm-50 mt-1 font-display">
                Common questions about pricing & delivery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingFaqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#0E1015] border border-white/[0.06] space-y-2"
                >
                  <div className="flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                    <h3 className="text-sm font-semibold text-warm-100">
                      {faq.q}
                    </h3>
                  </div>
                  <p className="text-xs text-warm-300 leading-relaxed pl-6.5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.04] via-[#0E1015] to-white/[0.02] border border-white/[0.1] text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-warm-50 font-display">
              Ready to plan your product video campaign?
            </h2>
            <p className="text-sm text-warm-300 max-w-xl mx-auto">
              Tell me about your product and launch target. I’ll prepare your
              package breakdown and timeline within 12 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#inquiry"
                className="px-7 py-3 rounded-full bg-accent-lime hover:bg-accent-limeHover text-black text-xs font-bold shadow-[0_0_20px_rgba(212,255,58,0.2)] transition-all"
              >
                Start Campaign Inquiry
              </Link>
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.12] text-warm-100 text-xs font-semibold border border-white/[0.1] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
