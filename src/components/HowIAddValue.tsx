import React from "react";
import {
  Video,
  ZoomIn,
  MousePointerClick,
  Target,
  Mic,
  Subtitles,
  Layers,
  Sparkles,
} from "lucide-react";

interface ValueBlock {
  title: string;
  description: string;
  icon: React.ElementType;
  badge: string;
}

const BLOCKS: ValueBlock[] = [
  {
    title: "Screen Recording",
    description: "Clean high-resolution product capture in 1080p and 4K at 60 FPS without UI stutter or blurry scaling.",
    icon: Video,
    badge: "1080p / 4K",
  },
  {
    title: "Zooms & Focus",
    description: "Direct attention to important UI elements with calibrated pan & zoom sequences that eliminate squinting.",
    icon: ZoomIn,
    badge: "Focal Framing",
  },
  {
    title: "Cursor & Click Effects",
    description: "Make every interaction easy to follow through smoothed cursor acceleration and illuminated click ripples.",
    icon: MousePointerClick,
    badge: "Interaction Design",
  },
  {
    title: "Annotations",
    description: "Arrows, labels, boxes and highlights that point out key features at the exact moment they are discussed.",
    icon: Target,
    badge: "Visual Cues",
  },
  {
    title: "Voiceover",
    description: "Clear professional narration delivered with studio microphone acoustics and balanced audio leveling.",
    icon: Mic,
    badge: "Studio Audio",
  },
  {
    title: "Captions",
    description: "Accessible and easy-to-follow subtitles burned directly into video or delivered as timed .SRT files.",
    icon: Subtitles,
    badge: "A11y Compliant",
  },
  {
    title: "Motion Graphics",
    description: "Branded transitions, animated intro/outro sequences, and modern feature callouts aligned with your brand guide.",
    icon: Layers,
    badge: "Brand Polish",
  },
];

export const HowIAddValue: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 relative bg-surface-subtle/40 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Production Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            More than screen recording.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Anyone can hit record. Turning complicated workflows into engaging, conversion-focused video assets requires dedicated post-production craft.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {BLOCKS.map((block, idx) => {
            const Icon = block.icon;
            const isWide = idx === BLOCKS.length - 1; // Last card spans nicely or stands out
            return (
              <div
                key={block.title}
                className={`group p-6 rounded-2xl bg-surface-card border border-white/[0.06] hover:border-brand-500/40 transition-all duration-300 hover:shadow-card hover:-translate-y-1 flex flex-col justify-between ${
                  isWide ? "md:col-span-2 lg:col-span-3 xl:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-500/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-400 border border-white/[0.05]">
                      {block.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white group-hover:text-brand-300 transition-colors">
                    {block.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {block.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.04] text-[11px] text-slate-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  <span>Standard on all packages</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
