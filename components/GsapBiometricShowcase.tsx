'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/lib/language-context';
import type { Language } from '@/lib/translations';
import { Button } from './Button';

let gsapRegistered = false;
if (typeof window !== 'undefined' && !gsapRegistered) {
  gsap.registerPlugin(ScrollTrigger);
  gsapRegistered = true;
}

type ShowcaseCopy = {
  badge: string;
  title: string;
  description: string;
  cta: string;
  secondary: string;
  stats: { label: string; value: string }[];
};

const copyMap: Record<Language, ShowcaseCopy> = {
  en: {
    badge: 'GSAP kinetic layer',
    title: 'Flow orchestration tuned for biometrics',
    description:
      'A Flowbase-inspired stack of glass cards illustrates how GSAP timelines choreograph document, selfie, and voice events so the entire landing stays alive without overloading the DOM.',
    cta: 'Preview orchestrations',
    secondary: 'Explore docs',
    stats: [
      { label: 'Pipeline sync window', value: '120 ms' },
      { label: 'Concurrent checks', value: '48 flows' },
      { label: 'Policy variants', value: '12 regions' },
    ],
  },
  fa: {
    badge: 'لایه حرکتی GSAP',
    title: 'ارکستراسیون جریان ویژه بیومتریک',
    description:
      'استک شیشه‌ای الهام‌گرفته از Flowbase نشان می‌دهد چگونه تایم‌لاین‌های GSAP رویدادهای سند، سلفی و صدا را هماهنگ می‌کنند تا لندینگ پویا بماند و به DOM فشار نیاورد.',
    cta: 'پیش‌نمایش ارکستراسیون',
    secondary: 'مشاهده مستندات',
    stats: [
      { label: 'پنجره همگام‌سازی پایپ‌لاین', value: '۱۲۰ میلی‌ثانیه' },
      { label: 'چک همزمان', value: '۴۸ فلو' },
      { label: 'تنوع پالیسی', value: '۱۲ منطقه' },
    ],
  },
};

const flowTiles = [
  {
    title: 'Document intake',
    detail: 'MRZ scan, hologram parity, quality gate',
    value: '0.38s',
    accent: 'rgba(56,189,248,0.35)',
  },
  {
    title: 'Face match',
    detail: 'Depth map, pose score, passive liveness',
    value: '0.22s',
    accent: 'rgba(129,140,248,0.35)',
  },
  {
    title: 'Voice intent',
    detail: 'MFCC drift, wake phrase, anomaly ratio',
    value: '0.18s',
    accent: 'rgba(14,165,233,0.35)',
  },
];

const orbitPills = [
  { label: 'AML', value: 'pass', hue: 'rgba(16,185,129,0.65)' },
  { label: 'Device', value: 'clean', hue: 'rgba(56,189,248,0.5)' },
  { label: 'Sanctions', value: 'clear', hue: 'rgba(249,115,22,0.45)' },
];

export function GsapBiometricShowcase() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { language, dir } = useLanguage();
  const copy = copyMap[language] ?? copyMap.en;

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-gsap-card]');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        },
      );

      const pills = gsap.utils.toArray<HTMLElement>('[data-gsap-orb]');
      pills.forEach((pill, index) => {
        gsap.to(pill, {
          y: index % 2 === 0 ? 12 : -12,
          duration: 3.8 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      gsap.to('[data-gsap-glow]', {
        rotate: 360,
        duration: 90,
        ease: 'linear',
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} dir={dir} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_60%)]" data-gsap-glow />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.12),_transparent_55%)] blur-[80px]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.08) 0%, transparent 55%)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--surface-card)]/70 text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--brand-cyan)] animate-pulse-slow" />
              {copy.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">{copy.title}</h2>
            <p className="text-[color:var(--text-secondary)] text-lg">{copy.description}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {copy.stats.map((stat) => (
                <div key={stat.label} className="rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] bg-[color:var(--surface-card)]/70 p-4">
                  <p className="text-xs uppercase tracking-wide text-[color:var(--text-secondary)]">{stat.label}</p>
                  <p className="text-2xl font-semibold mt-2">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-lg shadow-cyan-500/20">
                {copy.cta}
              </Button>
              <Button size="lg" variant="secondary">
                {copy.secondary}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-10 top-6 h-48 rounded-full blur-[120px] bg-[rgba(14,165,233,0.18)]" />
            <div className="relative rounded-[36px] border border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)]/80 backdrop-blur-2xl p-6 space-y-6 shadow-[0_40px_120px_rgba(2,6,23,0.55)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[color:var(--text-secondary)]">Live orchestration stack</p>
                  <p className="text-2xl font-semibold">Biometric continuum</p>
                </div>
                <div className="flex gap-2">
                  {orbitPills.map((pill) => (
                    <div
                      key={pill.label}
                      data-gsap-orb
                      className="px-3 py-1 rounded-full border border-white/10 text-xs backdrop-blur-lg"
                      style={{ background: `${pill.hue}`, color: '#0A1220' }}
                    >
                      <span className="font-semibold">{pill.label}</span> · {pill.value}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {flowTiles.map((tile) => (
                  <div
                    key={tile.title}
                    data-gsap-card
                    className="relative overflow-hidden rounded-[24px] border border-[color:var(--border-hairline)] bg-[color:var(--surface-card)]/70 p-5"
                  >
                    <div className="absolute inset-0 pointer-events-none opacity-60" style={{ background: `radial-gradient(circle at 20% 20%, ${tile.accent}, transparent 60%)` }} />
                    <div className="relative flex items-center justify-between gap-6">
                      <div>
                        <p className="text-sm text-[color:var(--text-secondary)]">{tile.title}</p>
                        <p className="text-lg font-semibold mt-1">{tile.detail}</p>
                      </div>
                      <div className="text-3xl font-semibold text-brand-gradient">{tile.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[28px] border border-[color:var(--border-hairline)] bg-[color:var(--bg-dim)]/70 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[color:var(--text-secondary)]">GSAP timeline health</p>
                    <p className="text-2xl font-semibold">Stable · 144 fps budget</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm text-[color:var(--text-secondary)]">Sync OK</span>
                  </div>
                </div>
                <div className="relative h-20 rounded-2xl bg-[color:var(--surface-card)] overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '16px 100%' }} />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 80">
                    <defs>
                      <linearGradient id="gsapWave" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(14,165,233,0.1)" />
                        <stop offset="50%" stopColor="rgba(129,140,248,0.8)" />
                        <stop offset="100%" stopColor="rgba(56,189,248,0.5)" />
                      </linearGradient>
                    </defs>
                    <polyline
                      points="0,60 40,40 80,55 120,20 160,50 200,35 240,60 280,30 320,55 360,25 400,45"
                      fill="none"
                      stroke="url(#gsapWave)"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
