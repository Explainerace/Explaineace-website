"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Play, ArrowRight, Pause, RotateCw, Sparkles, CheckCircle2, Film } from "lucide-react";
import { VideoModal } from "@/components/VideoModal";
import { projects } from "@/data/projects";

export const StudioHero: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isOffscreen, setIsOffscreen] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number | null>(null);

  // Orbitra One is the premier launch film
  const launchFilm = projects.find((p) => p.id === "orbitra-one-saas-promo") || projects[0];

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setIsReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  // Pause rendering when hero is offscreen or document is hidden
  useEffect(() => {
    if (!heroRef.current || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOffscreen(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroRef.current);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsOffscreen(true);
      } else if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setIsOffscreen(rect.bottom < 0 || rect.top > window.innerHeight);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Canvas sculptural chrome loop simulation that turns and catches soft lime reflections
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1));
    let height = (canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1));

    let angle = 0;
    const shouldAnimate = !isPaused && !isOffscreen && !isReducedMotion;

    const drawSculpture = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.5;
      const baseR = Math.min(width, height) * 0.36;

      // Draw 3 intertwined chrome ribbon loops with soft lime specular highlights
      const ribbons = [
        { rotOffset: 0, tilt: 0.35, scaleX: 1.0, scaleY: 0.58 },
        { rotOffset: Math.PI / 3, tilt: -0.4, scaleX: 0.88, scaleY: 0.72 },
        { rotOffset: (Math.PI * 2) / 3, tilt: 0.2, scaleX: 0.95, scaleY: 0.64 },
      ];

      ribbons.forEach((ribbon, idx) => {
        const theta = angle + ribbon.rotOffset;
        const currentR = baseR * (1 + 0.08 * Math.sin(theta * 1.5));

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(theta * 0.6);
        ctx.scale(ribbon.scaleX, ribbon.scaleY);

        // Path of smooth Möbius-like elliptic curve
        ctx.beginPath();
        const steps = 72;
        for (let i = 0; i <= steps; i++) {
          const t = (i / steps) * Math.PI * 2;
          const r = currentR * (1 + 0.18 * Math.cos(t * 3 + theta));
          const px = r * Math.cos(t);
          const py = r * Math.sin(t);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();

        // Chrome gradient with soft acid-lime catch reflection
        const grad = ctx.createLinearGradient(
          -currentR * Math.cos(theta),
          -currentR * Math.sin(theta),
          currentR * Math.cos(theta),
          currentR * Math.sin(theta)
        );

        grad.addColorStop(0, "rgba(255, 255, 255, 0.75)");
        grad.addColorStop(0.2, "rgba(180, 190, 205, 0.45)");
        grad.addColorStop(0.45, "rgba(212, 255, 58, 0.55)"); // Acid-lime reflection
        grad.addColorStop(0.7, "rgba(130, 145, 170, 0.35)");
        grad.addColorStop(0.9, "rgba(255, 255, 255, 0.85)");
        grad.addColorStop(1, "rgba(212, 255, 58, 0.4)"); // Soft lime catch

        ctx.strokeStyle = grad;
        ctx.lineWidth = 14 * (window.devicePixelRatio || 1);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowColor = "rgba(212, 255, 58, 0.35)";
        ctx.shadowBlur = 24 * (window.devicePixelRatio || 1);
        ctx.stroke();

        // Inner specular white glint
        ctx.beginPath();
        for (let i = 0; i <= steps; i += 2) {
          const t = (i / steps) * Math.PI * 2;
          const r = currentR * (1 + 0.18 * Math.cos(t * 3 + theta));
          const px = r * Math.cos(t);
          const py = r * Math.sin(t);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
        ctx.lineWidth = 2.5 * (window.devicePixelRatio || 1);
        ctx.shadowBlur = 0;
        ctx.stroke();

        ctx.restore();
      });

      if (shouldAnimate) {
        angle += 0.0075;
        animFrameRef.current = requestAnimationFrame(drawSculpture);
      }
    };

    drawSculpture();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      height = canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
      drawSculpture();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [isPaused, isOffscreen, isReducedMotion]);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section
      ref={heroRef}
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-white/[0.06]"
      aria-label="Studio Hero"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="aurora absolute top-[10%] left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-brand-600/15 blur-[140px] rounded-full" />
        <div className="absolute top-[25%] right-[10%] w-[380px] h-[380px] bg-[#D4FF3A]/8 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Studio Headline, 3-Pillar First-Screen Value, Actions */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-7">
            
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D4FF3A] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                Animated Product Video Studio
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-[#D4FF3A] font-medium">Ali · Video Specialist</span>
            </div>

            {/* Headline: "Product films in motion." */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FAF8F5] leading-[1.08] break-words">
              <span className="line-mask">
                <span className="line-rise" style={{ "--d": "60ms" } as React.CSSProperties}>
                  Product films
                </span>
              </span>
              <span className="line-mask">
                <span
                  className="line-rise bg-gradient-to-r from-[#FAF8F5] via-slate-100 to-[#D4FF3A] bg-clip-text text-transparent"
                  style={{ "--d": "180ms" } as React.CSSProperties}
                >
                  in motion.
                </span>
              </span>
            </h1>

            {/* Supporting Line (Exact) */}
            <p className="text-base sm:text-xl text-[#E6E1D8] font-normal leading-relaxed max-w-2xl">
              Launch your software with a product film, show people how it works with clear tutorials, and get social cuts ready for every screen.
            </p>

            {/* First-Screen Buyer Proof: 3 Core Truths */}
            <div className="pt-1 pb-1 grid grid-cols-1 sm:grid-cols-3 gap-3 border-y border-white/[0.08] text-xs">
              <div className="flex items-start gap-2 py-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4FF3A] shrink-0 mt-0.5" />
                <span className="text-slate-200 font-medium leading-snug">
                  <strong>Main product video:</strong> High-impact launch film or clear walkthrough.
                </span>
              </div>
              <div className="flex items-start gap-2 py-2 border-t sm:border-t-0 sm:border-l border-white/[0.06] sm:pl-3">
                <CheckCircle2 className="w-4 h-4 text-[#D4FF3A] shrink-0 mt-0.5" />
                <span className="text-slate-200 font-medium leading-snug">
                  <strong>3 format cuts:</strong> Every social edit delivered in 16:9, 1:1, and 9:16.
                </span>
              </div>
              <div className="flex items-start gap-2 py-2 border-t sm:border-t-0 sm:border-l border-white/[0.06] sm:pl-3">
                <CheckCircle2 className="w-4 h-4 text-[#D4FF3A] shrink-0 mt-0.5" />
                <span className="text-slate-200 font-medium leading-snug">
                  <strong>Flexible publishing:</strong> Post them yourself or hire me to handle scheduling.
                </span>
              </div>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              {/* Primary Action: Explore packages */}
              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-black bg-[#D4FF3A] hover:bg-[#C2F028] px-7 py-3.5 rounded-full shadow-lime-glow hover:shadow-lime-glow-lg transition-all duration-200 active:scale-95 text-center"
              >
                <span>Explore packages</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary Action: Watch launch film */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] hover:border-white/25 px-6 py-3.5 rounded-full backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 group"
                aria-label={`Watch launch film: ${launchFilm.title}`}
              >
                <span className="w-6 h-6 rounded-full bg-[#D4FF3A]/20 flex items-center justify-center text-[#D4FF3A] group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </span>
                <span>Watch launch film</span>
                <span className="text-xs text-slate-400 font-mono">({launchFilm.duration})</span>
              </button>
            </div>

            {/* Quick reassurance */}
            <p className="text-xs text-slate-400">
              Introductory campaign packages from $249 · Turnaround in 4–10 business days · 2 revision rounds
            </p>
          </div>

          {/* Right Column: Sculptural Chrome Loop with Soft Lime Reflection */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center mt-6 lg:mt-0">
            {/* The Sculptural Loop Container */}
            <div className="relative w-full max-w-[460px] aspect-square rounded-3xl p-2 bg-gradient-to-b from-white/10 via-transparent to-white/5 border border-white/[0.08] shadow-2xl overflow-hidden flex items-center justify-center">
              
              {/* Ambient lime glow catch behind sculpture */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-brand-600/20 via-[#D4FF3A]/15 to-transparent blur-3xl pointer-events-none" />

              {/* HTML5 Canvas Sculptural Chrome Loop */}
              <canvas
                ref={canvasRef}
                className={`w-full h-full object-contain relative z-10 transition-opacity duration-500 ${
                  isPaused ? "opacity-90" : "opacity-100"
                }`}
                aria-label="Sculptural chrome loop catching soft lime reflections"
              />

              {/* Still Fallback Graphic (rendered behind/for non-JS or reduced motion) */}
              <noscript>
                <div className="absolute inset-4 rounded-2xl bg-[#0F1118] border border-white/10 flex items-center justify-center text-center p-6 text-slate-300">
                  <p className="text-sm">Studio Chrome Visual · ExplainerAce</p>
                </div>
              </noscript>

              {/* In-Frame Motion HUD Controls */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/[0.1] text-[11px] text-slate-300">
                  <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? "bg-amber-400" : "bg-[#D4FF3A] animate-pulse"}`} />
                  <span>{isPaused ? "Loop Paused" : "Sculptural Chrome Loop"}</span>
                </div>

                <button
                  type="button"
                  onClick={togglePause}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 hover:bg-white/[0.15] backdrop-blur-md border border-white/[0.15] text-[11px] font-medium text-slate-200 transition-colors"
                  aria-label={isPaused ? "Resume chrome animation" : "Pause chrome animation"}
                >
                  {isPaused ? (
                    <>
                      <RotateCw className="w-3 h-3 text-[#D4FF3A]" />
                      <span>Resume</span>
                    </>
                  ) : (
                    <>
                      <Pause className="w-3 h-3 text-slate-400" />
                      <span>Pause</span>
                    </>
                  )}
                </button>
              </div>

              {/* Click to Preview Film Badge */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-[11px] font-semibold text-[#D4FF3A] border border-[#D4FF3A]/30 backdrop-blur-md shadow-md transition-transform hover:scale-105"
              >
                <Film className="w-3.5 h-3.5 text-[#D4FF3A]" />
                <span>Orbitra One (4K)</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* On-Demand Video Modal for Launch Film */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoId={launchFilm.videoId}
        videoUrl={launchFilm.videoUrl}
        title={launchFilm.title}
        category={launchFilm.category}
        projectId={launchFilm.id}
      />
    </section>
  );
};

export default StudioHero;
