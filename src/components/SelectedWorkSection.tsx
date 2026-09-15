import React, { useState, useEffect } from 'react';
import type { Artwork } from '../types/tattoo';
import { ARTWORKS_DATA, OFFICIAL_CONTACT, handleImageError } from '../data/tattooData';
import { Maximize2, Clock, User, X, ChevronRight, MessageCircle } from 'lucide-react';

export const SelectedWorkSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArtwork(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const categories = [
    { id: 'all', name: 'ALL ARCHIVE' },
    { id: 'chiaroscuro', name: 'CHIAROSCURO' },
    { id: 'fine-line', name: 'MICRO FINE LINE' },
    { id: 'dark-ornamental', name: 'DARK ORNAMENTAL' },
    { id: 'sumie-contemporary', name: 'NEO SUMI-E' },
  ];

  const filteredArtworks = activeFilter === 'all'
    ? ARTWORKS_DATA
    : ARTWORKS_DATA.filter((art) => art.styleId === activeFilter);

  const getArtworkWhatsAppUrl = (art: Artwork) => {
    const text = `Hello ED Tattoo Studio, I am interested in commissioning a piece similar to *${art.title}* (${art.styleName} by ${art.artistName}).`;
    return `${OFFICIAL_CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="selected-work" className="py-28 bg-[#09090b] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-zinc-800/80 gap-4">
          <div>
            <span className="text-amber-400 font-mono text-xs tracking-[0.3em] uppercase block mb-3">
              ARCHIVAL MASTERPIECES
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              SELECTED <span className="gold-gradient-text italic font-normal">WORK</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
            Curated skin canvas masterpieces commissioned across private studio sessions in Tokyo, New York, and London.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'bg-amber-400 text-zinc-950 font-bold shadow-lg shadow-amber-400/20'
                  : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid of Artworks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredArtworks.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArtwork(art)}
              className="group relative bg-[#121215] border border-zinc-800/80 rounded-3xl overflow-hidden cursor-pointer hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-1.5 shadow-xl"
            >
              {/* Artwork Image Container */}
              <div className="relative aspect-3/4 overflow-hidden">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-[#09090b]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                
                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="bg-zinc-950/85 backdrop-blur-md border border-amber-500/30 px-3 py-1 rounded-full text-[10px] font-mono text-amber-300">
                    {art.styleName}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-950/90 backdrop-blur-md flex items-center justify-center text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                    {art.placement} • {art.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-200 transition-colors">
                    {art.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-2 border-t border-zinc-800/80">
                    <span className="flex items-center space-x-1.5">
                      <User className="w-3.5 h-3.5 text-amber-400" />
                      <span>{art.artistName}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{art.hoursToComplete} HRS</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Artwork Detail Modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="relative w-full max-w-4xl bg-[#121215] border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-950/80 border border-zinc-800 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image View */}
            <div className="md:w-1/2 relative bg-zinc-950 flex items-center justify-center overflow-hidden min-h-64 sm:min-h-80">
              <img
                src={selectedArtwork.imageUrl}
                alt={selectedArtwork.title}
                onError={handleImageError}
                className="w-full h-full object-cover filter brightness-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#121215] via-transparent to-transparent opacity-60 md:hidden" />
            </div>

            {/* Right Story Details */}
            <div className="md:w-1/2 p-6 sm:p-8 space-y-5 overflow-y-auto flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-amber-400 font-mono text-[11px] tracking-widest uppercase block">
                  ARCHIVE DOSSIER #{selectedArtwork.id.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">{selectedArtwork.title}</h3>
                
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-zinc-800 text-xs font-mono">
                  <div>
                    <span className="text-zinc-500 block text-[9px]">ARTIST</span>
                    <span className="text-zinc-200">{selectedArtwork.artistName}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[9px]">DISCIPLINE</span>
                    <span className="text-amber-300">{selectedArtwork.styleName}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[9px]">ANATOMICAL PLACEMENT</span>
                    <span className="text-zinc-200">{selectedArtwork.placement}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[9px]">SESSION DURATION</span>
                    <span className="text-zinc-200">{selectedArtwork.hoursToComplete} Hours</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                    DESIGN CONCEPT & STORY
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {selectedArtwork.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={getArtworkWhatsAppUrl(selectedArtwork)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-emerald-950/70 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 text-xs font-mono font-semibold flex items-center justify-center space-x-1.5 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>INQUIRE VIA WHATSAPP</span>
                </a>

                <a
                  href="#consultation"
                  onClick={() => setSelectedArtwork(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-linear-to-r from-amber-400 to-amber-600 text-zinc-950 font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-1.5 hover:scale-105 transition-all"
                >
                  <span>BOOK SIMILAR</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
