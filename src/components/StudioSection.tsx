import React from 'react';
import { STUDIO_FEATURES, SANCTUARY_LOCATIONS, OFFICIAL_CONTACT, handleImageError } from '../data/tattooData';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

export const StudioSection: React.FC = () => {
  return (
    <section id="studio" className="py-28 bg-[#09090b] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-zinc-800/80 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs tracking-[0.3em] uppercase mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>SANCTUARY & PRIVATE SUITES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              THE <span className="gold-gradient-text italic font-normal">STUDIO</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
            Designed as a private contemporary art sanctuary. Engineered for supreme concentration, surgical hygiene, and tranquil sensory comfort across our three global capitals.
          </p>
        </div>

        {/* Global Sanctuaries Cards */}
        <div className="mb-20">
          <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block mb-6">
            GLOBAL GALLERY SANCTUARIES — TOKYO · NEW YORK · LONDON
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SANCTUARY_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-[#121215] border border-zinc-800 hover:border-amber-500/40 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={loc.image}
                    alt={`${loc.city} Gallery Studio`}
                    onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#121215] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-zinc-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30 text-[10px] font-mono text-amber-300">
                    {loc.status}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-white flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{loc.city}</span>
                    </h3>
                    <p className="text-xs text-amber-300/90 font-mono">{loc.district}</p>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {loc.address}
                    </p>
                    <div className="flex items-center space-x-1.5 text-[11px] font-mono text-zinc-400 pt-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{loc.hours}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                    <a
                      href={`tel:${OFFICIAL_CONTACT.phoneClean}`}
                      className="flex items-center space-x-1 text-xs font-mono text-zinc-300 hover:text-amber-300 py-1"
                    >
                      <Phone className="w-3 h-3 text-amber-400" />
                      <span>{OFFICIAL_CONTACT.phone}</span>
                    </a>

                    <a
                      href={`${OFFICIAL_CONTACT.whatsappUrl}?text=Hello%20ED%20Tattoo%20Studio,%20I%20am%20inquiring%20about%20booking%20at%20the%20${loc.city}%20studio.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 text-[10px] font-mono font-medium flex items-center space-x-1.5 transition-all"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-400" />
                      <span>WHATSAPP</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STUDIO_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#121215] border border-zinc-800/80 rounded-3xl overflow-hidden group hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 space-y-4"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden border border-zinc-800">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#121215] via-transparent to-transparent opacity-70" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
