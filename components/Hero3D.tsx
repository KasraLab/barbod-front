'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../lib/language-context';
import type { Language } from '../lib/translations';

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

const ambientGlows = [
  { top: '18%', left: '16%', size: 260, color: 'var(--brand-cyan)', delay: 0 },
  { top: '68%', left: '72%', size: 300, color: 'var(--brand-indigo)', delay: 1 },
  { top: '48%', left: '52%', size: 220, color: 'var(--brand-azure)', delay: 2 },
];

const floatingBiometricNodes = [
  { id: 'node-1', top: '18%', left: '26%', size: 18, duration: 12, delay: 0, driftX: 14, driftY: 28, color: 'rgba(99, 102, 241, 0.85)' },
  { id: 'node-2', top: '62%', left: '18%', size: 12, duration: 10, delay: 0.6, driftX: -10, driftY: 20, color: 'rgba(56, 189, 248, 0.75)' },
  { id: 'node-3', top: '32%', left: '70%', size: 16, duration: 11, delay: 1.2, driftX: 10, driftY: 18, color: 'rgba(147, 197, 253, 0.8)' },
  { id: 'node-4', top: '75%', left: '60%', size: 14, duration: 13, delay: 1.8, driftX: 16, driftY: 24, color: 'rgba(59, 130, 246, 0.75)' },
  { id: 'node-5', top: '40%', left: '12%', size: 10, duration: 9, delay: 1.4, driftX: -12, driftY: 16, color: 'rgba(45, 212, 191, 0.7)' },
  { id: 'node-6', top: '55%', left: '82%', size: 12, duration: 10.5, delay: 0.9, driftX: 8, driftY: 20, color: 'rgba(14, 165, 233, 0.8)' },
  { id: 'node-7', top: '25%', left: '50%', size: 20, duration: 14, delay: 0.3, driftX: -8, driftY: 22, color: 'rgba(129, 140, 248, 0.85)' },
];

export function Hero3D() {
  const { language, dir } = useLanguage();
  const copy = hero3dCopy[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-[color:var(--bg-base)]">
        <div className="absolute inset-0 opacity-30">
          {ambientGlows.map((glow) => (
            <div
              key={`${glow.top}-${glow.left}`}
              className="absolute rounded-full blur-[120px] animate-pulse-slow"
              style={{
                top: glow.top,
                left: glow.left,
                width: glow.size,
                height: glow.size,
                background: glow.color,
                animationDelay: `${glow.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center top',
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        {floatingBiometricNodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.15, 0.7, 0.4, 0.15],
              scale: [1, 1.05, 1],
              x: [0, node.driftX, 0],
              y: [0, -node.driftY, 0],
            }}
            transition={{ repeat: Infinity, duration: node.duration, delay: node.delay, ease: 'easeInOut' }}
            style={{ top: node.top, left: node.left }}
          >
            <div className="relative" style={{ width: `${node.size}px`, height: `${node.size}px` }}>
              <div
                className="absolute -inset-3 rounded-full blur-2xl opacity-60"
                style={{ background: node.color }}
                aria-hidden="true"
              />
              <div
                className="relative w-full h-full rounded-full border backdrop-blur-sm"
                style={{
                  borderColor: node.color,
                  background: `radial-gradient(circle at 30% 30%, ${node.color} 0%, transparent 70%)`,
                  boxShadow: `0 0 25px ${node.color}`,
                }}
              />
            </div>
          </motion.div>
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
            <div key={stat.label} className="preserve-3d group cursor-pointer">
              <div className="relative preserve-3d transition-transform duration-500 group-hover:scale-110 group-hover:[transform:rotateY(10deg)]">
                <div className="text-2xl lg:text-3xl text-brand-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-[color:var(--text-secondary)]">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
