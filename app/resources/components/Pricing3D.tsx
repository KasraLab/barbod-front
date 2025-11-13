'use client';

import { Check, Zap, Rocket, Building2 } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'motion/react';
import { useState } from 'react';

const plans = [
  {
    name: 'استارتاپ',
    icon: Zap,
    price: 'رایگان',
    description: 'برای شروع و تست',
    features: [
      '۱,۰۰۰ احراز هویت در ماه',
      'تشخیص چهره پایه',
      'OCR ساده',
      'پشتیبانی ایمیل',
      'API Documentation',
      'نگهداری داده ۳۰ روز'
    ],
    highlighted: false,
    color: 'var(--brand-teal)',
    gradient: 'from-[#14B8A6] to-[#06B6D4]'
  },
  {
    name: 'حرفه‌ای',
    icon: Rocket,
    price: '۲,۴۹۰,۰۰۰',
    period: '/ماه',
    description: 'برای کسب‌وکارهای رو به رشد',
    features: [
      '۱۰,۰۰۰ احراز هویت در ماه',
      'تشخیص چهره پیشرفته',
      'تست زنده‌بودن',
      'OCR هوشمند',
      'پشتیبانی اولویت‌دار',
      'Webhook & Callback',
      'نگهداری داده ۹۰ روز',
      'گزارش‌های تفصیلی'
    ],
    highlighted: true,
    color: 'var(--brand-azure)',
    gradient: 'from-[#3B82F6] to-[#6366F1]'
  },
  {
    name: 'سازمانی',
    icon: Building2,
    price: 'سفارشی',
    description: 'برای سازمان‌های بزرگ',
    features: [
      'احراز هویت نامحدود',
      'تمامی قابلیت‌های حرفه‌ای',
      'تشخیص صوت',
      'امضای دیجیتال',
      'پشتیبانی ۲۴/۷',
      'مدیر حساب اختصاصی',
      'SLA تضمین شده',
      'On-Premise Deployment',
      'سفارشی‌سازی کامل'
    ],
    highlighted: false,
    color: 'var(--brand-indigo)',
    gradient: 'from-[#6366F1] to-[#8B5CF6]'
  }
];

export function Pricing3D() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[color:var(--brand-cyan)] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[color:var(--brand-indigo)] rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            پلن مناسب <span className="text-brand-gradient">خود را انتخاب کنید</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            شروع رایگان - بدون نیاز به کارت اعتباری
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 perspective-2000">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="preserve-3d"
            >
              <motion.div
                whileHover={{ 
                  scale: plan.highlighted ? 1.05 : 1.03,
                  rotateY: 5,
                  z: plan.highlighted ? 60 : 40
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`relative h-full preserve-3d group ${plan.highlighted ? 'lg:-mt-8' : ''}`}
              >
                {/* Glow Effect */}
                <div 
                  className={`absolute -inset-2 bg-gradient-to-br ${plan.gradient} rounded-[var(--radius-lg)] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`}
                  style={{ transform: 'translateZ(-20px)' }}
                ></div>

                {/* Popular Badge */}
                {plan.highlighted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-brand-gradient text-[color:var(--text-inverse)] text-sm whitespace-nowrap z-20"
                    style={{ transform: 'translateX(-50%) translateZ(30px)' }}
                  >
                    محبوب‌ترین
                  </motion.div>
                )}

                {/* Card */}
                <div className={`relative h-full p-8 rounded-[var(--radius-lg)] border transition-all duration-500 ${
                  plan.highlighted 
                    ? 'bg-[color:var(--surface-card)] border-[color:var(--brand-azure)] shadow-[var(--shadow-xl)]' 
                    : 'bg-[color:var(--surface-elevated)] border-[color:var(--border-hairline)] hover:border-[color:var(--brand-azure)]'
                }`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 rounded-[var(--radius-lg)] overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl" style={{ backgroundColor: plan.color }}></div>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <motion.div
                      animate={hoveredIndex === index ? {
                        rotateY: [0, 360],
                      } : {}}
                      transition={{ duration: 1 }}
                      className="preserve-3d"
                    >
                      <div className="relative w-14 h-14">
                        <div 
                          className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-[var(--radius-md)] opacity-20`}
                          style={{ transform: 'translateZ(10px)' }}
                        ></div>
                        <div 
                          className="absolute inset-0 bg-[color:var(--surface-card)] rounded-[var(--radius-md)] flex items-center justify-center"
                        >
                          <plan.icon className="w-7 h-7" style={{ color: plan.color }} />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl mb-2">{plan.name}</h3>
                  <p className="text-sm text-[color:var(--text-secondary)] mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl text-brand-gradient">{plan.price}</span>
                      {plan.period && (
                        <span className="text-[color:var(--text-secondary)]">{plan.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: plan.color, opacity: 0.2 }}>
                            <Check className="w-3 h-3" style={{ color: plan.color }} />
                          </div>
                        </div>
                        <span className="text-sm text-[color:var(--text-secondary)]">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.highlighted ? 'primary' : 'secondary'} 
                    fullWidth 
                    size="lg"
                    className={plan.highlighted ? 'shadow-[var(--shadow-lg)]' : ''}
                  >
                    {plan.price === 'سفارشی' ? 'تماس با فروش' : 'شروع کنید'}
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[color:var(--text-secondary)] mb-4">
            تمامی پلن‌ها شامل ۱۴ روز ضمانت بازگشت وجه می‌شوند
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[color:var(--text-tertiary)]">
            <span>✓ بدون نیاز به کارت اعتباری</span>
            <span>✓ لغو در هر زمان</span>
            <span>✓ پشتیبانی رایگان</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}