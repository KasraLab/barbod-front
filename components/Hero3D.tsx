'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Fingerprint, ShieldCheck, ScanFace, Mic2 } from 'lucide-react';
import { useSelector } from 'react-redux';

import { Button } from './Button';
import { useLanguage } from '../lib/language-context';
import type { Language } from '../lib/translations';
import type { RootState } from '../lib/store/store';

type Hero3DCopy = {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primary: string;
  secondary: string;
  stats: { value: string; label: string }[];
};

const hero3dCopy: Record<Language, Hero3DCopy> = {
  en: {
    badge: 'Real-time orchestration',
    title: 'Bring immersive',
    highlight: 'biometric journeys to life',
    description:
      'Stack face match, document capture, voice print, and risk automations inside a single 3D experience. Every module responds to your theme, RTL direction, and compliance profile instantly.',
    primary: 'Launch sandbox',
    secondary: 'See platform tour',
    stats: [
      { value: '120M+', label: 'Monthly API events' },
      { value: '45+', label: 'Countries supported' },
      { value: '24/7', label: 'Ops & monitoring' },
    ],
  },
  fa: {
    badge: 'هماهنگی لحظه‌ای',
    title: 'تجربه‌ای غوطه‌ور بسازید',
    highlight: 'برای سفرهای بیومتریک',
    description:
      'تشخیص چهره، ثبت اسناد، اثر صوتی و اتوماسیون ریسک را در یک تجربه سه‌بعدی قرار دهید. هر ماژول فوراً با تم، جهت RTL و خط‌مشی انطباق شما هماهنگ می‌شود.',
    primary: 'اجرای سندباکس',
    secondary: 'مشاهده تور پلتفرم',
    stats: [
      { value: '۱۲۰میلیون+', label: 'رویداد API ماهانه' },
      { value: '۴۵+', label: 'کشورهای پشتیبانی‌شده' },
      { value: '۲۴/۷', label: 'عملیات و مانیتورینگ' },
    ],
  },
};

const heroScanBeams = [
  { id: 'scan-1', left: '6%', width: 2, duration: 9, delay: 0 },
  { id: 'scan-2', left: '18%', width: 3, duration: 8, delay: 0.8 },
  { id: 'scan-3', left: '34%', width: 2, duration: 10, delay: 0.4 },
  { id: 'scan-4', left: '52%', width: 2, duration: 9, delay: 1.2 },
  { id: 'scan-5', left: '68%', width: 3, duration: 8.5, delay: 0.2 },
  { id: 'scan-6', left: '82%', width: 2, duration: 11, delay: 0.9 },
  { id: 'scan-7', left: '92%', width: 2, duration: 9.5, delay: 0.5 },
];

const heroPulseLines = [
  { id: 'pulse-1', top: '18%', duration: 12, delay: 0 },
  { id: 'pulse-2', top: '36%', duration: 13, delay: 0.6 },
  { id: 'pulse-3', top: '54%', duration: 11, delay: 1 },
  { id: 'pulse-4', top: '72%', duration: 14, delay: 0.3 },
];

const heroLightPanels = [
  { id: 'panel-1', left: '15%', width: '18%', delay: 0 },
  { id: 'panel-2', left: '45%', width: '12%', delay: 0.4 },
  { id: 'panel-3', left: '70%', width: '16%', delay: 0.7 },
];

const heroBiometricNodes = [
  {
    id: 'bio-1',
    top: '16%',
    left: '22%',
    size: 220,
    duration: 20,
    delay: 0,
    lightColor: 'rgba(14,165,233,0.55)',
    darkColor: 'rgba(14,165,233,0.4)',
    glow: 'rgba(14,165,233,0.55)',
  },
  {
    id: 'bio-2',
    top: '40%',
    left: '12%',
    size: 160,
    duration: 18,
    delay: 0.6,
    lightColor: 'rgba(59,130,246,0.5)',
    darkColor: 'rgba(59,130,246,0.38)',
    glow: 'rgba(59,130,246,0.5)',
  },
  {
    id: 'bio-3',
    top: '30%',
    left: '70%',
    size: 200,
    duration: 22,
    delay: 1,
    lightColor: 'rgba(249,115,22,0.45)',
    darkColor: 'rgba(251,146,60,0.35)',
    glow: 'rgba(249,115,22,0.5)',
  },
  {
    id: 'bio-4',
    top: '65%',
    left: '60%',
    size: 180,
    duration: 19,
    delay: 0.3,
    lightColor: 'rgba(147,51,234,0.45)',
    darkColor: 'rgba(168,85,247,0.35)',
    glow: 'rgba(147,51,234,0.55)',
  },
  {
    id: 'bio-5',
    top: '74%',
    left: '32%',
    size: 150,
    duration: 21,
    delay: 0.9,
    lightColor: 'rgba(16,185,129,0.5)',
    darkColor: 'rgba(34,197,94,0.4)',
    glow: 'rgba(16,185,129,0.55)',
  },
];

