import { Code, Smartphone, Globe, Cloud, Package, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './Button';

const integrationTypes = [
  {
    icon: Code,
    title: 'REST API',
    description: 'ارتباط مستقیم با API برای کنترل کامل',
    features: ['مستندات کامل', 'نمونه کدهای آماده', 'Webhook پشتیبانی']
  },
  {
    icon: Package,
    title: 'SDK و کتابخانه‌ها',
    description: 'پکیج‌های آماده برای زبان‌های مختلف',
    features: ['JavaScript/TypeScript', 'Python', 'Java', 'PHP', 'Go', 'Ruby']
  },
  {
    icon: Smartphone,
    title: 'Mobile SDK',
    description: 'پکیج موبایل برای iOS و Android',
    features: ['React Native', 'Flutter', 'Native iOS', 'Native Android']
  },
  {
    icon: Globe,
    title: 'Web Components',
    description: 'کامپوننت‌های آماده برای وب',
    features: ['React Components', 'Vue Components', 'Angular Modules']
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'ادغام با پلتفرم‌های ابری',
    features: ['AWS', 'Google Cloud', 'Azure', 'Cloudflare']
  },
  {
    icon: Cpu,
    title: 'On-Premise',
    description: 'نصب در سرور اختصاصی شما',
    features: ['کنترل کامل', 'امنیت بیشتر', 'سفارشی‌سازی']
  }
];

const useCaseCards = [
  {
    title: 'افتتاح حساب دیجیتال',
    steps: [
      'مشتری سلفی می‌گیرد',
      'تصویر مدرک هویتی',
      'تشخیص زنده‌بودن',
      'مقایسه چهره‌ها',
      'استخراج اطلاعات',
      'حساب آماده است ✓'
    ],
    color: 'var(--brand-cyan)'
  },
  {
    title: 'پرداخت بیومتریک',
    steps: [
      'کاربر وارد می‌شود',
      'تشخیص چهره',
      'تأیید هویت',
      'مجوز پرداخت',
      'تکمیل تراکنش ✓'
    ],
    color: 'var(--brand-teal)'
  },
  {
    title: 'KYC خودکار',
    steps: [
      'دریافت مدارک',
      'تأیید اصالت سند',
      'استخراج اطلاعات',
      'تطبیق با پایگاه',
      'تأیید نهایی ✓'
    ],
    color: 'var(--brand-azure)'
  }
];

export function IntegrationSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-subtle)] mb-6"
          >
            <span className="text-sm text-[color:var(--brand-azure)]">یکپارچه‌سازی</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            ادغام <span className="text-brand-gradient">آسان و سریع</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            هر روشی که ترجیح می‌دهید - ما از همه پشتیبانی می‌کنیم
          </motion.p>
        </div>

        {/* Integration Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {integrationTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] hover:border-[color:var(--brand-azure)] transition-all"
            >
              <div className="w-12 h-12 rounded-[var(--radius-md)] bg-brand-gradient bg-opacity-10 flex items-center justify-center mb-4">
                <type.icon className="w-6 h-6 text-[color:var(--brand-azure)]" />
              </div>
              <h3 className="text-lg mb-2">{type.title}</h3>
              <p className="text-sm text-[color:var(--text-secondary)] mb-4">{type.description}</p>
              <div className="flex flex-wrap gap-2">
                {type.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-2 py-1 rounded bg-[color:var(--surface-card)] text-[color:var(--text-tertiary)]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use Case Flows */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl text-center mb-12"
          >
            فرآیندهای کاری
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {useCaseCards.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)]"
              >
                <h4 className="text-lg mb-6">{useCase.title}</h4>
                <div className="space-y-3">
                  {useCase.steps.map((step, stepIndex) => (
                    <motion.div
                      key={stepIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + stepIndex * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                        style={{ backgroundColor: useCase.color, opacity: 0.2 }}
                      >
                        <span style={{ color: useCase.color }}>{stepIndex + 1}</span>
                      </div>
                      <span className="text-sm text-[color:var(--text-secondary)]">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Integration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)] p-8 lg:p-12"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl mb-4">
                شروع در <span className="text-brand-gradient">کمتر از ۵ دقیقه</span>
              </h3>
              <p className="text-[color:var(--text-secondary)] mb-6">
                با مستندات جامع ما، در کمترین زمان اولین احراز هویت خود را پیاده‌سازی کنید
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg">مشاهده مستندات</Button>
                <Button variant="secondary" size="lg">دریافت API Key</Button>
              </div>
            </div>

            <div className="p-6 rounded-[var(--radius-md)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)]">
              <div className="text-xs text-[color:var(--text-tertiary)] mb-2">Terminal</div>
              <pre className="text-sm overflow-x-auto" dir="ltr">
                <code className="text-[color:var(--success)]">
{`$ npm install @barbod/sdk

$ barbod init
✓ API Key configured
✓ Environment setup complete
✓ Ready to verify!`}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
