"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Play,
  ArrowRight,
  Star,
  Monitor,
  MousePointer2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { projects } from "@/data/projects";
import { VideoModal } from "@/components/VideoModal";
import { HeroCanvas } from "@/components/motion/HeroCanvas";
import { HeroTimelineScrubber } from "@/components/HeroTimelineScrubber";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // Top showcase videos starting with Prim Automation
  const galleryVideos = projects.slice(0, 10);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeProject = galleryVideos[currentIndex] || galleryVideos[0];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : galleryVideos.length - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev < galleryVideos.length - 1 ? prev + 1 : 0));
  };

  const scrollGallery = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Ambient background glow contained */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HeroCanvas />
        <div className="absolute inset-0 bg-grid" />
        <div className="aurora absolute top-[8%] left-1/2 -translate-x-1/2 w-[640px] h-[380px] bg-brand-600/20 blur-[120px] rounded-full" />
        <div className="aurora-slow absolute top-1/3 right-[-5%] w-[340px] h-[340px] bg-accent-cyan/15 blur-[110px] rounded-full" />
        <div className="aurora absolute top-[45%] left-[-8%] w-[320px] h-[320px] bg-accent-purple/10 blur-[110px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust Badge */}
        <div className="flex justify-center mb-6 fade-up">
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
            <span className="line-mask">
              <span className="line-rise" style={{ "--d": "80ms" } as React.CSSProperties}>
                Software is complicated.
              </span>
            </span>
            <span className="line-mask">
              <span
                className="line-rise text-shimmer bg-clip-text text-transparent"
                style={{ "--d": "220ms", backgroundImage: "linear-gradient(90deg,#A5B4FC,#C7D2FE,#38BDF8,#A5B4FC)" } as React.CSSProperties}
              >
                Your videos shouldn&apos;t be.
              </span>
            </span>
          </h1>

          <h2 className="fade-up mt-4 text-base sm:text-xl font-semibold text-brand-300" style={{ "--d": "380ms" } as React.CSSProperties}>
            SaaS walkthroughs, screencast tutorials &amp; explainer videos for software teams
          </h2>

          <p className="fade-up mt-3 text-sm sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto" style={{ "--d": "480ms" } as React.CSSProperties}>
            {siteConfig.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="fade-up mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4" style={{ "--d": "580ms" } as React.CSSProperties}>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] px-7 py-3.5 rounded-full backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              <Play className="w-4 h-4 text-accent-cyan fill-accent-cyan" />
              <span>Explore Portfolio</span>
            </Link>

            <Link
              href="/contact"
              className="beam-border w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 px-7 py-3.5 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Hero Visual: Interactive Software UI Video Window & Gallery Stage */}
        <div className="stage-enter mt-12 sm:mt-16 max-w-5xl mx-auto w-full space-y-6 relative">
          {/* Floating Pro Badges */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex items-center gap-2 absolute -top-5 -left-4 z-30 px-3.5 py-1.5 rounded-full bg-[#0A0D14]/90 border border-brand-500/30 backdrop-blur-md shadow-glow text-xs text-brand-300 font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span>✦ Native 4K Screencasts</span>
          </motion.div>

          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex items-center gap-2 absolute -top-5 -right-4 z-30 px-3.5 py-1.5 rounded-full bg-[#0A0D14]/90 border border-emerald-500/30 backdrop-blur-md shadow-glow text-xs text-emerald-400 font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>⚡ Fast 48h Turnaround</span>
          </motion.div>

          {/* Main Stage Video Player Window */}
          <div
            className="relative rounded-2xl p-1 sm:p-2 bg-gradient-to-b from-white/15 to-white/5 shadow-2xl group cursor-pointer w-full"
            onClick={() => setModalOpen(true)}
          >
            {/* Window Container */}
            <div className="relative rounded-xl overflow-hidden bg-[#0A0D14] border border-white/[0.08] w-full">
              {/* Window Header / Titlebar */}
              <div className="h-10 sm:h-11 bg-[#0E121B] px-3 sm:px-4 flex items-center justify-between border-b border-white/[0.06] overflow-hidden">
                <div className="flex items-center gap-1.5 sm:gap-2 truncate mr-2 min-w-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shrink-0" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shrink-0" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shrink-0" />
                  <span className="ml-1 sm:ml-2 text-[11px] sm:text-xs font-medium text-slate-300 truncate flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                    <span className="font-semibold text-white truncate">{activeProject.client}</span>
                    <span className="text-slate-500 truncate hidden sm:inline">•</span>
                    <span className="truncate hidden sm:inline text-slate-400">{activeProject.title}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-400 shrink-0">
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.06] text-slate-300 font-mono hidden sm:inline">
                    {currentIndex + 1} / {galleryVideos.length}
                  </span>
                  <span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20 text-[10px] sm:text-[11px] font-medium whitespace-nowrap">
                    4K / 60 FPS
                  </span>
                </div>
              </div>

              {/* Video Canvas Area */}
              <div className="relative aspect-video w-full bg-surface-subtle overflow-hidden">
                {/* Keyed so each switch replays the crossfade + slow push-in */}
                <div key={activeProject.id} className="ken-burns absolute inset-0">
                  <Image
                    src={`https://img.youtube.com/vi/${activeProject.videoId}/maxresdefault.jpg`}
                    alt={activeProject.title}
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 1024px"
                    className="object-cover"
                  />
                </div>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/25" />

                {/* Floating Video Annotations */}
                <div className="absolute top-4 left-4 hidden sm:flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/[0.1] text-xs text-white shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
                  <span className="font-medium">
                    {activeProject.id === "prim-automation"
                      ? "Focal Zoom: 185% on Workflow Canvas"
                      : "Focal Zoom: 180% on UI Highlights"}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/[0.1] text-xs text-brand-300 font-semibold shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                  <span>{activeProject.category}</span>
                </div>

                <div className="absolute bottom-14 right-4 hidden sm:flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/[0.1] text-xs text-white shadow-lg">
                  <MousePointer2 className="w-3.5 h-3.5 text-brand-400" />
                  <span className="font-medium">Cursor Stabilization & Click Ripples</span>
                </div>

                {/* Demo cursor gliding across the stage with click ripples */}
                <div className="demo-cursor absolute z-10 pointer-events-none hidden sm:block" aria-hidden="true">
                  <span className="demo-cursor-ripple absolute -left-4 -top-4 w-8 h-8 rounded-full border-2 border-accent-cyan bg-accent-cyan/20" />
                  <MousePointer2 className="relative w-6 h-6 text-white fill-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-brand-500/30 rounded-full blur-md animate-pulse" />
                    <button
                      type="button"
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-600/90 text-white flex items-center justify-center shadow-glow-lg group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300"
                      aria-label={`Play ${activeProject.title}`}
                    >
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-4 space-y-1">
                    <span className="inline-block text-[11px] sm:text-xs font-semibold text-white tracking-wide uppercase px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-white/10">
                      Click to Watch · {activeProject.duration}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium drop-shadow-md">
                      {activeProject.title}
                    </p>
                  </div>
                </div>

                {/* Previous & Next Floating Overlay Controls */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-brand-600/90 border border-white/15 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 shadow-lg z-20"
                  aria-label="Previous video in gallery"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-brand-600/90 border border-white/15 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 shadow-lg z-20"
                  aria-label="Next video in gallery"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Simulated Live Video Editor Scrubber Bar */}
                <HeroTimelineScrubber
                  projectId={activeProject.id}
                  duration={activeProject.duration}
                />
              </div>
            </div>
          </div>

          {/* Interactive Video Gallery Carousel Strip */}
          <div className="rounded-2xl p-4 sm:p-5 bg-surface-card/80 border border-white/[0.08] shadow-card">
            {/* Gallery Control Bar */}
            <div className="flex items-center justify-between gap-4 mb-3.5">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-400" />
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  Featured Gallery
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  — Scroll or click any video to preview
                </span>
              </div>

              {/* Gallery Scroll Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scrollGallery("left")}
                  className="w-7 h-7 rounded-lg bg-surface-subtle hover:bg-surface-hover border border-white/[0.08] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Scroll gallery left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollGallery("right")}
                  className="w-7 h-7 rounded-lg bg-surface-subtle hover:bg-surface-hover border border-white/[0.08] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Scroll gallery right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Horizontal Scrollable Thumbnails */}
            <div
              ref={scrollRef}
              className="flex items-stretch gap-3 overflow-x-auto pb-2 scrollbar-none snap-x"
            >
              {galleryVideos.map((project, idx) => {
                const isSelected = idx === currentIndex;

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`shrink-0 w-48 sm:w-56 text-left rounded-xl p-2 transition-all duration-200 snap-start border ${
                      isSelected
                        ? "bg-brand-950/60 border-brand-500 ring-2 ring-brand-500/40 shadow-glow"
                        : "bg-surface-subtle/70 hover:bg-surface-hover border-white/[0.06] hover:border-white/20"
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black mb-2">
                      <Image
                        src={`https://img.youtube.com/vi/${project.videoId}/mqdefault.jpg`}
                        alt={project.title}
                        fill
                        sizes="240px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors" />

                      {isSelected ? (
                        <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded bg-brand-600 text-[10px] font-bold text-white uppercase tracking-wider shadow">
                          On Stage
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100">
                          <div className="w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center">
                            <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                          </div>
                        </div>
                      )}

                      <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-slate-300">
                        {project.duration}
                      </div>
                    </div>

                    {/* Card Meta */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-medium text-brand-400 truncate">
                          {project.category}
                        </span>
                        <span className="text-[10px] text-slate-500 truncate">
                          {project.client}
                        </span>
                      </div>
                      <p className={`text-xs font-semibold line-clamp-1 ${isSelected ? "text-white" : "text-slate-300"}`}>
                        {project.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sub-bar with key capabilities */}
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="p-2.5 sm:p-3 rounded-xl bg-surface-card/50 border border-white/[0.04]">
              <p className="text-[11px] text-slate-400">Featured Tool</p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">{activeProject.client}</p>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-surface-card/50 border border-white/[0.04]">
              <p className="text-[11px] text-slate-400">Post-Production</p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">Zooms & Cursors</p>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-surface-card/50 border border-white/[0.04]">
              <p className="text-[11px] text-slate-400">Audio Quality</p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">Studio Voiceover</p>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-surface-card/50 border border-white/[0.04]">
              <p className="text-[11px] text-slate-400">Platform Proof</p>
              <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-0.5">157 Reviews (4.8★)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player for active project */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoId={activeProject.videoId}
        videoUrl={activeProject.videoUrl}
        title={activeProject.title}
        category={activeProject.category}
        projectId={activeProject.id}
      />
    </section>
  );
};
