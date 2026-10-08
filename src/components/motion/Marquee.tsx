import React from "react";

interface MarqueeProps {
  items: string[];
  className?: string;
}

/** Infinite horizontal ticker with faded edges. Pauses on hover. */
export const Marquee: React.FC<MarqueeProps> = ({ items, className = "" }) => {
  const row = (hidden: boolean) => (
    <ul className="marquee-track flex shrink-0 items-center gap-3 pr-3" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li
          key={item}
          className="text-xs text-slate-300 bg-white/[0.04] border border-white/[0.06] px-3.5 py-1.5 rounded-full whitespace-nowrap"
        >
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marquee group relative flex overflow-hidden ${className}`}>
      {row(false)}
      {row(true)}
    </div>
  );
};
