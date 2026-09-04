"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Sparkles, Volume2, ShieldCheck, ArrowRight, Eye } from "lucide-react";
import { VideoModal } from "@/components/VideoModal";

export const FeaturedVideo: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const featuredId = "4E72rncOnBc"; // Green Medicine SaaS Tour

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#07080D]">
      {/* Background ambient light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-600/10 blur-[140px] rounded-full" /></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cinematic Case Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Green Medicine SaaS Walkthrough
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Experience how an intricate medical database and patient management portal was transformed into an effortless, easy-to-follow user journey.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/work/green-medicine"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] px-5 py-2.5 rounded-full transition-colors"
            >
              <span>Read Full Breakdown</span>
              <ArrowRight className="w-4 h-4 text-brand-400" />
            </Link>
          </div>
        </div>

        {/* Cinematic Video Player Container */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl">
          <div
            className="relative rounded-[22px] overflow-hidden aspect-video w-full bg-black cursor-pointer group"
            onClick={() => setModalOpen(true)}
          >
            <Image
              src={`https://img.youtube.com/vi/${featuredId}/maxresdefault.jpg`}
              alt="Green Medicine SaaS Walkthrough Featured Video"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover opacity-90 group-hover:scale-103 transition-transform duration-700"
            />

            {/* Cinematic Gradient Bars */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

            {/* Floating Top Specs */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-medium text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Client: Green Medicine · Telehealth Platform</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-slate-300">
                <Volume2 className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Voiceover + Captions Synced</span>
              </div>
            </div>

            {/* Big Center Play Trigger */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-600/90 text-white flex items-center justify-center shadow-glow-lg group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1.5" />
              </div>
              <span className="mt-4 text-xs sm:text-sm font-semibold text-white uppercase tracking-wider bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                Watch High-Definition Walkthrough (3:15)
              </span>
            </div>

            {/* Bottom Cinematic Info Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="px-2.5 py-1 rounded bg-white/10 backdrop-blur-sm border border-white/10 font-medium">
                  Dynamic UI Zooms
                </span>
                <span className="px-2.5 py-1 rounded bg-white/10 backdrop-blur-sm border border-white/10 font-medium">
                  Cursor Smoothing
                </span>
                <span className="px-2.5 py-1 rounded bg-white/10 backdrop-blur-sm border border-white/10 font-medium">
                  1080p 60fps
                </span>
              </div>

              <div className="text-xs text-slate-400 font-medium">
                Click anywhere to open player
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoId={featuredId}
        title="Green Medicine SaaS Platform Walkthrough"
        category="SaaS Platform Tour"
        projectId="green-medicine"
      />
    </section>
  );
};
