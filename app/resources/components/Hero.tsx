import { ArrowLeft, Play } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-brand-gradient opacity-5"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Angular accent shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-gradient opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[color:var(--brand-teal)] opacity-5 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-subtle)]">
              <span className="w-2 h-2 rounded-full bg-[color:var(--success)] animate-pulse-slow"></span>
              <span className="text-sm text-[color:var(--text-secondary)]">احراز هویت بیومتریک نسل بعد</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl">
              <span className="block mb-2">احراز هویت امن</span>
              <span className="text-brand-gradient">در کسری از ثانیه</span>
            </h1>

            <p className="text-lg text-[color:var(--text-secondary)] max-w-xl">
              باربُد با استفاده از تکنولوژی‌های پیشرفته تشخیص چهره، صدا و اسناد هویتی، امنیت و اعتماد را به سازمان شما می‌آورد. سریع، دقیق و قابل اعتماد.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" iconTrailing={<ArrowLeft className="w-5 h-5" />}>
                شروع رایگان
              </Button>
              <Button variant="secondary" size="lg" iconLeading={<Play className="w-5 h-5" />}>
                مشاهده دمو
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-[color:var(--border-hairline)]">
              <div>
                <div className="text-2xl text-brand-gradient mb-1">۹۹.۸٪</div>
                <div className="text-sm text-[color:var(--text-secondary)]">دقت تشخیص</div>
              </div>
              <div>
                <div className="text-2xl text-brand-gradient mb-1">{'<'}۲ ثانیه</div>
                <div className="text-sm text-[color:var(--text-secondary)]">زمان احراز هویت</div>
              </div>
              <div>
                <div className="text-2xl text-brand-gradient mb-1">۲۴/۷</div>
                <div className="text-sm text-[color:var(--text-secondary)]">پشتیبانی</div>
              </div>
            </div>
          </motion.div>

          {/* Code Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="angular-cut bg-[color:var(--surface-elevated)] border border-[color:var(--border-subtle)] p-6 shadow-[var(--shadow-xl)]">
              {/* Card header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-[color:var(--border-hairline)]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[color:var(--danger)]"></div>
                    <div className="w-3 h-3 rounded-full bg-[color:var(--warning)]"></div>
                    <div className="w-3 h-3 rounded-full bg-[color:var(--success)]"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 rounded bg-[color:var(--surface-card)] text-xs text-[color:var(--text-secondary)]">
                    TypeScript
                  </div>
                  <div className="px-2 py-1 rounded bg-[color:var(--success)] bg-opacity-10 text-xs text-[color:var(--success)] flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    Run
                  </div>
                </div>
              </div>

              {/* Code content */}
              <pre className="text-sm overflow-x-auto" dir="ltr">
                <code className="text-[color:var(--text-secondary)]">
{`import { Barbod } from '@barbod/sdk';

const client = new Barbod({
  apiKey: process.env.BARBOD_API_KEY
});

// Face verification
const result = await client.verify({
  type: 'face',
  image: selfieData,
  livenessCheck: true
});

if (result.confidence > 0.95) {
  console.log('✓ Verified');
}`}
                </code>
              </pre>

              {/* Confidence indicator */}
              <div className="mt-4 pt-4 border-t border-[color:var(--border-hairline)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[color:var(--text-secondary)]">Confidence Score</span>
                  <span className="text-xs text-[color:var(--success)]">97.3%</span>
                </div>
                <div className="h-1.5 bg-[color:var(--surface-card)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '97.3%' }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="h-full bg-gradient-to-r from-[color:var(--brand-cyan)] to-[color:var(--success)] rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-[var(--radius-md)] bg-[color:var(--success)] bg-opacity-10 border border-[color:var(--success)] backdrop-blur-sm"
            >
              <div className="text-sm text-[color:var(--success)]">✓ GDPR Compliant</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
