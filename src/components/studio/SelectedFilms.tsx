"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight, Sparkles, Clock, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { VideoModal } from "@/components/VideoModal";

export const SelectedFilms: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<typeof projects[0] | null>(null);

  // 1. Orbitra One for launch motion
  // 2. Bloom for mobile UI
  // 3. Bybit Platform Tutorial for instructional walkthrough
  const film1 = projects.find((p) => p.id === "orbitra-one-saas-promo");
  const film2 = projects.find((p) => p.id === "bloom-3d-app-promo");
  const film3 = projects.find((p) => p.id === "bybit-guide");

  const selectedFilms = [
    {
      project: film1 || projects[0],
      buyerLabel: "Launch Film & SaaS Promo",
      highlight: "Dark-mode 3D UI motion, fluid workflow choreography, and kinetic typography.",
    },
    {
      project: film2 || projects[1],
      buyerLabel: "Mobile UI & App Store Motion",
      highlight: "Exploded 3D screen layers and high-tempo vertical previews for mobile apps.",
    },
    {
      project: film3 || projects[2],
      buyerLabel: "Narrated Instructional Walkthrough",
      highlight: "Step-by-step screencast with voiceover, focal zooms, and clear friction-free onboarding.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#0A0D14]" aria-label="Selected Films">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-brand-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#D4FF3A] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF8F5] tracking-tight">
              Three styles. Zero fluff.
            </h2>
            <p className="mt-3 text-base text-[#C8C2B7] leading-relaxed">
              Every project is custom-crafted to match your software’s exact interface, brand tokens, and audience goals.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4FF3A] hover:text-[#C2F028] transition-colors group self-start md:self-auto"
          >
            <span>View all 33 portfolio films</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Featured Films Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {selectedFilms.map(({ project, buyerLabel, highlight }) => {
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl sm:rounded-3xl bg-[#0F121C] border border-white/[0.08] hover:border-[#D4FF3A]/30 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-card"
              >
                <div>
                  {/* Video Poster Thumbnail & Play Trigger */}
                  <div
                    className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:opacity-75 transition-opacity" />

                    {/* Buyer Label Pill */}
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/[0.1] text-[11px] font-semibold text-[#D4FF3A]">
                      {buyerLabel}
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-slate-300 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{project.duration}</span>
                    </div>

                    {/* Center Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        type="button"
                        className="w-12 h-12 rounded-full bg-black/70 group-hover:bg-[#D4FF3A] text-white group-hover:text-black flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 border border-white/20 group-hover:border-transparent"
                        aria-label={`Play ${project.title}`}
                      >
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </button>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-xs text-white/90 font-medium truncate">
                      Click to watch in 4K
                    </div>
                  </div>

                  {/* Film Details */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {project.client}
                    </span>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#D4FF3A] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#C8C2B7] leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                </div>

                {/* Footer Link to Case Study */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="font-semibold text-white hover:text-[#D4FF3A] flex items-center gap-1 transition-colors"
                  >
                    <span>Watch Film</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>

                  <Link
                    href={`/work/${project.id}`}
                    className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Case study</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeModalProject && (
        <VideoModal
          isOpen={Boolean(activeModalProject)}
          onClose={() => setActiveModalProject(null)}
          videoId={activeModalProject.videoId}
          videoUrl={activeModalProject.videoUrl}
          title={activeModalProject.title}
          category={activeModalProject.category}
          projectId={activeModalProject.id}
        />
      )}
    </section>
  );
};

export default SelectedFilms;
