import type { ComponentType } from 'react';
import { Shield, Award, Users, TrendingUp, ShieldCheck, Lock, FileCheck, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/language-context';
import type { Language } from '../lib/translations';

type LocalizedText = Record<Language, string>;

type StatCard = {
  value: LocalizedText;
  label: LocalizedText;
  icon: ComponentType<{ className?: string }>;
  glow: string;
};

type CertificationCard = {
  name: string;
  description: LocalizedText;
  icon: ComponentType<{ className?: string }>;
  glow: string;
};

type TrustedLogo = {
  name: LocalizedText;
  width: number;
};

const stats: StatCard[] = [
  {
    value: { en: '+320', fa: '+۳۲۰' },
    label: { en: 'Enterprise deployments', fa: 'سازمان‌ فعال' },
    icon: Users,
    glow: 'from-[#a5b4fc] to-[#6366f1]',
  },
  {
    value: { en: '60M+', fa: '۶۰M+' },
    label: { en: 'Monthly verifications', fa: 'احراز هویت ماهانه' },
    icon: TrendingUp,
    glow: 'from-[#67e8f9] to-[#0ea5e9]',
  },
  {
    value: { en: '99.98%', fa: '۹۹.۹۸٪' },
    label: { en: 'Matching accuracy', fa: 'دقت تشخیص' },
    icon: Award,
    glow: 'from-[#fcd34d] to-[#f97316]',
  },
  {
    value: { en: '24/7', fa: '۲۴/۷' },
    label: { en: 'Monitoring & support', fa: 'پایش و پشتیبانی' },
    icon: Shield,
    glow: 'from-[#6ee7b7] to-[#059669]',
  },
];

const certifications: CertificationCard[] = [
  {
    name: 'ISO 27001',
    description: { en: 'Information security management', fa: 'سیستم مدیریت امنیت اطلاعات' },
    icon: ShieldCheck,
    glow: 'from-[#818cf8] to-[#c084fc]',
  },
  {
    name: 'GDPR',
    description: { en: 'EU data protection compliance', fa: 'انطباق کامل با GDPR' },
    icon: Lock,
    glow: 'from-[#67e8f9] to-[#0ea5e9]',
  },
  {
    name: 'SOC 2 Type II',
    description: { en: 'Independent controls audit', fa: 'گزارش ممیزی کنترل‌ها' },
    icon: FileCheck,
    glow: 'from-[#fcd34d] to-[#fb923c]',
  },
  {
    name: 'PCI DSS',
    description: { en: 'Payment data protection', fa: 'استاندارد امنیت پرداخت' },
    icon: CreditCard,
    glow: 'from-[#6ee7b7] to-[#34d399]',
  },
];

const trustedLogos: TrustedLogo[] = [
  { name: { en: 'PayPing', fa: 'پی‌پینگ' }, width: 120 },
  { name: { en: 'Fanap', fa: 'فناپ' }, width: 110 },
  { name: { en: 'MellatPay', fa: 'ملت‌پی' }, width: 130 },
  { name: { en: 'Zaravan', fa: 'زاروان' }, width: 100 },
  { name: { en: 'Pasargad', fa: 'پاسارگاد' }, width: 90 },
  { name: { en: 'Behpardakht', fa: 'به‌پرداخت' }, width: 95 },
];

const trustCopy: Record<Language, { trustedBy: string; certificationsTitle: string }> = {
  en: {
    trustedBy: 'Trusted by regulated innovators',
    certificationsTitle: 'Certifications & attestations',
  },
  fa: {
    trustedBy: 'مورد اعتماد نوآوران regulated',
    certificationsTitle: 'گواهی‌ها و تأییدیه‌های امنیتی',
  },
};

export function TrustSection() {
  const { language } = useLanguage();
  const copy = trustCopy[language];

  return (
    <section className="py-20 lg:py-32 bg-[color:var(--bg-dim)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 mb-5">
                <span
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${stat.glow} opacity-60 blur-2xl`}
                  aria-hidden="true"
                />
                <span className="absolute inset-0 rounded-full border border-[color:var(--border-subtle)]/40 bg-[color:var(--surface-card)]/70 backdrop-blur-xl" />
                <stat.icon className="relative w-7 h-7 text-[color:var(--text-primary)]" />
              </div>
              <div className="text-3xl lg:text-4xl mb-2 text-brand-gradient">{stat.value[language]}</div>
              <div className="text-sm text-[color:var(--text-secondary)]">{stat.label[language]}</div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm text-[color:var(--text-tertiary)] mb-8"
          >
            {copy.trustedBy}
          </motion.h3>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-50 hover:opacity-100 transition-opacity">
            {trustedLogos.map((logo, index) => (
              <motion.div
                key={logo.name.en}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="h-12 flex items-center justify-center px-4"
                style={{ width: logo.width }}
              >
                <div className="text-lg text-[color:var(--text-secondary)]">{logo.name[language]}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl text-center mb-12"
          >
            {copy.certificationsTitle}
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] text-center hover:border-[color:var(--brand-azure)]/80 transition-all relative overflow-hidden"
              >
                <span className={`absolute inset-0 bg-gradient-to-br ${cert.glow} opacity-10`} aria-hidden="true" />
                <div className="relative">
                  <div className="relative w-16 h-16 mx-auto mb-5">
                    <span className={`absolute inset-0 rounded-[var(--radius-xl)] bg-gradient-to-br ${cert.glow} opacity-40 blur-xl`} />
                    <span className="absolute inset-0 rounded-[var(--radius-xl)] bg-[color:var(--surface-card)]/70 border border-[color:var(--border-subtle)]/60 backdrop-blur flex items-center justify-center">
                      <cert.icon className="w-8 h-8 text-[color:var(--text-primary)]" />
                    </span>
                  </div>
                  <h4 className="mb-2">{cert.name}</h4>
                  <p className="text-xs text-[color:var(--text-secondary)]">{cert.description[language]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