const heroBiometricIcons = [
  {
    id: 'icon-1',
    top: '20%',
    left: '65%',
    icon: ScanFace,
    delay: 0.2,
    clockwise: true,
    surfaceLight: 'linear-gradient(145deg, rgba(255,255,255,0.98), rgba(191,227,255,0.75))',
    surfaceDark: 'linear-gradient(145deg, rgba(5,11,26,0.9), rgba(14,116,144,0.55))',
    iconLight: 'rgba(14,116,144,0.95)',
    iconDark: 'rgba(224,242,254,0.95)',
    glow: 'rgba(14,165,233,0.75)',
  },
  {
    id: 'icon-2',
    top: '55%',
    left: '18%',
    icon: Fingerprint,
    delay: 0.6,
    clockwise: false,
    surfaceLight: 'linear-gradient(145deg, rgba(255,255,255,0.98), rgba(221,214,254,0.78))',
    surfaceDark: 'linear-gradient(145deg, rgba(6,10,24,0.9), rgba(99,102,241,0.55))',
    iconLight: 'rgba(91,33,182,0.92)',
    iconDark: 'rgba(237,233,254,0.95)',
    glow: 'rgba(139,92,246,0.7)',
  },
  {
    id: 'icon-3',
    top: '35%',
    left: '12%',
    icon: Mic2,
    delay: 1.1,
    clockwise: true,
    surfaceLight: 'linear-gradient(145deg, rgba(255,255,255,0.97), rgba(209,250,229,0.78))',
    surfaceDark: 'linear-gradient(145deg, rgba(4,9,20,0.9), rgba(16,185,129,0.5))',
    iconLight: 'rgba(21,128,61,0.92)',
    iconDark: 'rgba(209,250,229,0.95)',
    glow: 'rgba(16,185,129,0.7)',
  },
  {
    id: 'icon-4',
    top: '32%',
    left: '70%',
    icon: ShieldCheck,
    delay: 0.4,
    clockwise: false,
    surfaceLight: 'linear-gradient(145deg, rgba(255,255,255,0.98), rgba(254,226,178,0.8))',
    surfaceDark: 'linear-gradient(145deg, rgba(10,7,16,0.9), rgba(251,146,60,0.55))',
    iconLight: 'rgba(194,65,12,0.9)',
    iconDark: 'rgba(255,247,237,0.96)',
    glow: 'rgba(251,146,60,0.65)',
  },
];

