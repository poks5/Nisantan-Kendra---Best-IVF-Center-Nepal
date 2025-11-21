
export type Language = 'en' | 'ne';

export type ServiceCategory = 'all' | 'primary' | 'diagnostic' | 'treatment' | 'support';

export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    team: string;
    successStories: string;
    contact: string;
    bookAppointment: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    badge: string;
  };
  about: {
    title: string;
    description: string;
    historyTitle: string;
    historyDescription: string;
    timeline: TimelineItem[];
    achievementsTitle: string;
    achievements: AchievementItem[];
    missionTitle: string;
    mission: string;
    visionTitle: string;
    vision: string;
    affiliationsTitle: string;
    affiliations: Affiliation[];
    whyChooseTitle: string;
    whyChoose: { title: string; description: string }[];
    stats: {
      couples: string;
      parents: string;
      years: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    viewAll: string;
    facilitiesTitle: string;
    facilitiesSubtitle: string;
    facilities: FacilityItem[];
    categories: { id: ServiceCategory; label: string }[];
    items: ServiceItem[];
    nutritionistTitle: string;
    nutritionist: NutritionistProfile;
  };
  team: {
    title: string;
    subtitle: string;
    groupPhotoTitle: string;
    groupPhotoSubtitle: string;
    supportTitle: string;
    supportText: string;
    viewProfile: string;
    bookWith: string;
  };
  ivfUnit: {
    title: string;
    subtitle: string;
    aboutTitle: string;
    aboutText: string[];
    facilitiesTitle: string;
    facilities: { title: string; description: string; icon: string }[];
    equipmentTitle: string;
    equipment: { title: string; subtitle: string; description: string; image: string }[];
    techTitle: string;
    tech: { label: string; value: string }[];
    qualityTitle: string;
    quality: {
      envTitle: string;
      envItems: string[];
      qaTitle: string;
      qaItems: string[];
    };
  };
  patientCare: {
    title: string;
    subtitle: string;
    journeyTitle: string;
    journeySteps: ProcessStep[];
    faqTitle: string;
    faqs: FAQItem[];
    privacyTitle: string;
    privacyText: string;
    features: { title: string; description: string; icon: string }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  contact: {
    title: string;
    subtitle: string;
    info: {
      visit: string;
      call: string;
      email: string;
      hours: string;
    };
    actions: {
      whatsapp: string;
      viber: string;
      callNow: string;
    };
    form: {
      name: string;
      phone: string;
      email: string;
      message: string;
      upload: string;
      uploadHint: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      reset: string;
    };
  };
  ai: {
    welcome: string;
    placeholder: string;
    disclaimer: string;
    online: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: ServiceCategory;
  // Detailed content for the service page
  details?: {
    fullDescription: string;
    benefits: string[];
    procedureTitle?: string;
    procedureSteps?: string[];
    candidatesTitle?: string;
    candidates?: string[];
    image?: string;
  };
}

export interface FacilityItem {
  title: string;
  description: string;
  image: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface AchievementItem {
  title: string;
  description: string;
  icon: string;
}

export interface Affiliation {
  name: string;
  role: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  location: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  specialization: string;
  availability: string;
  image: string;
  isExecutive?: boolean;
  isFeatured?: boolean;
  // Extended Profile Fields
  languages?: string[];
  professionalSummary?: string;
  advancedTraining?: string[];
  milestones?: { year: string; milestone: string }[];
  publications?: { title: string; journal: string }[];
  books?: { title: string; publisher: string }[];
  achievements?: string[];
  awards?: string[];
}

export interface NutritionistProfile {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  specialization: string;
  availability: string;
  bio: string;
  image: string;
  // Detailed fields
  areasOfExpertise?: string[];
  professionalFocus?: string;
  servicesOffered?: string[];
  approachToCare?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
