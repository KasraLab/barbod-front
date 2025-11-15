'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, ScanFace, Mic2, ShieldCheck } from 'lucide-react';

import { TextShimmer } from '@/components/ui/text-shimmer';
import { useLanguage } from '@/lib/language-context';
import type { Language } from '@/lib/translations';

const featureIcons = {
  liveness: ScanFace,
  mesh: Fingerprint,
  voice: Mic2,
  trust: ShieldCheck,
} as const;

type FeatureKey = keyof typeof featureIcons;

type CopyShape = {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  heroShimmer?: string[];
  primaryCta?: string;
  secondaryCta?: string;
  features: { key: FeatureKey; title: string; description: string }[];
  tickerLabel: string;
  signalLabel: string;
  signalHint: string;
  signalValue: string;
  stats: { label: string; value: string; delta?: string }[];
};

const copyMap: Record<Language, CopyShape> = {
  en: {
    badge: 'Biometric motion lab',
    title: 'Biometric canvases',
    highlight: 'engineered like motion art',
    description:
      'Drop face recognition, document capture, voice biometrics, and risk automation into a single 3D-hybrid flow where each module instantly respects your theme, direction, and compliance guardrails.',
    heroShimmer: ['Build an immersive flow', 'For biometric journeys'],
    primaryCta: 'Launch sandbox',
    secondaryCta: 'View platform tour',
    features: [
      {
        key: 'liveness',
        title: 'Holographic liveness rail',
        description: 'Dual camera depth fields animate in opposing vectors so ISO selfie cues stay locked without jitter.',
      },
      {
        key: 'mesh',
        title: 'Identity mesh routing',
        description: 'Chain document, device, and sanction signals across a neon mesh that surfaces dependency pulses in under 40 ms.',
      },
      {
        key: 'voice',
        title: 'Voice print corridor',
        description: 'Wave morphing renders live MFCC comparisons across chromatic bands that feel spatial and tactile.',
      },
      {
        key: 'trust',
        title: 'Adaptive trust kernel',
        description: 'Shimmering guardrails show how policy packs tighten or relax biometric thresholds region by region.',
      },
    ],
    tickerLabel: 'Biometric layers in motion',
    signalLabel: 'Signal integrity',
    signalHint: 'real-time biometric thread health',
    signalValue: '99.982%',
    stats: [
      { label: 'Monthly API events', value: '120M+', delta: 'biometric traffic observed' },
      { label: 'Supported countries', value: '45+', delta: 'localized trust coverage' },
      { label: 'Ops & monitoring', value: '24/7', delta: 'follow-the-sun responders' },
    ],
  },
  fa: {
    badge: 'لابراتوار حرکت بیومتریک',
    title: 'بوم‌های بیومتریک',
    highlight: 'با تکنیک موشن آرت',
    description:
      'تشخیص چهره، ثبت اسناد، اثر صوتی و اتوماسیون ریسک را در یک تجربه سه‌بعدی قرار دهید؛ هر ماژول فوراً با تم، جهت RTL و خط‌مشی انطباق شما هماهنگ می‌شود.',
    heroShimmer: ['تجربه‌ای غوطه‌ور بسازید', 'برای سفرهای بیومتریک'],
    primaryCta: 'اجرای سندباکس',
    secondaryCta: 'مشاهده تور پلتفرم',
    features: [
      {
        key: 'liveness',
        title: 'ریل لایونِس هولوگرافیک',
        description: 'دو میدان عمق دوربین با جهت مخالف حرکت می‌کنند تا تمام شاخص‌های سلفی استاندارد بدون لرزش رصد شوند.',
      },
      {
        key: 'mesh',
        title: 'مسیر مش هویت',
        description: 'سیگنال‌های سند، دستگاه و تحریم در مش نئونی زنجیر می‌شوند و پالس‌های وابستگی را زیر ۴۰ میلی‌ثانیه آشکار می‌کنند.',
      },
      {
        key: 'voice',
        title: 'دالان voice print',
        description: 'موج‌های morph شده مقایسه لحظه‌ای MFCC را با باندهای رنگی زنده مانند یک صحنه Flowbase نمایش می‌دهند.',
      },
      {
        key: 'trust',
        title: 'هسته اعتماد تطبیقی',
        description: 'ریل‌های براق نشان می‌دهند policy pack ها چگونه آستانه‌های بیومتریک را برای هر منطقه همان لحظه تنظیم می‌کنند.',
      },
    ],
    tickerLabel: 'لایه‌های بیومتریک در حرکت',
    signalLabel: 'سلامت سیگنال',
    signalHint: 'پایش لحظه‌ای رشته بیومتریک',
    signalValue: '۹۹.۹۸۲٪',
    stats: [
      { label: 'رویداد API ماهانه', value: '۱۲۰میلیون+', delta: 'پوشش سفرهای حساس' },
      { label: 'کشورهای پشتیبانی‌شده', value: '۴۵+', delta: 'پروفایل‌سازی بومی' },
      { label: 'عملیات و مانیتورینگ', value: '۲۴/۷', delta: 'پاسخ‌گویی آنی' },
    ],
  },
};

