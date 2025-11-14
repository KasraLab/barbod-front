'use client';

import { Check, Globe } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useLanguage } from '../lib/language-context';
import type { Language } from '../lib/translations';

const languageOptions: Array<{ value: Language; label: string; helper: string }> = [
  { value: 'fa', label: '\u0641\u0627\u0631\u0633\u06cc', helper: 'Persian' },
  { value: 'en', label: 'English', helper: 'International' },
];

export function LanguageSwitcher() {
  const { language, dir, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Change language">
          <Globe className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52" sideOffset={8}>
        <DropdownMenuLabel className={dir === 'rtl' ? 'text-right' : 'text-left'}>
          {'\u0632\u0628\u0627\u0646'} / Language
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setLanguage(option.value)}
            className="flex items-center justify-between"
          >
            <div className="flex flex-col">
              <span className="text-sm">{option.label}</span>
              <span className="text-xs text-muted-foreground">{option.helper}</span>
            </div>
            {language === option.value && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

