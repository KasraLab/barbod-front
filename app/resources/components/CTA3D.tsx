'use client';

import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'motion/react';

export function CTA3D() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-cyan)] via-[color:var(--brand-azure)] to-[color:var(--brand-indigo)] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[color:var(--brand-cyan)] rounded-full blur-[150px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[color:var(--brand-indigo)] rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="preserve-3d"
        >
          <motion.div
            whileHover={{ scale: 1.02, rotateX: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative rounded-[var(--radius-lg)] overflow-hidden preserve-3d"
          >
            {/* 3D Glow */}
            <div 
              className="absolute -inset-4 bg-brand-gradient blur-3xl opacity-30"
              style={{ transform: 'translateZ(-30px)' }}
            ></div>

            {/* Card */}
            <div className="relative p-12 lg:p-16 rounded-[var(--radius-lg)] bg-[color:var(--surface-card)] border border-[color:var(--brand-azure)] backdrop-blur-xl angular-cut">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }}></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute top-8 right-8 preserve-3d"
              >
                <div className="w-16 h-16 rounded-full bg-brand-gradient opacity-20 blur-xl" style={{ transform: 'translateZ(20px)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[color:var(--brand-cyan)]" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="relative text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl lg:text-5xl mb-6"
                >
                  آماده شروع هستید؟
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-[color:var(--text-secondary)] max-w-2xl mx-auto mb-10"
                >
                  امروز به بیش از <span className="text-brand-gradient">۵۰۰ سازمان</span> بپیوندید که با باربُد،
                  احراز هویت دیجیتال را در عرض ثانیه‌ها انجام می‌دهند
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="group">
                      شروع رایگان
                      <ArrowLeft className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="secondary" size="lg">
                      مشاوره با تیم فروش
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 text-sm text-[color:var(--text-tertiary)]"
                >
                  بدون نیاز به کارت اعتباری • راه‌اندازی در کمتر از ۵ دقیقه
                </motion.p>
              </div>

              {/* 3D Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 grid grid-cols-3 gap-8 text-center preserve-3d"
              >
                {[
                  { value: '+۱۰M', label: 'احراز موفق' },
                  { value: '۹۹.۹٪', label: 'دقت' },
                  { value: '<۳۰s', label: 'سرعت' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 10,
                      z: 20
                    }}
                    className="preserve-3d cursor-pointer"
                  >
                    <div 
                      className="text-2xl lg:text-3xl text-brand-gradient mb-1"
                      dangerouslySetInnerHTML={{ __html: stat.value }}
                    ></div>
                    <div className="text-xs text-[color:var(--text-secondary)]">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}