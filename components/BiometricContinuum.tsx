'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, ScanFace, Mic2, ShieldCheck } from 'lucide-react';
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
  features: { key: FeatureKey; title: string; description: string }[];
  tickerLabel: string;
  signalLabel: string;
  signalHint: string;
  signalValue: string;
  stats: { label: string; value: string; delta: string }[];
};

const copyMap: Record<Language, CopyShape> = {
  en: {
    badge: 'Biometric motion lab',
    title: 'Biometric canvases',
    highlight: 'engineered like motion art',
    description:
      'Barbod renders biometric trust as kinetic gradients and holographic rails where every document, face, and voice signal leaves a living trace.',
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
      { label: 'Doc -> Face handshake', value: '312 ms', delta: '-28% latency' },
      { label: 'Voice drift window', value: '18 ms', delta: '-6 ms vs baseline' },
      { label: 'Spoof detection', value: '99.45%', delta: '+0.4% accuracy' },
    ],
  },
  fa: {
    badge: 'لابراتوار حرکت بیومتریک',
    title: 'بوم‌های بیومتریک',
    highlight: 'با تکنیک موشن آرت',
    description:
      'باربد اعتماد بیومتریک را با گرادیان‌های زنده و ریل‌های هولوگرافیک نمایش می‌دهد؛ هر سیگنال سند، چهره و صدا ردپای فعال خود را دارد.',
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
      { label: 'دست دادن سند به چهره', value: '۳۱۲ میلی‌ثانیه', delta: '۲۸٪ کاهش تأخیر' },
      { label: 'پنجره رانش صدا', value: '۱۸ میلی‌ثانیه', delta: '۶ میلی‌ثانیه سریع‌تر' },
      { label: 'تشخیص جعل', value: '۹۹.۴۵٪', delta: '۰.۴٪ دقت بیشتر' },
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

export function BiometricContinuum() {
  const { language, dir } = useLanguage();
  const copy = copyMap[language] ?? copyMap.en;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,13,24,0)] via-[rgba(9,13,24,0.65)] to-[rgba(9,13,24,0.95)]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(14,165,233,0.15) 0%, transparent 40%)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 80% 0%, rgba(59,130,246,0.15) 0%, transparent 35%)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(105deg, rgba(14,165,233,0.15) 0%, transparent 45%, rgba(99,102,241,0.1) 65%, transparent 100%)' }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <motion.div
          className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full blur-[120px] bg-[radial-gradient(circle,_rgba(14,165,233,0.65),_transparent_60%)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-24 w-[420px] h-[420px] rounded-full blur-[130px] bg-[radial-gradient(circle,_rgba(56,189,248,0.4),_transparent_70%)]"
          animate={{ rotate: -360 }}
          transition={{ duration: 56, repeat: Infinity, ease: 'linear' }}
        />
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
                {copy.title}{' '}
                <span className="text-brand-gradient">
                  {copy.highlight}
                </span>
              </h2>
              <p className="text-lg text-[color:var(--text-secondary)]">{copy.description}</p>
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
                    <p className="text-xs text-emerald-400 mt-1">{stat.delta}</p>
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
