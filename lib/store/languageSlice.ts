import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Language } from '../translations';

interface LanguageState {
  language: Language;
}

const initialState: LanguageState = {
  language: 'fa',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
