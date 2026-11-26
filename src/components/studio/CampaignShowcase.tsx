"use client";

import React, { useState } from "react";
import {
  Monitor,
  Square,
  Smartphone,
  Download,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Calendar,
  Layers,
  ArrowRight,
  RefreshCw,
  FileSpreadsheet,
  TrendingUp,
  SlidersHorizontal,
} from "lucide-react";

type AspectRatio = "16:9" | "1:1" | "9:16";

export const CampaignShowcase: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<AspectRatio>("16:9");
  const [isExporting, setIsExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);

  const triggerExportAction = () => {
    setIsExporting(true);
    setExportComplete(false);
    setTimeout(() => {
      setIsExporting(false);
      setExportComplete(true);
    }, 1200);
  };

  const resetAction = () => {
    setIsExporting(false);
    setExportComplete(false);
  };

  return (
    <section
      className="py-20 sm:py-28 relative overflow-hidden bg-[#08090E] border-t border-b border-white/[0.06]"
      id="campaign-showcase"
      aria-label="Campaign Showcase"
    >
      {/* Background Subtle Grid & Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-600/10 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 right-[15%] w-[400px] h-[400px] bg-[#D4FF3A]/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#D4FF3A]/30 text-xs font-semibold text-[#D4FF3A] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4FF3A]" />
            <span>Interactive Studio Demo</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#FAF8F5] tracking-tight">
            One feature. Three frames.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#C8C2B7] leading-relaxed">
            A single product action doesn’t look identical everywhere. Every campaign package includes distinct social edits recomposed specifically for desktop, feed, and story viewing.
          </p>

          <p className="mt-2 text-xs text-slate-400 font-mono">
            Interactive demo below: test how the “Export Weekly Report” workflow reframes across platforms.
          </p>
        </div>

        {/* STATIONARY Format Selector Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-10 max-w-2xl mx-auto">
          <button
            type="button"
            onClick={() => setSelectedFormat("16:9")}
            className={`w-full sm:w-auto px-5 py-3 rounded-xl sm:rounded-full text-xs font-bold flex items-center justify-center gap-2.5 transition-all duration-200 border ${
              selectedFormat === "16:9"
                ? "bg-[#D4FF3A] text-black border-[#D4FF3A] shadow-lime-glow"
                : "bg-surface-card hover:bg-surface-hover text-slate-300 border-white/[0.08]"
            }`}
            aria-pressed={selectedFormat === "16:9"}
          >
            <Monitor className="w-4 h-4 shrink-0" />
            <span>16:9 — Full workflow</span>
            <span className="text-[10px] opacity-75 font-mono hidden md:inline">(Desktop & YouTube)</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedFormat("1:1")}
            className={`w-full sm:w-auto px-5 py-3 rounded-xl sm:rounded-full text-xs font-bold flex items-center justify-center gap-2.5 transition-all duration-200 border ${
              selectedFormat === "1:1"
                ? "bg-[#D4FF3A] text-black border-[#D4FF3A] shadow-lime-glow"
                : "bg-surface-card hover:bg-surface-hover text-slate-300 border-white/[0.08]"
            }`}
            aria-pressed={selectedFormat === "1:1"}
          >
            <Square className="w-4 h-4 shrink-0" />
            <span>1:1 — Feature spotlight</span>
            <span className="text-[10px] opacity-75 font-mono hidden md:inline">(Feed & LinkedIn)</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedFormat("9:16")}
            className={`w-full sm:w-auto px-5 py-3 rounded-xl sm:rounded-full text-xs font-bold flex items-center justify-center gap-2.5 transition-all duration-200 border ${
              selectedFormat === "9:16"
                ? "bg-[#D4FF3A] text-black border-[#D4FF3A] shadow-lime-glow"
                : "bg-surface-card hover:bg-surface-hover text-slate-300 border-white/[0.08]"
            }`}
            aria-pressed={selectedFormat === "9:16"}
          >
            <Smartphone className="w-4 h-4 shrink-0" />
            <span>9:16 — Action close-up</span>
            <span className="text-[10px] opacity-75 font-mono hidden md:inline">(Reels, Shorts, TikTok)</span>
          </button>
        </div>

        {/* Format Explanation Banner */}
        <div className="max-w-xl mx-auto mb-8 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center text-xs text-slate-300">
          {selectedFormat === "16:9" && (
            <span>
              <strong>16:9 Landscape:</strong> Shows the entire workspace, navigation, metrics, and where the export feature lives in context.
            </span>
          )}
          {selectedFormat === "1:1" && (
            <span>
              <strong>1:1 Square:</strong> Recomposed around the report card. Peripheral navigation is tucked away and the focal typography is enlarged.
            </span>
          )}
          {selectedFormat === "9:16" && (
            <span>
              <strong>9:16 Vertical:</strong> Action close-up designed for mobile thumbs. Opens with a clear hook and readable button placement.
            </span>
          )}
        </div>

        {/* Dynamic Studio Stage Frame */}
        <div className="flex justify-center items-center min-h-[440px] sm:min-h-[500px]">
          
          <div
            className={`relative rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-white/10 shadow-2xl overflow-hidden frame-morph ${
              selectedFormat === "16:9"
                ? "w-full max-w-4xl aspect-[16/9]"
                : selectedFormat === "1:1"
                ? "w-full max-w-[480px] aspect-square"
                : "w-full max-w-[340px] aspect-[9/16]"
            }`}
          >
            {/* Inner Stage UI Screen */}
            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#0B0E17] border border-white/[0.08] flex flex-col justify-between text-left select-none">
              
              {/* FORMAT 1: 16:9 FULL WORKSPACE */}
              {selectedFormat === "16:9" && (
                <div className="flex-1 flex flex-col h-full animate-fade-in p-4 sm:p-6 overflow-hidden">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="font-semibold text-white ml-2">Orbitra Analytics Studio</span>
                      <span className="text-slate-600">/</span>
                      <span className="text-slate-300">Reporting</span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <span className="px-2 py-0.5 rounded bg-white/[0.06] text-emerald-400">Live Sync</span>
                      <span>Oct 24–31</span>
                    </div>
                  </div>

                  {/* Body: Sidebar + Main Content */}
                  <div className="flex-1 grid grid-cols-12 gap-4 mt-4 items-stretch min-h-0">
                    {/* Left Sidebar */}
                    <div className="col-span-3 rounded-xl bg-white/[0.02] border border-white/[0.04] p-3 space-y-2 hidden sm:block">
                      <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Workspace</div>
                      <div className="space-y-1 text-xs">
                        <div className="px-2 py-1.5 rounded-lg bg-white/[0.06] text-white font-medium flex items-center gap-2">
                          <BarChart3 className="w-3.5 h-3.5 text-[#D4FF3A]" />
                          <span>Performance</span>
                        </div>
                        <div className="px-2 py-1.5 rounded-lg text-slate-400 hover:text-white flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Weekly Cadence</span>
                        </div>
                        <div className="px-2 py-1.5 rounded-lg text-slate-400 hover:text-white flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Integrations</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Analytics Canvas */}
                    <div className="col-span-12 sm:col-span-9 rounded-xl bg-surface-card/90 border border-white/[0.08] p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4FF3A]">Feature Flow</span>
                            <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                              Weekly Executive Report
                            </h3>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-1 rounded">
                              +24.8% WOW
                            </span>
                          </div>
                        </div>

                        {/* Chart Preview Graphic */}
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                            <span className="text-[10px] text-slate-400">Total Views</span>
                            <p className="text-sm font-bold text-white mt-0.5">148,290</p>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                            <span className="text-[10px] text-slate-400">Conversion</span>
                            <p className="text-sm font-bold text-emerald-400 mt-0.5">4.82%</p>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                            <span className="text-[10px] text-slate-400">Export Format</span>
                            <p className="text-sm font-bold text-white mt-0.5">CSV & PDF</p>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Action Control */}
                      <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between">
                        <div className="text-[11px] text-slate-400 flex items-center gap-2">
                          <FileSpreadsheet className="w-3.5 h-3.5 text-slate-400" />
                          <span>Generated: 4.2 MB encrypted summary</span>
                        </div>

                        <div className="flex items-center gap-2">
                          {exportComplete ? (
                            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Report Downloaded</span>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={triggerExportAction}
                              disabled={isExporting}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4FF3A] hover:bg-[#C2F028] text-black text-xs font-bold transition-all active:scale-95 shadow-sm"
                            >
                              {isExporting ? (
                                <>
                                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                  <span>Exporting...</span>
                                </>
                              ) : (
                                <>
                                  <Download className="w-3.5 h-3.5" />
                                  <span>Export Weekly Report</span>
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* FORMAT 2: 1:1 FEATURE SPOTLIGHT */}
              {selectedFormat === "1:1" && (
                <div className="flex-1 flex flex-col justify-between h-full animate-fade-in p-6 sm:p-8 overflow-hidden">
                  {/* Top: Bold Headline Recomposed for Feed */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4FF3A] px-2.5 py-0.5 rounded-full bg-[#D4FF3A]/10 border border-[#D4FF3A]/20">
                        Feature Spotlight
                      </span>
                      <span className="text-xs font-mono text-slate-400">1:1 Feed Cut</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                      Export your entire weekly report in one click.
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      All pipeline growth, conversion deltas, and cohort analytics compiled automatically.
                    </p>
                  </div>

                  {/* Center Card: High Contrast Focal Element */}
                  <div className="p-4 rounded-2xl bg-surface-card border-2 border-[#D4FF3A]/30 shadow-lime-glow my-3 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#D4FF3A]" />
                        <span className="text-xs font-bold text-white">Week 42 Overview</span>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-bold">+38% Target</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-lg bg-white/[0.03]">
                        <span className="text-[10px] text-slate-400">MRR Impact</span>
                        <p className="font-bold text-white text-sm">+$14,280</p>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.03]">
                        <span className="text-[10px] text-slate-400">Activation</span>
                        <p className="font-bold text-emerald-400 text-sm">74.2%</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Primary CTA Recomposed into Square */}
                  <div>
                    {exportComplete ? (
                      <div className="w-full py-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Weekly Report Ready &bull; 4.2 MB</span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={triggerExportAction}
                        disabled={isExporting}
                        className="w-full py-3.5 px-4 rounded-xl bg-[#D4FF3A] hover:bg-[#C2F028] text-black text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lime-glow"
                      >
                        {isExporting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Exporting Weekly Report...</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            <span>Tap to Export Report (1:1)</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* FORMAT 3: 9:16 ACTION CLOSE-UP */}
              {selectedFormat === "9:16" && (
                <div className="flex-1 flex flex-col justify-between h-full animate-fade-in p-5 sm:p-6 overflow-hidden">
                  {/* Top Mobile Story Header */}
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                      <span className="font-bold text-[#D4FF3A] uppercase tracking-wider">Story Close-up</span>
                      <span className="font-mono">9:16 Reel</span>
                    </div>

                    <h3 className="text-lg font-black text-white leading-snug">
                      Export your weekly report.
                    </h3>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Thumb-ready controls built for 9:16 screens.
                    </p>
                  </div>

                  {/* Center: Close-up Zoom Card */}
                  <div className="p-4 rounded-2xl bg-surface-card border-2 border-white/[0.12] my-auto space-y-3">
                    <div className="w-8 h-8 rounded-full bg-[#D4FF3A]/20 flex items-center justify-center text-[#D4FF3A]">
                      <FileSpreadsheet className="w-4 h-4" />
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Weekly Summary</span>
                      <p className="text-base font-bold text-white">Q3 Executive PDF</p>
                      <span className="text-xs text-emerald-400 font-mono font-semibold">+24.8% Growth</span>
                    </div>
                  </div>

                  {/* Bottom: Thumb-Zone Large Button */}
                  <div className="space-y-2">
                    {exportComplete ? (
                      <div className="w-full py-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Saved to Device</span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={triggerExportAction}
                        disabled={isExporting}
                        className="w-full py-4 px-4 rounded-2xl bg-[#D4FF3A] hover:bg-[#C2F028] text-black text-xs font-black flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lime-glow"
                      >
                        {isExporting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Exporting...</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            <span>Export Now</span>
                          </>
                        )}
                      </button>
                    )}

                    <div className="text-[10px] text-center text-slate-500">
                      Recomposed for vertical thumb retention
                    </div>
                  </div>
                </div>
              )}

              {/* Reset Trigger if Completed */}
              {exportComplete && (
                <button
                  type="button"
                  onClick={resetAction}
                  className="absolute top-3 right-3 z-30 p-1.5 rounded-full bg-black/80 hover:bg-black text-slate-400 hover:text-white border border-white/10 text-[10px] flex items-center gap-1 transition-colors"
                  title="Replay flow"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span className="pr-1">Replay</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Caption explaining client value */}
        <div className="mt-8 text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-200">What you’re buying:</strong> We don’t just crop a desktop video. We re-animate typography, scale buttons for mobile thumbs, and recompose visual hierarchy so every format converts on its native feed.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CampaignShowcase;
