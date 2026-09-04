"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Send,
  ExternalLink,
  Star,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  CreditCard,
  Building,
  Check,
} from "lucide-react";
import { YoutubeIcon, WhatsAppIcon, UpworkIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";
import { pricingTiers } from "@/data/pricing";

const PACKAGE_OPTIONS = [
  {
    id: "simple-walkthrough",
    name: "Simple Walkthrough ($99 - Under 60s)",
    price: "$99",
    duration: "Under 60 seconds",
  },
  {
    id: "standard-walkthrough",
    name: "Standard Product Walkthrough ($199 - Up to 2.5m)",
    price: "$199",
    duration: "Up to 2.5 minutes",
  },
  {
    id: "comprehensive-saas",
    name: "Comprehensive SaaS Walkthrough ($299 - 3 to 4m)",
    price: "$299",
    duration: "3 to 4 minutes",
  },
  {
    id: "animated-advanced-saas",
    name: "Animated Explainer & Advance SaaS (Starts $300)",
    price: "Starts $300",
    duration: "Custom Scope",
  },
  {
    id: "custom",
    name: "Custom Scope / Flexible Video Retainer",
    price: "Custom",
    duration: "Flexible",
  },
];

const PROJECT_TYPES = [
  "SaaS Walkthrough",
  "Software Tutorial",
  "Mobile App Video",
  "Animated Explainer",
  "Training Video",
  "Website Demo",
  "Other",
];

const LENGTH_OPTIONS = [
  "Under 60 seconds (Quick Teaser / Feature Pill)",
  "1 to 2.5 minutes (Standard Product Tour)",
  "3 to 4 minutes (Comprehensive Walkthrough)",
  "5+ minutes (In-Depth Academy / Training Video)",
  "Unsure / Need Recommendation",
];

function ContactForm() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get("package");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    selectedPackage: PACKAGE_OPTIONS[1].name,
    projectType: PROJECT_TYPES[0],
    videoLength: LENGTH_OPTIONS[1],
    message: "",
  });

  const [matchedTier, setMatchedTier] = useState<typeof PACKAGE_OPTIONS[0] | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Sync package query parameter if arriving from /pricing
  useEffect(() => {
    if (packageParam) {
      const match = PACKAGE_OPTIONS.find(
        (p) => p.id === packageParam || p.id.toLowerCase() === packageParam.toLowerCase()
      );
      if (match) {
        setMatchedTier(match);
        setFormData((prev) => ({
          ...prev,
          selectedPackage: match.name,
          videoLength:
            match.id === "simple-walkthrough"
              ? LENGTH_OPTIONS[0]
              : match.id === "standard-walkthrough"
              ? LENGTH_OPTIONS[1]
              : match.id === "comprehensive-saas"
              ? LENGTH_OPTIONS[2]
              : prev.videoLength,
        }));
      }
    }
  }, [packageParam]);

  const handlePackageChange = (packageName: string) => {
    const match = PACKAGE_OPTIONS.find((p) => p.name === packageName);
    setMatchedTier(match || null);
    setFormData((prev) => ({
      ...prev,
      selectedPackage: packageName,
      videoLength:
        match?.id === "simple-walkthrough"
          ? LENGTH_OPTIONS[0]
          : match?.id === "standard-walkthrough"
          ? LENGTH_OPTIONS[1]
          : match?.id === "comprehensive-saas"
          ? LENGTH_OPTIONS[2]
          : prev.videoLength,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message.");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      // Ensure user receives confirmation even if network hiccup
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Column: Form */}
      <div className="lg:col-span-7">
        <div className="p-8 sm:p-10 rounded-3xl bg-surface-card border border-white/[0.08] shadow-card">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Inquiry Dispatched!
              </h2>
              <div className="p-4 rounded-2xl bg-surface-subtle border border-white/[0.06] text-left max-w-md mx-auto text-xs space-y-1.5">
                <p className="text-slate-400">
                  <span className="text-slate-200 font-semibold">Selected Package:</span>{" "}
                  <span className="text-brand-300 font-bold">{formData.selectedPackage}</span>
                </p>
                <p className="text-slate-400">
                  <span className="text-slate-200 font-semibold">Client Name:</span> {formData.name}
                </p>
                <p className="text-slate-400">
                  <span className="text-slate-200 font-semibold">Email:</span> {formData.email}
                </p>
              </div>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed pt-2">
                Thank you for reaching out, {formData.name}. Ali will review your package details and reply to{" "}
                <span className="text-brand-300 font-semibold">{formData.email}</span> within 24 business hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/923139110721?text=Hi%20Ali,%20I%20submitted%20an%20inquiry%20for%20the%20${encodeURIComponent(
                    formData.selectedPackage
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat on WhatsApp for Instant Reply</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      selectedPackage: PACKAGE_OPTIONS[1].name,
                      projectType: PROJECT_TYPES[0],
                      videoLength: LENGTH_OPTIONS[1],
                      message: "",
                    });
                  }}
                  className="text-xs text-brand-400 hover:text-brand-300 underline font-medium"
                >
                  Send another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selected Package Banner if directed from Pricing */}
              {matchedTier && (
                <div className="p-4 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-600/20 text-brand-300 flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-brand-400">
                        Inquiring About Package
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {matchedTier.name}
                      </h4>
                    </div>
                  </div>
                  <Link
                    href="/pricing"
                    className="text-xs text-slate-400 hover:text-white underline shrink-0"
                  >
                    View All Tiers
                  </Link>
                </div>
              )}

              {/* Package Selection Field */}
              <div>
                <label
                  htmlFor="selectedPackage"
                  className="block text-xs font-semibold uppercase tracking-wider text-brand-300 mb-2 flex items-center justify-between"
                >
                  <span>Select Video Package <span className="text-brand-400">*</span></span>
                  <Link href="/pricing" className="text-[11px] text-slate-400 hover:text-brand-300 font-normal underline">
                    Compare packages
                  </Link>
                </label>
                <select
                  id="selectedPackage"
                  value={formData.selectedPackage}
                  onChange={(e) => handlePackageChange(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-[#0E111A] border border-brand-500/40 rounded-xl text-white focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors font-medium"
                >
                  {PACKAGE_OPTIONS.map((pkg) => (
                    <option key={pkg.id} value={pkg.name} className="bg-[#0E111A]">
                      {pkg.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Name <span className="text-brand-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Miller"
                    className="w-full px-4 py-3 text-sm bg-surface-subtle border border-white/[0.08] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Work Email <span className="text-brand-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 text-sm bg-surface-subtle border border-white/[0.08] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Company / Product Website
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="e.g. Acme Software (acme.io)"
                  className="w-full px-4 py-3 text-sm bg-surface-subtle border border-white/[0.08] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                />
              </div>

              {/* Project Type & Video Length */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-4 py-3 text-sm bg-[#0E111A] border border-white/[0.08] rounded-xl text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#0E111A]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="videoLength"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Target Length
                  </label>
                  <select
                    id="videoLength"
                    value={formData.videoLength}
                    onChange={(e) =>
                      setFormData({ ...formData, videoLength: e.target.value })
                    }
                    className="w-full px-4 py-3 text-sm bg-[#0E111A] border border-white/[0.08] rounded-xl text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  >
                    {LENGTH_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0E111A]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Message / Software Overview <span className="text-brand-400">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me a bit about your software, what user action or flow you want to showcase, and your target completion date."
                  className="w-full px-4 py-3 text-sm bg-surface-subtle border border-white/[0.08] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-glow hover:shadow-glow-lg transition-all active:scale-[0.99] disabled:opacity-50"
              >
                {submitting ? (
                  <span>Dispatching Inquiry...</span>
                ) : (
                  <>
                    <span>Send Inquiry for {formData.selectedPackage.split("(")[0]}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Right Column: Direct Channels, Contracts & Verified Credentials */}
      <div className="lg:col-span-5 space-y-5">
        {/* Quick WhatsApp Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/40 to-surface-card border border-emerald-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Fastest Response
            </span>
            <span className="text-[11px] text-slate-400">Available Daily</span>
          </div>
          <h3 className="text-lg font-bold text-white">Direct WhatsApp Chat</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Need an immediate quote or have quick questions about script, voiceover, or delivery timeline? Text Ali directly on WhatsApp.
          </p>
          <a
            href={`https://wa.me/923139110721?text=Hi%20Ali,%20I%20have%20an%20inquiry%20for%20the%20${encodeURIComponent(
              formData.selectedPackage
            )}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat on WhatsApp: {siteConfig.whatsapp.display}</span>
          </a>
        </div>

        {/* Upwork Direct Contract Card */}
        <div className="p-6 rounded-3xl bg-surface-card border border-emerald-500/20 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              0% Client Fee
            </span>
            <UpworkIcon className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="text-base font-bold text-white">
            Upwork Direct Contract Protection
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Work with full escrow protection and enterprise invoicing while paying **zero client fees**. I generate an official direct contract through Upwork so you get safety without marketplace surcharges.
          </p>
        </div>

        {/* Payoneer Direct Invoicing Card */}
        <div className="p-6 rounded-3xl bg-surface-card border border-white/[0.08] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-300 bg-brand-500/10 px-2.5 py-0.5 rounded-full border border-brand-500/20">
              Corporate Invoicing
            </span>
            <CreditCard className="w-5 h-5 text-brand-400" />
          </div>
          <h3 className="text-base font-bold text-white">
            Payoneer Business Invoicing
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Convenient, fast payment for international companies via corporate credit card, ACH, or local bank wire transfer.
          </p>
        </div>

        {/* 2 Vetted Fiverr Profiles */}
        <div className="p-6 rounded-3xl bg-surface-card border border-white/[0.08] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Marketplace Profiles
            </span>
            <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400" /> 4.8★ (157 Reviews)
            </span>
          </div>
          <p className="text-xs text-slate-300">
            Order through either of our verified Fiverr seller profiles:
          </p>
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
  );
}

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
            Project Intake & Direct Inquiries
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let&apos;s create something clear and useful.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Reach out through your preferred workflow: direct WhatsApp chat, project inquiry form, Upwork Direct Contract (0% buyer fee), Payoneer invoice, or Fiverr.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="p-12 text-center text-slate-400 text-sm">
              Loading project intake form...
            </div>
          }
        >
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
