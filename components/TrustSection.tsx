import { Shield, Award, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { value: '+۵۰۰', label: 'سازمان فعال', icon: Users },
  { value: '+۱۰M', label: 'احراز هویت ماهانه', icon: TrendingUp },
  { value: '۹۹.۹۸٪', label: 'دقت تشخیص', icon: Award },
  { value: '۲۴/۷', label: 'پشتیبانی', icon: Shield }
];

const certifications = [
  { name: 'ISO 27001', description: 'مدیریت امنیت اطلاعات' },
  { name: 'GDPR', description: 'حریم خصوصی اروپا' },
  { name: 'SOC 2 Type II', description: 'امنیت و دسترسی' },
  { name: 'PCI DSS', description: 'امنیت پرداخت' }
];

const trustedLogos = [
  { name: 'بانک ملی', width: 120 },
  { name: 'بانک ملت', width: 110 },
  { name: 'بانک پاسارگاد', width: 130 },
  { name: 'دیجی‌کالا', width: 100 },
  { name: 'اسنپ', width: 90 },
  { name: 'تپسی', width: 95 }
];

export function TrustSection() {
  return (
    <section className="py-20 lg:py-32 bg-[color:var(--bg-dim)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-gradient bg-opacity-10 mb-4">
                <stat.icon className="w-7 h-7 text-[color:var(--brand-azure)]" />
              </div>
              <div className="text-3xl lg:text-4xl mb-2 text-brand-gradient">{stat.value}</div>
              <div className="text-sm text-[color:var(--text-secondary)]">{stat.label}</div>
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
            مورد اعتماد سازمان‌های پیشرو
          </motion.h3>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-50 hover:opacity-100 transition-opacity">
            {trustedLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="h-12 flex items-center justify-center px-4"
                style={{ width: logo.width }}
              >
                <div className="text-lg text-[color:var(--text-secondary)]">{logo.name}</div>
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
            گواهینامه‌ها و استانداردهای بین‌المللی
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] text-center hover:border-[color:var(--brand-azure)] transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[color:var(--surface-card)] flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[color:var(--brand-azure)]" />
                </div>
                <h4 className="mb-2">{cert.name}</h4>
                <p className="text-xs text-[color:var(--text-secondary)]">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
