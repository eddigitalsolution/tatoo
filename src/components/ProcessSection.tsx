import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/tattooData';
import { Compass, PenTool, Flame, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-6 h-6 text-amber-400" />;
      case 1: return <PenTool className="w-6 h-6 text-amber-400" />;
      case 2: return <Flame className="w-6 h-6 text-amber-400" />;
      case 3: return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      default: return <Flame className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="process" className="py-28 bg-[#0d0d10] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-amber-400 font-mono text-xs tracking-[0.3em] uppercase block">
            SACRED EXECUTION
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
            THE <span className="gold-gradient-text italic font-normal">PROCESS</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
            From initial anatomical study to custom pigment formulation and long-term aftercare sanctuary, experience our 4-step ritual of permanent artistry.
          </p>
        </div>

        {/* 4 Steps Interactive Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 ${
                  isActive
                    ? 'bg-zinc-900 border-amber-500/60 shadow-2xl shadow-amber-500/10 -translate-y-1'
                    : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-2xl font-bold ${isActive ? 'text-amber-400' : 'text-zinc-600'}`}>
                    {step.number}
                  </span>
                  <div className={`p-3 rounded-xl ${isActive ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-zinc-900 border border-zinc-800'}`}>
                    {getStepIcon(idx)}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className={`font-serif font-bold text-xl ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-amber-300/80 font-mono">{step.subtitle}</p>
                </div>

                <div className="flex items-center text-xs font-mono text-zinc-400 pt-4 border-t border-zinc-800/80">
                  <span className={isActive ? 'text-amber-400 font-semibold' : 'text-zinc-500'}>
                    {isActive ? 'ACTIVE RITUAL PHASE' : 'CLICK TO EXPAND'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Active Step Focus Box */}
        <div className="bg-[#121215] border border-amber-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-3 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-mono text-amber-300">
                <span>PHASE {PROCESS_STEPS[activeStep].number} IN-DEPTH DEEP DIVE</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-zinc-300 text-base font-light leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
                {PROCESS_STEPS[activeStep].details.map((detail) => (
                  <div key={detail} className="flex items-center space-x-2 text-xs font-mono text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <a
                href="#consultation"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold tracking-widest text-xs uppercase shadow-xl shadow-amber-400/20 transition-all hover:scale-105"
              >
                START PHASE 01 TODAY
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
