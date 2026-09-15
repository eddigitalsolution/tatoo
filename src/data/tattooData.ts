import type { 
  Artist, 
  TattooStyle, 
  Artwork, 
  ProcessStep, 
  StudioFeature,
  PlacementOption,
  PricingScale,
  AftercarePhase,
  FaqItem,
  SanctuaryLocation
} from '../types/tattoo';

export const OFFICIAL_CONTACT = {
  phone: '+60 11-3071 9502',
  phoneClean: '+601130719502',
  whatsappUrl: 'https://wa.me/601130719502',
  email: 'concierge@edtattoostudio.com',
  workingHours: 'Mon - Sat: 11:00 AM – 8:00 PM JST / EST / GMT'
};

export const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23121215'/%3E%3Ccircle cx='400' cy='300' r='180' fill='%2318181b' stroke='%23c9a86b' stroke-width='1.5' stroke-dasharray='4,4' opacity='0.7'/%3E%3Ctext x='400' y='305' font-family='serif' font-size='44' font-weight='bold' fill='%23c9a86b' text-anchor='middle' letter-spacing='0.2em'%3EED TATTOO%3C/text%3E%3Ctext x='400' y='345' font-family='monospace' font-size='13' fill='%23a1a1aa' text-anchor='middle' letter-spacing='0.3em'%3EEXHIBITION ARCHIVE%3C/text%3E%3C/svg%3E";

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  if (target.src !== FALLBACK_IMAGE) {
    target.src = FALLBACK_IMAGE;
  }
};

export const ARTISTS_DATA: Artist[] = [
  {
    id: 'valentin-kross',
    name: 'Valentin Kross',
    title: 'Master of Chiaroscuro & Micro-Realism',
    bio: 'Former Beaux-Arts Paris painter transitioning classical Renaissance shading into dark skin canvas art. Recognized globally for ultra-fine single-needle portraits, chiaroscuro chiaroscuro gradients, and high-contrast baroque themes.',
    specialties: ['Chiaroscuro Realism', 'Fine Line Renaissance', 'Surrealist Portraits'],
    experienceYears: 14,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    featuredArtwork: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80',
    quote: 'The human anatomy is not just a surface—it is a three-dimensional sculpture carved in shadow and light.',
    availableFrom: 'Booking Q4 2026',
    instagram: '@valentin.kross.art'
  },
  {
    id: 'elena-vane',
    name: 'Elena Vane',
    title: 'Botanical Geometry & Dark Ornamental',
    bio: 'Architect turned tattoo artist, Elena infuses sacred geometry, intricate filigree, and anatomical botanical drawings into custom body adornment that flows harmoniously with natural muscular motion.',
    specialties: ['Dark Ornamental', 'Anatomical Botanicals', 'Geometric Filigree'],
    experienceYears: 10,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    featuredArtwork: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1200&q=80',
    quote: 'Line weight is emotion. A single millimeter shift alters the harmony of the entire piece.',
    availableFrom: 'Limited Slots November',
    instagram: '@elena.vane.tattoo'
  },
  {
    id: 'kenji-sato',
    name: 'Kenji Sato',
    title: 'Contemporary Irezumi & Sumi-e Blackwork',
    bio: 'Hailing from Kyoto, Kenji blends traditional Japanese mythology with modern minimalist Sumi-e ink strokes, crafting sweeping dragons, mythical koi, and dark ink washes across monumental body suites.',
    specialties: ['Contemporary Irezumi', 'Sumi-e Ink Wash', 'Large Scale Backpieces'],
    experienceYears: 18,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    featuredArtwork: 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&w=1200&q=80',
    quote: 'Ink is living energy. As you age, the ink matures with you like vintage wine.',
    availableFrom: 'Tokyo Studio Residency',
    instagram: '@kenji.irezumi'
  }
];

