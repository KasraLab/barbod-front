'use client';

import { Check } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/language-context';
import type { Language } from '../lib/translations';

type Plan = {
  highlighted?: boolean;
  price: string;
  period?: string;
  copy: Record<
    Language,
    {
      name: string;
      description: string;
      features: string[];
      cta: string;
    }
  >;
};

const plans: Plan[] = [
  {
    price: '$49',
    period: 'month',
    copy: {
      en: {
        name: 'Starter',
        description: 'Launch biometric onboarding for pilot programs and internal rollouts.',
        features: [
          '10,000 verifications per month',
          'Face match + passive liveness',
          'Document OCR templates',
          'Basic webhook automation',
          'Email support in 24h',
          'Full API access',
        ],
        cta: 'Start free trial',
      },
      fa: {
        name: 'استارتر',
        description: 'راه‌اندازی احراز هویت بیومتریک برای پایلوت‌ها و تیم‌های داخلی.',
        features: [
          '۱۰٬۰۰۰ احراز هویت در ماه',
          'تطبیق چهره + لایونس غیرفعال',
          'قالب‌های OCR اسناد',
          'اتوماسیون پایه وب‌هوک',
          'پشتیبانی ایمیلی ۲۴ ساعته',
          'دسترسی کامل API',
        ],
        cta: 'شروع دوره آزمایشی',
      },
    },
  },
  {
    price: '$249',
    period: 'month',
    highlighted: true,
    copy: {
      en: {
        name: 'Growth',
        description: 'Best for scaling teams that need premium support and advanced automations.',
        features: [
          '100,000 verifications per month',
          'Full liveness suite',
          'Risk scoring & watchlists',
          'Dedicated webhook broker',
          '24/7 chat + phone support',
          'Audit exports & analytics',
          'SOC 2 compliance toolkit',
          'SLA-backed uptime',
        ],
        cta: 'Choose Growth',
      },
      fa: {
        name: 'رشد',
        description: 'بهترین گزینه برای تیم‌های در حال رشد که به پشتیبانی پریمیوم و اتوماسیون پیشرفته نیاز دارند.',
        features: [
          '۱۰۰٬۰۰۰ احراز هویت در ماه',
          'مجموعه کامل آزمون لایونس',
          'امتیازدهی ریسک و واچ‌لیست',
          'کارگزار اختصاصی وب‌هوک',
          'پشتیبانی ۲۴/۷ (چت و تلفن)',
          'خروجی حسابرسی و تحلیل',
          'جعبه‌ابزار انطباق SOC2',
          'آپ‌تایم تضمین‌شده با SLA',
        ],
        cta: 'انتخاب پلن رشد',
      },
    },
  },
  {
    price: 'Custom',
    copy: {
      en: {
        name: 'Enterprise',
        description: 'Custom pricing for banks, telcos, and government programs needing bespoke governance.',
        features: [
          'Unlimited verifications',
          'Private cloud or on-prem',
          'Dedicated solution architect',
          'Multi-region data residency',
          'Advanced SLA & reporting',
          'Custom scoring models',
          'White-label flows',
          'Staff training & certification',
        ],
        cta: 'Contact sales',
      },
      fa: {
        name: 'سازمانی',
        description: 'قیمت‌گذاری اختصاصی برای بانک‌ها، اپراتورها و برنامه‌های دولتی با حاکمیت سفارشی.',
        features: [
          'احراز هویت نامحدود',
          'ابر خصوصی یا استقرار داخلی',
          'معمار راهکار اختصاصی',
          'سکونت داده چندریجنی',
          'SLA پیشرفته و گزارش‌گیری',
          'مدل‌های امتیازدهی سفارشی',
          'جریان‌های white-label',
          'آموزش و گواهی تیم',
        ],
        cta: 'ارتباط با فروش',
      },
    },
  },
];

const headerCopy: Record<Language, { badge: string; title: string; highlight: string; description: string }> = {
  en: {
    badge: 'Pricing',
    title: 'Flexible pricing for',
    highlight: 'compliance-first teams',
    description:
      'Start with turnkey SDKs, grow with automation, or work with us on bespoke deployments that match your governance model.',
  },
  fa: {
    badge: 'قیمت‌گذاری',
    title: 'پلن‌های منعطف برای',
    highlight: 'تیم‌های اولویت‌دار انطباق',
    description:
      'با SDKهای آماده شروع کنید، با اتوماسیون رشد کنید یا برای استقرار سفارشی منطبق با سیاست‌های حاکمیتی با ما همکاری کنید.',
  },
};

export function PricingSection() {
  const { language, dir } = useLanguage();
  const header = headerCopy[language];

  return (
    <section className="py-20 lg:py-32" id="pricing" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-subtle)] mb-6"
          >
            <span className="text-sm text-[color:var(--brand-azure)]">{header.badge}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            {header.title} <span className="text-brand-gradient">{header.highlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            {header.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const localized = plan.copy[language];
            const periodLabel = plan.period ? (language === 'fa' ? 'ماه' : plan.period) : undefined;
            return (
              <motion.div
                key={`${localized.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <div className="px-4 py-1 rounded-full bg-brand-gradient text-[color:var(--text-inverse)] text-sm">
                      {language === 'en' ? 'Most popular' : 'پرفروش‌ترین'}
                    </div>
                  </div>
                )}

                <div
                  className={`h-full p-8 rounded-[var(--radius-lg)] border-2 transition-all duration-240 ${
                    plan.highlighted
                      ? 'border-[color:var(--brand-azure)] bg-[color:var(--surface-elevated)] shadow-[var(--shadow-xl)]'
                      : 'border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)] hover:border-[color:var(--border-subtle)]'
                  }`}
                >
                  <div className="mb-6">
                    <h3 className="text-xl mb-2">{localized.name}</h3>
                    <p className="text-sm text-[color:var(--text-secondary)] mb-4">{localized.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl text-brand-gradient">{plan.price}</span>
                      {periodLabel && <span className="text-sm text-[color:var(--text-secondary)]">/{periodLabel}</span>}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {localized.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-[color:var(--text-secondary)]">
                        <Check className="w-4 h-4 text-[color:var(--brand-azure)] mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button fullWidth size="lg" variant={plan.highlighted ? 'primary' : 'secondary'}>
                    {localized.cta}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

