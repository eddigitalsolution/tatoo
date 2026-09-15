import React, { useState } from 'react';
import { PLACEMENT_OPTIONS, STYLES_DATA, OFFICIAL_CONTACT, handleImageError } from '../data/tattooData';
import type { PlacementOption } from '../types/tattoo';
import { Sliders, Sun, Shield, Clock, MessageCircle, ChevronRight, Check } from 'lucide-react';

interface PlacementStudioProps {
  onSelectPlacementForBooking: (placementName: string, styleName: string) => void;
}

export const PlacementStudio: React.FC<PlacementStudioProps> = ({ onSelectPlacementForBooking }) => {
  const [selectedPlacement, setSelectedPlacement] = useState<PlacementOption>(PLACEMENT_OPTIONS[0]);
  const [selectedStyleIndex, setSelectedStyleIndex] = useState<number>(0);
  const [inkDensity, setInkDensity] = useState<number>(90); // 50 to 100%
  const [scaleSize, setScaleSize] = useState<number>(85); // 50 to 100%
  const [lightingMode, setLightingMode] = useState<'gallery' | 'dramatic' | 'daylight'>('gallery');

  const currentStyle = STYLES_DATA[selectedStyleIndex];

  const getLightingFilter = () => {
    switch (lightingMode) {
      case 'dramatic':
        return 'contrast(135%) brightness(95%) saturate(85%)';
      case 'daylight':
        return 'contrast(105%) brightness(110%) saturate(100%)';
      case 'gallery':
      default:
        return 'contrast(115%) brightness(105%) saturate(90%)';
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello ED Studio, I tested the Virtual Canvas Studio and would like to commission a piece on the *${selectedPlacement.name}* in the *${currentStyle.name}* style (Scale: ${scaleSize}%, Density: ${inkDensity}%).`;
    return `${OFFICIAL_CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="canvas-studio" className="py-28 bg-[#09090b] relative overflow-hidden border-t border-zinc-900">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 pb-6 border-b border-zinc-800/80 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs tracking-[0.3em] uppercase mb-3">
              <span className="w-5 h-px bg-amber-400" />
              <span>VIRTUAL ANATOMICAL CANVAS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              PLACEMENT <span className="gold-gradient-text italic font-normal">STUDIO</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
            Test placement zones, calibrate ink density, and preview how classical chiaroscuro shading frames your body structure before sitting for the needle.
          </p>
        </div>

        {/* Studio Grid: Controls & Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Anatomical Placement Selection Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
              SELECT ANATOMICAL CANVAS ZONE
            </span>

            <div className="space-y-2.5">
              {PLACEMENT_OPTIONS.map((placement) => {
                const isSelected = selectedPlacement.id === placement.id;
                return (
                  <button
                    key={placement.id}
                    onClick={() => setSelectedPlacement(placement)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-zinc-900 border-amber-500/50 shadow-lg shadow-amber-500/5 translate-x-1'
                        : 'bg-zinc-950/70 border-zinc-800/70 hover:border-zinc-700 hover:bg-zinc-900/40'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-400' : 'bg-zinc-600'}`} />
                        <h3 className={`font-serif font-semibold text-sm sm:text-base ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                          {placement.name}
                        </h3>
                      </div>
                      <p className="text-[11px] text-zinc-400 font-mono pl-4">
                        {placement.area} • Healing ~{placement.healingDays} Days
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-0.5">
                        {[1, 2, 3, 4, 5].map((lvl) => (
                          <span
                            key={lvl}
                            className={`w-1.5 h-3 rounded-xs ${
                              lvl <= placement.painRating ? 'bg-amber-400' : 'bg-zinc-800'
                            }`}
                            title={`Pain Index: ${placement.painRating}/5`}
                          />
                        ))}
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-amber-400 translate-x-1' : 'text-zinc-600'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Metrics of Selected Placement */}
            <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-5 space-y-4 mt-6">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                ANATOMICAL PROFILE: {selectedPlacement.area}
              </span>
              
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                {selectedPlacement.description}
              </p>

              <div className="text-[11px] font-mono text-zinc-400 border-t border-zinc-800/80 pt-3 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">PAIN THRESHOLD</span>
                  <span className="text-amber-300 font-semibold">{selectedPlacement.painRating} / 5 (Manageable)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">HEALING CYCLE</span>
                  <span className="text-zinc-200">{selectedPlacement.healingDays} Days Recovery</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">COMPLEXITY</span>
                  <span className="text-zinc-200">{selectedPlacement.complexity}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-400 italic">
                "{selectedPlacement.anatomicalNotes}"
              </div>
            </div>
          </div>

          {/* Right: Interactive Canvas Simulator */}
          <div className="lg:col-span-8 bg-[#121215] border border-zinc-800 rounded-3xl p-5 sm:p-7 space-y-6 shadow-2xl">
            
            {/* Visualizer Frame */}
            <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden bg-black border border-zinc-800 flex items-center justify-center">
              {/* Placement Canvas Photo */}
              <img
                src={selectedPlacement.defaultArtwork}
                alt={selectedPlacement.name}
                onError={handleImageError}
                style={{
                  filter: getLightingFilter(),
                  opacity: inkDensity / 100,
                  transform: `scale(${scaleSize / 100})`,
                  transition: 'all 0.4s ease-out'
                }}
                className="w-full h-full object-cover object-center"
              />

              {/* Gold Vignette & Ambient Glow */}
              <div className="absolute inset-0 bg-linear-to-t from-[#121215] via-transparent to-transparent opacity-70 pointer-events-none" />

              {/* Floating Live Badge */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 pointer-events-none">
                <span className="bg-zinc-950/90 backdrop-blur-md border border-amber-500/40 px-3 py-1 rounded-full text-[10px] font-mono text-amber-300">
                  {selectedPlacement.name.toUpperCase()}
                </span>
                <span className="bg-zinc-950/90 backdrop-blur-md border border-zinc-800 px-3 py-1 rounded-full text-[10px] font-mono text-zinc-300">
                  STYLE: {currentStyle.name}
                </span>
              </div>

              {/* Floating Lighting Indicator */}
              <div className="absolute top-4 right-4 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 px-3 py-1 rounded-full text-[10px] font-mono text-zinc-400">
                LIGHT: {lightingMode.toUpperCase()}
              </div>

              {/* Bottom Canvas Overlay Metadata */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-zinc-400 pointer-events-none">
                <span>DENSITY: {inkDensity}%</span>
                <span>SCALE: {scaleSize}%</span>
                <span>SIMULATION ACTIVE</span>
              </div>
            </div>

            {/* Interactive Control Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800/80">
              
              {/* Density Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-300 flex items-center space-x-1.5">
                    <Sliders className="w-3.5 h-3.5 text-amber-400" />
                    <span>INK DENSITY</span>
                  </span>
                  <span className="text-amber-400 font-semibold">{inkDensity}%</span>
                </div>
                <input
                  type="range"
                  min="55"
                  max="100"
                  value={inkDensity}
                  onChange={(e) => setInkDensity(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg"
                />
                <div className="flex justify-between text-[9px] font-mono text-zinc-500">
                  <span>Soft Grey Wash</span>
                  <span>Deep Obsidian</span>
                </div>
              </div>

              {/* Scale Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-300 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>ARTWORK SCALE</span>
                  </span>
                  <span className="text-amber-400 font-semibold">{scaleSize}%</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="110"
                  value={scaleSize}
                  onChange={(e) => setScaleSize(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg"
                />
                <div className="flex justify-between text-[9px] font-mono text-zinc-500">
                  <span>Minimalist Accent</span>
                  <span>Full Suite Panel</span>
                </div>
              </div>

              {/* Lighting Mode Picker */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-300 flex items-center space-x-1.5">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>LIGHTING AMBIANCE</span>
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  {(['gallery', 'dramatic', 'daylight'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setLightingMode(mode)}
                      className={`py-1.5 px-2 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-colors ${
                        lightingMode === mode
                          ? 'bg-amber-400 text-zinc-950 font-bold'
                          : 'bg-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Discipline Tag Switcher */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                COMPATIBLE DISCIPLINES FOR THIS PLACEMENT
              </span>
              <div className="flex flex-wrap gap-2">
                {STYLES_DATA.map((style, idx) => {
                  const isCur = selectedStyleIndex === idx;
                  return (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyleIndex(idx)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all flex items-center space-x-1.5 ${
                        isCur
                          ? 'bg-amber-500/20 border border-amber-400 text-amber-300 font-semibold'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {isCur && <Check className="w-3 h-3 text-amber-400" />}
                      <span>{style.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Commission Actions Bar */}
            <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
                <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Custom 3D Stencil Fitting included in all private sessions</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-full bg-emerald-950/60 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 hover:text-emerald-200 font-mono text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>DISPATCH TO WHATSAPP</span>
                </a>

                <button
                  onClick={() => onSelectPlacementForBooking(selectedPlacement.name, currentStyle.name)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 shadow-xl shadow-amber-500/20 hover:scale-105 transition-all"
                >
                  <span>BOOK THIS PLACEMENT</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
