import React, { useState } from 'react';
import type { Artist } from '../types/tattoo';
import { ARTISTS_DATA, STYLES_DATA, PLACEMENT_OPTIONS, OFFICIAL_CONTACT } from '../data/tattooData';
import { CheckCircle, Send, X, ShieldCheck, MessageCircle, Phone } from 'lucide-react';

interface ConsultationSectionProps {
  initialArtist?: Artist | null;
  initialPlacement?: string;
  initialStyle?: string;
  isOpenAsDrawer?: boolean;
  onCloseDrawer?: () => void;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  initialArtist,
  initialPlacement,
  initialStyle,
  isOpenAsDrawer,
  onCloseDrawer,
}) => {
  const initialMatchedStyle = initialStyle
    ? STYLES_DATA.find((s) => s.name.toLowerCase().includes(initialStyle.toLowerCase()))?.id
    : undefined;

  const [selectedArtistId, setSelectedArtistId] = useState<string>(initialArtist?.id || ARTISTS_DATA[0].id);
  const [selectedStyleId, setSelectedStyleId] = useState<string>(initialMatchedStyle || STYLES_DATA[0].id);
  const [placement, setPlacement] = useState<string>(initialPlacement || PLACEMENT_OPTIONS[0].name);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [preferredLocation, setPreferredLocation] = useState<string>('Tokyo');
  const [ideaDescription, setIdeaDescription] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [dossierId, setDossierId] = useState<string>('ED-9821');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDossierId(`ED-${Math.floor(1000 + Math.random() * 9000)}`);
    setSubmitted(true);
  };

  const handleWhatsAppDispatch = () => {
    const artist = ARTISTS_DATA.find((a) => a.id === selectedArtistId)?.name || 'Any Resident Master';
    const style = STYLES_DATA.find((s) => s.id === selectedStyleId)?.name || 'Custom Discipline';
    
    const message = `*ED TATTOO COMMISSION DOSSIER*
Collector Name: ${fullName || 'Private Collector'}
Contact Phone: ${phone || 'Provided on chat'}
Email: ${email || 'Provided on chat'}
Preferred Location: ${preferredLocation} Studio
Selected Master: ${artist}
Discipline: ${style}
Placement: ${placement}
Concept Brief: ${ideaDescription || 'Discussing during private consultation'}`;

    window.open(`${OFFICIAL_CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const formContent = (
    <div className="space-y-8">
      {submitted ? (
        <div className="bg-[#121215] border border-amber-500/50 rounded-3xl p-8 md:p-12 text-center space-y-6 animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-500/40">
            <CheckCircle className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <span className="text-amber-400 font-mono text-xs tracking-widest uppercase">
              DOSSIER RECEIVED #{dossierId}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">COMMISSION INTAKE LOGGED</h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto font-light leading-relaxed">
              Thank you, <span className="text-amber-300 font-medium">{fullName || 'Valued Collector'}</span>. Our studio concierge in {preferredLocation} will review your narrative and reach out via email and WhatsApp ({OFFICIAL_CONTACT.phone}) within 24 hours.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={handleWhatsAppDispatch}
              className="px-6 py-3 rounded-full bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 font-mono text-xs font-semibold flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>SEND COPY TO WHATSAPP ({OFFICIAL_CONTACT.phone})</span>
            </button>

            <button
              onClick={() => {
                setSubmitted(false);
                if (onCloseDrawer) onCloseDrawer();
              }}
              className="px-6 py-3 rounded-full bg-amber-400 text-zinc-950 font-bold tracking-widest text-xs uppercase hover:bg-amber-300 transition-colors"
            >
              RETURN TO GALLERY
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 bg-[#121215] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">COMMISSION SPECIFICATION DOSSIER</h3>
              <p className="text-xs text-zinc-400 font-mono">
                Direct portfolio intake for Tokyo, New York, and London studio calendars.
              </p>
            </div>
            <div className="text-[11px] font-mono text-amber-400">
              HOTLINE: {OFFICIAL_CONTACT.phone}
            </div>
          </div>

          {/* Artist & Location Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="artistSelect" className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
                SELECT RESIDENT ARTIST
              </label>
              <select
                id="artistSelect"
                name="artistSelect"
                value={selectedArtistId}
                onChange={(e) => setSelectedArtistId(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 rounded-xl p-3 text-sm text-zinc-200 outline-none transition-colors"
              >
                {ARTISTS_DATA.map((art) => (
                  <option key={art.id} value={art.id}>
                    {art.name} ({art.title})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="locationSelect" className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
                PREFERRED GALLERY SANCTUARY
              </label>
              <select
                id="locationSelect"
                name="locationSelect"
                value={preferredLocation}
                onChange={(e) => setPreferredLocation(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 rounded-xl p-3 text-sm text-zinc-200 outline-none transition-colors"
              >
                <option value="Tokyo">Tokyo Sanctuary (Ginza Fine Art District)</option>
                <option value="New York">New York Sanctuary (SoHo Gallery Quarter)</option>
                <option value="London">London Sanctuary (Mayfair Fine Art Row)</option>
              </select>
            </div>
          </div>

          {/* Discipline & Placement Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="styleSelect" className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
                CURATED DISCIPLINE
              </label>
              <select
                id="styleSelect"
                name="styleSelect"
                value={selectedStyleId}
                onChange={(e) => setSelectedStyleId(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 rounded-xl p-3 text-sm text-zinc-200 outline-none transition-colors"
              >
                {STYLES_DATA.map((style) => (
                  <option key={style.id} value={style.id}>
                    {style.name} ({style.tagline})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="placementSelect" className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
                ANATOMICAL PLACEMENT
              </label>
              <select
                id="placementSelect"
                name="placementSelect"
                value={placement}
                onChange={(e) => setPlacement(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 rounded-xl p-3 text-sm text-zinc-200 outline-none transition-colors"
              >
                {PLACEMENT_OPTIONS.map((place) => (
                  <option key={place.id} value={place.name}>
                    {place.name} ({place.area})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Concept Description */}
          <div className="space-y-2">
            <label htmlFor="ideaDescription" className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
              TATTOO CONCEPT, MEMORY, OR SYMBOLIC NARRATIVE
            </label>
            <textarea
              id="ideaDescription"
              name="ideaDescription"
              autoComplete="off"
              required
              rows={4}
              value={ideaDescription}
              onChange={(e) => setIdeaDescription(e.target.value)}
              placeholder="Describe your artistic vision, references, dimensions, or emotional memories..."
              className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 rounded-xl p-4 text-sm text-zinc-200 outline-none transition-colors resize-none placeholder:text-zinc-600 font-light"
            />
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
                FULL NAME *
              </label>
              <input
                id="fullName"
                name="fullName"
                autoComplete="name"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Collector Name"
                className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 rounded-xl p-3 text-sm text-zinc-200 outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
                EMAIL ADDRESS *
              </label>
              <input
                id="email"
                name="email"
                autoComplete="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="collector@domain.com"
                className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 rounded-xl p-3 text-sm text-zinc-200 outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
                PHONE / WHATSAPP *
              </label>
              <input
                id="phone"
                name="phone"
                autoComplete="tel"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 rounded-xl p-3 text-sm text-zinc-200 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Form Action Buttons: Standard Submit OR 1-Click WhatsApp */}
          <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Non-disclosure privacy guaranteed • No spam policy</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* WhatsApp Fast Dispatch */}
              <button
                type="button"
                onClick={handleWhatsAppDispatch}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-950/70 hover:bg-emerald-950 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 font-mono text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-2 transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>DIRECT TO WHATSAPP</span>
              </button>

              {/* Standard Email Submission */}
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-bold tracking-widest text-xs uppercase hover:scale-105 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>SUBMIT DOSSIER</span>
              </button>
            </div>
          </div>

        </form>
      )}
    </div>
  );

  if (isOpenAsDrawer) {
    return (
      <div className="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-md">
        <div className="w-full max-w-2xl bg-[#09090b] h-full overflow-y-auto p-6 sm:p-10 relative border-l border-amber-500/30">
          <button
            onClick={onCloseDrawer}
            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 transition-colors"
            aria-label="Close Consultation Drawer"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="mb-8 space-y-2">
            <span className="text-amber-400 font-mono text-xs tracking-widest uppercase block">
              PRIVATE RESERVATION CALENDAR
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">BOOK CONSULTATION</h2>
            <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400">
              <a href={`tel:${OFFICIAL_CONTACT.phoneClean}`} className="hover:text-amber-300 flex items-center space-x-1">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{OFFICIAL_CONTACT.phone}</span>
              </a>
              <span>•</span>
              <a href={OFFICIAL_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                WhatsApp Live Concierge
              </a>
            </div>
          </div>
          
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="consultation" className="py-28 bg-[#0d0d10] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-amber-400 font-mono text-xs tracking-[0.3em] uppercase block">
            MAKE IT PERMANENT
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            COMMISSION <span className="gold-gradient-text italic font-normal">YOUR PIECE</span>
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
            Reserve your session with our resident masters. Every piece is custom mapped to your unique anatomy.
          </p>
        </div>
        {formContent}
      </div>
    </section>
  );
};
