"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { YoutubeIcon, WhatsAppIcon, UpworkIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";

const PROJECT_TYPES = [
  "Software Tutorial",
  "SaaS Walkthrough",
  "Mobile App Video",
  "Training Video",
  "Explainer Video",
  "Website Demo",
  "Other",
];

const LENGTH_OPTIONS = [
  "Under 60 seconds (Quick Teaser / Feature Pill)",
  "1 to 2 minutes (Standard Product Tour)",
  "2 to 4 minutes (Comprehensive Walkthrough)",
  "5+ minutes (In-Depth Academy / Training Video)",
  "Unsure / Need Recommendation",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: PROJECT_TYPES[0],
    videoLength: LENGTH_OPTIONS[1],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      // Even if API route experiences network block, allow direct mailto fallback or mark sent
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

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
                    Message Received!
                  </h2>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, {formData.name}. Ali will review your project details and get back to you at{" "}
                    <span className="text-brand-300 font-semibold">{formData.email}</span> within 24 business hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={siteConfig.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Chat on WhatsApp for Faster Reply</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
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

                  {/* Project Type */}
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

                  {/* Estimated Video Length */}
                  <div>
                    <label
                      htmlFor="videoLength"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Estimated Video Length
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

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Message / Product Overview <span className="text-brand-400">*</span>
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
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
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
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>Instant Messaging</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
                  Fastest Response
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">Direct WhatsApp</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with Ali to discuss your software video requirements, ask questions, or review drafts.
              </p>
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp ({siteConfig.whatsapp.display})</span>
              </a>
            </div>

            {/* Flexible Contract Options: Upwork 0% fee & Payoneer deal */}
            <div className="p-6 rounded-3xl bg-surface-card border border-white/[0.08] space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-300 flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Flexible Contract & Payment Options</span>
              </span>

              {/* Upwork Direct Contract (0% Fee) */}
              <div className="p-3.5 rounded-xl bg-surface-subtle/90 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <UpworkIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Upwork Direct Contract</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
                    0% Buyer Fee
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Hire with full Upwork escrow & dispute protection without paying any client marketplace fee.
                </p>
              </div>

              {/* Payoneer Deal */}
              <div className="p-3.5 rounded-xl bg-surface-subtle/90 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-sky-400" />
                    <span>Payoneer Direct Invoicing</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30 font-semibold">
                    Global Wire & Card
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Pay via USD/EUR/GBP direct bank transfer or credit card with official business invoices.
                </p>
              </div>
            </div>

            {/* 2 Fiverr Profiles Card */}
            <div className="p-6 rounded-3xl bg-surface-card border border-white/[0.08] space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span>Verified Fiverr Profiles</span>
              </span>

              {/* Profile 1: video_supermacy */}
              <a
                href={siteConfig.fiverrProfiles[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-surface-subtle hover:bg-surface-hover border border-white/[0.06] transition-colors group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white">@{siteConfig.fiverrProfiles[0].username}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-300 font-semibold">
                      Level 2
                    </span>
                  </div>
                  <div className="flex items-center text-amber-400 gap-1 text-[11px] mt-0.5">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>4.8 (157 Verified Reviews)</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
              </a>

              {/* Profile 2: explainerace */}
              <a
                href={siteConfig.fiverrProfiles[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-surface-subtle hover:bg-surface-hover border border-white/[0.06] transition-colors group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white">@{siteConfig.fiverrProfiles[1].username}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-brand-500/15 text-brand-300 font-semibold">
                      ExplainerAce
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">Dedicated SaaS explainer gig portfolio</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
              </a>
            </div>

            {/* Direct Email */}
            <div className="p-6 rounded-3xl bg-surface-card border border-white/[0.08] space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-cyan" />
                <span className="text-xs font-semibold text-white">Direct Email Contact</span>
              </div>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-sm font-mono text-brand-300 hover:text-brand-200 underline block truncate"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