export function Hero3D() {
  const { language, dir } = useLanguage();
  const copy = hero3dCopy[language];
  const theme = useSelector((state: RootState) => state.theme.theme);
  const isLight = theme === 'light';
  const scanGradient = isLight
    ? 'linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,0.85) 35%, rgba(14,116,144,0.45) 70%, rgba(14,116,144,0))'
    : 'linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,0.6) 35%, rgba(59,130,246,0.6) 70%, rgba(59,130,246,0))';
  const pulseGradient = isLight
    ? 'linear-gradient(90deg, transparent, rgba(14,116,144,0.3), rgba(3,105,161,0.65), rgba(14,116,144,0.3), transparent)'
    : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), rgba(125,211,252,0.8), rgba(255,255,255,0.5), transparent)';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-[color:var(--bg-base)] transition-colors" />
      {isLight ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/60 to-transparent" />
          <div className="absolute inset-0 opacity-12" style={{ backgroundImage: 'linear-gradient(120deg, rgba(148,163,184,0.3), transparent)' }} />
          <div
            className="absolute inset-0 opacity-12"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.15) 1px, transparent 1px)',
              backgroundSize: '70px 70px',
            }}
          />
          <div className="absolute inset-0 pointer-events-none">
            {heroLightPanels.map((panel) => (
              <motion.span
                key={panel.id}
                className="absolute top-0 bottom-0 bg-gradient-to-b from-white/55 via-white/20 to-transparent rounded-[80px]"
                style={{ left: panel.left, width: panel.width, mixBlendMode: 'screen' }}
                animate={{ opacity: [0.12, 0.45, 0.2] }}
                transition={{ duration: 7, delay: panel.delay, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#030b1d] to-[#01020a]" />
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'radial-gradient(circle at 22% 18%, rgba(56,189,248,0.35), transparent 55%)' }} />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 78% 30%, rgba(99,102,241,0.25), transparent 60%)' }} />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(59,130,246,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.12) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              transform: 'perspective(1000px) rotateX(60deg)',
              transformOrigin: 'center top',
            }}
          />
        </>
      )}
      <div className="absolute inset-0 pointer-events-none" style={{ direction: 'ltr' }}>
        {heroBiometricNodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute rounded-full blur-3xl"
            style={{
              top: node.top,
              left: node.left,
              width: node.size,
              height: node.size,
              background: isLight ? node.lightColor : node.darkColor,
              boxShadow: `0 0 120px ${node.glow}`,
              mixBlendMode: isLight ? 'normal' : 'screen',
            }}
            animate={{
              rotate: [0, 45, -30, 0],
              opacity: isLight ? [0.45, 0.85, 0.6, 0.45] : [0.5, 0.95, 0.7, 0.5],
            }}
            transition={{ duration: node.duration, delay: node.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ direction: 'ltr' }}>
        {heroBiometricIcons.map((item) => {
          const Icon = item.icon;
          return (
            <motion.span
              key={item.id}
              className="absolute rounded-2xl border flex items-center justify-center pointer-events-none shadow-xl relative"
              style={{
                top: item.top,
                left: item.left,
                width: isLight ? '74px' : '86px',
                height: isLight ? '74px' : '86px',
                background: isLight ? item.surfaceLight : item.surfaceDark,
                borderColor: isLight ? 'rgba(148,163,184,0.45)' : 'rgba(255,255,255,0.2)',
                color: isLight ? item.iconLight : item.iconDark,
                mixBlendMode: isLight ? 'normal' : 'screen',
                boxShadow: `${isLight ? '0 24px 48px rgba(15,23,42,0.3)' : '0 28px 65px rgba(3,7,18,0.75)'}, 0 0 60px ${item.glow}`,
                backdropFilter: 'blur(20px)',
              }}
              animate={{
                rotate: item.clockwise ? [0, 14, -12, 0] : [0, -14, 12, 0],
                opacity: isLight ? [0.7, 0.98, 0.8, 0.7] : [0.65, 0.95, 0.75, 0.65],
                y: item.clockwise ? [0, -22, 12, 0] : [0, -16, 18, 0],
                x: item.clockwise ? [0, 12, -10, 0] : [0, -12, 10, 0],
              }}
              transition={{ duration: 18, delay: item.delay, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-[-20px] rounded-3xl opacity-70"
                style={{ background: `radial-gradient(circle, ${item.glow}, transparent 72%)`, filter: 'blur(24px)' }}
              />
              <Icon className="relative w-8 h-8" style={{ strokeWidth: 1.25 }} />
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {heroScanBeams.map((beam) => (
          <motion.span
            key={beam.id}
            className="absolute top-[-40%] h-[180%] blur-[1.5px]"
            style={{
              left: beam.left,
              width: `${beam.width}px`,
              backgroundImage: scanGradient,
            }}
            animate={{ y: ['110%', '-120%'] }}
            transition={{ duration: beam.duration, delay: beam.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}
        {heroPulseLines.map((line) => (
          <motion.span
            key={line.id}
            className="absolute left-[-10%] right-[-10%] h-px"
            style={{
              top: line.top,
              backgroundImage: pulseGradient,
              filter: 'blur(0.5px)',
            }}
            animate={{ scaleX: [0.4, 1.1, 0.4], opacity: [0.15, 0.8, 0.15] }}
            transition={{ duration: line.duration, delay: line.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-subtle)] mb-8 backdrop-blur-xl"
        >
          <Sparkles className="w-4 h-4 text-[color:var(--brand-azure)]" />
          <span className="text-sm">{copy.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight"
        >
          {copy.title}
          <br />
          <span className="text-brand-gradient">{copy.highlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg lg:text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto mb-10"
        >
          {copy.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="group">
            {copy.primary}
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg">
            {copy.secondary}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
        >
          {copy.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl lg:text-3xl text-brand-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-[color:var(--text-secondary)]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

