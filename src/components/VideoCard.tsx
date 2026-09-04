"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Clock, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/types";

interface VideoCardProps {
  project: Project;
  onPlay: (project: Project) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ project, onPlay }) => {
  const [imgError, setImgError] = useState(false);

  // High quality fallback thumbnail URL if maxres/hq is missing
  const posterSrc = imgError
    ? `https://img.youtube.com/vi/${project.videoId}/0.jpg`
    : project.thumbnail;

  return (
    <article className="group relative flex flex-col bg-surface-card border border-white/[0.08] hover:border-brand-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1">
      {/* Thumbnail & Play Overlay Container */}
      <div
        className="relative aspect-video w-full bg-surface-subtle cursor-pointer overflow-hidden"
        onClick={() => onPlay(project)}
      >
        <Image
          src={posterSrc}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
          loading="lazy"
        />

        {/* Ambient Dark Gradient on bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Category Pill on top left */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-brand-300 border border-white/[0.1]">
            {project.category}
          </span>
        </div>

        {/* Duration badge on top right */}
        {project.duration && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-slate-300 border border-white/[0.1]">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{project.duration}</span>
          </div>
        )}

        {/* Centered Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            className="w-12 h-12 rounded-full bg-brand-600/90 text-white flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            aria-label={`Play video for ${project.title}`}
          >
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </button>
        </div>

        {/* Bottom indicator inside thumbnail */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 pointer-events-none">
          <span className="font-medium truncate text-white/90">{project.client}</span>
          <span className="text-[10px] text-slate-400 bg-white/[0.1] px-1.5 py-0.5 rounded">
            1080p
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3
              onClick={() => onPlay(project)}
              className="font-semibold text-base text-white group-hover:text-brand-300 transition-colors cursor-pointer line-clamp-1"
            >
              {project.title}
            </h3>
            <Link
              href={`/work/${project.id}`}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/[0.06] transition-colors shrink-0"
              title="View Case Study Details"
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags / Service Pills */}
        <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/[0.04]"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/work/${project.id}`}
            className="text-[11px] font-medium text-brand-400 hover:text-brand-300 transition-colors flex items-center gap-1 shrink-0 ml-2"
          >
            Details &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
};
