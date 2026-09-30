"use client";

import React, { useState } from "react";
import { Download, Copy, Check, Terminal, Laptop, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function FocusLensInstaller() {
  const [copied, setCopied] = useState(false);
  const installCmd = "curl -fsSL https://explainerace.up.railway.app/install.sh | bash";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div id="install-guide" className="mt-24 max-w-4xl mx-auto">
      <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#121626] to-[#0A0D14] border border-white/[0.1] shadow-2xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[100px] pointer-events-none -z-10" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How to Install on Any Mac
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Compatible with Apple Silicon (M1/M2/M3/M4) & Intel Macs · macOS 12+
            </p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-semibold">
            100% Free & Local-First
          </span>
        </div>

        {/* Dual Install Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Method 1: 1-Click Terminal (Recommended) */}
          <div className="bg-[#0E121B] border border-cyan-500/30 rounded-2xl p-5 flex flex-col justify-between relative shadow-[0_0_20px_rgba(6,182,212,0.06)]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  <Terminal className="w-4 h-4" /> Method 1 (Fastest)
                </span>
                <span className="text-[11px] font-semibold bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full">
                  Recommended
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Open <b>Terminal</b> on your Mac (Cmd + Space → Terminal) and paste this single command:
              </p>
              <div className="bg-black/80 rounded-xl p-3.5 border border-white/[0.1] font-mono text-[12px] text-cyan-300 flex items-center justify-between gap-2 overflow-x-auto">
                <span className="truncate select-all">{installCmd}</span>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 py-3 rounded-xl transition-all shadow-md active:translate-y-0.5"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Command Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy 1-Click Terminal Command</span>
                </>
              )}
            </button>
          </div>

          {/* Method 2: Direct Finder Package Download (.zip) */}
          <div className="bg-[#0E121B] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl p-5 flex flex-col justify-between transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wider">
                  <Download className="w-4 h-4 text-indigo-400" /> Method 2: Direct Package
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  892 KB
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Prefer a downloaded archive? Download and double-click the installer:
              </p>
              <ol className="text-xs text-slate-400 space-y-2 mb-4 list-decimal list-inside">
                <li>Download <code className="text-slate-200">FocusLens-macOS.zip</code></li>
                <li>Double-click <code className="text-cyan-300">FocusLens-Installer.command</code></li>
                <li>FocusLens automatically launches in your Menu Bar!</li>
              </ol>
            </div>

            <a
              href="/downloads/FocusLens-macOS.zip"
              download="FocusLens-macOS.zip"
              className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.15] py-3 rounded-xl transition-all active:translate-y-0.5"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download FocusLens-macOS.zip</span>
            </a>
          </div>
        </div>

        {/* Footer Guarantee */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08] text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Automatic Desktop & Spotlight shortcut creation</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Telemetry stays 100% on your Mac's disk</span>
          </div>
        </div>
      </div>
    </div>
  );
}
