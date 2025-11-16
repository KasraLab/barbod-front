'use client';

import { Scan, ShieldCheck, FileCheck, Mic, Lock, Code2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '../lib/language-context';
import type { Language } from '../lib/translations';
import { FeatureCard } from './ui/feature';

type LocalizedCopy = {
  title: string;
  description: string;
};

type FeatureDefinition = {
  icon: LucideIcon;
  gradient: string;
  copy: Record<Language, LocalizedCopy>;
};

const LOCALIZED_FEATURES: FeatureDefinition[] = [
  {
    icon: Scan,
    gradient: 'from-blue-500 to-cyan-500',
    copy: {
      en: {
        title: 'Face match intelligence',
        description:
          'Selfies are compared to document portraits with adaptive CNN thresholds that surface spoofing artefacts instantly.',
      },
      fa: {
        title: 'هوش تطبیق چهره',
        description:
          'سلفی کاربر با تصویر سند و آستانه‌های تطبیقی CNN مقایسه می‌شود تا تلاش‌های جعل همان لحظه آشکار شود.',
      },
    },
  },
  {
    icon: ShieldCheck,
    gradient: 'from-cyan-500 to-teal-500',
    copy: {
      en: {
        title: 'Active + passive liveness',
        description:
          'Pose guidance, blink detection, and ambient-light analysis combine to block 2D and 3D replay attacks.',
      },
      fa: {
        title: 'زنده‌بودن فعال و غیرفعال',
        description:
          'راهنمای ژست، تشخیص پلک و تحلیل نور محیط در کنار هم حملات بازپخش دوبعدی و سه‌بعدی را خنثی می‌کنند.',
      },
    },
  },
  {
    icon: FileCheck,
    gradient: 'from-teal-500 to-blue-500',
    copy: {
      en: {
        title: 'Guided document capture',
        description:
          'Edge detection, glare control, and perspective correction deliver OCR-ready images in every session.',
      },
      fa: {
        title: 'ثبت راهنمایی‌شده اسناد',
        description:
          'تشخیص لبه، کنترل تابش و اصلاح پرسپکتیو در هر نوبت تصویری آمادهٔ OCR تحویل می‌دهد.',
      },
    },
  },
  {
    icon: Mic,
    gradient: 'from-blue-600 to-indigo-600',
    copy: {
      en: {
        title: 'Voice biometrics',
        description:
          'Short passphrases are matched to stored prints with similarity scoring and signal-to-noise diagnostics.',
      },
      fa: {
        title: 'بیومتریک صوتی',
        description:
          'عبارات عبور کوتاه با الگوهای ذخیره‌شده مقایسه می‌شود و تحلیل نسبت سیگنال به نویز، صحت را تضمین می‌کند.',
      },
    },
  },
  {
    icon: Lock,
    gradient: 'from-indigo-600 to-blue-500',
    copy: {
      en: {
        title: 'Security & compliance',
        description:
          'End-to-end encryption, SOC 2 / ISO controls, and granular audit trails keep every verification traceable.',
      },
      fa: {
        title: 'امنیت و انطباق',
        description:
          'رمزگذاری سرتاسری، کنترل‌های SOC2/ISO و مسیرهای حسابرسی ریزدانه، هر احراز هویت را قابل ردیابی نگه می‌دارد.',
      },
    },
  },
  {
    icon: Code2,
    gradient: 'from-cyan-600 to-blue-600',
    copy: {
      en: {
        title: 'APIs & SDKs',
        description:
          'REST APIs, webhooks, and turnkey web/iOS/Android SDKs let you orchestrate verification journeys programmatically.',
      },
      fa: {
        title: 'APIها و SDKها',
        description:
          'رابط‌های REST، وب‌هوک و SDKهای وب، iOS و Android اجازه می‌دهد سفرهای احراز هویت را به‌صورت برنامه‌ای هماهنگ کنید.',
      },
    },
  },
];

export function Features() {
  const { t, dir, language } = useLanguage();
  const fallbackLanguage: Language = 'fa';

  return (
    <section id="solutions" className="py-20 lg:py-32 relative" dir={dir}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`${dir === 'rtl' ? 'text-right' : 'text-left'} max-w-3xl mb-16`}>
          <h2 className="text-3xl lg:text-5xl mb-4">{t('features.title')}</h2>
          <p className="text-lg lg:text-xl text-text-secondary">{t('features.subtitle')}</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {LOCALIZED_FEATURES.map((feature, index) => {
            const copy = feature.copy[language] ?? feature.copy[fallbackLanguage];
            return (
              <FeatureCard
                key={`${copy.title}-${index}`}
                icon={feature.icon}
                gradient={feature.gradient}
                title={copy.title}
                description={copy.description}
                dir={dir}
              />
            );
          })}
        </div>

        {/* Trust Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 lg:p-12 bg-surface-elevated border border-border-hairline rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 gradient-brand opacity-5"></div>

          <div className={`relative ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div className="text-3xl lg:text-4xl gradient-brand-text mono mb-2">99.4%</div>
            <div className="text-sm text-text-secondary">{t('trust.accuracy')}</div>
          </div>

          <div className={`relative ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div className="text-3xl lg:text-4xl gradient-brand-text mono mb-2">&lt;500ms</div>
            <div className="text-sm text-text-secondary">{t('trust.response')}</div>
          </div>

          <div className={`relative ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div className="text-3xl lg:text-4xl gradient-brand-text mono mb-2">99.9%</div>
            <div className="text-sm text-text-secondary">{t('trust.uptime')}</div>
          </div>

          <div className={`relative ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div className="text-3xl lg:text-4xl gradient-brand-text mono mb-2">2,500+</div>
            <div className="text-sm text-text-secondary">{t('trust.companies')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

