'use client';

import { useState } from 'react';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
  onNavigate: (section: string) => void;
}

export function Navbar({ theme, onThemeToggle, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'راه‌حل‌ها', href: 'solutions' },
    { label: 'مستندات', href: 'docs' },
    { label: 'قیمت‌گذاری', href: 'pricing' },
    { label: 'وضعیت', href: 'status' }
  ];

  const handleNavClick = (href: string) => {
    onNavigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-[color:var(--bg-base)] bg-opacity-80 border-b border-[color:var(--border-hairline)]"
    >
      <div className="relative">
        {/* Gradient accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gradient opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => handleNavClick('home')} className="flex-shrink-0">
              <Logo size="small" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search - desktop only */}
              <button className="hidden md:flex items-center gap-2 px-3 h-9 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors">
                <Search className="w-4 h-4" />
                <span className="text-sm">جستجو</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-xs bg-[color:var(--bg-dim)] rounded border border-[color:var(--border-hairline)]">
                  ⌘K
                </kbd>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={onThemeToggle}
                className="w-9 h-9 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] flex items-center justify-center hover:bg-[color:var(--surface-elevated)] transition-colors"
                aria-label="تغییر تم"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* CTA Button - desktop only */}
              <div className="hidden md:block">
                <Button size="sm">شروع کنید</Button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-9 h-9 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)]"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-right px-4 py-2 rounded-[var(--radius-md)] text-[color:var(--text-secondary)] hover:bg-[color:var(--surface-card)] hover:text-[color:var(--text-primary)] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button fullWidth size="md">شروع کنید</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}