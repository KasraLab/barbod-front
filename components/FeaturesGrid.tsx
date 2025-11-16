'use client';

import { Scan, Mic, FileText, Shield, Zap, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/language-context';
import type { Language } from '../lib/translations';

type Feature = {
  icon: typeof Scan;
  gradient: string;
  color: string;
  copy: Record<Language, { title: string; description: string }>;
};

const platformFeatures: Feature[] = [
  {
    icon: Scan,
    gradient: 'from-[color:var(--brand-cyan)] to-[color:var(--brand-azure)]',
    color: 'var(--brand-cyan)',
    copy: {
      en: {
        title: 'Face match',
        description: 'Deep-learning models compare selfie and document portraits in under 300 ms with continuous confidence scoring.',
      },
      fa: {
        title: 'تطبیق چهره',
        description: 'مدل‌های یادگیری عمیق، سلفی و تصویر سند را در کمتر از ۳۰۰ میلی‌ثانیه با امتیاز اطمینان پیوسته مقایسه می‌کنند.',
      },
    },
  },
  {
    icon: Mic,
    gradient: 'from-[color:var(--brand-teal)] to-[color:var(--accent-cyan)]',
    color: 'var(--brand-teal)',
    copy: {
      en: {
        title: 'Voice biometrics',
        description: 'Text-dependent and text-independent modes with adaptive noise handling and playback attack protection.',
      },
      fa: {
        title: 'بیومتریک صوتی',
        description: 'حالت‌های وابسته و مستقل از متن با مدیریت نویز تطبیقی و محافظت در برابر حملات بازپخش عرضه می‌شود.',
      },
    },
  },
  {
    icon: FileText,
    gradient: 'from-[color:var(--brand-azure)] to-[color:var(--brand-indigo)]',
    color: 'var(--brand-azure)',
    copy: {
      en: {
        title: 'Document OCR',
        description: 'MRZ, barcode, and template matching for passports, national IDs, and driver licenses across 200+ markets.',
      },
      fa: {
        title: 'OCR اسناد',
        description: 'خواندن MRZ، بارکد و قالب‌های سند برای گذرنامه، کارت ملی و گواهینامه در بیش از ۲۰۰ بازار.',
      },
    },
  },
  {
    icon: Shield,
    gradient: 'from-[color:var(--success)] to-[color:var(--brand-teal)]',
    color: 'var(--success)',
    copy: {
      en: {
        title: 'Security controls',
        description: 'End-to-end encryption, signed webhooks, anomaly alerts, and detailed audit logs for regulated teams.',
      },
      fa: {
        title: 'کنترل‌های امنیتی',
        description: 'رمزگذاری سرتاسری، وب‌هوک‌های امضاشده، هشدار ناهنجاری و لاگ حسابرسی دقیق برای تیم‌های تحت نظارت.',
      },
    },
  },
  {
    icon: Zap,
    gradient: 'from-[color:var(--warning)] to-[color:var(--brand-cyan)]',
    color: 'var(--warning)',
    copy: {
      en: {
        title: 'Elastic orchestration',
        description: 'Autoscaling workflows that handle peak verification hours, fraud spikes, and multi-tenant routing.',
      },
      fa: {
        title: 'هماهنگ‌سازی الاستیک',
        description: 'جریان‌های خودمقیاس که ساعت‌های اوج احراز هویت، جهش‌های تقلب و مسیریابی چندمستاجره را مدیریت می‌کنند.',
      },
    },
  },
  {
    icon: Lock,
    gradient: 'from-[color:var(--brand-indigo)] to-[color:var(--brand-azure)]',
    color: 'var(--brand-indigo)',
    copy: {
      en: {
        title: 'Privacy & consent',
        description: 'Granular access controls, data minimization, configurable consent flows, and jurisdiction-aware retention.',
      },
      fa: {
        title: 'حریم خصوصی و رضایت',
        description: 'کنترل دسترسی ریزدانه، حداقل‌سازی داده، جریان‌های رضایت قابل پیکربندی و نگهداشت سازگار با قوانین حوزه.',
      },
    },
  },
];

const sectionCopy: Record<
  Language,
  { badge: string; title: string; highlight: string; description: string; footnote: string; primary: string; secondary: string }
> = {
  en: {
    badge: 'Platform modules',
    title: 'Everything teams need for',
    highlight: 'biometric trust',
    description:
      'Each module is exposed via SDKs, REST APIs, and dashboards so you can orchestrate onboarding without gluing tools together.',
    footnote: 'Need a guided walk-through? Request a sandbox link or review the full API reference.',
    primary: 'Request sandbox access',
    secondary: 'View implementation guides',
  },
  fa: {
    badge: 'ماژول‌های پلتفرم',
    title: 'همه‌چیز برای ساختن',
    highlight: 'اعتماد بیومتریک',
    description:
      'هر ماژول از طریق SDK، REST API و داشبورد در دسترس است تا بدون چسباندن ابزارهای پراکنده، سفرهای آنبوردینگ را هماهنگ کنید.',
    footnote: 'دموی هدایت‌شده می‌خواهید؟ دسترسی سندباکس یا مستند کامل API را درخواست کنید.',
    primary: 'درخواست دسترسی سندباکس',
    secondary: 'مشاهده راهنمای پیاده‌سازی',
  },
};

export function FeaturesGrid() {
  const { language, dir } = useLanguage();
  const copy = sectionCopy[language];

  return (
    <section className="py-20 lg:py-32 bg-[color:var(--bg-dim)]" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-subtle)] mb-6"
          >
            <span className="text-sm text-[color:var(--brand-azure)]">{copy.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            {copy.title} <span className="text-brand-gradient">{copy.highlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            {copy.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformFeatures.map((feature, index) => {
            const localized = feature.copy[language];
            return (
              <motion.div
                key={`${localized.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="h-full p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] hover:border-[color:var(--border-subtle)] transition-all duration-240">
                  <div className={`w-12 h-12 rounded-[var(--radius-md)] bg-gradient-to-br ${feature.gradient} bg-opacity-10 flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>

                  <h3 className="text-xl mb-3">{localized.title}</h3>
                  <p className="text-[color:var(--text-secondary)]">{localized.description}</p>

                  <div className={`absolute inset-0 rounded-[var(--radius-lg)] bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-240 pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[color:var(--text-secondary)] mb-6">{copy.footnote}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-[var(--radius-md)] bg-brand-gradient text-[color:var(--text-inverse)] hover:opacity-90 transition-opacity">
              {copy.primary}
            </button>
            <button className="px-6 py-3 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] text-[color:var(--text-primary)] border border-[color:var(--border-subtle)] hover:border-[color:var(--outline-focus)] transition-colors">
              {copy.secondary}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

