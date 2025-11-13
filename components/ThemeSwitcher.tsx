'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../lib/store/store';
import { setTheme } from '../lib/store/themeSlice';

export function ThemeSwitcher() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'dark' ? 'light' : 'dark'} mode
    </button>
  );
}
