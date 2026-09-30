"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  Star,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  CreditCard,
  Building,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { YoutubeIcon, WhatsAppIcon, UpworkIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";
import { pricingTiers } from "@/data/pricing";

function ContactDetails() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get("package");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const matchedTier = pricingTiers.find(
    (tier) =>
      tier.id === packageParam ||
      tier.id.toLowerCase() === packageParam?.toLowerCase()
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const whatsappMessage = matchedTier
    ? `Hi Ali, I'm reaching out from explainerace.com. I'm interested in the ${matchedTier.name} (${matchedTier.price}).`
    : `Hi Ali, I'm reaching out from explainerace.com. I have a software/app video project inquiry.`;

  const emailSubject = matchedTier
    ? `Video Project Inquiry: ${matchedTier.name}`
    : `Software Video Project Inquiry - EXPLAINERACE`;

  return (
    <div className="space-y-10">
      {/* Selected Package Banner if arriving from /pricing */}
      {matchedTier && (
        <div className="p-4 sm:p-5 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-brand-600/20 text-brand-300 flex items-center justify-center font-bold shrink-0">
              <Sparkles className="w-5 h-5 text-accent-cyan" />
            </div>
            <div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-brand-400 block">
                Selected Package from Pricing
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>{matchedTier.name}</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
                  {matchedTier.price}
                </span>
              </h4>
            </div>
          </div>
          <Link
            href="/pricing"
            className="text-xs text-slate-300 hover:text-white underline font-medium self-start sm:self-auto"
          >
            Change Package &rarr;
          </Link>
        </div>
      )}

      {/* Main Grid: Direct Channels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Primary Direct Channels (WhatsApp & Email) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Primary Channel 1: WhatsApp (Instant) */}
          <div className="relative p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-surface-card to-surface-card border-2 border-emerald-500/40 shadow-glow-lg overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Recommended & Fastest Response
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                Available Daily
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Chat Directly on WhatsApp
            </h2>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Skip back-and-forth email delays. Drop a message to discuss your software, get a fast custom estimate, or confirm script and turnaround requirements immediately.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`https://wa.me/923139110721?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.99] group/btn"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Open WhatsApp Chat ({siteConfig.whatsapp.display})</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="mt-3.5 text-[11px] text-slate-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Typical reply time: <strong>under 15 minutes</strong></span>
            </p>
          </div>

          {/* Primary Channel 2: Direct Email */}
          <div className="p-7 sm:p-9 rounded-3xl bg-surface-card border border-white/[0.08] hover:border-brand-500/30 transition-all shadow-card space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                Direct Email Inbox
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Official Inquiries
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Send an Email
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Prefer formal email communication or have detailed brief documents, script drafts, or NDA requirements? Email Ali directly at:
            </p>

            {/* Email Address Highlight Bar */}
            <div className="p-4 rounded-2xl bg-surface-subtle border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="font-mono text-base sm:text-lg font-bold text-white tracking-wide break-all">
                {siteConfig.contactEmail}
              </span>

              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold border border-white/[0.1] transition-all"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-300" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
                    emailSubject
                  )}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition-all shadow-sm"
                >
                  <span>Open Email Client</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <p className="text-[11px] text-slate-400">
              Checked continuously. All inquiries receive a response within 24 business hours.
            </p>
          </div>

          {/* Helpful Briefing Checklist */}
          <div className="p-6 rounded-2xl bg-surface-subtle/70 border border-white/[0.06] space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-cyan" />
              <span>What to include in your message for a fast turnaround:</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-1.5" />
                <span>Your product or website URL</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-1.5" />
                <span>Target video duration (60s, 2m, or ads)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-1.5" />
                <span>Core user flow or features to show</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-1.5" />
                <span>Target completion deadline</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Contracts, Invoicing & Verified Profiles */}
        <div className="lg:col-span-5 space-y-6">
          {/* Upwork Direct Contract */}
          <div className="p-6 sm:p-7 rounded-3xl bg-surface-card border border-emerald-500/20 shadow-card space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                0% Client Fee
              </span>
              <UpworkIcon className="w-5 h-5 text-emerald-400" />
            </div>

            <h3 className="text-lg font-bold text-white">
              Upwork Direct Contract Protection
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              Need corporate escrow protection? I can initiate an official **Upwork Direct Contract** where you enjoy full escrow security, milestone approvals, and dispute protection while paying **0% client marketplace fees**.
            </p>

            <a
              href="https://www.upwork.com/freelancers/~015f8dfceae72b5311"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] text-white text-xs font-semibold transition-colors group"
            >
              <span>View Profile & Hire on Upwork</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Payoneer Business Invoicing */}
          <div className="p-6 sm:p-7 rounded-3xl bg-surface-card border border-white/[0.08] shadow-card space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-300 bg-brand-500/10 px-2.5 py-0.5 rounded-full border border-brand-500/20">
                Corporate Invoicing
              </span>
              <CreditCard className="w-5 h-5 text-brand-400" />
            </div>

            <h3 className="text-lg font-bold text-white">
              Payoneer Direct Invoicing
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              For registered companies and startups requiring accounting-compliant invoicing. Fast payments accepted via local bank wire (USD, EUR, GBP), corporate credit card, or ACH transfer.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Official commercial invoices generated upon project kickoff</span>
            </div>
          </div>

          {/* Fiverr Verified Profiles & Gig */}
          <div className="p-6 sm:p-7 rounded-3xl bg-surface-card border border-white/[0.08] shadow-card space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Marketplace Profiles
              </span>
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" /> 4.8★ (157 Reviews)
              </span>
            </div>

            <h3 className="text-lg font-bold text-white">
              Order via Fiverr Marketplace
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              Prefer placing an order through Fiverr? You can order directly from our active gig or check our vetted Level 2 seller profile:
            </p>

            <a
              href={siteConfig.fiverr.gigUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-500/15 to-brand-500/15 hover:from-emerald-500/25 hover:to-brand-500/25 border border-emerald-500/30 transition-all block group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Featured Fiverr Gig
                </span>
                <span className="text-[10px] text-slate-300 font-medium">Level 2 Seller</span>
              </div>
              <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between mt-1">
                <span>Order on Fiverr: Software & SaaS Explainer Gig</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {siteConfig.fiverrProfiles.map((p) => (
                <a
                  key={p.username}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface-subtle hover:bg-surface-hover border border-white/[0.06] transition-colors block"
                >
                  <span className="text-[10px] text-emerald-400 font-semibold block uppercase">
                    {p.sellerLevel}
                  </span>
                  <span className="text-xs font-bold text-white hover:text-brand-300 transition-colors flex items-center justify-between mt-0.5">
                    <span>fiverr.com/{p.username}</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
            Direct Contact & Project Inquiries
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Direct access. Zero waiting.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Skip long intake forms. Reach out directly through WhatsApp for instant replies, email for briefs and proposals, or hire safely through Upwork and Fiverr.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="p-12 text-center text-slate-400 text-sm">
              Loading contact details...
            </div>
          }
        >
          <ContactDetails />
        </Suspense>
      </div>
    </div>
  );
}
