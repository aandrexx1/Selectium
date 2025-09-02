import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  isEnglish: boolean;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  // Hero Section
  hero_description: {
    it: "Creiamo esperienze digitali straordinarie per hotel e ristoranti che aspirano all'eccellenza, con un approccio boutique riservato a pochi progetti ogni anno.",
    en: "We create extraordinary digital experiences for hotels and restaurants that aspire to excellence, with a boutique approach reserved for a few projects each year."
  },
  hero_button1: {
    it: "Richiedi una consulenza esclusiva",
    en: "Request exclusive consultation"
  },
  hero_button2: {
    it: "Parla con il nostro team",
    en: "Talk to our team"
  },

  // About Section
  about_philosophy: {
    it: "La nostra filosofia",
    en: "Our Philosophy"
  },
  about_paragraph1: {
    it: "In un mondo saturo di soluzioni standardizzate, Selectium rappresenta l'antitesi: l'eccellenza artigianale applicata al digitale.",
    en: "In a world saturated with standardized solutions, Selectium represents the antithesis: artisanal excellence applied to digital."
  },
  about_paragraph2: {
    it: "Ogni progetto che abbracciamo è una sinfonia di creatività, precisione tecnica e attenzione maniacale ai dettagli. Non creiamo semplicemente siti web: plasmiamo esperienze digitali che riflettono l'anima e l'ambizione dei nostri clienti più esigenti.",
    en: "Every project we embrace is a symphony of creativity, technical precision and maniacal attention to detail. We don't simply create websites: we shape digital experiences that reflect the soul and ambition of our most demanding clients."
  },
  about_paragraph3: {
    it: "La nostra selezione è rigorosa. Accettiamo solo progetti che ci permettano di esprimere il nostro meglio, lavorando fianco a fianco con imprenditori visionari che condividono la nostra passione per l'eccellenza.",
    en: "Our selection is rigorous. We only accept projects that allow us to express our best, working side by side with visionary entrepreneurs who share our passion for excellence."
  },
  about_quote: {
    it: "Ogni pixel racconta una storia. Ogni interazione è un'emozione.",
    en: "Every pixel tells a story. Every interaction is an emotion."
  },

  // Services Section
  services_title: {
    it: "Servizi su misura",
    en: "Tailored Services"
  },
  services_subtitle: {
    it: "Ogni servizio è pensato per clienti che non accettano compromessi. Soluzioni esclusive, riservate a chi cerca l'eccellenza.",
    en: "Every service is designed for clients who don't accept compromises. Exclusive solutions, reserved for those who seek excellence."
  },
  service_web_exclusive: {
    it: "Siti Web Esclusivi",
    en: "Exclusive Websites"
  },
  service_web_exclusive_desc: {
    it: "Progettazione e sviluppo di piattaforme digitali su misura per hotel e ristoranti di prestigio. Ogni dettaglio è curato per riflettere l'unicità del vostro brand.",
    en: "Design and development of custom digital platforms for prestigious hotels and restaurants. Every detail is crafted to reflect the uniqueness of your brand."
  },
  service_restyling: {
    it: "Restyling & Ottimizzazione",
    en: "Restyling & Optimization"
  },
  service_restyling_desc: {
    it: "Trasformazione completa di siti esistenti con un approccio sofisticato che valorizza il patrimonio del brand mantenendo l'eleganza contemporanea.",
    en: "Complete transformation of existing sites with a sophisticated approach that enhances brand heritage while maintaining contemporary elegance."
  },
  service_seo: {
    it: "SEO & Visibilità Premium",
    en: "SEO & Premium Visibility"
  },
  service_seo_desc: {
    it: "Strategie di posizionamento organico studiate per il settore luxury hospitality, con focus sulla qualità del traffico e l'autorevolezza del brand.",
    en: "Organic positioning strategies designed for the luxury hospitality sector, with focus on traffic quality and brand authority."
  },
  service_booking: {
    it: "Prenotazioni Dirette",
    en: "Direct Bookings"
  },
  service_booking_desc: {
    it: "Integrazione di sistemi di prenotazione diretta e menu digitali interattivi, progettati per massimizzare le conversioni e l'esperienza cliente.",
    en: "Integration of direct booking systems and interactive digital menus, designed to maximize conversions and customer experience."
  },
  service_reputation: {
    it: "Reputazione Digitale",
    en: "Digital Reputation"
  },
  service_reputation_desc: {
    it: "Gestione strategica delle recensioni online e monitoraggio della reputazione, con interventi mirati per consolidare la percezione di eccellenza.",
    en: "Strategic management of online reviews and reputation monitoring, with targeted interventions to consolidate the perception of excellence."
  },
  service_marketing: {
    it: "Marketing Digitale Sofisticato",
    en: "Sophisticated Digital Marketing"
  },
  service_marketing_desc: {
    it: "Campagne pubblicitarie su Google Ads e Meta Ads calibrate per target di alta fascia, newsletter esclusive e strategie di remarketing raffinate.",
    en: "Google Ads and Meta Ads campaigns calibrated for high-end targets, exclusive newsletters and refined remarketing strategies."
  },
  service_social: {
    it: "Social Media Curation",
    en: "Social Media Curation"
  },
  service_social_desc: {
    it: "Gestione artistica dei profili Instagram, Facebook e TikTok con contenuti che esaltano l'esclusività e l'eleganza del vostro brand.",
    en: "Artistic management of Instagram, Facebook and TikTok profiles with content that enhances the exclusivity and elegance of your brand."
  },
  service_photography: {
    it: "Fotografia & Video Production",
    en: "Photography & Video Production"
  },
  service_photography_desc: {
    it: "Servizi fotografici professionali, video emozionali e virtual tour 360° che catturano l'essenza e l'atmosfera unica della vostra struttura.",
    en: "Professional photography services, emotional videos and 360° virtual tours that capture the essence and unique atmosphere of your facility."
  },
  service_consulting: {
    it: "Consulenza Digitale Executive",
    en: "Executive Digital Consulting"
  },
  service_consulting_desc: {
    it: "Formazione e consulenza strategica per proprietari e manager, con focus sull'evoluzione digitale del settore hospitality di lusso.",
    en: "Training and strategic consulting for owners and managers, with focus on the digital evolution of the luxury hospitality sector."
  },
  services_cta_title: {
    it: "Ogni progetto è unico. Ogni soluzione è esclusiva.",
    en: "Every project is unique. Every solution is exclusive."
  },
  services_cta_text: {
    it: "I nostri servizi sono riservati a clienti selezionati che condividono la nostra visione di eccellenza. Contattaci per una consulenza personalizzata.",
    en: "Our services are reserved for selected clients who share our vision of excellence. Contact us for personalized consultation."
  },
  services_cta_button: {
    it: "Richiedi una consulenza esclusiva",
    en: "Request exclusive consultation"
  },

  // Portfolio Section
  portfolio_title: {
    it: "I Nostri Progetti",
    en: "Our Projects"
  },
  portfolio_subtitle: {
    it: "Esempi della nostra eccellenza creativa",
    en: "Examples of our creative excellence"
  },
  view_project: {
    it: "Visualizza Progetto",
    en: "View Project"
  },

  // Contact Section
  contact_title: {
    it: "Iniziamo una conversazione esclusiva",
    en: "Let's start an exclusive conversation"
  },
  contact_subtitle: {
    it: "Ogni grande progetto inizia con una conversazione. Condividi la tua visione e scopri come possiamo trasformarla in realtà digitale.",
    en: "Every great project starts with a conversation. Share your vision and discover how we can transform it into digital reality."
  },
  contact_consultation: {
    it: "Richiedi una consulenza",
    en: "Request consultation"
  },
  contact_firstname: {
    it: "Nome",
    en: "First Name"
  },
  contact_firstname_placeholder: {
    it: "Il tuo nome",
    en: "Your first name"
  },
  contact_lastname: {
    it: "Cognome",
    en: "Last Name"
  },
  contact_lastname_placeholder: {
    it: "Il tuo cognome",
    en: "Your last name"
  },
  contact_email: {
    it: "Email",
    en: "Email"
  },
  contact_email_placeholder: {
    it: "la-tua-email@esempio.com",
    en: "your-email@example.com"
  },
  contact_company: {
    it: "Hotel / Ristorante",
    en: "Hotel / Restaurant"
  },
  contact_company_placeholder: {
    it: "Nome della tua attività",
    en: "Name of your business"
  },
  contact_project: {
    it: "Parlaci del tuo progetto",
    en: "Tell us about your project"
  },
  contact_project_placeholder: {
    it: "Condividi la tua visione, i tuoi obiettivi e cosa ti ha colpito del nostro approccio...",
    en: "Share your vision, your goals and what impressed you about our approach..."
  },
  contact_send: {
    it: "Invia richiesta esclusiva",
    en: "Send exclusive request"
  },
  contact_info_title: {
    it: "Informazioni di contatto",
    en: "Contact Information"
  },
  contact_phone: {
    it: "Telefono",
    en: "Phone"
  },
  contact_offices: {
    it: "Uffici",
    en: "Offices"
  },
  contact_offices_text: {
    it: "Milano • Roma • Firenze",
    en: "Milan • Rome • Florence"
  },
  contact_appointment: {
    it: "Su appuntamento esclusivo",
    en: "By exclusive appointment"
  },
  contact_process_title: {
    it: "Il nostro processo",
    en: "Our Process"
  },
  contact_process_step1: {
    it: "Consulenza iniziale - Comprendiamo la tua visione e i tuoi obiettivi",
    en: "Initial consultation - We understand your vision and goals"
  },
  contact_process_step2: {
    it: "Strategia su misura - Sviluppiamo un piano esclusivo per il tuo brand",
    en: "Tailored strategy - We develop an exclusive plan for your brand"
  },
  contact_process_step3: {
    it: "Creazione artistica - Trasformiamo la strategia in esperienza digitale",
    en: "Artistic creation - We transform strategy into digital experience"
  },
  contact_process_step4: {
    it: "Supporto dedicato - Ti accompagniamo nel successo a lungo termine",
    en: "Dedicated support - We accompany you in long-term success"
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved ? saved === 'en' : true; // Default to English if no saved preference
  });

  const toggleLanguage = () => {
    const newLanguage = !isEnglish;
    setIsEnglish(newLanguage);
    localStorage.setItem('language', newLanguage ? 'en' : 'it');
  };

  const t = (key: string): string => {
    const lang = isEnglish ? 'en' : 'it';
    const translation = translations[key as keyof typeof translations];
    if (translation && typeof translation === 'object' && lang in translation) {
      return translation[lang as keyof typeof translation] as string;
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ isEnglish, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 