export const STYLES_DATA: TattooStyle[] = [
  {
    id: 'chiaroscuro',
    name: 'Chiaroscuro Realism',
    tagline: 'Dramatic contrast of dark shadows and piercing highlights.',
    description: 'Inspired by Renaissance masters Caravaggio and Rembrandt. Emphasizes deep black gradients paired with untouched skin tone highlights for extraordinary 3D depth and emotional gravitas.',
    characteristics: ['Ultra-smooth grey wash shading', 'High-contrast focal points', 'Classical oil-painting aesthetics'],
    imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80',
    accentColor: '#c9a86b'
  },
  {
    id: 'fine-line',
    name: 'Micro Fine Line',
    tagline: 'Precision needlework with whisper-thin elegance.',
    description: 'Executed with single 3RL and 1RL needle setups. Creates ethereal micro-detail, architectural geometry, and delicate botanical line work that ages with graceful subtle tone.',
    characteristics: ['Single-needle precision', 'Sophisticated minimalism', 'Delicate detail retention'],
    imageUrl: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=800&q=80',
    accentColor: '#e4e4e7'
  },
  {
    id: 'dark-ornamental',
    name: 'Dark Ornamental',
    tagline: 'Flowing body armor tailored to muscle anatomy.',
    description: 'Custom symmetrical and asymmetrical ornamental patterns engineered to frame key anatomical landmarks like the spine, clavicle, and ribs with dark regal presence.',
    characteristics: ['Muscle flow alignment', 'Heavy blackwork contrast', 'Sacred geometric patterns'],
    imageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80',
    accentColor: '#a1a1aa'
  },
  {
    id: 'sumie-contemporary',
    name: 'Neo Sumi-e & Irezumi',
    tagline: 'Fluid ink brushstrokes combined with legendary folklore.',
    description: 'Dynamic calligraphic sweeps inspired by classical East Asian ink wash painting, merged with bold iconic traditional motifs of dragons, waves, and celestial spirits.',
    characteristics: ['Expressive brushstroke textures', 'Fluid movement curves', 'Timeless cultural symbolism'],
    imageUrl: 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&w=800&q=80',
    accentColor: '#d4af37'
  }
];

