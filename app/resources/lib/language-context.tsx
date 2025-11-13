import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, t as translate } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fa'); // Default to Farsi

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('barbod-language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    const saved = localStorage.getItem('barbod-language') as Language | null;
    if (saved && (saved === 'fa' || saved === 'en')) {
      setLanguage(saved);
    } else {
      setLanguage('fa');
    }
  }, []);

  const t = (key: string) => translate(key, language);
  const dir = language === 'fa' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
