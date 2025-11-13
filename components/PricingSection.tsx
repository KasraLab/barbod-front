import { Check } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'استارتر',
    price: '۴۹۹,۰۰۰',
    period: 'ماهانه',
    description: 'برای استارتاپ‌ها و کسب‌وکارهای کوچک',
    features: [
      'تا ۱,۰۰۰ احراز هویت در ماه',
      'تشخیص چهره و تست زنده‌بودن',
      'OCR مدارک هویتی',
      'پشتیبانی ایمیلی',
      'داشبورد مدیریت',
      'API دسترسی'
    ],
    highlighted: false
  },
  {
    name: 'حرفه‌ای',
    price: '۱,۹۹۹,۰۰۰',
    period: 'ماهانه',
    description: 'برای کسب‌وکارهای در حال رشد',
    features: [
      'تا ۱۰,۰۰۰ احراز هویت در ماه',
      'تمام قابلیت‌های استارتر',
      'احراز هویت صوتی',
      'تطابق چهره پیشرفته',
      'پشتیبانی ۲۴/۷',
      'Webhook و رویدادها',
      'گزارشات تحلیلی',
      'تیم تا ۵ نفر'
    ],
    highlighted: true
  },
  {
    name: 'سازمانی',
    price: 'سفارشی',
    period: '',
    description: 'برای سازمان‌های بزرگ',
    features: [
      'احراز هویت نامحدود',
      'تمام قابلیت‌های حرفه‌ای',
      'SLA اختصاصی',
      'مدیریت تیم پیشرفته',
      'SSO و امنیت سازمانی',
      'سفارشی‌سازی کامل',
      'مشاور اختصاصی',
      'آموزش و onboarding'
    ],
    highlighted: false
  }
];

export function PricingSection() {
  return (
    <section className="py-20 lg:py-32" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-subtle)] mb-6"
          >
            <span className="text-sm text-[color:var(--brand-azure)]">قیمت‌گذاری</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            پلن مناسب خود را <span className="text-brand-gradient">انتخاب کنید</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            با قیمت‌گذاری شفاف و منصفانه، هر کسب‌وکاری می‌تواند از امنیت بیومتریک بهره‌مند شود
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="px-4 py-1 rounded-full bg-brand-gradient text-[color:var(--text-inverse)] text-sm">
                    محبوب‌ترین
                  </div>
                </div>
              )}

              <div className={`
                h-full p-8 rounded-[var(--radius-lg)] border-2 transition-all duration-240
                ${plan.highlighted 
                  ? 'border-[color:var(--brand-azure)] bg-[color:var(--surface-elevated)] shadow-[var(--shadow-xl)]' 
                  : 'border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)] hover:border-[color:var(--border-subtle)]'
                }
              `}>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl mb-2">{plan.name}</h3>
                  <p className="text-sm text-[color:var(--text-secondary)] mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    {plan.price !== 'سفارشی' ? (
                      <>
                        <span className="text-3xl">{plan.price}</span>
                        <span className="text-[color:var(--text-secondary)]">تومان</span>
                        <span className="text-sm text-[color:var(--text-tertiary)]">/ {plan.period}</span>
                      </>
                    ) : (
                      <span className="text-3xl">{plan.price}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[color:var(--success)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[color:var(--text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  fullWidth
                  size="lg"
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                >
                  {plan.price === 'سفارشی' ? 'تماس با فروش' : 'شروع کنید'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)]"
        >
          <p className="text-[color:var(--text-secondary)] mb-4">
            سوالی دارید؟ تیم ما آماده پاسخگویی است
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="ghost">مشاهده سوالات متداول</Button>
            <Button variant="secondary">تماس با پشتیبانی</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
