"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Layers, ArrowRight } from "lucide-react";
import { Project, CategoryFilter } from "@/types";
import { VideoCard } from "@/components/VideoCard";
import { VideoModal } from "@/components/VideoModal";

interface VideoGridProps {
  projects: Project[];
  isHomeView?: boolean;
  title?: string;
  subtitle?: string;
}

const CATEGORIES: CategoryFilter[] = [
  "All",
  "SaaS",
  "Web Apps",
  "Mobile Apps",
  "Tutorials",
  "Training",
  "Explainers",
];

export const VideoGrid: React.FC<VideoGridProps> = ({
  projects,
  isHomeView = false,
  title = "Selected Work",
  subtitle = "A selection of software tutorials, app demos, walkthroughs and training videos.",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Sort projects respecting optional order field, else preserving array order
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const orderA = a.order ?? 999;
      const orderB = b.order ?? 999;
      return orderA - orderB;
    });
  }, [projects]);

  // Filter projects by category and optional search term
  const filteredProjects = useMemo(() => {
    return sortedProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [sortedProjects, selectedCategory, searchQuery]);

  // Display limited items on home page if requested
  const displayProjects = isHomeView
    ? filteredProjects.slice(0, 6)
    : filteredProjects;

  return (
    <section id="work" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              {subtitle}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search software or feature..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-surface-card border border-white/[0.1] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-brand-600 text-white shadow-glow border border-brand-400/40"
                    : "bg-surface-card/80 text-slate-300 hover:text-white hover:bg-surface-hover border border-white/[0.06]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-white/[0.06] text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Video Grid */}
        {displayProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayProjects.map((project) => (
              <VideoCard
                key={project.id}
                project={project}
                onPlay={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-surface-card/40 border border-white/[0.06] rounded-2xl">
            <p className="text-slate-400 text-sm">
              No videos found matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-brand-400 hover:text-brand-300 underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Home Page "View All Work" CTA */}
        {isHomeView && projects.length > 6 && (
          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-surface-card hover:bg-surface-hover border border-white/[0.1] hover:border-brand-500/50 px-7 py-3.5 rounded-full transition-all duration-200 group shadow-card"
            >
              <span>Explore All 21 Portfolio Videos</span>
              <ArrowRight className="w-4 h-4 text-brand-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
        videoId={activeModalProject?.videoId}
        videoUrl={activeModalProject?.videoUrl}
        title={activeModalProject?.title}
        category={activeModalProject?.category}
        projectId={activeModalProject?.id}
      />
    </section>
  );
};
