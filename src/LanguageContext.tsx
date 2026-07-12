import React, { createContext, useContext, useState, useEffect } from 'react';
import { enTranslations, arTranslations, servicesData_ar, fleetData_ar, testimonialsData_ar, mockTrackingDatabase_ar } from './translations';
import { servicesData, fleetData, testimonialsData, mockTrackingDatabase } from './data';
import { ServiceItem, FleetVehicle, Testimonial, TrackingData } from './types';

type Language = 'en' | 'ar';

interface LanguageContextProps {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: keyof typeof enTranslations) => string;
  isRtl: boolean;
  services: ServiceItem[];
  fleet: FleetVehicle[];
  testimonials: Testimonial[];
  trackingDb: Record<string, TrackingData>;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved === 'ar' || saved === 'en') return saved;
      // Default to English
      return 'en';
    }
    return 'en';
  });

  const isRtl = language === 'ar';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    }
  }, [language, isRtl]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = (key: keyof typeof enTranslations): string => {
    const dict = language === 'ar' ? arTranslations : enTranslations;
    return dict[key] || enTranslations[key] || '';
  };

  // Select appropriate collections based on language
  const services = language === 'ar' ? servicesData_ar : servicesData;
  const fleet = language === 'ar' ? fleetData_ar : fleetData;
  const testimonials = language === 'ar' ? testimonialsData_ar : testimonialsData;
  const trackingDb = language === 'ar' ? mockTrackingDatabase_ar : mockTrackingDatabase;

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
        isRtl,
        services,
        fleet,
        testimonials,
        trackingDb,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
