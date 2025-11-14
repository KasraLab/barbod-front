'use client';

import { Code, Smartphone, Globe, Cloud, Package, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { useLanguage } from '../lib/language-context';
import type { Language } from '../lib/translations';

type IntegrationItem = {
  icon: typeof Code;
  copy: Record<Language, { title: string; description: string; features: string[] }>;
};

const integrationItems: IntegrationItem[] = [
  {
    icon: Code,
    copy: {
      en: {
        title: 'REST API',
        description: 'Typed endpoints, webhooks, and granular scopes so you can orchestrate verification from any backend.',
        features: ['JSON schemas & examples', 'Idempotent retries', 'Signed webhooks'],
      },
      fa: {
        title: 'REST API',
        description: 'نقاط پایان تایپ‌شده، وب‌هوک و محدوده‌های دقیق تا بتوانید احراز هویت را از هر بک‌اندی هماهنگ کنید.',
        features: ['طرحواره‌ها و نمونه‌های JSON', 'تلاش‌های idempotent', 'وب‌هوک‌های امضاشده'],
      },
    },
  },
  {
    icon: Package,
    copy: {
      en: {
        title: 'Server SDKs',
        description: 'Native libraries with retry helpers, observability hooks, and prebuilt error handling.',
        features: ['JavaScript/TypeScript', 'Python', 'Java/Kotlin', 'Go', 'Ruby', 'PHP'],
      },
      fa: {
        title: 'SDKهای سمت سرور',
        description: 'کتابخانه‌های بومی با ابزار تکرار، هوک‌های مشاهده‌پذیری و مدیریت خطای آماده.',
        features: ['JavaScript/TypeScript', 'Python', 'Java/Kotlin', 'Go', 'Ruby', 'PHP'],
      },
    },
  },
  {
    icon: Smartphone,
    copy: {
      en: {
        title: 'Mobile SDKs',
        description: 'Native UI, camera control, and offline-safe capture for iOS and Android.',
        features: ['React Native', 'Flutter', 'Native iOS', 'Native Android'],
      },
      fa: {
        title: 'SDKهای موبایل',
        description: 'رابط کاربری بومی، کنترل دوربین و ثبت امن آفلاین برای iOS و Android.',
        features: ['React Native', 'Flutter', 'Native iOS', 'Native Android'],
      },
    },
  },
  {
    icon: Globe,
    copy: {
      en: {
        title: 'Web components',
        description: 'Themeable widgets that drop into React, Vue, and Angular apps with one import.',
        features: ['React components', 'Vue components', 'Angular modules'],
      },
      fa: {
        title: 'کامپوننت‌های وب',
        description: 'ویجت‌های قابل شخصی‌سازی که تنها با یک import در برنامه‌های React، Vue و Angular قرار می‌گیرند.',
        features: ['کامپوننت‌های React', 'کامپوننت‌های Vue', 'ماژول‌های Angular'],
      },
    },
  },
  {
    icon: Cloud,
    copy: {
      en: {
        title: 'Cloud integrations',
        description: 'Deploy inside your existing cloud perimeter with Terraform modules and managed secrets.',
        features: ['AWS', 'Google Cloud', 'Azure', 'Cloudflare'],
      },
      fa: {
        title: 'یکپارچگی ابری',
        description: 'در محیط ابری موجودتان با ماژول‌های Terraform و مدیریت امن اسرار مستقر شوید.',
        features: ['AWS', 'Google Cloud', 'Azure', 'Cloudflare'],
      },
    },
  },
  {
    icon: Cpu,
    copy: {
      en: {
        title: 'On-premise',
        description: 'Hardened containers for air-gapped deployments and regulated data residency.',
        features: ['Kubernetes manifests', 'Hardware sizing guide', 'Dedicated support'],
      },
      fa: {
        title: 'استقرار On-Premise',
        description: 'کانتینرهای سخت‌شده برای استقرار air-gapped و الزامات سکونت داده تحت نظارت.',
        features: ['مانیفست‌های Kubernetes', 'راهنمای اندازه‌گذاری سخت‌افزار', 'پشتیبانی اختصاصی'],
      },
    },
  },
];

type UseCaseCard = {
  color: string;
  copy: Record<Language, { title: string; steps: string[] }>;
};

const useCaseCards: UseCaseCard[] = [
  {
    color: 'var(--brand-cyan)',
    copy: {
      en: {
        title: 'Digital onboarding workflow',
        steps: [
          'Create verification',
          'Collect selfie + document',
          'Run liveness',
          'Score risk & watchlists',
          'Return decision webhooks',
          'Sync CRM / core banking',
        ],
      },
      fa: {
        title: 'جریان آنبوردینگ دیجیتال',
        steps: [
          'ایجاد درخواست احراز هویت',
          'جمع‌آوری سلفی و سند',
          'اجرای تست لایونس',
          'محاسبه ریسک و لیست‌های مراقبتی',
          'ارسال وب‌هوک تصمیم',
          'همگام‌سازی با CRM یا هسته بانکی',
        ],
      },
    },
  },
  {
    color: 'var(--brand-teal)',
    copy: {
      en: {
        title: 'Workflow automation',
        steps: ['Connect CRM', 'Trigger verification', 'Push events to bus', 'Escalate manual review', 'Sync final decision'],
      },
      fa: {
        title: 'اتوماسیون فرایندها',
        steps: ['اتصال به CRM', 'ماشه احراز هویت', 'ارسال رویداد به باس', 'ارجاع به بررسی دستی', 'همگام‌سازی تصمیم نهایی'],
      },
    },
  },
  {
    color: 'var(--brand-azure)',
    copy: {
      en: {
        title: 'KYC modernization',
        steps: ['Initiate case', 'Collect biometrics', 'Parse documents', 'Run risk policy', 'Export audit trail'],
      },
      fa: {
        title: 'نوسازی KYC',
        steps: ['شروع پرونده', 'جمع‌آوری داده بیومتریک', 'تحلیل اسناد', 'اجرای سیاست ریسک', 'خروجی مسیر حسابرسی'],
      },
    },
  },
];

const headerCopy: Record<
  Language,
  { badge: string; title: string; highlight: string; description: string; primaryCta: string; secondaryCta: string }
> = {
  en: {
    badge: 'Integrations',
    title: 'Ship verification across',
    highlight: 'every stack and surface',
    description:
      'Pick the integration path that matches your roadmap. Use REST, drop-in SDKs, web components, or hardened on-premise containers.',
    primaryCta: 'View integration guide',
    secondaryCta: 'Book a technical session',
  },
  fa: {
    badge: 'یکپارچگی‌ها',
    title: 'یکپارچه‌سازی احراز هویت در',
    highlight: 'هر لایه و کانال',
    description:
      'مسیر ادغامی را انتخاب کنید که با نقشهٔ راه شما هم‌خوان است؛ REST، SDKهای آماده، کامپوننت‌های وب یا کانتینرهای سخت‌شده داخل دیتاسنتر.',
    primaryCta: 'مشاهده راهنمای یکپارچه‌سازی',
    secondaryCta: 'رزرو جلسه فنی',
  },
};

export function IntegrationSection() {
  const { language, dir } = useLanguage();
  const copy = headerCopy[language];

  return (
    <section className="py-20 lg:py-32" dir={dir}>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {integrationItems.map((item, index) => {
            const localized = item.copy[language];
            return (
              <motion.div
                key={`${localized.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)] p-6 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[color:var(--brand-azure)]" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">{localized.title}</h3>
                  <p className="text-sm text-[color:var(--text-secondary)]">{localized.description}</p>
                </div>
                <ul className="text-sm text-[color:var(--text-secondary)] space-y-1">
                  {localized.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--brand-azure)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCaseCards.map((card, index) => {
            const localized = card.copy[language];
            return (
              <motion.div
                key={`${localized.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)] p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: card.color }} />
                  <h4 className="text-lg">{localized.title}</h4>
                </div>
                <ol className="space-y-2 text-sm text-[color:var(--text-secondary)] leading-relaxed">
                  {localized.steps.map((step, idx) => (
                    <li key={`${step}-${idx}`} className="flex gap-2">
                      <span className="text-[color:var(--brand-azure)]">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center" dir={dir}>
          <Button size="lg">{copy.primaryCta}</Button>
          <Button variant="secondary" size="lg">
            {copy.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
