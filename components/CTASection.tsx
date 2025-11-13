import { ArrowLeft, Code2 } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-brand-gradient"></div>
      
      {/* Diagonal pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        )`
      }}></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="angular-cut bg-[color:var(--bg-base)] bg-opacity-90 backdrop-blur-xl border border-[color:var(--text-inverse)] border-opacity-20 p-12 lg:p-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-6xl mb-6">
                آماده شروع هستید؟
              </h2>
              <p className="text-lg lg:text-xl text-[color:var(--text-secondary)] max-w-2xl mx-auto">
                در عرض چند دقیقه، احراز هویت بیومتریک را در اپلیکیشن خود پیاده‌سازی کنید
              </p>
            </motion.div>

            {/* Code snippet preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] text-right"
              dir="ltr"
            >
              <div className="flex items-center gap-2 mb-4 text-[color:var(--text-secondary)] text-sm">
                <Code2 className="w-4 h-4" />
                <span>Quick Start</span>
              </div>
              <pre className="text-sm overflow-x-auto">
                <code className="text-[color:var(--text-secondary)]">
{`npm install @barbod/sdk

import { Barbod } from '@barbod/sdk';

const barbod = new Barbod({
  apiKey: 'your_api_key'
});

await barbod.verify({
  type: 'face',
  image: imageData
});`}
                </code>
              </pre>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="xl"
                iconTrailing={<ArrowLeft className="w-5 h-5" />}
              >
                شروع رایگان
              </Button>
              <Button
                variant="secondary"
                size="xl"
              >
                مشاهده مستندات
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-[color:var(--border-hairline)] flex flex-wrap items-center justify-center gap-8 text-sm text-[color:var(--text-secondary)]"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[color:var(--success)]"></div>
                <span>بدون نیاز به کارت اعتباری</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[color:var(--success)]"></div>
                <span>۱۴ روز تست رایگان</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[color:var(--success)]"></div>
                <span>لغو در هر زمان</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