const tickerItems = [
  'Face vector 09',
  'Document lattice',
  'Voice MFCC',
  'Passive liveness',
  'Device graph',
  'Risk engine',
  'Watchlist sync',
  'Intent score',
];

const circuitNodes = [
  { id: 'node-face', label: 'Face mesh', value: '22 ms', top: '14%', left: '16%', hue: 'rgba(14,165,233,0.85)', drift: 12 },
  { id: 'node-doc', label: 'Document AI', value: '38 ms', top: '60%', left: '10%', hue: 'rgba(99,102,241,0.9)', drift: 16 },
  { id: 'node-voice', label: 'Voice print', value: '18 ms', top: '28%', left: '58%', hue: 'rgba(6,182,212,0.85)', drift: 10 },
  { id: 'node-risk', label: 'Risk kernel', value: '99.8%', top: '68%', left: '68%', hue: 'rgba(59,130,246,0.85)', drift: 14 },
];

const signalPulses = [
  { id: 'pulse-1', top: '30%', left: '20%', delay: 0 },
  { id: 'pulse-2', top: '52%', left: '42%', delay: 0.6 },
  { id: 'pulse-3', top: '40%', left: '72%', delay: 1.2 },
];

const pixelFragments = [
  { id: 'px-1', top: '6%', left: '10%', size: '14px', float: 10, duration: 12, delay: 0 },
  { id: 'px-2', top: '20%', left: '32%', size: '10px', float: 6, duration: 14, delay: 0.3 },
  { id: 'px-3', top: '18%', left: '62%', size: '12px', float: 8, duration: 13, delay: 0.6 },
  { id: 'px-4', top: '38%', left: '8%', size: '9px', float: 7, duration: 11, delay: 0.2 },
  { id: 'px-5', top: '46%', left: '50%', size: '11px', float: 9, duration: 13, delay: 0.85 },
  { id: 'px-6', top: '66%', left: '24%', size: '8px', float: 5, duration: 12, delay: 0.95 },
  { id: 'px-7', top: '70%', left: '72%', size: '10px', float: 6, duration: 11, delay: 0.45 },
  { id: 'px-8', top: '82%', left: '36%', size: '9px', float: 7, duration: 14, delay: 0.55 },
  { id: 'px-9', top: '30%', left: '82%', size: '12px', float: 6, duration: 12, delay: 1.1 },
  { id: 'px-10', top: '56%', left: '88%', size: '8px', float: 7, duration: 10, delay: 0.7 },
  { id: 'px-11', top: '12%', left: '44%', size: '7px', float: 5, duration: 9, delay: 0.15 },
  { id: 'px-12', top: '78%', left: '58%', size: '9px', float: 6, duration: 12, delay: 1.25 },
];