export const ARTWORKS_DATA: Artwork[] = [
  {
    id: 'art-1',
    title: 'The Fallen Seraphim',
    artistId: 'valentin-kross',
    artistName: 'Valentin Kross',
    styleId: 'chiaroscuro',
    styleName: 'Chiaroscuro Realism',
    placement: 'Full Back & Shoulders',
    hoursToComplete: 38,
    imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80',
    description: 'A monument to tragedy and transcendence. Detailed wing feathers rendered in deep grey wash with intense negative-space light flares across the shoulder blades.',
    year: 2026,
    featured: true
  },
  {
    id: 'art-2',
    title: 'ED Sacred Geometry Spine',
    artistId: 'elena-vane',
    artistName: 'Elena Vane',
    styleId: 'dark-ornamental',
    styleName: 'Dark Ornamental',
    placement: 'Full Vertebral Alignment',
    hoursToComplete: 16,
    imageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1200&q=80',
    description: 'Precision-measured mandala cascade following every vertebrae down the spine, accentuating natural posture with micro-dotwork gradients.',
    year: 2025,
    featured: true
  },
  {
    id: 'art-3',
    title: 'Kyoto Shadow Dragon',
    artistId: 'kenji-sato',
    artistName: 'Kenji Sato',
    styleId: 'sumie-contemporary',
    styleName: 'Neo Sumi-e',
    placement: 'Full Sleeve & Chest Plate',
    hoursToComplete: 42,
    imageUrl: 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&w=1200&q=80',
    description: 'Bold calligraphic dragon coiling through stylized atmospheric clouds. Rendered using custom pigment formulations for deep eternal jet-black density.',
    year: 2026,
    featured: true
  },
  {
    id: 'art-4',
    title: 'Anatomical Flora & Skull',
    artistId: 'valentin-kross',
    artistName: 'Valentin Kross',
    styleId: 'fine-line',
    styleName: 'Micro Fine Line',
    placement: 'Outer Thigh Canvas',
    hoursToComplete: 14,
    imageUrl: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1200&q=80',
    description: 'Extremely fine single-needle rendering of wild nightshade intertwined with an 18th-century medical skull engraving.',
    year: 2026
  },
  {
    id: 'art-5',
    title: 'Eclipse Filigree Cuff',
    artistId: 'elena-vane',
    artistName: 'Elena Vane',
    styleId: 'dark-ornamental',
    styleName: 'Dark Ornamental',
    placement: 'Forearm Wrap',
    hoursToComplete: 10,
    imageUrl: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=1200&q=80',
    description: 'Seamless wrist-to-elbow ornamental motif featuring moon phase alignments and heavy solid black framed edges.',
    year: 2025
  },
  {
    id: 'art-6',
    title: 'Solitude in Charcoal',
    artistId: 'kenji-sato',
    artistName: 'Kenji Sato',
    styleId: 'sumie-contemporary',
    styleName: 'Neo Sumi-e',
    placement: 'Ribcage Panel',
    hoursToComplete: 20,
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    description: 'Abstract Sumi ink splashes merging into a serene crane silhouette, capturing the essence of Japanese wabi-sabi aesthetics.',
    year: 2026
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation & Philosophy Alignment',
    subtitle: 'Where vision meets anatomical canvas.',
    description: 'Every masterpiece begins with an intimate dialogue. We explore your narrative, study skin movement, and establish clear aesthetic parameters.',
    details: ['1-on-1 Artist Dialogue', 'Anatomy & Skin Mapping', 'Concept Blueprint Creation'],
    iconName: 'Compass'
  },
  {
    number: '02',
    title: 'Custom Stencil & Digital Composition',
    subtitle: 'Bespoke design tailored specifically to your body.',
    description: 'We never reuse flash or templates. Your piece is drawn directly onto 3D digital body models to ensure line flow harmonizes with muscular contours.',
    details: ['3D Anatomy Projection', 'Custom Stencil Fitting', 'Pigment Tone Selection'],
    iconName: 'PenTool'
  },
  {
    number: '03',
    title: 'The Ritual & Needle Session',
    subtitle: 'Precision execution in a private luxury sanctuary.',
    description: 'Performed in private negative-pressure studio suites with ambient lighting, spatial soundscapes, medical-grade sterilizers, and ergonomic memory-foam beds.',
    details: ['Surgical-Grade Hygiene', 'Custom Pigment Mix', 'Controlled Environment'],
    iconName: 'Sparkles'
  },
  {
    number: '04',
    title: 'Sanctuary Aftercare & Permanent Care',
    subtitle: 'Preserving pigment clarity for decades to come.',
    description: 'You receive our signature botanical balm and medical dermal protective wraps, paired with a 6-month checkup appointment to ensure optimal heal and vibrancy.',
    details: ['Organic Healing Balms', 'Medical Skin Wraps', 'Lifetime Touch-up Guarantee'],
    iconName: 'ShieldCheck'
  }
];

export const STUDIO_FEATURES: StudioFeature[] = [
  {
    title: 'Private Art Gallery Environment',
    description: 'Surround yourself with rotating contemporary fine art exhibitions, dark oak wood panels, and custom ambient lighting engineered for relaxed focus.',
    icon: 'Maximize2',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Hospital-Grade Sterilization Standard',
    description: 'Single-use autoclave sterile cartridges, medical air filtration systems, and surgical protocols that exceed international health department standards.',
    icon: 'Shield',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Custom Pigment Formulations',
    description: 'We formulate our own vegan, heavy-metal-free carbon inks that resist fading and hold crisp edges under UV exposure.',
    icon: 'Droplet',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80'
  }
];

