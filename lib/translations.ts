'use client';

export type Language = 'fa' | 'en';

type TranslationRecord = {
  'features.title': string;
  'features.subtitle': string;
  'trust.accuracy': string;
  'trust.response': string;
  'trust.uptime': string;
  'trust.companies': string;
};

export type TranslationKey = keyof TranslationRecord;

export const DEFAULT_LANGUAGE: Language = 'fa';
export const RTL_LANGUAGES: Language[] = ['fa'];

export const translations: Record<Language, TranslationRecord> = {
  en: {
    'features.title': 'Complete biometric coverage for every onboarding flow',
    'features.subtitle':
      'Combine face, liveness, document, voice, and risk controls to design enterprise-grade verification journeys that more teams can ship.',
    'trust.accuracy': 'Matching accuracy',
    'trust.response': 'Average response time',
    'trust.uptime': 'Platform uptime',
    'trust.companies': 'Active enterprises',
  },
  fa: {
    'features.title':
      '\\u067e\\u0648\\u0634\\u0634 \\u06a9\\u0627\\u0645\\u0644 \\u0628\\u0627\\u06cc\\u0648\\u0645\\u062a\\u0631\\u06cc\\u06a9 \\u0628\\u0631\\u0627\\u06cc \\u062a\\u0645\\u0627\\u0645 \\u0633\\u0641\\u0631\\u0647\\u0627\\u06cc \\u0627\\u062d\\u0631\\u0627\\u0632 \\u0647\\u0648\\u06cc\\u062a',
    'features.subtitle':
      '\\u062a\\u0634\\u062e\\u06cc\\u0635 \\u0686\\u0647\\u0631\\u0647\\u060c \\u0644\\u0627\\u06cc\\u0648\\u0646\\u0650\\u0633\\u060c \\u0633\\u0646\\u062f\\u060c \\u0635\\u062f\\u0627 \\u0648 \\u06a9\\u0646\\u062a\\u0631\\u0644\\u200c\\u0647\\u0627\\u06cc \\u0631\\u06cc\\u0633\\u06a9 \\u0631\\u0627 \\u06a9\\u0646\\u0627\\u0631 \\u0647\\u0645 \\u0628\\u06af\\u0630\\u0627\\u0631\\u06cc\\u062f \\u062a\\u0627 \\u062a\\u062c\\u0631\\u0628\\u0647\\u200c\\u0647\\u0627\\u06cc \\u0648\\u0631\\u0648\\u062f \\u0633\\u0627\\u0632\\u0645\\u0627\\u0646\\u06cc \\u062f\\u0642\\u06cc\\u0642 \\u0648 \\u0645\\u0642\\u06cc\\u0627\\u0633\\u200c\\u067e\\u0630\\u06cc\\u0631 \\u0628\\u0633\\u0627\\u0632\\u06cc\\u062f.',
    'trust.accuracy': '\\u062f\\u0642\\u062a \\u062a\\u0637\\u0628\\u06cc\\u0642',
    'trust.response': '\\u0645\\u06cc\\u0627\\u0646\\u06af\\u06cc\\u0646 \\u0632\\u0645\\u0627\\u0646 \\u067e\\u0627\\u0633\\u062e\\u06af\\u0648\\u06cc\\u06cc',
    'trust.uptime': '\\u062f\\u0633\\u062a\\u0631\\u0633\\u200c\\u067e\\u0630\\u06cc\\u0631\\u06cc \\u0633\\u0627\\u0645\\u0627\\u0646\\u0647',
    'trust.companies': '\\u0633\\u0627\\u0632\\u0645\\u0627\\u0646 \\u0641\\u0639\\u0627\\u0644',
  },
};

