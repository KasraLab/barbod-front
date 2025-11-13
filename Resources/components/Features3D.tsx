'use client';

import { Scan, Shield, Zap, Lock, Eye, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const features = [
  {
    icon: Scan,
    title: 'تشخیص چهره',
    description: 'الگوریتم‌های پیشرفته AI برای تشخیص دقیق و سریع چهره',
    color: 'var(--brand-cyan)',
    gradient: 'from-[#00C9FF] to-[#3B82F6]'
  },
  {
    icon: Eye,
    title: 'تست زنده‌بودن',
    description: 'جلوگیری از حملات spoofing با تکنولوژی liveness detection',
    color: 'var(--brand-azure)',
    gradient: 'from-[#3B82F6] to-[#6366F1]'
  },
  {
    icon: FileCheck,
    title: 'OCR هوشمند',
    description: 'استخراج خودکار اطلاعات از مدارک هویتی با دقت بالا',
    color: 'var(--brand-indigo)',
    gradient: 'from-[#6366F1] to-[#8B5CF6]'
  },
  {
    icon: Shield,
    title: 'امنیت پیشرفته',
    description: 'رمزنگاری end-to-end و انطباق با استانداردهای بین‌المللی',
    color: 'var(--success)',
    gradient: 'from-[#10B981] to-[#14B8A6]'
  },
  {
    icon: Zap,
    title: 'سرعت بالا',
    description: 'پردازش در کمتر از ۳۰ ثانیه با زیرساخت ابری مقیاس‌پذیر',
    color: 'var(--warning)',
    gradient: 'from-[#F59E0B] to-[#EF4444]'
  },
  {
    icon: Lock,
    title: 'حریم خصوصی',
    description: 'ذخیره‌سازی امن داده‌ها با رعایت کامل قوانین GDPR',
    color: 'var(--brand-teal)',
    gradient: 'from-[#14B8A6] to-[#06B6D4]'
  }
];

export function Features3D() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
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
            <span className="text-sm text-[color:var(--brand-azure)]">قابلیت‌ها</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            تکنولوژی <span className="text-brand-gradient">نسل بعد</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            همه چیز برای احراز هویت کامل در یک پلتفرم
          </motion.p>
        </div>

        {/* 3D Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: -5,
                  z: 50
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative h-full preserve-3d group"
              >
                {/* Glow Effect */}
                <div 
                  className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-[var(--radius-lg)] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  style={{ transform: 'translateZ(-10px)' }}
                ></div>

                {/* Card */}
                <div className="relative h-full p-8 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] group-hover:border-[color:var(--brand-azure)] transition-all duration-500 angular-cut overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: feature.color }}></div>
                  </div>

                  {/* 3D Icon Container */}
                  <div className="relative mb-6">
                    <motion.div
                      animate={hoveredIndex === index ? {
                        rotateY: [0, 360],
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{ duration: 1 }}
                      className="preserve-3d"
                    >
                      <div className="relative w-16 h-16 rounded-[var(--radius-md)]">
                        {/* 3D Layers */}
                        <div 
                          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-[var(--radius-md)] opacity-20`}
                          style={{ transform: 'translateZ(10px)' }}
                        ></div>
                        <div 
                          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-[var(--radius-md)] opacity-30`}
                          style={{ transform: 'translateZ(5px)' }}
                        ></div>
                        <div 
                          className="absolute inset-0 bg-[color:var(--surface-card)] rounded-[var(--radius-md)] flex items-center justify-center"
                          style={{ transform: 'translateZ(0px)' }}
                        >
                          <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl mb-3">{feature.title}</h3>
                    <p className="text-[color:var(--text-secondary)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={hoveredIndex === index ? { width: '100%' } : { width: 0 }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient}`}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 3D Stats Display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 preserve-3d"
        >
          <div className="relative p-12 rounded-[var(--radius-lg)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)] overflow-hidden">
            {/* 3D Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-gradient blur-[100px] animate-pulse-slow"></div>
            </div>

            <div className="relative grid sm:grid-cols-3 gap-8 text-center">
              {[
                { value: '۹۹.۹۸٪', label: 'دقت تشخیص', icon: '🎯' },
                { value: '<۳۰s', label: 'سرعت پردازش', icon: '⚡' },
                { value: '+۱۰M', label: 'احراز ماهانه', icon: '📊' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 10,
                    z: 30
                  }}
                  className="preserve-3d group cursor-pointer"
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div 
                    className="text-3xl lg:text-4xl mb-2 text-brand-gradient"
                    dangerouslySetInnerHTML={{ __html: stat.value }}
                  ></div>
                  <div className="text-sm text-[color:var(--text-secondary)]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}