import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import languageReducer from './languageSlice';
import userReducer from './userSlice';
import biometricReducer from './biometricSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    user: userReducer,
    biometric: biometricReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
