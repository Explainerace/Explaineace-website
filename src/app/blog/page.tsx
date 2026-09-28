import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, Calendar, ArrowRight, Sparkles, BookOpen, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Blog & Video Strategy Insights | EXPLAINERACE",
  description:
    "Expert guides, pricing breakdowns, and production strategies for SaaS explainer videos, software walkthroughs, and app demos by Ali.",
  openGraph: {
    title: "Blog & Video Strategy Insights | EXPLAINERACE",
    description:
      "Expert guides, pricing breakdowns, and production strategies for SaaS explainer videos, software walkthroughs, and app demos by Ali.",
    url: `${siteConfig.siteUrl}/blog`,
    siteName: siteConfig.brandName,
    type: "website",
  },
};

export default function BlogListingPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-accent-cyan/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-accent-cyan" />
            <span>SaaS Video Resources & Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            How to explain software that sells.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Practical guides on pricing, scripting, screen recording craft, and onboarding psychology to turn complex software into clear, high-converting video.
          </p>
        </div>

        {/* Featured Post Hero */}
        {blogPosts.length > 0 && (
          <div className="mb-16">
            {blogPosts.slice(0, 1).map((post) => (
              <div
                key={post.slug}
                className="group relative rounded-3xl bg-surface-card border border-white/[0.08] hover:border-brand-500/40 transition-all duration-300 overflow-hidden shadow-card hover:shadow-glow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-500/20 text-brand-300 border border-brand-500/30">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        {post.readingTime}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-brand-300 transition-colors leading-tight">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-surface-subtle text-[11px] font-medium text-slate-400 border border-white/[0.04]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 px-6 py-3 rounded-full transition-all duration-200 shadow-glow"
                      >
                        <span>Read Complete Guide</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative aspect-video rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0E111A]">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 inline-flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
                        Comprehensive 2026 Guide
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Block */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-950/60 via-surface-card to-surface-subtle border border-brand-500/30 text-center max-w-4xl mx-auto shadow-glow">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-300">
            Have a project in mind?
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
            Let&apos;s turn your software into a high-converting video.
          </h3>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            Get an exact, transparent quote within hours. No agencies, no bloated markups—direct collaboration with Ali.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 px-6 py-3.5 rounded-full shadow-glow"
            >
              <span>Get a Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-6 py-3.5 rounded-full transition-colors"
            >
              <span>Quick WhatsApp DM</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
