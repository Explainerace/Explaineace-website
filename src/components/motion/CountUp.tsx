"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  decimals?: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

/** Animates a number from 0 to `to` the first time it scrolls into view. */
export const CountUp: React.FC<CountUpProps> = ({
  to,
  decimals = 0,
  duration = 1600,
  suffix = "",
  className = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  // Render the final value on the server so crawlers and no-JS users see it.
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    setValue(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 4);
          setValue(to * eased);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};
