export interface Artist {
  id: string;
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  experienceYears: number;
  avatarUrl: string;
  featuredArtwork: string;
  quote: string;
  availableFrom: string;
  instagram: string;
}

export interface TattooStyle {
  id: string;
  name: string;
  tagline: string;
  description: string;
  characteristics: string[];
  imageUrl: string;
  accentColor: string;
}

export interface Artwork {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  styleId: string;
  styleName: string;
  placement: string;
  hoursToComplete: number;
  imageUrl: string;
  description: string;
  year: number;
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface StudioFeature {
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface PlacementOption {
  id: string;
  name: string;
  area: string;
  painRating: number; // 1 to 5
  healingDays: number;
  complexity: string;
  recommendedStyles: string[];
  defaultArtwork: string;
  description: string;
  anatomicalNotes: string;
}

export interface PricingScale {
  id: string;
  label: string;
  category: string;
  estimatedHours: string;
  priceRange: string;
  sessions: string;
  depositRequired: string;
  description: string;
  recommendedFor: string;
}

export interface AftercarePhase {
  phaseNumber: string;
  dayRange: string;
  title: string;
  subtitle: string;
  instructions: string[];
  criticalRules: string[];
  products: string;
}

export interface FaqItem {
  id: string;
  category: 'booking' | 'process' | 'pain' | 'aftercare' | 'pricing';
  question: string;
  answer: string;
}

export interface SanctuaryLocation {
  id: string;
  city: string;
  district: string;
  address: string;
  status: string;
  hours: string;
  directPhone: string;
  whatsappNumber: string;
  image: string;
}
