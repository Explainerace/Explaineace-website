"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const homeFaqs = [
  {
    q: "How do I hire a software explainer video specialist?",
    a: "Hiring a software explainer video specialist at EXPLAINERACE is simple and transparent. You don't need a finished script or storyboard to get started. Just share your website or staging app URL and a bulleted list of the core features or workflow you want demonstrated. We review your interface, agree on the ideal format (simple screencast, SaaS walkthrough, AI ad, or custom UI motion), draft a focused script, record in native 4K, and deliver your draft in 48 to 72 hours. You can hire us directly via Upwork Escrow (0% buyer fee), Payoneer invoice, or through our vetted Level 2 Fiverr profile.",
  },
  {
    q: "What does a SaaS walkthrough video cost?",
    a: "Our SaaS walkthrough videos cost $220 per 60 seconds of finished runtime. This tier includes 4K screen recording, dynamic 3D focal zooms on key UI actions, stabilized bezier cursor tracking, click ripple highlights, sleek device framing, professional studio voiceover narration, and 2 revision rounds with 100% full commercial broadcast rights. For larger projects or multi-minute walkthroughs, inbox us for custom bundle discounts.",
  },
  {
    q: "How long does a 60-second screencast tutorial take?",
    a: "A 60-second simple screencast tutorial is typically delivered within 24 to 48 hours. At $120 per 60 seconds, it's our fastest turnaround service—focused on pure instructional clarity, crisp 1080p/4K screen recording, synchronized studio voiceover narration, and clean pacing with zero visual distractions. It's ideal for customer support centers, knowledge base tutorials, and quick feature updates.",
  },
];

export const HomeFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-surface-dark border-t border-white/[0.06]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
            Got Questions?
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Everything you need to know about hiring a software video specialist, pricing, and turnaround times.
          </p>
        </div>

        <div className="space-y-4">
          {homeFaqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? "bg-[#101422]/90 border-brand-500/40 shadow-glow/10"
                    : "bg-surface-card border-white/[0.06] hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <div className="flex items-start gap-3.5">
                    <HelpCircle
                      className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${
                        isOpen ? "text-accent-cyan" : "text-brand-400"
                      }`}
                    />
                    <h3 className="text-base sm:text-lg font-bold text-white pr-2">
                      {faq.q}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="shrink-0 p-1.5 rounded-full bg-white/[0.05] text-slate-300 hover:text-white"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-slate-300 text-sm leading-relaxed pl-14 sm:pl-15 border-t border-white/[0.04]">
                        <p className="pt-3">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group"
          >
            <span>View complete pricing breakdown &amp; FAQ</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
