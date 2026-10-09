"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Clock, ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

interface VideoCardProps {
  project: Project;
  onPlay: (project: Project) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ project, onPlay }) => {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate 3D tilt angles: -7deg to +7deg
    const rotateX = ((y / rect.height) - 0.5) * -12;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    setTilt({ x: rotateX, y: rotateY });

    // Set cursor coordinates for CSS spotlight glow
    cardRef.current.style.setProperty("--mx", `${x}px`);
    cardRef.current.style.setProperty("--my", `${y}px`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // High quality fallback thumbnail URL if maxres/hq is missing
  const posterSrc = imgError
    ? `https://img.youtube.com/vi/${project.videoId}/0.jpg`
    : project.thumbnail;

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)",
          transition: isHovered
            ? "transform 0.1s ease-out, border-color 0.3s ease, box-shadow 0.3s ease"
            : "transform 0.4s ease-out, border-color 0.3s ease, box-shadow 0.3s ease",
          transformStyle: "preserve-3d",
        }}
        className="h-full group relative flex flex-col bg-surface-card border border-white/[0.08] hover:border-brand-500/50 rounded-2xl overflow-hidden shadow-card hover:shadow-glow/20 will-change-transform"
      >
        {/* Dynamic Pointer Spotlight Glow via CSS Variables */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
          style={{
            background:
              "radial-gradient(380px circle at var(--mx, 50%) var(--my, 50%), rgba(99, 102, 241, 0.18), transparent 70%)",
          }}
          aria-hidden="true"
        />

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
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />

          {/* Specular Diagonal Glass Sheen Sweep */}
          <div
            className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-12 z-20"
            aria-hidden="true"
          />

          {/* Ambient Dark Gradient on bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

          {/* Category Pill on top left */}
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-brand-300 border border-white/[0.1] shadow-sm">
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

          {/* Centered Play Button with Spring Physics */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <button
              type="button"
              className="relative w-12 h-12 rounded-full bg-brand-600/90 text-white flex items-center justify-center shadow-glow group-hover:bg-brand-500 group-hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              aria-label={`Play video for ${project.title}`}
            >
              {/* Play ripple pulse ring */}
              <span className="absolute -inset-1 rounded-full bg-brand-400/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" />
              <Play className="w-5 h-5 fill-white ml-0.5 relative z-10" />
            </button>
          </div>

          {/* Bottom indicator inside thumbnail */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 pointer-events-none z-10">
            <span className="font-medium truncate text-white/90">{project.client}</span>
            <span className="text-[10px] text-slate-400 bg-white/[0.1] px-1.5 py-0.5 rounded backdrop-blur-xs font-mono">
              1080p
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex-1 flex flex-col justify-between relative z-10">
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
              className="text-[11px] font-medium text-brand-400 hover:text-brand-300 transition-colors flex items-center gap-1 shrink-0 ml-2 group/link"
            >
              <span>Details</span>
              <span className="group-hover/link:translate-x-0.5 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};
