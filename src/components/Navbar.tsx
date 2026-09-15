import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, MessageCircle, Phone } from 'lucide-react';
import { OFFICIAL_CONTACT } from '../data/tattooData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trimmed to 6 essential links — no wrapping at 1280px
  const navLinks = [
    { name: 'ARTISTS', href: '#artists' },
    { name: 'STYLES', href: '#styles' },
    { name: 'GALLERY', href: '#selected-work' },
    { name: 'STUDIO', href: '#canvas-studio' },
    { name: 'PROCESS', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-xl'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* Brand / Logo → #home */}
        <a
          href="#home"
          id="brand-logo"
          className="flex items-center gap-3 group shrink-0 focus-visible:outline-amber-400 focus-visible:outline-2 rounded-lg"
        >
          <div className="w-8 h-8 rounded-full border border-amber-500/50 flex items-center justify-center bg-zinc-900 group-hover:border-amber-400 transition-colors overflow-hidden">
            <img src="/logo.png" alt="ED Tattoo Studio Logo" className="w-full h-full object-cover" onError={(e) => {
              // Fallback to text monogram if image fails
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent && !parent.querySelector('span')) {
                const span = document.createElement('span');
                span.className = 'font-serif text-amber-400 font-bold text-xs leading-none';
                span.innerText = 'ED';
                parent.appendChild(span);
              }
            }} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-base tracking-[0.25em] font-bold text-zinc-100 group-hover:text-amber-200 transition-colors">
              ED
            </span>
            <span className="text-[8px] tracking-[0.3em] text-zinc-500 font-mono uppercase">
              TATTOO STUDIO
            </span>
          </div>
        </a>

        {/* Desktop Nav Links — single row, lg and up */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] tracking-[0.16em] font-medium text-zinc-400 hover:text-amber-300 transition-colors whitespace-nowrap relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Phone + CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Phone number — functional tel link, visible on xl */}
          <a
            href={`tel:${OFFICIAL_CONTACT.phoneClean}`}
            className="hidden xl:flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 hover:text-amber-300 transition-colors"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span>{OFFICIAL_CONTACT.phone}</span>
          </a>

          {/* Consultation CTA — compact on mobile */}
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-amber-500/50 hover:border-amber-400 bg-amber-500/10 hover:bg-amber-500/15 text-amber-300 hover:text-amber-200 font-mono text-[10px] sm:text-[11px] tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-[#09090b]/98 backdrop-blur-2xl border-t border-zinc-800/80 px-5 py-5 flex flex-col gap-6 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-serif tracking-[0.15em] text-zinc-300 hover:text-amber-400 transition-colors flex items-center justify-between py-3 border-b border-zinc-900"
              >
                <span>{link.name}</span>
                <span className="text-zinc-600 text-xs">→</span>
              </a>
            ))}
          </nav>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${OFFICIAL_CONTACT.phoneClean}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 text-zinc-200 text-xs font-mono tracking-wider"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>CALL</span>
            </a>

            <a
              href={`${OFFICIAL_CONTACT.whatsappUrl}?text=Hello%20ED%20Tattoo%20Studio,%20I%20would%20like%20to%20inquire%20about%20a%20commission.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono tracking-wider"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WHATSAPP</span>
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full py-3.5 px-6 rounded-xl bg-amber-400 text-zinc-950 font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK CONSULTATION</span>
          </button>

          <div className="text-center text-[10px] tracking-widest text-zinc-600 font-mono">
            TOKYO · NEW YORK · LONDON
          </div>
        </div>
      )}
    </header>
  );
};
