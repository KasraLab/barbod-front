'use client';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../lib/store/store';
import { setTheme } from '../lib/store/themeSlice';

const THEME_STORAGE_KEY = 'barbod-theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const language = useSelector((state: RootState) => state.language.language);
  const hasHydratedTheme = useRef(false);
  const hasPersistedTheme = useRef(false);

  // Hydrate theme from localStorage or prefers-color-scheme on first load
  useEffect(() => {
    if (typeof window === 'undefined' || hasHydratedTheme.current) return;
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as 'light' | 'dark' | null;
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
    } else {
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      dispatch(setTheme(prefersDark ? 'dark' : 'light'));
    }

    hasHydratedTheme.current = true;
  }, [dispatch]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.lang = language;
    root.dir = language === 'fa' ? 'rtl' : 'ltr';

    if (typeof window !== 'undefined') {
      if (hasPersistedTheme.current) {
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
      } else {
        hasPersistedTheme.current = true;
      }
    }
  }, [theme, language]);

  return <>{children}</>;
}
