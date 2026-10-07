import React from "react";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";

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
          {homeFaqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 rounded-2xl bg-surface-card border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300"
            >
              <h3 className="text-base sm:text-lg font-bold text-white flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group"
          >
            <span>View complete pricing breakdown & FAQ</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
