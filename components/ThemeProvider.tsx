'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../lib/store/store';
import { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const language = useSelector((state: RootState) => state.language.language);

  useEffect(() => {
    document.documentElement.className = theme;
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
  }, [theme, language]);

  return <>{children}</>;
}
