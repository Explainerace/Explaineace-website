import React from "react";
import Link from "next/link";
import { User, ArrowRight, ShieldCheck, Video, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-surface-card border border-white/[0.08] shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Avatar placeholder & badge */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                {/* Avatar stylized container */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-cyan p-1 shadow-glow">
                  <div className="w-full h-full rounded-xl bg-surface-card flex flex-col items-center justify-center p-4">
                    <User className="w-16 h-16 text-brand-300 mb-2" />
                    <span className="text-xs font-semibold text-white tracking-wide uppercase">
                      Ali
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Video Specialist
                    </span>
                  </div>
                </div>

                {/* Floating Level 2 badge */}
                <div className="absolute -bottom-3 bg-emerald-500/20 border border-emerald-500/40 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-emerald-300 shadow-lg flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Level 2 Seller</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs font-mono text-slate-400">
                  Fiverr: @{siteConfig.fiverr.username}
                </span>
              </div>
            </div>

            {/* Right: Bio copy */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider">
                <Video className="w-3.5 h-3.5" />
                <span>About The Specialist</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                Helping software teams explain what they build.
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  &ldquo;I&apos;m Ali, a video specialist focused on software tutorials, app demos, walkthroughs and instructional content.
                </p>
                <p>
                  I help SaaS companies, startups, software teams and app developers turn complicated products and workflows into clear, professional videos.&rdquo;
                </p>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] px-6 py-3 rounded-full transition-all duration-200 group"
                >
                  <span>Learn More About Me</span>
                  <ArrowRight className="w-4 h-4 text-brand-400 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white px-4 py-3 transition-colors"
                >
                  <span>See 21 Verified Examples</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
