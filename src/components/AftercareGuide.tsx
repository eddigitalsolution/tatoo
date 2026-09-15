import React, { useState } from 'react';
import { AFTERCARE_PHASES, OFFICIAL_CONTACT } from '../data/tattooData';
import { Shield, AlertCircle, CheckCircle2, MessageCircle, Droplets, Wind, SunMedium } from 'lucide-react';

export const AftercareGuide: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const currentPhase = AFTERCARE_PHASES[activePhaseIndex];

  const getPhaseIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Shield className="w-5 h-5 text-amber-400" />;
      case 1: return <Droplets className="w-5 h-5 text-amber-400" />;
      case 2: return <Wind className="w-5 h-5 text-amber-400" />;
      case 3: return <SunMedium className="w-5 h-5 text-amber-400" />;
      default: return <Shield className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="aftercare" className="py-28 bg-[#09090b] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-zinc-800/80 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs tracking-[0.3em] uppercase mb-3">
              <Shield className="w-3.5 h-3.5" />
              <span>DERMAL PRESERVATION & CLINICAL HYGIENE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              SACRED <span className="gold-gradient-text italic font-normal">AFTERCARE</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
            The longevity and razor clarity of your tattoo depends on the first 30 days of cellular recovery. Follow our hospital-grade protocol for permanent perfection.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {AFTERCARE_PHASES.map((phase, idx) => {
            const isSel = activePhaseIndex === idx;
            return (
              <button
                key={phase.phaseNumber}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all ${
                  isSel
                    ? 'bg-zinc-900 border-amber-500/60 shadow-xl shadow-amber-500/5 -translate-y-1'
                    : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono tracking-widest uppercase ${isSel ? 'text-amber-400 font-bold' : 'text-zinc-500'}`}>
                    PHASE {phase.phaseNumber}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isSel ? 'bg-amber-500/20' : 'bg-zinc-900'}`}>
                    {getPhaseIcon(idx)}
                  </div>
                </div>
                <div className={`text-sm sm:text-base font-serif font-bold mb-1 ${isSel ? 'text-white' : 'text-zinc-300'}`}>
                  {phase.dayRange}
                </div>
                <p className="text-[11px] text-zinc-400 font-light line-clamp-1">
                  {phase.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive */}
        <div className="bg-[#121215] border border-amber-500/30 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl mb-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-5">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                  PHASE {currentPhase.phaseNumber} // {currentPhase.dayRange}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {currentPhase.title}
                </h3>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-300 shrink-0">
                {currentPhase.subtitle}
              </div>
            </div>

            {/* Two Column Directives: Instructions vs Critical Rules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Daily Care Directives */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>MANDATORY PROTOCOL STEPS</span>
                </span>
                <div className="space-y-3">
                  {currentPhase.instructions.map((inst, i) => (
                    <div key={i} className="flex items-start space-x-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                      <span className="text-xs font-mono text-amber-400 font-semibold mt-0.5">0{i + 1}.</span>
                      <p className="text-xs text-zinc-300 font-light leading-relaxed">{inst}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prohibited Actions */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span>STRICTLY PROHIBITED (CRITICAL)</span>
                </span>
                <div className="space-y-3">
                  {currentPhase.criticalRules.map((rule, i) => (
                    <div key={i} className="flex items-start space-x-3 p-3.5 rounded-xl bg-red-950/20 border border-red-900/40">
                      <span className="text-xs font-mono text-red-400 font-bold mt-0.5">✕</span>
                      <p className="text-xs text-zinc-300 font-light leading-relaxed">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Recommended Formulations Bar */}
            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center space-x-2 text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>RECOMMENDED PHARMACEUTICAL BALM:</span>
                <span className="text-amber-300 font-semibold">{currentPhase.products}</span>
              </div>
              <a
                href={`${OFFICIAL_CONTACT.whatsappUrl}?text=Hello%20ED%20Tattoo%20Studio,%20I%20have%20an%20urgent%20question%20regarding%20my%20healing%20tattoo%20in%20Phase%20${currentPhase.phaseNumber}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 flex items-center space-x-1 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>24/7 HEALING HOTLINE ({OFFICIAL_CONTACT.phone})</span>
              </a>
            </div>

          </div>
        </div>

        {/* Clinical Hygiene Sanctuary Standards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#121215] border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-white">Surgical-Grade Autoclave Sterilization</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Every reusable metal tool undergoes clinical multi-stage ultrasonic cleaning and steam autoclave sterilization verified with biological spore testing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121215] border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Droplets className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-white">Pure Vegan Carbon Pigments</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Custom non-toxic, organic pigment formulations with zero animal byproduct or harmful heavy metals, resisting thermal degradation over decades.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121215] border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Wind className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-white">Negative Pressure Air Filtration</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Private procedure suites feature hospital-grade HEPA-14 medical filtration and continuous UV germicidal air scrubbing to eliminate airborne contaminants.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
