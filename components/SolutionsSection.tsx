import { Building2, Smartphone, Globe, CreditCard, Users, GraduationCap, Hospital, Landmark } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';

const industries = [
  {
    icon: Building2,
    title: 'بانکداری و مالی',
    description: 'احراز هویت دیجیتال برای افتتاح حساب، تراکنش‌های بزرگ و KYC',
    features: ['افتتاح حساب آنلاین', 'احراز دو مرحله‌ای', 'انطباق با AML'],
    gradient: 'from-[color:var(--brand-cyan)] to-[color:var(--brand-azure)]'
  },
  {
    icon: Smartphone,
    title: 'فین‌تک و پرداخت',
    description: 'امنیت بالا برای کیف پول دیجیتال، پرداخت و رمزارزها',
    features: ['احراز سریع', 'تشخیص تقلب', 'پرداخت بیومتریک'],
    gradient: 'from-[color:var(--brand-teal)] to-[color:var(--accent-cyan)]'
  },
  {
    icon: Globe,
    title: 'تجارت الکترونیک',
    description: 'کاهش تقلب و افزایش اعتماد در خرید و فروش آنلاین',
    features: ['تأیید سن', 'جلوگیری از کلاهبرداری', 'احراز فروشنده'],
    gradient: 'from-[color:var(--brand-azure)] to-[color:var(--brand-indigo)]'
  },
  {
    icon: CreditCard,
    title: 'بیمه',
    description: 'ثبت‌نام سریع و جلوگیری از کلایم‌های جعلی',
    features: ['صدور آنلاین بیمه‌نامه', 'تأیید کلایم', 'مدیریت پرونده'],
    gradient: 'from-[color:var(--success)] to-[color:var(--brand-teal)]'
  },
  {
    icon: Hospital,
    title: 'سلامت دیجیتال',
    description: 'حفظ حریم خصوصی بیمار و دسترسی امن به پرونده پزشکی',
    features: ['پرونده الکترونیک', 'تله‌مدیسین', 'نسخه الکترونیک'],
    gradient: 'from-[color:var(--danger)] to-[color:var(--brand-azure)]'
  },
  {
    icon: GraduationCap,
    title: 'آموزش',
    description: 'احراز هویت در آزمون‌های آنلاین و دوره‌های مجازی',
    features: ['آزمون آنلاین', 'صدور گواهی', 'حضور و غیاب'],
    gradient: 'from-[color:var(--warning)] to-[color:var(--brand-cyan)]'
  },
  {
    icon: Users,
    title: 'منابع انسانی',
    description: 'استخدام و مدیریت هویت کارکنان',
    features: ['ورود و خروج', 'بررسی سوابق', 'تأیید مدارک'],
    gradient: 'from-[color:var(--brand-indigo)] to-[color:var(--brand-teal)]'
  },
  {
    icon: Landmark,
    title: 'دولت و دولت الکترونیک',
    description: 'خدمات دولتی آنلاین با احراز هویت معتبر',
    features: ['شناسه ملی دیجیتال', 'رأی‌گیری الکترونیک', 'خدمات شهروندی'],
    gradient: 'from-[color:var(--brand-azure)] to-[color:var(--success)]'
  }
];

const useCases = [
  {
    title: 'افتتاح حساب دیجیتال',
    description: 'مشتریان می‌توانند در عرض چند دقیقه و بدون مراجعه حضوری، حساب بانکی باز کنند.',
    stat: '۸۵٪ کاهش زمان'
  },
  {
    title: 'ورود بدون رمز عبور',
    description: 'استفاده از بیومتریک به جای رمز عبور برای امنیت بیشتر و تجربه بهتر.',
    stat: '۷۰٪ کاهش تقلب'
  },
  {
    title: 'تأیید تراکنش‌های بزرگ',
    description: 'احراز هویت قوی برای تراکنش‌های حساس و مبالغ بالا.',
    stat: '۹۹.۹٪ امنیت'
  }
];

export function SolutionsSection() {
  return (
    <section className="py-20 lg:py-32" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-subtle)] mb-6"
          >
            <span className="text-sm text-[color:var(--brand-azure)]">راه‌حل‌ها</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            راه‌حل‌های <span className="text-brand-gradient">صنعت‌محور</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            باربُد راه‌حل‌های تخصصی برای صنایع مختلف ارائه می‌دهد
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="h-full p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] hover:border-[color:var(--border-subtle)] transition-all">
                <div className={`w-12 h-12 rounded-[var(--radius-md)] bg-gradient-to-br ${industry.gradient} bg-opacity-10 flex items-center justify-center mb-4`}>
                  <industry.icon className="w-6 h-6 text-[color:var(--brand-azure)]" />
                </div>
                
                <h3 className="text-lg mb-2">{industry.title}</h3>
                <p className="text-sm text-[color:var(--text-secondary)] mb-4">{industry.description}</p>
                
                <ul className="space-y-1">
                  {industry.features.map((feature) => (
                    <li key={feature} className="text-xs text-[color:var(--text-tertiary)] flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[color:var(--brand-azure)]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl text-center mb-12"
          >
            موارد استفاده محبوب
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)]"
              >
                <div className="text-3xl text-brand-gradient mb-3">{useCase.stat}</div>
                <h4 className="text-lg mb-2">{useCase.title}</h4>
                <p className="text-sm text-[color:var(--text-secondary)]">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-[var(--radius-lg)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)]"
        >
          <h3 className="text-xl mb-4">صنعت خود را پیدا نکردید؟</h3>
          <p className="text-[color:var(--text-secondary)] mb-6">
            با تیم ما مشورت کنید تا راه‌حل سفارشی برای نیازهای شما طراحی کنیم
          </p>
          <Button size="lg">تماس با مشاور فروش</Button>
        </motion.div>
      </div>
    </section>
  );
}
