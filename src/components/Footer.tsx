import React from 'react';
import { ArrowUp, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { OFFICIAL_CONTACT } from '../data/tattooData';

export const Footer: React.FC = () => {
  const scrollToHome = () => {
    const homeEl = document.getElementById('home');
    if (homeEl) {
      homeEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070709] text-zinc-400 border-t border-zinc-900 pt-20 pb-12 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Branding & Navigation Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-zinc-900">
          
          {/* Col 1: Brand Manifesto */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" onClick={scrollToHome} className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full border border-amber-500/40 flex items-center justify-center bg-zinc-900 group-hover:border-amber-400 transition-colors overflow-hidden shrink-0">
                <img src="/logo.png" alt="ED Tattoo Studio Logo" className="w-full h-full object-cover" onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('span')) {
                    const span = document.createElement('span');
                    span.className = 'font-serif text-amber-400 font-bold text-base leading-none';
                    span.innerText = 'ED';
                    parent.appendChild(span);
                  }
                }} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.25em] font-semibold text-zinc-100 group-hover:text-amber-200 transition-colors">
                  ED
                </span>
                <span className="text-[9px] tracking-[0.35em] text-zinc-500 font-mono">TATTOO STUDIO</span>
              </div>
            </a>
            
            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              Contemporary fine art and body canvas sanctuary. Pioneering Renaissance chiaroscuro shading, dark ornamental armor, and ultra-fine single-needle precision across Tokyo, New York, and London.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${OFFICIAL_CONTACT.phoneClean}`} className="hover:text-amber-300 transition-colors">
                  {OFFICIAL_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-300">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a 
                  href={OFFICIAL_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp VIP Concierge ({OFFICIAL_CONTACT.phone})
                </a>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${OFFICIAL_CONTACT.email}`} className="hover:text-amber-300 transition-colors">
                  {OFFICIAL_CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[11px] font-mono text-zinc-200 uppercase tracking-widest border-b border-zinc-800 pb-2">
              EXHIBITIONS & SECTIONS
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#home" onClick={scrollToHome} className="hover:text-amber-400 transition-colors">01. HOME & INK MASK</a></li>
              <li><a href="#artists" className="hover:text-amber-400 transition-colors">02. RESIDENT MASTERS</a></li>
              <li><a href="#styles" className="hover:text-amber-400 transition-colors">03. CURATED DISCIPLINES</a></li>
              <li><a href="#selected-work" className="hover:text-amber-400 transition-colors">04. ARCHIVAL GALLERY</a></li>
              <li><a href="#canvas-studio" className="hover:text-amber-400 transition-colors">05. PLACEMENT STUDIO</a></li>
              <li><a href="#estimator" className="hover:text-amber-400 transition-colors">06. SESSION ESTIMATOR</a></li>
              <li><a href="#process" className="hover:text-amber-400 transition-colors">07. SACRED RITUAL PROCESS</a></li>
              <li><a href="#aftercare" className="hover:text-amber-400 transition-colors">08. 30-DAY AFTERCARE GUIDE</a></li>
              <li><a href="#studio" className="hover:text-amber-400 transition-colors">09. STUDIO SANCTUARIES</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">10. COLLECTOR FAQ</a></li>
              <li><a href="#consultation" className="hover:text-amber-400 transition-colors">11. BOOK COMMISSION</a></li>
            </ul>
          </div>

          {/* Col 3: Studio Locations */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-[11px] font-mono text-zinc-200 uppercase tracking-widest border-b border-zinc-800 pb-2">
              SANCTUARY PORTS
            </h4>
            <div className="space-y-3 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-zinc-200 font-serif font-semibold flex items-center space-x-1.5">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>TOKYO</span>
                </span>
                <p className="text-[11px] text-zinc-400 font-light pl-4.5">Ginza Art District 4-10-2</p>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-200 font-serif font-semibold flex items-center space-x-1.5">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>NEW YORK</span>
                </span>
                <p className="text-[11px] text-zinc-400 font-light pl-4.5">142 Mercer St, SoHo</p>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-200 font-serif font-semibold flex items-center space-x-1.5">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>LONDON</span>
                </span>
                <p className="text-[11px] text-zinc-400 font-light pl-4.5">28 Conduit St, Mayfair</p>
              </div>
            </div>
          </div>

          {/* Col 4: Private Collector Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono text-zinc-200 uppercase tracking-widest border-b border-zinc-800 pb-2">
              PRIVATE ARCHIVE NEWSLETTER
            </h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Receive private invitations to guest master residencies, new catalog unveiling events, and cancelled calendar slot openings.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  id="newsletterEmail"
                  name="newsletterEmail"
                  autoComplete="email"
                  type="email"
                  placeholder="collector@domain.com"
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-amber-400 rounded-full px-4 py-2.5 text-xs text-zinc-200 outline-none placeholder:text-zinc-600"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 font-bold text-xs uppercase hover:bg-amber-300 transition-colors shrink-0"
                >
                  JOIN
                </button>
              </div>
              <span className="text-[9px] font-mono text-zinc-600 block">Strictly confidential • Quarterly digest</span>
            </form>
          </div>

        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-400">
          <div>
            © {new Date().getFullYear()} ED TATTOO STUDIO GALLERY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-4 text-zinc-500">
            <span>TOKYO</span>
            <span>•</span>
            <span>NEW YORK</span>
            <span>•</span>
            <span>LONDON</span>
          </div>
          <button
            onClick={scrollToHome}
            className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors group cursor-pointer"
          >
            <span>BACK TO HOME (#home)</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
