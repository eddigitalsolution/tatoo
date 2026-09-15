import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroInkMask } from './components/HeroInkMask';
import { ArtistsSection } from './components/ArtistsSection';
import { StylesSection } from './components/StylesSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { PlacementStudio } from './components/PlacementStudio';
import { PricingEstimator } from './components/PricingEstimator';
import { ProcessSection } from './components/ProcessSection';
import { AftercareGuide } from './components/AftercareGuide';
import { StudioSection } from './components/StudioSection';
import { FaqSection } from './components/FaqSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { WhatsAppConcierge } from './components/WhatsAppConcierge';
import type { Artist } from './types/tattoo';

export function App() {
  const [isConsultationDrawerOpen, setIsConsultationDrawerOpen] = useState(false);
  const [selectedArtistForConsult, setSelectedArtistForConsult] = useState<Artist | null>(null);
  const [selectedPlacementForConsult, setSelectedPlacementForConsult] = useState<string>('');
  const [selectedStyleForConsult, setSelectedStyleForConsult] = useState<string>('');

  const handleOpenConsultation = (artist?: Artist, placement?: string, style?: string) => {
    if (artist) setSelectedArtistForConsult(artist);
    if (placement) setSelectedPlacementForConsult(placement);
    if (style) setSelectedStyleForConsult(style);
    setIsConsultationDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200 antialiased">
      {/* Sticky Top Header Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main>
        {/* 01. Signature Hero with Ink Mask Canvas Reveal (id="home") */}
        <HeroInkMask onOpenConsultation={() => handleOpenConsultation()} />

        {/* 02. Resident Masters & Acclaimed Virtuosos */}
        <ArtistsSection onSelectArtist={(artist) => handleOpenConsultation(artist)} />

        {/* 03. Curated Disciplines & Styles Matrix */}
        <StylesSection />

        {/* 04. Selected Archival Work Gallery */}
        <SelectedWorkSection />

        {/* 05. Interactive Virtual Placement Studio & Anatomical Canvas */}
        <PlacementStudio 
          onSelectPlacementForBooking={(placementName, styleName) => 
            handleOpenConsultation(undefined, placementName, styleName)
          } 
        />

        {/* 06. Interactive Session & Investment Quote Estimator */}
        <PricingEstimator onOpenConsultation={() => handleOpenConsultation()} />

        {/* 07. Sacred Ritual Process Pipeline */}
        <ProcessSection />

        {/* 08. 30-Day Recovery Roadmap & Hospital-Grade Hygiene Standards */}
        <AftercareGuide />

        {/* 09. Contemporary Art Gallery Studio Sanctuaries (Tokyo, NY, London) */}
        <StudioSection />

        {/* 10. Collector Intelligence FAQ & Pre-Session Preparation */}
        <FaqSection />

        {/* 11. Consultation & Private Commission Intake */}
        <ConsultationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 24/7 VIP WhatsApp Concierge Hotline */}
      <WhatsAppConcierge />

      {/* Floating Quick Drawer Consultation Modal */}
      {isConsultationDrawerOpen && (
        <ConsultationSection
          key={`${selectedArtistForConsult?.id || 'default'}-${selectedPlacementForConsult}-${selectedStyleForConsult}`}
          initialArtist={selectedArtistForConsult}
          initialPlacement={selectedPlacementForConsult}
          initialStyle={selectedStyleForConsult}
          isOpenAsDrawer={true}
          onCloseDrawer={() => {
            setIsConsultationDrawerOpen(false);
            setSelectedArtistForConsult(null);
            setSelectedPlacementForConsult('');
            setSelectedStyleForConsult('');
          }}
        />
      )}
    </div>
  );
}

export default App;
