'use client';

import { useLanguage } from '../lib/language-context';

export function Logo({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  const { language } = useLanguage();
  const sizes = {
    small: { container: 'w-7 h-7', text: 'text-base' },
    default: { container: 'w-9 h-9', text: 'text-xl' },
    large: { container: 'w-12 h-12', text: 'text-2xl' },
  };

  const { container, text } = sizes[size];
  const wordmark = language === 'en' ? 'Barbod' : 'باربد';

  return (
    <div className="flex items-center gap-2.5">
      <div className={`${container} relative rounded-[var(--radius-md)] bg-brand-gradient flex items-center justify-center shadow-[var(--shadow-md)] angular-cut overflow-hidden`}>
        <span className="absolute inset-0 bg-white/15 mix-blend-screen" aria-hidden="true" />
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-[60%] h-[60%]">
          <path d="M12 2L4 6V11C4 16 7 20.5 12 22C17 20.5 20 16 20 11V6L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M12 9C13.1 9 14 9.9 14 11C14 12.1 13.1 13 12 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />
          <path d="M10 11C10 9.3 11.3 8 13 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`${text} font-semibold tracking-tight text-brand-gradient`}>{wordmark}</span>
        <span className="text-[10px] uppercase tracking-[0.35em] text-[color:var(--text-tertiary)]">Barbod ID</span>
      </div>
    </div>
  );
}