export const PLACEMENT_OPTIONS: PlacementOption[] = [
  {
    id: 'forearm',
    name: 'Forearm & Full Arm Sleeve',
    area: 'Upper Extremity',
    painRating: 2,
    healingDays: 14,
    complexity: 'Moderate to High',
    recommendedStyles: ['Micro Fine Line', 'Chiaroscuro Realism', 'Dark Ornamental'],
    defaultArtwork: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=800&q=80',
    description: 'A dynamic canvas visible in daily movement. Adapts seamlessly to forearm rotational mechanics and natural muscle tension.',
    anatomicalNotes: 'Outer forearm is mild; inner wrist and ditch require subtle needle depth adjustments.'
  },
  {
    id: 'back',
    name: 'Full Back Suite & Spine',
    area: 'Posterior Torso',
    painRating: 3,
    healingDays: 21,
    complexity: 'High (Monumental)',
    recommendedStyles: ['Chiaroscuro Realism', 'Contemporary Irezumi', 'Dark Ornamental'],
    defaultArtwork: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80',
    description: 'The premier monumental canvas in tattoo artistry. Provides maximum surface area for expansive narrative worldbuilding.',
    anatomicalNotes: 'Spine vertebrae and lower back flanks are sensitive, while shoulder blades provide flat, stable planes.'
  },
  {
    id: 'chest-ribs',
    name: 'Chest Plate & Ribcage Suite',
    area: 'Anterior Torso',
    painRating: 4,
    healingDays: 18,
    complexity: 'High',
    recommendedStyles: ['Neo Sumi-e', 'Dark Ornamental', 'Micro Fine Line'],
    defaultArtwork: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    description: 'An intimate, powerful placement framing the sternum and heart. Follows breath expansion and rib curvature with striking elegance.',
    anatomicalNotes: 'Ribcage bone resonance requires disciplined breathing techniques provided by our artists.'
  },
  {
    id: 'thigh-leg',
    name: 'Outer Thigh & Leg Sleeve',
    area: 'Lower Extremity',
    painRating: 2,
    healingDays: 16,
    complexity: 'Moderate to High',
    recommendedStyles: ['Chiaroscuro Realism', 'Anatomical Botanicals', 'Neo Sumi-e'],
    defaultArtwork: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=800&q=80',
    description: 'Spacious canvas offering gentle curves and low sensory fatigue, ideal for large vertical compositions and detailed portraits.',
    anatomicalNotes: 'One of the most comfortable anatomical placements for extended multi-hour sessions.'
  },
  {
    id: 'spine-collar',
    name: 'Spine Filigree & Clavicle Frame',
    area: 'Structural Axis',
    painRating: 4,
    healingDays: 14,
    complexity: 'Micro-Precision',
    recommendedStyles: ['Dark Ornamental', 'Micro Fine Line', 'Sacred Geometry'],
    defaultArtwork: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80',
    description: 'Pure architectural adornment tracing the central axis of posture. Accentuates natural spinal alignment and collarbone definition.',
    anatomicalNotes: 'Requires micro single-needle calibration to prevent excessive ink dispersion along thin dermal layers.'
  }
];

export const PRICING_SCALES: PricingScale[] = [
  {
    id: 'scale-flash',
    label: 'Micro Fine Accent',
    category: 'Single Session',
    estimatedHours: '2 – 4 Hours',
    priceRange: '$600 – $1,200',
    sessions: '1 Day Intensive',
    depositRequired: '$250',
    description: 'Precision botanical engraving, miniature portrait, or sacred geometry crest under 10cm.',
    recommendedFor: 'Forearm, wrist, clavicle, or ankle placements.'
  },
  {
    id: 'scale-medium',
    label: 'Medium Custom Piece',
    category: 'Full Day Sitting',
    estimatedHours: '5 – 8 Hours',
    priceRange: '$1,500 – $2,800',
    sessions: '1 – 2 Sessions',
    depositRequired: '$500',
    description: 'Detailed chiaroscuro figure, ornamental half sleeve component, or large thigh portrait.',
    recommendedFor: 'Outer bicep, calf, outer thigh, or shoulder panel.'
  },
  {
    id: 'scale-large',
    label: 'Large Panel / Half Sleeve',
    category: 'Multi-Session Project',
    estimatedHours: '12 – 18 Hours',
    priceRange: '$3,500 – $5,500',
    sessions: '2 – 3 Sittings',
    depositRequired: '$800',
    description: 'Comprehensive forearm wrap, full chest plate, or flowing ornamental rib suite.',
    recommendedFor: 'Continuous anatomical flow wrapping multiple planes.'
  },
  {
    id: 'scale-suite',
    label: 'Masterpiece Body Suite',
    category: 'Monumental Archival Piece',
    estimatedHours: '25 – 45+ Hours',
    priceRange: '$7,500 – $14,000+',
    sessions: '4 – 8 Sittings',
    depositRequired: '$1,500',
    description: 'Complete full-back Renaissance seraphim, full arm sleeve, or Japanese Irezumi body suit.',
    recommendedFor: 'Dedicated collectors seeking legacy archival skin artwork.'
  }
];