const scanColumns = [
  { id: 'scan-1', left: '6%', top: '-20%', height: '150%', duration: 22, delay: 0 },
  { id: 'scan-2', left: '24%', top: '-25%', height: '160%', duration: 18, delay: 0.4 },
  { id: 'scan-3', left: '52%', top: '-18%', height: '150%', duration: 20, delay: 0.7 },
  { id: 'scan-4', left: '74%', top: '-22%', height: '155%', duration: 19, delay: 0.2 },
  { id: 'scan-5', left: '90%', top: '-24%', height: '160%', duration: 21, delay: 0.95 },
];

const heroRasterLines = [
  { id: 'raster-1', top: '6%', width: '70%', duration: 14, delay: 0 },
  { id: 'raster-2', top: '26%', width: '80%', duration: 18, delay: 0.45 },
  { id: 'raster-3', top: '47%', width: '85%', duration: 16, delay: 0.75 },
  { id: 'raster-4', top: '68%', width: '60%', duration: 20, delay: 0.2 },
];

const heroAccentPixels = [
  { id: 'hp-1', top: '14%', left: '5%', size: 12, duration: 10, delay: 0 },
  { id: 'hp-2', top: '8%', left: '56%', size: 10, duration: 11, delay: 0.4 },
  { id: 'hp-3', top: '34%', left: '18%', size: 9, duration: 9, delay: 0.65 },
  { id: 'hp-4', top: '52%', left: '64%', size: 11, duration: 12, delay: 0.25 },
  { id: 'hp-5', top: '70%', left: '30%', size: 8, duration: 13, delay: 0.55 },
  { id: 'hp-6', top: '80%', left: '58%', size: 10, duration: 11, delay: 0.85 },
];

