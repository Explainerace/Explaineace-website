"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Play,
  ArrowRight,
  Layers,
  LayoutGrid,
  FolderTree,
  Smartphone,
  Cloud,
  Globe,
  GraduationCap,
  Sparkles,
  MonitorPlay,
} from "lucide-react";
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

const CATEGORY_META: Record<
  string,
  { label: string; icon: React.ElementType; description: string }
> = {
  "Mobile Apps": {
    label: "Mobile App Demos & Walkthroughs",
    icon: Smartphone,
    description:
      "iOS and Android screen captures with native touch ripples and vertical-to-horizontal framing.",
  },
  SaaS: {
    label: "SaaS & Cloud Platform Walkthroughs",
    icon: Cloud,
    description:
      "End-to-end platform tours illustrating core product journeys, onboarding flows, and admin tools.",
  },
  "Web Apps": {
    label: "Web Applications & Portals",
    icon: Globe,
    description:
      "Interactive browser-based tools, dashboards, and client portals demonstrated with crisp typography.",
  },
  Tutorials: {
    label: "Software Tutorials & Screencasts",
    icon: MonitorPlay,
    description:
      "Step-by-step instructional guides demonstrating specific settings, configurations, and user actions.",
  },
  Training: {
    label: "Training & Educational Videos",
    icon: GraduationCap,
    description:
      "Structured learning modules for customer onboarding, employee training, and user enablement.",
  },
  Explainers: {
    label: "Product Explainers & Overviews",
    icon: Sparkles,
    description:
      "Fast-paced overview videos showcasing product value propositions and key differentiators.",
  },
};

export const VideoGrid: React.FC<VideoGridProps> = ({
  projects,
  isHomeView = false,
  title = "Selected Work",
  subtitle = "A selection of software tutorials, app demos, walkthroughs and training videos.",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grouped" | "filter">(
    isHomeView ? "filter" : "grouped"
  );
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

  // Grouped projects by category
  const groupedProjects = useMemo(() => {
    const groups: { category: string; items: Project[] }[] = [];
    const categoryOrder = [
      "Mobile Apps",
      "SaaS",
      "Web Apps",
      "Tutorials",
      "Training",
      "Explainers",
    ];

    for (const cat of categoryOrder) {
      const items = sortedProjects.filter((p) => {
        const matchesCat = p.category === cat;
        const matchesSearch =
          searchQuery === "" ||
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          );
        return matchesCat && matchesSearch;
      });

      if (items.length > 0) {
        groups.push({ category: cat, items });
      }
    }
    return groups;
  }, [sortedProjects, searchQuery]);

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

          {/* Search bar & View Mode Switch on full Work view */}
          {!isHomeView && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              {/* Grouped vs Filter View Toggle */}
              <div className="flex items-center bg-surface-card border border-white/[0.08] p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setViewMode("grouped")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    viewMode === "grouped"
                      ? "bg-brand-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Organize into separate sections for Mobile Apps, SaaS, Web Apps, etc."
                >
                  <FolderTree className="w-3.5 h-3.5" />
                  <span>Grouped by Category</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("filter")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    viewMode === "filter"
                      ? "bg-brand-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Filter all videos in a unified grid"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Filter Tabs</span>
                </button>
              </div>

              {/* Search input */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search software or feature..."
                  className="w-full pl-9 pr-4 py-2 text-sm bg-surface-card border border-white/[0.1] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                />
              </div>
            </div>
          )}
        </div>

        {/* Filter Tabs (when in filter mode or on homepage) */}
        {(viewMode === "filter" || isHomeView) && (
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
        )}

        {/* VIEW MODE 1: Grouped by Category (Separates Mobile, SaaS, Web Apps, Tutorials, etc.) */}
        {viewMode === "grouped" && !isHomeView ? (
          <div className="space-y-16">
            {groupedProjects.map((group) => {
              const meta = CATEGORY_META[group.category];
              const Icon = meta?.icon || Layers;

              return (
                <div
                  key={group.category}
                  id={group.category.toLowerCase().replace(/\s+/g, "-")}
                  className="space-y-6 pt-4 first:pt-0"
                >
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-600/10 border border-brand-500/20 text-brand-300 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {meta?.label || group.category}
                          </h3>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 font-semibold">
                            {group.items.length}{" "}
                            {group.items.length === 1 ? "Video" : "Videos"}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 mt-1">
                          {meta?.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Grid for this specific category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {group.items.map((project) => (
                      <VideoCard
                        key={project.id}
                        project={project}
                        onPlay={(proj) => setActiveModalProject(proj)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}

            {groupedProjects.length === 0 && (
              <div className="p-12 text-center bg-surface-card/40 border border-white/[0.06] rounded-2xl">
                <p className="text-slate-400 text-sm">
                  No videos found matching &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-3 text-xs text-brand-400 hover:text-brand-300 underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        ) : (
          /* VIEW MODE 2: Unified Filter Grid */
          <>
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
          </>
        )}

        {/* Home Page "View All Work" link */}
        {isHomeView && projects.length > 6 && (
          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-surface-card hover:bg-surface-hover border border-white/[0.1] hover:border-brand-500/50 px-6 py-3.5 rounded-full transition-all duration-200 group shadow-card"
            >
              <span>View All 21 Videos (Grouped by Category)</span>
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
