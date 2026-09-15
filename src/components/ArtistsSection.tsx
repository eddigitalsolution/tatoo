import React, { useState, useEffect } from 'react';
import type { Artist } from '../types/tattoo';
import { ARTISTS_DATA, OFFICIAL_CONTACT, handleImageError } from '../data/tattooData';
import { ExternalLink, X, Quote, MessageCircle, Calendar } from 'lucide-react';

interface ArtistsSectionProps {
  onSelectArtist: (artist: Artist) => void;
}

export const ArtistsSection: React.FC<ArtistsSectionProps> = ({ onSelectArtist }) => {
  const [activeArtist, setActiveArtist] = useState<Artist | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveArtist(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getArtistWhatsAppUrl = (artist: Artist) => {
    const text = `Hello ED Tattoo Studio, I would like to inquire about commissioning an original artwork with Master ${artist.name} (${artist.title}).`;
    return `${OFFICIAL_CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="artists" className="py-28 bg-[#09090b] relative overflow-hidden border-t border-zinc-900">
      {/* Subtle background ambient wash */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-zinc-800/80 gap-4">
          <div>
            <span className="text-amber-400 font-mono text-xs tracking-[0.3em] uppercase block mb-3">
              RESIDENT MASTERS & VIRTUOSOS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              THE <span className="gold-gradient-text italic font-normal">ARTISTS</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
            Internationally acclaimed virtuosos with classical fine-art backgrounds, dedicated exclusively to bespoke skin canvas commissions across Tokyo, New York, and London.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTISTS_DATA.map((artist) => (
            <div
              key={artist.id}
              className="group relative bg-[#121215] border border-zinc-800/80 hover:border-amber-500/40 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between shadow-xl"
            >
              {/* Artwork Showcase Frame */}
              <div className="relative h-80 sm:h-96 overflow-hidden">
                <img
                  src={artist.featuredArtwork}
                  alt={`${artist.name} Featured Tattoo Artwork`}
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#121215] via-[#121215]/30 to-transparent" />
                
                {/* Available Status Pill */}
                <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30 text-[10px] font-mono text-amber-300">
                  {artist.availableFrom}
                </div>

                {/* Artist Portrait Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-3">
                  <img
                    src={artist.avatarUrl}
                    alt={artist.name}
                    onError={handleImageError}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-500/60 shadow-xl shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-200 transition-colors">
                      {artist.name}
                    </h3>
                    <p className="text-[11px] font-mono text-amber-400/90 leading-tight">{artist.title}</p>
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-zinc-400 font-light line-clamp-3 leading-relaxed">
                  "{artist.bio}"
                </p>

                {/* Specialties tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {artist.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-zinc-500">
                    {artist.experienceYears} YRS MASTERY
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    <a
                      href={getArtistWhatsAppUrl(artist)}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Quick Inquiry on WhatsApp"
                      className="p-2 rounded-lg bg-zinc-900 hover:bg-emerald-950/60 border border-zinc-800 hover:border-emerald-500/50 text-zinc-400 hover:text-emerald-300 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setActiveArtist(artist)}
                      className="text-xs font-mono tracking-widest text-amber-400 hover:text-amber-300 flex items-center space-x-1 font-semibold group/btn py-1"
                    >
                      <span>VIEW DOSSIER</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Artist Dossier Modal */}
      {activeArtist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="relative w-full max-w-3xl bg-[#121215] border border-amber-500/40 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveArtist(null)}
              className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 z-10 transition-colors"
              aria-label="Close Dossier"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <img
                src={activeArtist.avatarUrl}
                alt={activeArtist.name}
                onError={handleImageError}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-2 border-amber-500/40 shrink-0 shadow-xl"
              />
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-amber-400 font-mono text-[11px] tracking-widest uppercase block">
                  RESIDENT MASTER DOSSIER
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">{activeArtist.name}</h3>
                <p className="text-xs sm:text-sm font-mono text-amber-300/90">{activeArtist.title}</p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs font-mono text-zinc-400 pt-1">
                  <span>{activeArtist.experienceYears} Years Classical Mastery</span>
                  <span>•</span>
                  <span className="text-zinc-300">{activeArtist.instagram}</span>
                </div>
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="space-y-2 bg-zinc-900/70 p-4 sm:p-5 rounded-2xl border border-zinc-800">
              <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono">
                <Quote className="w-4 h-4" />
                <span>ARTISTIC MANIFESTO</span>
              </div>
              <p className="text-sm sm:text-base text-zinc-200 italic font-serif leading-relaxed">
                "{activeArtist.quote}"
              </p>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              {activeArtist.bio}
            </p>

            {/* Action Bar */}
            <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-zinc-400">
                <span>STATUS: </span>
                <span className="text-amber-300 font-semibold">{activeArtist.availableFrom}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href={getArtistWhatsAppUrl(activeArtist)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-emerald-950/60 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 text-xs font-mono font-semibold flex items-center justify-center space-x-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WHATSAPP {activeArtist.name.toUpperCase()}</span>
                </a>

                <button
                  onClick={() => {
                    const selected = activeArtist;
                    setActiveArtist(null);
                    onSelectArtist(selected);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-linear-to-r from-amber-400 to-amber-600 text-zinc-950 font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20 hover:scale-105 transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>COMMISSION INTAKE</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