export function BiometricContinuum() {
  const { language, dir } = useLanguage();
  const copy = copyMap[language] ?? copyMap.en;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'radial-gradient(circle at 30% 8%, rgba(14,165,233,0.22), transparent 55%)' }} />
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(circle at 78% 5%, rgba(99,102,241,0.18), transparent 45%)' }} />
        <div className="absolute inset-0 opacity-35" style={{ backgroundImage: 'linear-gradient(115deg, rgba(14,165,233,0.12) 0%, transparent 40%, rgba(99,102,241,0.12) 70%, transparent 100%)' }} />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 opacity-10 mix-blend-screen" style={{ backgroundImage: 'linear-gradient(135deg, rgba(59,130,246,0.12) 25%, transparent 25%, transparent 50%, rgba(14,165,233,0.12) 50%, rgba(14,165,233,0.12) 75%, transparent 75%, transparent)', backgroundSize: '120px 120px' }} />

        {scanColumns.map((column) => (
          <motion.span
            key={column.id}
            className="absolute w-px sm:w-0.5 bg-gradient-to-b from-transparent via-cyan-200/70 to-transparent blur-[0.5px]"
            style={{ left: column.left, top: column.top, height: column.height }}
            animate={{ y: ['-12%', '12%', '-12%'] }}
            transition={{ duration: column.duration, repeat: Infinity, ease: 'easeInOut', delay: column.delay }}
          />
        ))}

        {pixelFragments.map((fragment) => (
          <motion.span
            key={fragment.id}
            className="absolute rounded-sm bg-gradient-to-br from-[rgba(34,211,238,0.9)] via-[rgba(14,165,233,0.85)] to-transparent shadow-[0_0_30px_rgba(14,165,233,0.65)]"
            style={{ width: fragment.size, height: fragment.size, top: fragment.top, left: fragment.left }}
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -fragment.float, 0] }}
            transition={{ duration: fragment.duration, repeat: Infinity, ease: 'easeInOut', delay: fragment.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" dir={dir}>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--surface-card)]/70 backdrop-blur-md text-sm text-[color:var(--text-secondary)]"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[color:var(--brand-cyan)] to-[color:var(--brand-indigo)] animate-ping-slow" />
              <span>{copy.badge}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, delay: 0.1 }}>
              <div className="relative pb-2">
                <div className="absolute pointer-events-none select-none" aria-hidden="true" style={{ left: '-48px', right: '-48px', top: '-72px', height: '320px' }}>
                  <div className="absolute inset-0 blur-[120px] opacity-60 bg-gradient-to-r from-cyan-500/10 via-transparent to-indigo-500/10" />
                  {heroRasterLines.map((line) => (
                    <motion.span
                      key={line.id}
                      className="absolute left-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent"
                      style={{ top: line.top, width: line.width }}
                      animate={{ opacity: [0.1, 0.8, 0.1], scaleX: [0.8, 1, 0.8] }}
                      transition={{ duration: line.duration, repeat: Infinity, ease: 'easeInOut', delay: line.delay }}
                    />
                  ))}
                  {heroAccentPixels.map((pixel) => (
                    <motion.span
                      key={pixel.id}
                      className="absolute rounded-sm bg-gradient-to-br from-cyan-300 via-white/80 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.45)]"
                      style={{ top: pixel.top, left: pixel.left, width: `${pixel.size}px`, height: `${pixel.size}px` }}
                      animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -8, 0] }}
                      transition={{ duration: pixel.duration, repeat: Infinity, ease: 'easeInOut', delay: pixel.delay }}
                    />
                  ))}
                </div>
                {copy.heroShimmer?.length ? (
                  <div className="space-y-2 mb-4">
                    {copy.heroShimmer.map((line, index) => (
                      <TextShimmer
                        key={`${line}-${index}`}
                        as="h2"
                        duration={1.35 + index * 0.2}
                        spread={1.6}
                        className="block text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight [--base-color:rgba(248,250,252,0.88)] [--base-gradient-color:#0ea5e9] dark:[--base-color:rgba(248,250,252,0.97)] dark:[--base-gradient-color:#6366f1]"
                      >
                        {line}
                      </TextShimmer>
                    ))}
                  </div>
                ) : (
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
                    {copy.title}{' '}
                    <span className="text-brand-gradient">
                      {copy.highlight}
                    </span>
                  </h2>
                )}
                <p className="text-lg text-[color:var(--text-secondary)]">{copy.description}</p>
                {(copy.primaryCta || copy.secondaryCta) && (
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    {copy.primaryCta && (
                      <button
                        type="button"
                        className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[color:var(--brand-cyan)] to-[color:var(--brand-indigo)] px-6 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_rgba(14,165,233,0.35)] overflow-hidden group"
                      >
                        <motion.span
                          aria-hidden="true"
                          className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.45),_transparent_60%)] opacity-0 group-hover:opacity-60"
                          animate={{ scale: [0.8, 1.3, 0.8] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <span className="relative">{copy.primaryCta}</span>
                      </button>
                    )}
                    {copy.secondaryCta && (
                      <button
                        type="button"
                        className="relative inline-flex items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--surface-card)]/80 px-6 py-2.5 text-sm font-medium text-[color:var(--text-secondary)] overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-60" aria-hidden="true" />
                        <span className="relative">{copy.secondaryCta}</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {copy.features.map((feature, index) => {
                const Icon = featureIcons[feature.key];
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)]/80 p-5"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(130deg, rgba(14,165,233,0.12), rgba(99,102,241,0.12))' }} />
                    <div className="relative flex items-start gap-3">
                      <div className="flex-shrink-0 p-2 rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-subtle)] text-brand-gradient">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-base">{feature.title}</p>
                        <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[var(--radius-xl)] border border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)]/70 backdrop-blur-3xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(14,165,233,0.25), transparent 55%)' }} />
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 70% 70%, rgba(99,102,241,0.2), transparent 50%)' }} />
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.05) 0%, transparent 60%)' }} />
            </div>

            <div className="relative p-6 space-y-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-secondary)]">
                  {copy.signalLabel}
                </span>
                <div className="flex items-center gap-3">
                  <p className="text-3xl font-semibold text-brand-gradient">{copy.signalValue}</p>
                  <p className="text-sm text-[color:var(--text-secondary)]">{copy.signalHint}</p>
                </div>
              </div>

              <div className="relative h-72 rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] bg-[color:var(--bg-dim)]/40 overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 260" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="biometricWave" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(14,165,233,0.1)" />
                      <stop offset="45%" stopColor="rgba(99,102,241,0.35)" />
                      <stop offset="100%" stopColor="rgba(14,165,233,0.8)" />
                    </linearGradient>
                    <linearGradient id="biometricWaveSecondary" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(6,182,212,0.0)" />
                      <stop offset="50%" stopColor="rgba(6,182,212,0.35)" />
                      <stop offset="100%" stopColor="rgba(56,189,248,0.65)" />
                    </linearGradient>
                  </defs>

                  <motion.path
                    d="M0 180 C 120 120, 240 60, 360 110 C 480 160, 600 140, 720 180"
                    stroke="url(#biometricWave)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />
                  <motion.path
                    d="M0 140 C 150 90, 300 170, 450 120 C 600 70, 750 130, 900 90"
                    stroke="url(#biometricWaveSecondary)"
                    strokeWidth="1.5"
                    strokeDasharray="8 6"
                    fill="none"
                    animate={{ pathOffset: [0, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  />
                </svg>

                {signalPulses.map((pulse) => (
                  <Fragment key={pulse.id}>
                    <motion.div
                      className="absolute w-2.5 h-2.5 rounded-full bg-white"
                      style={{ top: pulse.top, left: pulse.left }}
                      animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.6, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: pulse.delay, ease: 'easeInOut' }}
                    />
                    <motion.div
                      className="absolute rounded-full border border-white/40"
                      style={{ top: `calc(${pulse.top} - 8px)`, left: `calc(${pulse.left} - 8px)`, width: 16, height: 16 }}
                      animate={{ opacity: [0.8, 0], scale: [0.6, 1.8] }}
                      transition={{ duration: 3, repeat: Infinity, delay: pulse.delay, ease: 'linear' }}
                    />
                  </Fragment>
                ))}

                {circuitNodes.map((node) => (
                  <motion.div
                    key={node.id}
                    className="absolute px-4 py-3 rounded-2xl border border-white/10 backdrop-blur-lg bg-[rgba(10,18,32,0.6)] shadow-lg shadow-black/30 w-max"
                    style={{ top: node.top, left: node.left }}
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 6 + node.drift * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div
                      className="absolute -inset-px rounded-2xl opacity-50 pointer-events-none"
                      style={{ background: `radial-gradient(circle, ${node.hue}, transparent 70%)` }}
                    />
                    <div className="relative flex flex-col gap-1">
                      <span className="text-xs uppercase tracking-wide text-[color:var(--text-secondary)]">{node.label}</span>
                      <span className="text-lg font-semibold">{node.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {copy.stats.map((stat) => (
                  <div key={stat.label} className="rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] bg-[color:var(--surface-card)]/60 p-4">
                    <p className="text-sm text-[color:var(--text-secondary)]">{stat.label}</p>
                    <p className="text-2xl font-semibold mt-2">{stat.value}</p>
                    {stat.delta && <p className="text-xs text-emerald-400 mt-1">{stat.delta}</p>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-[color:var(--text-secondary)]">
            <span>{copy.tickerLabel}</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[color:var(--brand-cyan)]"></span>
              GSAP kinetic marquee
            </span>
          </div>
          {[0, 1].map((row) => (
            <div key={`ticker-row-${row}`} className="overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)]/70">
              <motion.div
                className="flex min-w-[200%] gap-3 py-3"
                animate={{ x: row % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
                transition={{ duration: 18 + row * 4, repeat: Infinity, ease: 'linear' }}
              >
                {[...tickerItems, ...tickerItems].map((item, index) => (
                  <span
                    key={`${item}-${row}-${index}`}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--surface-card)]/70 text-xs sm:text-sm whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[color:var(--brand-cyan)] to-[color:var(--brand-indigo)]" />
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
