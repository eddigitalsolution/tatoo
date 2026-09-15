import React, { useRef, useEffect, useState } from 'react';
import { Eye, Eraser, PenTool, ArrowDown, ChevronRight, Compass, MessageCircle } from 'lucide-react';
import { OFFICIAL_CONTACT, handleImageError } from '../data/tattooData';

interface HeroInkMaskProps {
  onOpenConsultation: () => void;
}

export const HeroInkMask: React.FC<HeroInkMaskProps> = ({ onOpenConsultation }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewMode, setViewMode] = useState<'mask' | 'full'>('mask');

  // Hero Fine Art Artwork beneath the ink mask
  const heroImageSrc = "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=2000&q=90";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      canvas.width = containerRef.current.clientWidth;
      canvas.height = containerRef.current.clientHeight;
      resetMask();
    };

    const resetMask = () => {
      if (!canvas || !ctx) return;
      // Deep obsidian mask
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#09090b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dark subtle noise / atmospheric wash
      ctx.fillStyle = 'rgba(18, 18, 22, 0.94)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle atmospheric radial vignette
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.1,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.75
      );
      gradient.addColorStop(0, 'rgba(0,0,0,0.15)');
      gradient.addColorStop(1, 'rgba(9,9,11,0.98)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Center initial reveal aperture
      ctx.globalCompositeOperation = 'destination-out';
      const initialRadius = Math.min(canvas.width, canvas.height) * 0.16;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, initialRadius, 0, Math.PI * 2);
      ctx.fill();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (viewMode !== 'mask') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    
    // Smooth ink splatter reveal
    ctx.beginPath();
    const brushRadius = Math.random() * 15 + 55;
    ctx.arc(x, y, brushRadius, 0, Math.PI * 2);
    ctx.fill();

    for (let i = 0; i < 3; i++) {
      const offsetX = (Math.random() - 0.5) * 50;
      const offsetY = (Math.random() - 0.5) * 50;
      const r = Math.random() * 10 + 6;
      ctx.beginPath();
      ctx.arc(x + offsetX, y + offsetY, r, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const handleClearMask = () => {
    setViewMode(viewMode === 'full' ? 'mask' : 'full');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full bg-[#09090b] flex flex-col justify-between pt-28 pb-10 overflow-hidden select-none"
    >
      {/* Target anchor for backwards compatibility */}
      <div id="hero" className="absolute top-0 left-0 w-0 h-0 pointer-events-none" />

      {/* Background Interactive Artwork layer */}
      <div 
        ref={containerRef}
        onPointerMove={handlePointerMove}
        className="absolute inset-0 z-0 overflow-hidden cursor-crosshair touch-none"
      >
        <div className="relative w-full h-full">
          <img
            src={heroImageSrc}
            alt="Renaissance Chiaroscuro Tattoo Fine Art"
            onError={handleImageError}
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-110 contrast-125 transition-all duration-700"
          />
          {/* Subtle amber gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-[#09090b]/40 to-[#09090b]/80 pointer-events-none" />
          <div className="absolute inset-0 bg-amber-500/5 mix-blend-color-dodge pointer-events-none" />
        </div>

        {/* Dynamic Canvas Ink Mask */}
        {viewMode === 'mask' && (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-10 transition-opacity duration-500"
          />
        )}
      </div>

      {/* Top Floating Status & Interactive Controls */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        {/* Studio Status Badge */}
        <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-amber-500/30 text-[11px] text-zinc-300 font-mono shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-amber-400 font-semibold tracking-wider">EXHIBITION ACTIVE</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400 hidden sm:inline">TOKYO • NEW YORK • LONDON</span>
          <span className="text-zinc-400 sm:hidden">RESIDENT MASTERS</span>
        </div>

        {/* Interactive Ink Mask Controls */}
        <div className="flex items-center space-x-2.5 bg-zinc-950/90 backdrop-blur-md p-1 rounded-full border border-zinc-800 shadow-xl">
          <button
            onClick={handleClearMask}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-mono transition-all ${
              viewMode === 'full'
                ? 'bg-amber-400 text-zinc-950 font-bold shadow-md shadow-amber-400/20'
                : 'bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800'
            }`}
          >
            {viewMode === 'full' ? (
              <>
                <Eraser className="w-3.5 h-3.5" />
                <span>RESTORE INK MASK</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                <span>REVEAL MASTERPIECE</span>
              </>
            )}
          </button>

          <div className="hidden sm:flex items-center space-x-1.5 px-3 text-[10px] font-mono text-zinc-400">
            <PenTool className="w-3 h-3 text-amber-400" />
            <span>SWIPE CURSOR TO CARVE INK</span>
          </div>
        </div>
      </div>

      {/* Center Main Hero Typography & Callout */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto py-10 pointer-events-none">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-[0.35em] text-amber-400 uppercase">
            <span className="w-6 h-px bg-amber-400" />
            <span>CONTEMPORARY FINE ART & BODY CANVAS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-white leading-[0.95]">
            MAKE IT <br />
            <span className="gold-gradient-text italic font-normal">PERMANENT.</span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed drop-shadow-md">
            Where classical Renaissance chiaroscuro shading meets single-needle precision. 
            An elite contemporary art gallery where body canvas turns narrative into immortal art.
          </p>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap items-center gap-3 pointer-events-auto">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3.5 rounded-full bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-bold tracking-widest text-[11px] uppercase flex items-center space-x-2.5 hover:scale-105 transition-all duration-300 shadow-xl shadow-amber-500/20 active:scale-95"
            >
              <span>COMMISSION YOUR PIECE</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href={`${OFFICIAL_CONTACT.whatsappUrl}?text=Hello%20ED%20Tattoo%20Studio,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20private%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-zinc-900/90 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:text-emerald-200 font-mono tracking-wider text-[11px] uppercase transition-all duration-300 flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WHATSAPP VIP INQUIRY</span>
            </a>

            <a
              href="#artists"
              className="px-6 py-3.5 rounded-full bg-zinc-950/80 border border-zinc-800 hover:border-amber-500/40 text-zinc-300 hover:text-amber-300 font-mono tracking-wider text-[11px] uppercase transition-all duration-300 flex items-center space-x-2"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>EXPLORE MASTERS</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-zinc-400 border-t border-white/10 pt-5 gap-3">
        <div className="flex flex-wrap items-center gap-6 sm:gap-8">
          <div>
            <span className="text-zinc-500 block text-[9px] uppercase tracking-widest">CONCEPT</span>
            <span className="text-zinc-200 font-serif tracking-wider text-xs">BODY AS GALLERY</span>
          </div>
          <div>
            <span className="text-zinc-500 block text-[9px] uppercase tracking-widest">TECHNIQUE</span>
            <span className="text-zinc-200 font-serif tracking-wider text-xs">SINGLE-NEEDLE CHIAROSCURO</span>
          </div>
          <div className="hidden md:block">
            <span className="text-zinc-500 block text-[9px] uppercase tracking-widest">CONCIERGE HOTLINE</span>
            <span className="text-amber-400 font-mono text-xs">{OFFICIAL_CONTACT.phone}</span>
          </div>
        </div>

        <a 
          href="#artists" 
          className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors group cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono">SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>

    </section>
  );
};
