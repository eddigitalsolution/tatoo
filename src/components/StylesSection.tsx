import React, { useState } from 'react';
import type { TattooStyle } from '../types/tattoo';
import { STYLES_DATA, handleImageError } from '../data/tattooData';
import { CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const StylesSection: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<TattooStyle>(STYLES_DATA[0]);

  return (
    <section id="styles" className="py-28 bg-[#0d0d10] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-zinc-800/80 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs tracking-[0.3em] uppercase mb-3">
              <span className="w-5 h-px bg-amber-400" />
              <span>CURATED DISCIPLINES & VISUAL IDENTITY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              CURATED <span className="gold-gradient-text italic font-normal">DISCIPLINES</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
            From dramatic Renaissance light-and-dark contrasts to ultra-refined single-needle linework, our studio disciplines represent uncompromising mastery.
          </p>
        </div>

        {/* Interactive Style Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Style Selector Tabs Column */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
              SELECT SIGNATURE DISCIPLINE
            </span>

            {STYLES_DATA.map((style) => {
              const isSelected = selectedStyle.id === style.id;
              return (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-zinc-900 border-amber-500/50 shadow-xl shadow-amber-500/5 translate-x-1'
                      : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-400' : 'bg-zinc-600'}`} />
                      <h3 className={`font-serif font-semibold text-base sm:text-lg ${isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                        {style.name}
                      </h3>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-light pl-4 line-clamp-1">
                      {style.tagline}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-amber-400 translate-x-1' : 'text-zinc-600 group-hover:text-zinc-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Style Spotlight Panel */}
          <div className="lg:col-span-7 bg-[#121215] border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden border border-zinc-800">
                <img
                  src={selectedStyle.imageUrl}
                  alt={selectedStyle.name}
                  onError={handleImageError}
                  className="w-full h-full object-cover filter brightness-105 contrast-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#121215] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 bg-zinc-950/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-amber-500/30 text-[10px] font-mono text-amber-300">
                  FEATURED DISCIPLINE • {selectedStyle.id.toUpperCase()}
                </div>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">{selectedStyle.name}</h3>
                <p className="text-amber-300/90 text-xs sm:text-sm font-mono">{selectedStyle.tagline}</p>
                <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                  {selectedStyle.description}
                </p>
              </div>

              {/* Characteristics checklist */}
              <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                  KEY SIGNATURE MARKS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedStyle.characteristics.map((item) => (
                    <div key={item} className="flex items-center space-x-2 text-xs text-zinc-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-400">
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4 text-amber-400 shrink-0" />
                <span>NEEDLE PRECISION & CUSTOM PIGMENTS</span>
              </div>
              <a 
                href="#selected-work"
                className="text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-widest font-semibold flex items-center space-x-1"
              >
                <span>VIEW WORKS IN THIS STYLE</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