export const AFTERCARE_PHASES: AftercarePhase[] = [
  {
    phaseNumber: '01',
    dayRange: 'Days 1 – 3',
    title: 'Medical Dermal Barrier & Plasma Lock',
    subtitle: 'Immediate clinical protection and fluid containment.',
    instructions: [
      'Leave the hospital-grade medical dermal wrap (SecondSkin) untouched for 48 to 72 hours.',
      'Normal fluid/ink buildup beneath the film is protective plasma and accelerates initial cellular repair.',
      'Showering is permitted; do not direct high-pressure hot water streams onto the bandage edges.'
    ],
    criticalRules: [
      'Do NOT puncture the film or drain fluid manually.',
      'Avoid heavy cardiovascular exercise or excessive perspiration.',
      'Keep away from direct sunlight, pet contact, and friction.'
    ],
    products: 'Medical grade polyurethane breathable membrane.'
  },
  {
    phaseNumber: '02',
    dayRange: 'Days 4 – 7',
    title: 'Gentle Cleansing & Breathable Airing',
    subtitle: 'Bandage removal and botanical washing phase.',
    instructions: [
      'Gently peel the film under warm running water, pulling horizontally away from skin.',
      'Wash thoroughly with fragrance-free antibacterial liquid soap using clean bare fingertips only.',
      'Pat dry gently with a disposable clean paper towel; never rub with textured bath towels.',
      'Allow the piece to breathe dry for 15 minutes before applying a paper-thin layer of studio balm.'
    ],
    criticalRules: [
      'Never use washcloths, sponges, or loofahs.',
      'Do NOT submerge in baths, hot tubs, saunas, or swimming pools.',
      'Wear loose, 100% breathable organic cotton clothing over the area.'
    ],
    products: 'ED Signature Botanical Balm & Hypoallergenic Cleanser.'
  },
  {
    phaseNumber: '03',
    dayRange: 'Days 8 – 14',
    title: 'Cellular Renewal & Hydration Support',
    subtitle: 'Flaking phase management without scar tissue.',
    instructions: [
      'Skin will begin light onion-skin flaking—this is completely natural epithelial shedding.',
      'Apply a microscopic sheen of fragrance-free moisturizer 2 to 3 times daily whenever dry.',
      'If itching occurs, gently tap the surrounding un-tattooed skin with clean fingertips.'
    ],
    criticalRules: [
      'STRICTLY NEVER scratch, pick, peel, or rub loose flakes.',
      'Avoid petroleum-heavy ointments like Vaseline that clog dermal pores.',
      'Continue abstaining from swimming pools and chlorinated water.'
    ],
    products: 'Ultra-light unscented ceramide recovery lotion.'
  },
  {
    phaseNumber: '04',
    dayRange: 'Days 15 – 30',
    title: 'Permanent Pigment Settlement & UV Shield',
    subtitle: 'Maturation into the permanent dermal layer.',
    instructions: [
      'The shiny "milky" top layer will settle, revealing crisp contrast and deep black values.',
      'Resume normal exercise and gentle routines as flexibility fully returns.',
      'Schedule your complimentary 6-month studio inspection for archival checkup.'
    ],
    criticalRules: [
      'Daily broad-spectrum SPF 50+ sunscreen is mandatory to prevent UV pigment degradation.',
      'Hydrate skin daily to maintain contrast and skin luminosity.'
    ],
    products: 'Broad-Spectrum Mineral SPF 50+ Barrier Cream.'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'booking',
    question: 'How far in advance do I need to book a consultation?',
    answer: 'Resident masters Valentin Kross, Elena Vane, and Kenji Sato book 2 to 4 months in advance. We release limited calendar slots quarterly. Priority is given to collectors with clear conceptual visions submitted through our dossier form or direct WhatsApp concierge.'
  },
  {
    id: 'faq-2',
    category: 'pain',
    question: 'What is the pain level for various body placements?',
    answer: 'Sensory experience varies across anatomy. Outer arms, thighs, and calves register 2/5 (very manageable). Spine, ribs, sternum, and inner joints register 4/5. Our private sanctuary suites feature ergonomic memory foam beds, controlled breathing guidance, and flexible breaks to ensure comfort.'
  },
  {
    id: 'faq-3',
    category: 'pricing',
    question: 'How are commissions priced and what deposits are required?',
    answer: 'Commissions are priced based on complexity, scale, anatomical curvature, and artist mastery. Single sessions range from $600 to $2,800; large multi-session suites range from $3,500 to $14,000+. A non-refundable reservation deposit is required to lock dates and begin custom 3D stencil composition.'
  },
  {
    id: 'faq-4',
    category: 'process',
    question: 'Do you create custom artwork or do you have pre-made designs?',
    answer: 'Every commission at ED Tattoo Studio is 100% custom-designed specifically for your anatomical proportions and movement. We never tattoo flash, templates, or repeat artworks from other clients. Your design is archived as a unique, one-of-a-kind piece.'
  },
  {
    id: 'faq-5',
    category: 'process',
    question: 'How should I prepare in the 24 hours leading up to my appointment?',
    answer: 'Get 8 hours of restful sleep, drink at least 2.5 liters of water, and eat a hearty meal 1 to 2 hours prior. Strictly avoid alcohol, excessive caffeine, aspirin, and blood thinners for 24 hours. Wear comfortable, loose, dark-colored clothing allowing easy access to the placement area.'
  },
  {
    id: 'faq-6',
    category: 'aftercare',
    question: 'Do you provide lifetime touch-ups for healed pieces?',
    answer: 'Yes. Every original piece commissioned at ED includes a complimentary touch-up within the first 6 months of completion. We inspect the ink settling in natural daylight to ensure lines remain razor-sharp and chiaroscuro gradients retain maximum depth.'
  }
];

