import { Check, X, Gauge, ShieldCheck, Target, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/language-context';
import type { Language } from '../lib/translations';

type LocalizedText = Record<Language, string>;

interface ComparisonFeature {
  name: LocalizedText;
  barbod: boolean;
  traditional: boolean;
}

interface ComparisonCategory {
  title: LocalizedText;
  features: ComparisonFeature[];
}

interface StatHighlight {
  label: LocalizedText;
  value: LocalizedText;
  description: LocalizedText;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

interface SectionCopy {
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  featureColumn: string;
  modernLabel: string;
  modernSub: string;
  legacyLabel: string;
  legacySub: string;
}

const presenceCopy: Record<Language, { yes: string; no: string }> = {
  en: { yes: 'Included', no: 'Not included' },
  fa: { yes: 'دارد', no: 'ندارد' },
};

const sectionCopy: Record<Language, SectionCopy> = {
  en: {
    headingPrefix: 'Why',
    headingHighlight: 'Barbod',
    description:
      'See how consolidating biometric orchestration, security, and compliance into one platform compares to manual and legacy onboarding.',
    featureColumn: 'Criteria',
    modernLabel: 'Barbod',
    modernSub: 'Modern digital KYC',
    legacyLabel: 'Legacy methods',
    legacySub: 'Manual & paper workflows',
  },
  fa: {
    headingPrefix: 'چرا',
    headingHighlight: 'باربُد',
    description:
      'مقایسه کنید وقتی کل مسیر احراز هویت دیجیتال، امنیت و انطباق در یک پلتفرم یکپارچه می‌شود چه فاصله‌ای با فرآیندهای دستی ایجاد می‌شود.',
    featureColumn: 'شاخص‌ها',
    modernLabel: 'باربُد',
    modernSub: 'احراز هویت دیجیتال مدرن',
    legacyLabel: 'روش‌های سنتی',
    legacySub: 'فرآیندهای دستی و کاغذی',
  },
};

const comparisonCategories: ComparisonCategory[] = [
  {
    title: { en: 'Intelligence & detection', fa: 'هوشمندی و تشخیص' },
    features: [
      { name: { en: 'AI-grade face matching', fa: 'تطبیق چهره با هوش مصنوعی' }, barbod: true, traditional: false },
      { name: { en: 'Passive liveness detection', fa: 'لایونِس غیرفعال لحظه‌ای' }, barbod: true, traditional: false },
      { name: { en: 'Smart ID OCR', fa: 'OCR هوشمند مدارک' }, barbod: true, traditional: false },
      { name: { en: 'Manual photo inspection', fa: 'بازبینی دستی تصاویر' }, barbod: false, traditional: true },
    ],
  },
  {
    title: { en: 'Speed & experience', fa: 'سرعت و تجربه کاربر' },
    features: [
      { name: { en: 'Sub-30s onboarding', fa: 'احراز زیر ۳۰ ثانیه' }, barbod: true, traditional: false },
      { name: { en: 'Drop-in SDK & APIs', fa: 'SDK و API آماده' }, barbod: true, traditional: false },
      { name: { en: 'Automated case routing', fa: 'مسیر‌دهی هوشمند پرونده' }, barbod: true, traditional: false },
      { name: { en: 'Branch visits & paperwork', fa: 'حضور شعبه و فرم کاغذی' }, barbod: false, traditional: true },
    ],
  },
  {
    title: { en: 'Security & governance', fa: 'امنیت و حاکمیت' },
    features: [
      { name: { en: 'Fraud risk scoring', fa: 'امتیازدهی ریسک تقلب' }, barbod: true, traditional: false },
      { name: { en: 'Audit-ready logs', fa: 'گزارش‌های آماده ممیزی' }, barbod: true, traditional: false },
      { name: { en: 'Policy versioning', fa: 'نسخه‌بندی سیاست‌ها' }, barbod: true, traditional: false },
      { name: { en: 'Shared credentials', fa: 'نام‌کاربری مشترک' }, barbod: false, traditional: true },
    ],
  },
  {
    title: { en: 'Scale & support', fa: 'مقیاس‌پذیری و پشتیبانی' },
    features: [
      { name: { en: 'Global data residency', fa: 'اقامت داده جهانی' }, barbod: true, traditional: false },
      { name: { en: 'Migration playbooks', fa: 'راهنمای مهاجرت آماده' }, barbod: true, traditional: false },
      { name: { en: 'Dedicated success team', fa: 'تیم موفقیت اختصاصی' }, barbod: true, traditional: false },
      { name: { en: 'Ad-hoc email support', fa: 'پشتیبانی پراکنده ایمیلی' }, barbod: false, traditional: true },
    ],
  },
];

const statHighlights: StatHighlight[] = [
  {
    label: { en: 'Matching accuracy', fa: 'دقت تشخیص' },
    value: { en: '99.98%', fa: '۹۹.۹۸٪' },
    description: {
      en: 'Models are retrained on live biometric traffic, keeping PAD resistance above 99.98% for every release.',
      fa: 'مدل‌ها روی داده‌های زنده آموزش می‌بینند تا مقاومت در برابر PAD بالای ۹۹.۹۸٪ باقی بماند.',
    },
    icon: Target,
    gradient: 'from-[#94b3ff]/40 via-[#c084fc]/30 to-transparent',
  },
  {
    label: { en: 'Processing speed', fa: 'سرعت پردازش' },
    value: { en: '<350ms', fa: 'زیر ۳۵۰ میلی‌ثانیه' },
    description: {
      en: 'A distributed GPU edge returns fraud verdicts in a fraction of a second, even during peak surges.',
      fa: 'لبه‌ی توزیع‌شده GPU پاسخ احراز را در کسری از ثانیه، حتی در اوج ترافیک برمی‌گرداند.',
    },
    icon: Gauge,
    gradient: 'from-[#5eead4]/40 via-[#2dd4bf]/20 to-transparent',
  },
  {
    label: { en: 'Monthly verifications', fa: 'احراز ماهانه' },
    value: { en: '10M+', fa: '+۱۰ میلیون' },
    description: {
      en: 'Banks, fintechs, and telcos complete more than ten million trusted verifications with Barbod every month.',
      fa: 'بانک‌ها، فین‌تک‌ها و اپراتورها هر ماه بیش از ده میلیون احراز مطمئن را با باربُد انجام می‌دهند.',
    },
    icon: BarChart3,
    gradient: 'from-[#fcd34d]/40 via-[#fb923c]/30 to-transparent',
  },
];

export function ComparisonSection() {
  const { language } = useLanguage();
  const copy = sectionCopy[language];
  const presence = presenceCopy[language];

  return (
    <section className="py-20 lg:py-32 bg-[color:var(--bg-dim)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight"
          >
            {copy.headingPrefix}{' '}
            <span className="text-brand-gradient">{copy.headingHighlight}</span>
            {language === 'fa' ? '؟' : '?'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg leading-relaxed text-[color:var(--text-secondary)]"
          >
            {copy.description}
          </motion.p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Headers */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 items-center mb-8">
            <div className="text-sm text-[color:var(--text-secondary)] text-center sm:text-right px-2">
              {copy.featureColumn}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 md:p-6 rounded-[var(--radius-lg)] bg-brand-gradient text-center h-full flex flex-col gap-1 justify-center shadow-[0_25px_45px_rgba(63,111,255,0.28)]"
            >
              <div className="text-[color:var(--text-inverse)] text-sm font-semibold">{copy.modernLabel}</div>
              <div className="text-xs text-[color:var(--text-inverse)] opacity-80">{copy.modernSub}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 md:p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] text-center h-full flex flex-col gap-1 justify-center"
            >
              <div className="text-sm font-semibold">{copy.legacyLabel}</div>
              <div className="text-xs text-[color:var(--text-secondary)]">{copy.legacySub}</div>
            </motion.div>
          </div>

          {/* Comparison Categories */}
          <div className="space-y-6 lg:space-y-8">
            {comparisonCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] overflow-hidden shadow-[0_25px_45px_rgba(15,23,42,0.14)]"
              >
                <div className="flex items-center justify-between gap-4 p-5 md:p-6 bg-[color:var(--surface-card)] border-b border-[color:var(--border-hairline)]">
                  <h3 className="text-lg">{category.title[language]}</h3>
                  <span className="text-xs text-[color:var(--text-tertiary)]">
                    {language === 'fa' ? `محور ${categoryIndex + 1}` : `Axis ${categoryIndex + 1}`}
                  </span>
                </div>

                <div className="divide-y divide-[color:var(--border-hairline)]">
                  {category.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.name.en}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + featureIndex * 0.05 }}
                      className="grid grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 py-4 sm:py-5 items-center hover:bg-[color:var(--surface-card)] transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="text-sm sm:text-base leading-relaxed">{feature.name[language]}</span>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="relative">
                          <span
                            className={`absolute inset-0 rounded-full blur-lg opacity-0 transition-opacity duration-300 ${
                              feature.barbod ? 'opacity-70 bg-[color:var(--success)]/40' : 'opacity-0'
                            }`}
                            aria-hidden="true"
                          />
                          <div
                            className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all ${
                              feature.barbod
                                ? 'border-[color:var(--success)] bg-[color:var(--surface-card)] text-[color:var(--success)] shadow-[0_18px_35px_rgba(16,185,129,0.25)]'
                                : 'border-[color:var(--border-hairline)] text-[color:var(--text-tertiary)] bg-transparent'
                            }`}
                          >
                            {feature.barbod ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <X className="w-4 h-4 text-[color:var(--danger)] opacity-70" />
                            )}
                            <span className="sr-only">{feature.barbod ? presence.yes : presence.no}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="relative">
                          <span
                            className={`absolute inset-0 rounded-full blur-lg opacity-0 transition-opacity duration-300 ${
                              feature.traditional ? 'opacity-60 bg-[color:var(--success)]/35' : 'opacity-0 bg-[color:var(--danger)]/25'
                            }`}
                            aria-hidden="true"
                          />
                          <div
                            className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all ${
                              feature.traditional
                                ? 'border-[color:var(--success)] bg-[color:var(--surface-card)] text-[color:var(--success)] shadow-[0_15px_28px_rgba(34,197,94,0.2)]'
                                : 'border-[color:var(--border-hairline)] text-[color:var(--text-tertiary)] bg-transparent'
                            }`}
                          >
                            {feature.traditional ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <X className="w-4 h-4 text-[color:var(--danger)] opacity-80" />
                            )}
                            <span className="sr-only">{feature.traditional ? presence.yes : presence.no}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-x-10 -top-8 h-40 bg-brand-gradient opacity-10 blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="relative grid gap-6 lg:gap-8 md:grid-cols-3">
              {statHighlights.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label.en}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative h-full p-7 md:p-9 rounded-[var(--radius-xl)] border border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)] flex flex-col gap-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} blur-3xl opacity-65 pointer-events-none`} aria-hidden="true" />
                      <div className="relative z-10 flex flex-col gap-6 text-left">
                        <div className="flex items-center gap-4">
                          <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)] shadow-[0_12px_28px_rgba(15,23,42,0.35)]">
                            <Icon className="w-6 h-6 text-[color:var(--brand-azure)]" />
                          </div>
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[color:var(--surface-card)]/90 text-xs font-medium text-[color:var(--text-secondary)] backdrop-blur border border-[color:var(--border-hairline)]/70">
                            {stat.label[language]}
                          </span>
                        </div>
                        <div className="space-y-3">
                          <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-gradient tracking-tight leading-tight">
                            <span dir={language === 'fa' ? 'rtl' : 'ltr'} className="inline-block">
                              {stat.value[language]}
                            </span>
                          </div>
                          <p className="text-sm sm:text-base leading-8 text-[color:var(--text-secondary)]">
                            {stat.description[language]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
