"use client";

import React, { useRef } from "react";

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/** Card wrapper with a soft glow that follows the pointer. */
export const Spotlight: React.FC<SpotlightProps> = ({
  children,
  className = "",
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      className={`spotlight-card ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
