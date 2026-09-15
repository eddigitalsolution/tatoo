import React, { useState } from 'react';
import { PRICING_SCALES, OFFICIAL_CONTACT } from '../data/tattooData';
import { Calculator, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

interface PricingEstimatorProps {
  onOpenConsultation: () => void;
}

export const PricingEstimator: React.FC<PricingEstimatorProps> = ({ onOpenConsultation }) => {
  const [selectedScaleIndex, setSelectedScaleIndex] = useState<number>(1);
  const [artistTier, setArtistTier] = useState<'resident' | 'senior' | 'guest'>('resident');
  const [detailDensity, setDetailDensity] = useState<'fine-line' | 'chiaroscuro' | 'ornamental'>('chiaroscuro');

  const selectedScale = PRICING_SCALES[selectedScaleIndex];

  // Adjust estimates based on tier
  const getMultiplier = () => {
    let mult = 1.0;
    if (artistTier === 'senior') mult = 0.9;
    if (artistTier === 'guest') mult = 1.25;
    if (detailDensity === 'chiaroscuro') mult *= 1.15;
    return mult;
  };

  const calculateEstimate = () => {
    const mult = getMultiplier();
    if (selectedScale.id === 'scale-flash') {
      return { hours: '2 – 4 Hrs', range: `$${Math.round(600 * mult)} – $${Math.round(1200 * mult)}` };
    }
    if (selectedScale.id === 'scale-medium') {
      return { hours: '5 – 8 Hrs', range: `$${Math.round(1500 * mult)} – $${Math.round(2800 * mult)}` };
    }
    if (selectedScale.id === 'scale-large') {
      return { hours: '12 – 18 Hrs', range: `$${Math.round(3500 * mult)} – $${Math.round(5500 * mult)}` };
    }
    return { hours: '25 – 45+ Hrs', range: `$${Math.round(7500 * mult)} – $${Math.round(14000 * mult)}+` };
  };

  const estimate = calculateEstimate();

  const handleLockInWhatsApp = () => {
    const text = `Hello ED Tattoo Studio, I would like to lock in an estimate for a *${selectedScale.label}* project (${estimate.range}, approx ${estimate.hours}) with the *${artistTier.toUpperCase()}* artist tier.`;
    window.open(`${OFFICIAL_CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="estimator" className="py-28 bg-[#0d0d10] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-zinc-800/80 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs tracking-[0.3em] uppercase mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>TRANSPARENT INVESTMENT ESTIMATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              SESSION & QUOTE <span className="gold-gradient-text italic font-normal">CALCULATOR</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
            Transparent investment metrics tailored to commission scale, anatomical complexity, and resident master tier.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6 bg-[#121215] border border-zinc-800 rounded-3xl p-6 sm:p-8">
            
            {/* 1. Scale Selection */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block">
                01. SELECT CANVAS SCALE & PROJECT SCOPE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRICING_SCALES.map((scale, idx) => {
                  const isSel = selectedScaleIndex === idx;
                  return (
                    <button
                      key={scale.id}
                      onClick={() => setSelectedScaleIndex(idx)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        isSel
                          ? 'bg-zinc-900 border-amber-500/60 shadow-lg shadow-amber-500/5 ring-1 ring-amber-500/40'
                          : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-serif text-sm font-bold ${isSel ? 'text-white' : 'text-zinc-300'}`}>
                          {scale.label}
                        </span>
                        <span className="text-[10px] font-mono text-amber-400 font-semibold">{scale.sessions}</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 font-light line-clamp-2 mb-2">
                        {scale.description}
                      </p>
                      <div className="text-[10px] font-mono text-zinc-500 border-t border-zinc-800/80 pt-1.5">
                        Est: {scale.estimatedHours}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Artist Tier Selection */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block">
                02. PREFERRED ARTIST RESIDENCY TIER
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'senior', label: 'Senior Virtuoso', subtitle: '8+ Yrs Experience' },
                  { id: 'resident', label: 'Resident Master', subtitle: '14+ Yrs Mastery' },
                  { id: 'guest', label: 'International Guest', subtitle: 'Limited World Tour' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setArtistTier(tier.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      artistTier === tier.id
                        ? 'bg-amber-500/10 border-amber-500 text-amber-300 font-semibold'
                        : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-serif font-bold block">{tier.label}</div>
                    <div className="text-[9px] font-mono text-zinc-500">{tier.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Detail Density */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block">
                03. DETAIL DENSITY & SHADING DEPTH
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'fine-line', label: 'Single-Needle Fine Line', desc: 'Whisper thin' },
                  { id: 'chiaroscuro', label: 'Baroque Chiaroscuro', desc: 'Deep Renaissance' },
                  { id: 'ornamental', label: 'Dark Ornamental Solid', desc: 'Heavy contrast' },
                ].map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setDetailDensity(style.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      detailDensity === style.id
                        ? 'bg-amber-500/10 border-amber-500 text-amber-300 font-semibold'
                        : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-serif font-bold">{style.label}</div>
                    <div className="text-[9px] font-mono text-zinc-500">{style.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-[#121215] border border-amber-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                    PROJECT ESTIMATE
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {selectedScale.label}
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-[10px] font-mono text-zinc-300">
                  {selectedScale.category}
                </div>
              </div>

              {/* Big Price Display */}
              <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-6 text-center space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  ESTIMATED INVESTMENT RANGE
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-black text-amber-400">
                  {estimate.range}
                </div>
                <div className="text-xs font-mono text-zinc-400 pt-1">
                  Estimated Sittings: <span className="text-zinc-200">{selectedScale.sessions}</span> (~{estimate.hours})
                </div>
              </div>

              {/* Key Deliverables included */}
              <div className="space-y-2.5 text-xs font-mono text-zinc-300">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">
                  EVERY COMMISSION INCLUDES:
                </span>
                <div className="space-y-2">
                  {[
                    '1-on-1 private anatomical consultation & 3D stencil mapping',
                    'Custom vegan carbon pigment formulations for lifelong depth',
                    'Private negative-pressure studio suite with curated ambiance',
                    'Complete hospital-grade second-skin healing kit & balm',
                    'Complimentary 6-month archival inspection & touch-up guarantee'
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-zinc-300 text-[11px] leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deposit notice */}
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                <span>RESERVATION DEPOSIT:</span>
                <span className="text-amber-300 font-semibold">{selectedScale.depositRequired} (Deducted from final session)</span>
              </div>

            </div>

            {/* Actions */}
            <div className="relative z-10 pt-6 mt-6 border-t border-zinc-800 space-y-3">
              <button
                onClick={handleLockInWhatsApp}
                className="w-full py-4 px-6 rounded-full bg-emerald-900/60 hover:bg-emerald-900/80 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-center space-x-2 transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>LOCK IN QUOTE ON WHATSAPP ({OFFICIAL_CONTACT.phone})</span>
              </button>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 px-6 rounded-full bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 hover:scale-[1.02] transition-all shadow-xl shadow-amber-500/10"
              >
                <span>SUBMIT FORMAL COMMISSION DOSSIER</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-zinc-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero obligation inquiry • Non-disclosure privacy guaranteed</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
