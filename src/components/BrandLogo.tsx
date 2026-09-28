import React from "react";

interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
}

export const BrandEmblem: React.FC<{ className?: string; size?: number }> = ({
  className = "w-9 h-9",
}) => (
  <div
    className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0c0d14] via-[#121526] to-[#0c0d14] border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.25)] group-hover:shadow-[0_0_28px_rgba(6,182,212,0.45)] group-hover:border-cyan-400/50 transition-all duration-300 p-1.5 ${className}`}
  >
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
    >
      <defs>
        <linearGradient id="emblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Stylized 'E' Left Spine & Bars */}
      <path
        d="M8 8H22C24.2 8 26 9.8 26 12V13C26 14.1 25.1 15 24 15H15V21H23C24.1 21 25 21.9 25 23V25C25 26.1 24.1 27 23 27H15V33H24C25.1 33 26 33.9 26 35V36C26 38.2 24.2 40 22 40H8C6.9 40 6 39.1 6 38V10C6 8.9 6.9 8 8 8Z"
        fill="url(#glassGrad)"
        stroke="url(#emblemGrad)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Futuristic Play Triangle intersecting the right side */}
      <path
        d="M26 15.5L41.5 24L26 32.5V15.5Z"
        fill="url(#glassGrad)"
        stroke="url(#emblemGrad)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Play Accent Center Glow Triangle */}
      <polygon
        points="29,19 37.5,24 29,29"
        fill="#00F0FF"
        fillOpacity="0.35"
      />
    </svg>
  </div>
);

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  showSubtitle = true,
  size = "md",
  iconOnly = false,
}) => {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-base tracking-wider",
    md: "text-lg tracking-wider",
    lg: "text-2xl tracking-wider",
  };

  const subtitleSizes = {
    sm: "text-[9px]",
    md: "text-[10px]",
    lg: "text-xs",
  };

  return (
    <div className={`group inline-flex items-center gap-2.5 ${className}`}>
      <BrandEmblem className={iconSizes[size]} />

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-center">
            <span
              className={`font-black uppercase font-mono text-white group-hover:text-cyan-300 transition-colors ${textSizes[size]}`}
            >
              EXPLAINER<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">ACE</span>
            </span>
          </div>
          {showSubtitle && (
            <span
              className={`tracking-widest uppercase font-semibold text-slate-400 group-hover:text-slate-300 transition-colors ${subtitleSizes[size]}`}
            >
              Software & SaaS Videos
            </span>
          )}
        </div>
      )}
    </div>
  );
};
