import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  User,
  Star,
  ShieldCheck,
  ExternalLink,
  Video,
  MonitorPlay,
  ArrowRight,
  CheckCircle2,
  Check,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Ali | Software Video Specialist",
  description:
    "Learn about Ali, specialist in software tutorials, SaaS walkthroughs, and app demos with 157+ verified Fiverr reviews and Level 2 seller status.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bio Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Avatar & Verification Column */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-tr from-brand-600 to-accent-cyan p-1 shadow-glow">
                <div className="w-full h-full rounded-[22px] bg-surface-card flex flex-col items-center justify-center p-6 text-center">
                  <User className="w-20 h-20 text-brand-300 mb-3" />
                  <span className="text-base font-bold text-white tracking-wide">
                    Ali
                  </span>
                  <span className="text-xs text-slate-400">
                    Video Specialist
                  </span>
                  <span className="mt-1 text-[11px] font-mono text-slate-500">
                    @{siteConfig.fiverr.username}
                  </span>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-500/20 border border-emerald-500/40 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-300 shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Level 2 Fiverr Seller</span>
              </div>
            </div>

            {/* Quick stats below avatar */}
            <div className="mt-10 w-full p-5 rounded-2xl bg-surface-card border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Seller Level</span>
                <span className="text-white font-medium">Level 2</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Average Rating</span>
                <span className="text-amber-400 font-semibold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" /> 4.8 / 5.0
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Verified Reviews</span>
                <span className="text-white font-medium">157 Reviews</span>
              </div>
              <div className="pt-2 border-t border-white/[0.06]">
                <a
                  href={siteConfig.fiverr.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-medium text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Verify on Fiverr</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Bio Story Column */}
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
              Personal Specialization
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              &ldquo;Software is complicated. Your videos shouldn&apos;t be.&rdquo;
            </h1>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p className="text-lg text-white font-medium">
                I&apos;m Ali, a video specialist focused on software tutorials, app demos, walkthroughs and instructional content.
              </p>
              <p>
                I help SaaS companies, startups, software teams and app developers turn complicated products and workflows into clear, professional videos.
              </p>
              <p>
                Unlike generalist video editors who primarily edit vlogs or social reels, my work centers exclusively on digital interfaces. I understand how software products work—from navigation hierarchy and responsive viewports to technical parameters, onboarding psychology, and user activation.
              </p>
              <p>
                Over the course of 157+ verified client engagements on Fiverr, I have refined a reliable post-production system that combines crystal-clear 1080p/4K screen capture with calibrated focal zooms, stabilized cursor tracking, clear voiceover narration, and accessible subtitles.
              </p>
            </div>

            {/* Principles Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "100% focused on software, SaaS and mobile UI",
                "Calibrated zooms that eliminate user squinting",
                "Studio voiceover narration and sound design",
                "Synchronized closed captions (.SRT / .VTT)",
                "Zero fabricated claims or inflated numbers",
                "Reliable turnaround with direct communication",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-indigo-600 px-6 py-3 rounded-full shadow-glow"
              >
                <span>Browse My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.1] transition-colors"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
}
