"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowRight, Star, Monitor, MousePointer2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { VideoModal } from "@/components/VideoModal";

export const Hero: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Ambient background glow contained */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-600/15 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-accent-cyan/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card/90 border border-white/[0.08] shadow-sm backdrop-blur-md max-w-full">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
              <span className="text-xs font-semibold text-white ml-1">4.8</span>
            </div>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs text-slate-300 font-medium whitespace-nowrap">
              157 Fiverr Reviews
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
              Level 2
            </span>
          </div>
        </div>

        {/* Central Headline & Copy */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.1] break-words">
            Software is complicated.
            <br />
            <span className="bg-gradient-to-r from-brand-300 via-indigo-200 to-accent-cyan bg-clip-text text-transparent">
              Your videos shouldn&apos;t be.
            </span>
          </h1>

          <p className="mt-5 text-sm sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            {siteConfig.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] px-7 py-3.5 rounded-full backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              <Play className="w-4 h-4 text-accent-cyan fill-accent-cyan" />
              <span>View My Work</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 px-7 py-3.5 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Hero Visual: Realistic Software UI Video Window Mockup */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto w-full">
          <div
            className="relative rounded-2xl p-1 sm:p-2 bg-gradient-to-b from-white/15 to-white/5 shadow-2xl group cursor-pointer w-full"
            onClick={() => setModalOpen(true)}
          >
            {/* Window Container */}
            <div className="relative rounded-xl overflow-hidden bg-[#0A0D14] border border-white/[0.08] w-full">
              {/* Window Header / Titlebar */}
              <div className="h-9 sm:h-10 bg-[#0E121B] px-3 sm:px-4 flex items-center justify-between border-b border-white/[0.06] overflow-hidden">
                <div className="flex items-center gap-1.5 sm:gap-2 truncate mr-2 min-w-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shrink-0" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shrink-0" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shrink-0" />
                  <span className="ml-1 sm:ml-2 text-[11px] sm:text-xs font-medium text-slate-400 truncate flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                    <span className="truncate">EXPLAINERACE · Software Walkthrough Suite by Ali</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400 shrink-0">
                  <span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20 text-[10px] sm:text-[11px] font-medium whitespace-nowrap">
                    4K / 60 FPS
                  </span>
                </div>
              </div>

              {/* Video Canvas Area */}
              <div className="relative aspect-video w-full bg-surface-subtle overflow-hidden">
                <Image
                  src={`https://img.youtube.com/vi/${siteConfig.youtube.featuredVideoId}/maxresdefault.jpg`}
                  alt="Software video walkthrough preview"
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1024px"
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                {/* Floating Video Editing Annotations */}
                <div className="absolute top-4 left-4 hidden sm:flex items-center gap-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/[0.1] text-xs text-white">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
                  <span className="font-medium">Focal Zoom: 185% on User Flow</span>
                </div>

                <div className="absolute bottom-14 right-4 hidden sm:flex items-center gap-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/[0.1] text-xs text-white">
                  <MousePointer2 className="w-3.5 h-3.5 text-brand-400" />
                  <span className="font-medium">Smoothed Cursor Tracking</span>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-brand-500/30 rounded-full blur-md animate-pulse" />
                    <button
                      type="button"
                      className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-brand-600/90 text-white flex items-center justify-center shadow-glow-lg group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300"
                      aria-label="Play featured demo video"
                    >
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white ml-1" />
                    </button>
                  </div>
                  <span className="mt-3 sm:mt-4 text-[11px] sm:text-xs font-semibold text-white tracking-wide uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                    Click to Watch Featured Demo
                  </span>
                </div>

                {/* Simulated Scrubber Bar */}
                <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[10px] sm:text-[11px] text-slate-300 font-mono">01:14</span>
                    <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-2/5 bg-gradient-to-r from-brand-500 to-accent-cyan rounded-full" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono">02:45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-bar with key capabilities */}
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="p-2.5 sm:p-3 rounded-xl bg-surface-card/50 border border-white/[0.04]">
              <p className="text-[11px] text-slate-400">Resolution</p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">1080p & 4K</p>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-surface-card/50 border border-white/[0.04]">
              <p className="text-[11px] text-slate-400">Post-Production</p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">Zooms & Cursors</p>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-surface-card/50 border border-white/[0.04]">
              <p className="text-[11px] text-slate-400">Audio</p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">Studio Voiceover</p>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-surface-card/50 border border-white/[0.04]">
              <p className="text-[11px] text-slate-400">Platform Proof</p>
              <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-0.5">157 Reviews (4.8★)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Video Modal */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoId={siteConfig.youtube.featuredVideoId}
        title="Muscle Coach Mobile App Walkthrough & Demo"
        category="Featured Demo"
        projectId="muscle-coach-app"
      />
    </section>
  );
};
