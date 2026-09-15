import React, { useState } from 'react';
import { FAQ_DATA, OFFICIAL_CONTACT } from '../data/tattooData';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, CircleDot, CheckCircle2 } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQ_DATA[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL QUESTIONS' },
    { id: 'booking', label: 'RESERVATIONS' },
    { id: 'pain', label: 'PAIN & ANATOMY' },
    { id: 'pricing', label: 'PRICING & DEPOSITS' },
    { id: 'process', label: 'THE RITUAL' },
    { id: 'aftercare', label: 'AFTERCARE' },
  ];

  const filteredFaqs = selectedCategory === 'all'
    ? FAQ_DATA
    : FAQ_DATA.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-28 bg-[#0d0d10] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-zinc-800/80 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs tracking-[0.3em] uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>COLLECTOR INTELLIGENCE & INQUIRIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              FREQUENTLY <span className="gold-gradient-text italic font-normal">ASKED</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
            Essential intelligence on residency booking, anatomical pain levels, preparation rituals, and our bespoke design guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: FAQ Categories & Accordions */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-amber-400 text-zinc-950 font-bold shadow-md shadow-amber-400/20'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {filteredFaqs.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-[#121215] border-amber-500/50 shadow-xl shadow-amber-500/5'
                        : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-hidden"
                    >
                      <span className={`font-serif font-semibold text-base sm:text-lg ${isOpen ? 'text-amber-300' : 'text-zinc-200'}`}>
                        {item.question}
                      </span>
                      <div className={`p-1.5 rounded-full ${isOpen ? 'bg-amber-500/20 text-amber-400' : 'text-zinc-500'}`}>
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed border-t border-zinc-800/80 mt-1">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Pre-Session Preparation Checklist & Direct WhatsApp Box */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Pre-Appointment Ritual Checklist */}
            <div className="bg-[#121215] border border-zinc-800 rounded-3xl p-6 space-y-5">
              <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
                <CircleDot className="w-3.5 h-3.5" />
                <span>PRE-SESSION PREPARATION</span>
              </div>
              
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Follow these critical rules 24 hours prior to your sitting for optimal pain endurance and ink saturation:
              </p>

              <div className="space-y-3">
                {[
                  'Drink 2.5L+ water to ensure optimal dermal hydration',
                  'Get 8 hours of uninterrupted restful sleep',
                  'Eat a nutrient-dense carbohydrate meal 2 hours prior',
                  'Strictly avoid alcohol, aspirin, or ibuprofen for 24 hours',
                  'Wear dark, loose, breathable organic cotton clothing',
                  'Moisturize the placement skin daily for 3 days prior'
                ].map((tip, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs font-mono text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Concierge Card */}
            <div className="bg-linear-to-br from-[#181820] to-[#121215] border border-amber-500/40 rounded-3xl p-6 space-y-4">
              <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                HAVE A BESPOKE QUESTION?
              </div>
              <h4 className="text-xl font-serif font-bold text-white">
                Direct WhatsApp Concierge
              </h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Our studio directors in Tokyo, New York, and London answer questions directly regarding artist availability and cover-ups.
              </p>

              <a
                href={`${OFFICIAL_CONTACT.whatsappUrl}?text=Hello%20ED%20Tattoo%20Studio,%20I%20have%20a%20question%20regarding%20my%20upcoming%20commission.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-full bg-emerald-950/80 border border-emerald-500/60 hover:border-emerald-400 text-emerald-300 font-mono text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>CHAT VIA WHATSAPP ({OFFICIAL_CONTACT.phone})</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
