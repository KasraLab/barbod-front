import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

const comparisonFeatures = [
  {
    category: 'احراز هویت',
    features: [
      { name: 'تشخیص چهره با AI', barbod: true, traditional: false },
      { name: 'تشخیص زنده‌بودن', barbod: true, traditional: false },
      { name: 'OCR هوشمند', barbod: true, traditional: false },
      { name: 'مراجعه حضوری', barbod: false, traditional: true }
    ]
  },
  {
    category: 'سرعت و تجربه',
    features: [
      { name: 'احراز در کمتر از ۳۰ ثانیه', barbod: true, traditional: false },
      { name: 'دسترسی ۲۴/۷', barbod: true, traditional: false },
      { name: 'احراز از خانه', barbod: true, traditional: false },
      { name: 'صف و انتظار', barbod: false, traditional: true }
    ]
  },
  {
    category: 'هزینه و مقیاس‌پذیری',
    features: [
      { name: 'کاهش ۷۰٪ هزینه', barbod: true, traditional: false },
      { name: 'مقیاس‌پذیری نامحدود', barbod: true, traditional: false },
      { name: 'نیاز به نیروی انسانی کم', barbod: true, traditional: false },
      { name: 'هزینه‌های عملیاتی بالا', barbod: false, traditional: true }
    ]
  },
  {
    category: 'امنیت',
    features: [
      { name: 'جلوگیری از تقلب با AI', barbod: true, traditional: false },
      { name: 'رمزنگاری end-to-end', barbod: true, traditional: true },
      { name: 'گزارش‌دهی لحظه‌ای', barbod: true, traditional: false },
      { name: 'خطای انسانی', barbod: false, traditional: true }
    ]
  }
];

export function ComparisonSection() {
  return (
    <section className="py-20 lg:py-32 bg-[color:var(--bg-dim)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            چرا <span className="text-brand-gradient">باربُد</span>؟
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            مقایسه احراز هویت دیجیتال با روش‌های سنتی
          </motion.p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Headers */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 rounded-[var(--radius-lg)] bg-brand-gradient text-center"
            >
              <div className="text-[color:var(--text-inverse)] mb-1">باربُد</div>
              <div className="text-xs text-[color:var(--text-inverse)] opacity-80">احراز دیجیتال</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] text-center"
            >
              <div className="mb-1">روش سنتی</div>
              <div className="text-xs text-[color:var(--text-secondary)]">احراز حضوری</div>
            </motion.div>
          </div>

          {/* Comparison Categories */}
          <div className="space-y-8">
            {comparisonFeatures.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] overflow-hidden"
              >
                <div className="p-4 bg-[color:var(--surface-card)] border-b border-[color:var(--border-hairline)]">
                  <h3 className="text-lg">{category.category}</h3>
                </div>

                <div className="divide-y divide-[color:var(--border-hairline)]">
                  {category.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + featureIndex * 0.05 }}
                      className="grid grid-cols-3 gap-4 p-4 hover:bg-[color:var(--surface-card)] transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="text-sm">{feature.name}</span>
                      </div>

                      <div className="flex items-center justify-center">
                        {feature.barbod ? (
                          <div className="w-8 h-8 rounded-full bg-[color:var(--success)] bg-opacity-10 flex items-center justify-center">
                            <Check className="w-5 h-5 text-[color:var(--success)]" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-[color:var(--danger)] bg-opacity-10 flex items-center justify-center">
                            <X className="w-5 h-5 text-[color:var(--danger)]" />
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-center">
                        {feature.traditional ? (
                          <div className="w-8 h-8 rounded-full bg-[color:var(--success)] bg-opacity-10 flex items-center justify-center">
                            <Check className="w-5 h-5 text-[color:var(--success)]" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-[color:var(--danger)] bg-opacity-10 flex items-center justify-center">
                            <X className="w-5 h-5 text-[color:var(--danger)]" />
                          </div>
                        )}
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
          className="mt-16 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl mb-2 text-brand-gradient">۸۵٪</div>
            <div className="text-sm text-[color:var(--text-secondary)]">کاهش زمان احراز هویت</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2 text-brand-gradient">۷۰٪</div>
            <div className="text-sm text-[color:var(--text-secondary)]">کاهش هزینه‌های عملیاتی</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2 text-brand-gradient">۹۵٪</div>
            <div className="text-sm text-[color:var(--text-secondary)]">رضایت مشتریان</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
