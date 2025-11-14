'use client';

import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './store/store';
import { setLanguage as setLanguageAction } from './store/languageSlice';
import {
  DEFAULT_LANGUAGE,
  RTL_LANGUAGES,
  translations,
  type Language,
  type TranslationKey,
} from './translations';

const STORAGE_KEY = 'barbod-language';

interface UseLanguageResult {
  language: Language;
  dir: 'rtl' | 'ltr';
  t: (key: TranslationKey) => string;
  setLanguage: (language: Language) => void;
}

export function useLanguage(): UseLanguageResult {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && stored !== language) {
      dispatch(setLanguageAction(stored));
    }
  }, [dispatch]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = useCallback(
    (nextLanguage: Language) => {
      dispatch(setLanguageAction(nextLanguage));
    },
    [dispatch],
  );

  const dir = useMemo<'rtl' | 'ltr'>(
    () => (RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr'),
    [language],
  );

  const t = useCallback(
    (key: TranslationKey) => {
      const dictionary = translations[language] ?? translations[DEFAULT_LANGUAGE];
      return dictionary[key] ?? translations.en[key] ?? key;
    },
    [language],
  );

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const htmlElement = document.documentElement;
    htmlElement.lang = language;
    htmlElement.dir = dir;
    const body = document.body;
    if (body) {
      body.setAttribute('dir', dir);
      body.setAttribute('data-language', language);
    }
  }, [language, dir]);

  return {
    language,
    dir,
    t,
    setLanguage,
  };
}
