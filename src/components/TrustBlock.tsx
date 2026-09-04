import React from "react";
import { Star, ShieldCheck, Award, ExternalLink, Users, CreditCard, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const TrustBlock: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-surface-card to-surface-subtle border border-white/[0.08] shadow-2xl relative">
          {/* Subtle glow inside card */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-600/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Platform Track Record</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Trusted by clients who need clarity.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Clear communication, technical accuracy, and flexible payment workflows. Work with Ali through verified platforms or direct escrow contracts with zero friction.
              </p>

              {/* Verified Profiles & Contract CTAs */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={siteConfig.fiverrProfiles[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] px-4 py-2.5 rounded-full transition-all duration-200 group"
                >
                  <span>Fiverr (@video_supermacy)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-brand-400" />
                </a>

                <a
                  href={siteConfig.fiverrProfiles[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] px-4 py-2.5 rounded-full transition-all duration-200 group"
                >
                  <span>Fiverr (@explainerace)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-brand-400" />
                </a>
              </div>
            </div>

            {/* Right: Verified Metrics Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Stat 1: 4.8 / 5 Rating */}
              <div className="p-6 rounded-2xl bg-surface/90 border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4
                            ? "fill-amber-400 text-amber-400"
                            : "fill-amber-400/70 text-amber-400/70"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    4.8 / 5
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.06]">
                  <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Client Rating
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Verified average buyer satisfaction
                  </p>
                </div>
              </div>

              {/* Stat 2: 157 Reviews */}
              <div className="p-6 rounded-2xl bg-surface/90 border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan flex items-center justify-center mb-2">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    157
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.06]">
                  <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Fiverr Reviews
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    100% authentic international clients
                  </p>
                </div>
              </div>

              {/* Stat 3: Upwork Direct & Payoneer Deals */}
              <div className="p-6 rounded-2xl bg-surface/90 border border-white/[0.08] flex flex-col justify-between sm:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-emerald-400" />
                    <span className="text-base font-bold text-white">
                      Direct Upwork Contract & Payoneer Invoicing
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold w-fit">
                    0% Client Fee on Upwork
                  </span>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Avoid high platform commissions! International clients can work via official <strong className="text-white">Upwork Direct Contracts with zero (0%) client fees</strong>, or pay seamlessly via <strong className="text-white">Payoneer</strong> international bank wire and card invoices.
                </p>
              </div>
            </div>
          </div>

          {/* Target Audience Pills */}
          <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs uppercase font-semibold tracking-wider text-slate-500">
              Trusted by teams at:
            </span>
            <div className="flex flex-wrap gap-2">
              {siteConfig.targetAudiences.map((team) => (
                <span
                  key={team}
                  className="text-xs text-slate-300 bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full"
                >
                  {team}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
