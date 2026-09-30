import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Laptop,
  Brain,
  Shield,
  Zap,
  BarChart3,
  Clock,
  CheckCircle2,
  ArrowRight,
  Download,
  Sparkles,
  Lock,
  Flame,
  Layers,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FocusLens | macOS Productivity & Deep Work Tracker",
  description:
    "Local-only macOS performance & productivity tracker. Measures focus scores, detects deep-work blocks, automates diagnostics, and provides private AI coaching.",
};

export default function FocusLensPage() {
  return (
    <div className="pt-28 pb-20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card/90 border border-white/[0.08] backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-white tracking-wide">
              FocusLens v1.0 for macOS
            </span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-[11px] font-medium text-cyan-300">
              Local-First & Privacy Guaranteed
            </span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Know exactly what’s wrong with your productivity.{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              And how to fix it.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The intelligent productivity tracker for MacBook power users.
            Continuous deep-work tracking, 12 automated rule diagnoses, and
            private AI coaching — with zero keystroke logging and zero cloud
            leakage.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#interactive-preview"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 px-7 py-3.5 rounded-full shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Explore Dashboard</span>
            </a>
            <a
              href="http://localhost:8501"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.15] px-6 py-3.5 rounded-full backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              <Laptop className="w-4 h-4 text-emerald-400" />
              <span>Open Local App</span>
            </a>
            <a
              href="#install-guide"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] px-6 py-3.5 rounded-full backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Install for Mac</span>
            </a>
          </div>
        </div>

        {/* Interactive Dashboard Showcase (Live Mock Preview) */}
        <div id="interactive-preview" className="relative mt-8 max-w-6xl mx-auto">
          <div className="relative rounded-2xl p-1.5 sm:p-3 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/[0.1] shadow-2xl backdrop-blur-xl">
            {/* macOS Window Titlebar */}
            <div className="h-11 bg-[#0E121B] px-4 flex items-center justify-between border-b border-white/[0.08] rounded-t-xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-semibold text-slate-300 flex items-center gap-2">
                  <span className="text-cyan-400">🔭</span> FocusLens Dashboard — Live Session
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync Active
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  Focus Score: 78 / 100
                </span>
              </div>
            </div>

            {/* Dashboard Mock Body */}
            <div className="bg-[#0A0D14] p-5 sm:p-8 rounded-b-xl border border-white/[0.04] space-y-6">
              {/* Score & Key Metrics Banner */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Hero Focus Score */}
                <div className="md:col-span-2 bg-[#121624] border border-cyan-500/30 rounded-xl p-5 text-center relative overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.1)]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Daily Focus Score
                  </div>
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-300 my-2">
                    78
                    <span className="text-xl font-normal text-slate-400"> / 100</span>
                  </div>
                  <div className="inline-block bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs px-3 py-1 rounded-full font-semibold">
                    🟢 Deep Flow State Achieved
                  </div>
                  <div className="mt-3 text-[11px] text-slate-400">
                    Calculated from active ratio, continuous blocks & context reload latency
                  </div>
                </div>

                {/* 3 Metric Cards */}
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-[#0E121B] border border-white/[0.08] rounded-xl p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                      <span>🧠 Deep Work</span>
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <div className="text-2xl font-bold text-white my-1">3h 45m</div>
                    <div className="text-[11px] text-emerald-400 font-medium">
                      3 blocks ≥ 25 min
                    </div>
                  </div>

                  <div className="bg-[#0E121B] border border-white/[0.08] rounded-xl p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                      <span>🔀 Context Switches</span>
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="text-2xl font-bold text-white my-1">4.2 <span className="text-xs text-slate-400 font-normal">/hr</span></div>
                    <div className="text-[11px] text-slate-400">Low cognitive friction</div>
                  </div>

                  <div className="bg-[#0E121B] border border-white/[0.08] rounded-xl p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                      <span>☕ Rest Pacing</span>
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white my-1">4 breaks</div>
                    <div className="text-[11px] text-emerald-400">Max stretch: 68 min</div>
                  </div>
                </div>
              </div>

              {/* Proportional Time Distribution Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-white">Daily Category Allocation</span>
                  <span>Total Screen Time: 7h 12m</span>
                </div>
                <div className="h-4 rounded-lg bg-slate-800/80 overflow-hidden flex shadow-inner">
                  <div className="h-full bg-emerald-500 w-[64%]" title="Productive (64%)" />
                  <div className="h-full bg-slate-500 w-[18%]" title="Neutral (18%)" />
                  <div className="h-full bg-rose-500 w-[11%]" title="Distracting (11%)" />
                  <div className="h-full bg-slate-700 w-[7%]" title="Idle (7%)" />
                </div>
                <div className="flex flex-wrap items-center justify-between text-xs pt-1 text-slate-400">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> 🟢 Productive: 4h 36m (64%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-400" /> ⬜ Neutral: 1h 18m (18%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> 🔴 Distracting: 48m (11%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-600" /> 💤 Idle: 30m (7%)</span>
                </div>
              </div>

              {/* Sample Automated Diagnostic Cards */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-cyan-400" />
                  Automated Engine Diagnostics ("What Went Wrong & How to Fix It")
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400">✅ DEEP-WORK CHAMPION</span>
                      <span className="text-[10px] text-emerald-300 font-mono">180m flow</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      You logged 3 high-intensity focus blocks without distraction in Visual Studio Code and Terminal.
                    </p>
                    <div className="mt-2 text-[11px] text-cyan-300 font-medium">
                      💡 Strategic Tip: Schedule your primary creative tasks during this 10 AM window tomorrow.
                    </div>
                  </div>

                  <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400">⚠️ AFTERNOON DISTRACTION SPURT</span>
                      <span className="text-[10px] text-amber-300 font-mono">28m loss</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      High context switches and social site visits occurred between 2:15 PM and 2:45 PM.
                    </p>
                    <div className="mt-2 text-[11px] text-amber-300 font-medium">
                      💡 Strategic Tip: Take a physical 10-minute walk before mental fatigue forces involuntary browsing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Built for privacy, engineered for focus.
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Unlike cloud trackers that log your keystrokes or sell browsing data,
              FocusLens is local-first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0E121B] border border-white/[0.08] rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">100% Local Privacy</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                No keystroke content is ever recorded. Window titles can be regex-blocklisted,
                and browser tracking records only domain roots (e.g. <code>github.com</code>),
                never full URLs or query params.
              </p>
            </div>

            <div className="bg-[#0E121B] border border-white/[0.08] rounded-2xl p-6 relative overflow-hidden group hover:border-indigo-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">12 Rule Insight Engine</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Deterministic diagnostics evaluate attention fragmentation, cognitive fatigue,
                shallow focus blocks, and thermal hardware bottlenecks — pinpointing exactly
                what impaired your day.
              </p>
            </div>

            <div className="bg-[#0E121B] border border-white/[0.08] rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Menu Bar & Native Desktop</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Runs unobtrusively in your macOS status bar with a live session timer ticker.
                Launch the standalone desktop dashboard window with a single click.
              </p>
            </div>
          </div>
        </div>

        {/* Installation & Quick Start Guide */}
        <div id="install-guide" className="mt-24 max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 bg-gradient-to-b from-[#121626] to-[#0A0D14] border border-white/[0.1] shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
              <div>
                <h3 className="text-xl font-bold text-white">Get FocusLens for MacBook</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Supported on macOS 12 Monterey or later (Apple Silicon M1/M2/M3 & Intel x86)
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-semibold">
                Open Source & Self-Hostable
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-black/60 rounded-xl p-4 border border-white/[0.06] font-mono text-xs text-slate-300 overflow-x-auto">
                <div className="text-slate-500 mb-2"># 1. Clone & Bootstrap FocusLens</div>
                <div className="text-cyan-300">git clone https://github.com/Explainerace/focuslens.git</div>
                <div className="text-cyan-300">cd focuslens && ./install.sh</div>
              </div>

              <div className="bg-black/60 rounded-xl p-4 border border-white/[0.06] font-mono text-xs text-slate-300 overflow-x-auto">
                <div className="text-slate-500 mb-2"># 2. Or Launch Directly on macOS</div>
                <div className="text-emerald-400">open ~/Applications/FocusLens.app</div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08] text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero background CPU consumption (&lt; 2% usage)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>One-click complete data purge anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
