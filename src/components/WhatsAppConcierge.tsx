import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone } from 'lucide-react';
import { OFFICIAL_CONTACT } from '../data/tattooData';

export const WhatsAppConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customQuery, setCustomQuery] = useState('');

  const quickPrompts = [
    { label: 'Book Valentin Kross (Chiaroscuro)', msg: 'Hello, I would like to inquire about commission availability with Master Valentin Kross.' },
    { label: 'Check Tokyo / SoHo Residency Dates', msg: 'Hello ED Studio, what are the upcoming residency calendar openings for Tokyo and New York?' },
    { label: 'Request Custom Price Quote', msg: 'Hello, I have an idea for a custom tattoo piece and would like to get a quote estimate.' },
    { label: 'Emergency Healing / Aftercare Help', msg: 'Urgent: I have an aftercare question regarding my healing tattoo.' },
  ];

  const handleSend = (textToSend?: string) => {
    const message = textToSend || customQuery || 'Hello ED Tattoo Studio, I would like to inquire about a private commission.';
    window.open(`${OFFICIAL_CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Concierge Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-96 max-w-sm bg-[#121215] border border-amber-500/40 rounded-3xl p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-white">
                  ED VIP CONCIERGE
                </h4>
                <div className="flex items-center space-x-1.5 text-[10px] font-mono text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>ONLINE • {OFFICIAL_CONTACT.phone}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-zinc-500 hover:text-white rounded-lg transition-colors"
              aria-label="Close Concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-zinc-300 font-light leading-relaxed">
            Direct hotline for private inquiries, calendar reservations, and master portfolio consults.
          </p>

          {/* Quick Choice Chips */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
              QUICK INQUIRIES
            </span>
            {quickPrompts.map((q) => (
              <button
                key={q.label}
                onClick={() => handleSend(q.msg)}
                className="w-full text-left px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/80 hover:border-amber-500/30 text-[11px] font-mono text-zinc-300 transition-all flex items-center justify-between group"
              >
                <span className="line-clamp-1">{q.label}</span>
                <span className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </button>
            ))}
          </div>

          {/* Custom Message Field */}
          <div className="pt-2">
            <div className="relative flex items-center">
              <input
                type="text"
                value={customQuery}
                onChange={(e) => setCustomQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
                placeholder="Type your message..."
                className="w-full bg-zinc-950 border border-zinc-700 focus:border-amber-400 rounded-full pl-4 pr-10 py-2.5 text-xs text-zinc-200 outline-none placeholder:text-zinc-600"
              />
              <button
                onClick={() => handleSend()}
                className="absolute right-1.5 p-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 transition-colors"
                aria-label="Send WhatsApp Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Call Hotline Alternative */}
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>Direct studio line:</span>
            <a
              href={`tel:${OFFICIAL_CONTACT.phoneClean}`}
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center space-x-1"
            >
              <Phone className="w-3 h-3" />
              <span>{OFFICIAL_CONTACT.phone}</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center space-x-2.5 px-4 py-3 rounded-full bg-zinc-950/95 border border-amber-500/40 hover:border-amber-400 shadow-2xl shadow-amber-500/20 text-zinc-100 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Open VIP Concierge"
      >
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-zinc-950 animate-pulse" />
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[11px] font-serif font-bold tracking-wider text-amber-300 group-hover:text-amber-200">
            VIP CONCIERGE
          </span>
          <span className="text-[9px] font-mono text-zinc-400">
            {OFFICIAL_CONTACT.phone}
          </span>
        </div>
      </button>

    </div>
  );
};