export const SANCTUARY_LOCATIONS: SanctuaryLocation[] = [
  {
    id: 'tokyo',
    city: 'TOKYO',
    district: 'Ginza Fine Art District',
    address: 'Minato-ku, Ginza Art District 4-10-2, Tokyo 104-0061',
    status: 'RESIDENCY & VIP PRIVATE SUITE',
    hours: 'Tue – Sun: 11:00 AM – 8:00 PM JST',
    directPhone: '+60 11-3071 9502',
    whatsappNumber: '+601130719502',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'new-york',
    city: 'NEW YORK',
    district: 'SoHo Gallery Quarter',
    address: '142 Mercer Street, SoHo, New York, NY 10012',
    status: 'MAIN ARCHIVE EXHIBITION',
    hours: 'Mon – Sat: 11:00 AM – 8:00 PM EST',
    directPhone: '+60 11-3071 9502',
    whatsappNumber: '+601130719502',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'london',
    city: 'LONDON',
    district: 'Mayfair Fine Art Row',
    address: '28 Conduit Street, Mayfair, London W1S 2XG',
    status: 'APPOINTMENTS BY INVITATION',
    hours: 'Wed – Sun: 10:30 AM – 7:30 PM GMT',
    directPhone: '+60 11-3071 9502',
    whatsappNumber: '+601130719502',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80'
  }
];
