'use client';

import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../lib/language-context';
import type { Language } from '../lib/translations';

type FooterSection = {
  id: string;
  title: Record<Language, string>;
  links: { href: string; label: Record<Language, string> }[];
};

const footerSections: FooterSection[] = [
  {
    id: 'product',
    title: { en: 'Product', fa: 'محصول' },
    links: [
      { href: '#features', label: { en: 'Features', fa: 'ویژگی‌ها' } },
      { href: '#pricing', label: { en: 'Pricing', fa: 'قیمت‌گذاری' } },
      { href: '#docs', label: { en: 'Documentation', fa: 'مستندات' } },
      { href: '#status', label: { en: 'Status', fa: 'وضعیت سامانه' } },
    ],
  },
  {
    id: 'company',
    title: { en: 'Company', fa: 'شرکت' },
    links: [
      { href: '#about', label: { en: 'About', fa: 'درباره ما' } },
      { href: '#blog', label: { en: 'Blog', fa: 'بلاگ' } },
      { href: '#careers', label: { en: 'Careers', fa: 'فرصت‌های شغلی' } },
      { href: '#contact', label: { en: 'Contact', fa: 'تماس با ما' } },
    ],
  },
  {
    id: 'resources',
    title: { en: 'Resources', fa: 'منابع' },
    links: [
      { href: '#dev-guide', label: { en: 'Developer guide', fa: 'راهنمای توسعه‌دهنده' } },
      { href: '#api', label: { en: 'API reference', fa: 'مستند مرجع API' } },
      { href: '#security', label: { en: 'Security center', fa: 'مرکز امنیت' } },
      { href: '#compliance', label: { en: 'Compliance', fa: 'انطباق' } },
    ],
  },
  {
    id: 'legal',
    title: { en: 'Legal', fa: 'مسائل حقوقی' },
    links: [
      { href: '#terms', label: { en: 'Terms of service', fa: 'شرایط استفاده' } },
      { href: '#privacy', label: { en: 'Privacy', fa: 'حریم خصوصی' } },
      { href: '#cookies', label: { en: 'Cookies', fa: 'کوکی‌ها' } },
      { href: '#licenses', label: { en: 'Licenses', fa: 'مجوزها' } },
    ],
  },
];

const socialLinks = [
  { href: '#', icon: Github, label: 'Github' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Mail, label: 'Email' },
];

const footerCopy: Record<Language, { description: string; bottomNote: string; languageToggle: string; uptime: string }> =
  {
    en: {
      description:
        'Barbod delivers secure, localized biometric verification for regulated industries. Built for lightning-fast onboarding, real-time fraud prevention, and global compliance.',
      bottomNote: '© 2024 Barbod. All rights reserved.',
      languageToggle: 'Switch language',
      uptime: 'Live status: 99.99% uptime',
    },
    fa: {
      description:
        'باربود احراز هویت بیومتریک بومی‌سازی‌شده را برای صنایع تحت نظارت با امنیت و سرعت بالا ارائه می‌کند.',
      bottomNote: '© ۱۴۰۴ باربود. تمامی حقوق محفوظ است.',
      languageToggle: 'تغییر زبان',
      uptime: 'وضعیت زنده: ۹۹٫۹۹٪ آپ‌تایم',
    },
  };

export function Footer() {
  const { language, dir } = useLanguage();
  const copy = footerCopy[language];

  return (
    <footer className="border-t border-[color:var(--border-hairline)] bg-[color:var(--bg-dim)]" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="mb-4">
              <Logo size="small" />
            </div>
            <p className="text-sm text-[color:var(--text-secondary)] mb-6 max-w-xs">{copy.description}</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group relative w-10 h-10 rounded-full border border-[color:var(--border-subtle)]/60 bg-[color:var(--surface-card)]/40 backdrop-blur-md flex items-center justify-center overflow-hidden transition-all duration-200 hover:border-[color:var(--outline-focus)] hover:shadow-[0_8px_20px_rgba(8,15,40,0.35)]"
                  aria-label={social.label}
                >
                  <span
                    className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-cyan)]/10 via-transparent to-[color:var(--brand-indigo)]/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  <social.icon className="relative w-4 h-4 text-[color:var(--text-secondary)] group-hover:text-[color:var(--text-primary)] transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.id}>
              <h4 className="mb-4">{section.title[language]}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
                    >
                      {link.label[language]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[color:var(--border-hairline)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[color:var(--text-secondary)]">{copy.bottomNote}</p>
            <div className="flex items-center gap-6">
              <button className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors">
                {copy.languageToggle}
              </button>
              <div className="w-px h-4 bg-[color:var(--border-hairline)]" />
            <div className="flex items-center gap-2">
              <div className="relative w-3 h-3">
                <span className="absolute inset-0 rounded-full bg-[color:var(--success)] opacity-60 animate-ping-slow" />
                <span className="relative block w-full h-full rounded-full bg-[color:var(--success)] shadow-[0_0_12px_rgba(16,185,129,0.45)]" />
              </div>
              <span className="text-sm text-[color:var(--text-secondary)]">{copy.uptime}</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
