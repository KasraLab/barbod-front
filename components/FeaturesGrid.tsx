import { Scan, Mic, FileText, Shield, Zap, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Scan,
    title: 'تشخیص چهره',
    description: 'الگوریتم‌های پیشرفته یادگیری عمیق برای تشخیص دقیق و سریع چهره با قابلیت تشخیص زنده‌بودن (Liveness Detection)',
    gradient: 'from-[color:var(--brand-cyan)] to-[color:var(--brand-azure)]'
  },
  {
    icon: Mic,
    title: 'احراز هویت صوتی',
    description: 'تحلیل صدای منحصر به فرد هر فرد با استفاده از الگوریتم‌های بیومتریک صوتی و مقایسه با الگوهای ذخیره شده',
    gradient: 'from-[color:var(--brand-teal)] to-[color:var(--accent-cyan)]'
  },
  {
    icon: FileText,
    title: 'OCR مدارک هویتی',
    description: 'استخراج خودکار اطلاعات از شناسنامه، کارت ملی، گذرنامه و سایر مدارک با دقت بالا و تشخیص جعل',
    gradient: 'from-[color:var(--brand-azure)] to-[color:var(--brand-indigo)]'
  },
  {
    icon: Shield,
    title: 'امنیت چندلایه',
    description: 'رمزنگاری end-to-end، ذخیره‌سازی امن داده‌ها و انطباق کامل با استانداردهای GDPR و ISO 27001',
    gradient: 'from-[color:var(--success)] to-[color:var(--brand-teal)]'
  },
  {
    icon: Zap,
    title: 'عملکرد بلادرنگ',
    description: 'پردازش سریع با زیرساخت ابری مقیاس‌پذیر، احراز هویت در کمتر از ۲ ثانیه با دقت بالا',
    gradient: 'from-[color:var(--warning)] to-[color:var(--brand-cyan)]'
  },
  {
    icon: Lock,
    title: 'حریم خصوصی',
    description: 'کنترل کامل کاربر بر داده‌های خود، عدم ذخیره‌سازی دائمی بدون رضایت و قابلیت حذف کامل اطلاعات',
    gradient: 'from-[color:var(--brand-indigo)] to-[color:var(--brand-azure)]'
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-[color:var(--bg-dim)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            احراز هویت <span className="text-brand-gradient">هوشمند و امن</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            راه‌حل جامع بیومتریک برای سازمان‌های پیشرو که به دنبال امنیت بیشتر و تجربه کاربری بهتر هستند
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] hover:border-[color:var(--border-subtle)] transition-all duration-240">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-[var(--radius-md)] bg-gradient-to-br ${feature.gradient} bg-opacity-10 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-[color:var(--text-secondary)]">{feature.description}</p>

                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-[var(--radius-lg)] bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-240 pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[color:var(--text-secondary)] mb-6">
            آماده شروع هستید؟ رایگان امتحان کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-[var(--radius-md)] bg-brand-gradient text-[color:var(--text-inverse)] hover:opacity-90 transition-opacity">
              دریافت دسترسی API
            </button>
            <button className="px-6 py-3 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] text-[color:var(--text-primary)] border border-[color:var(--border-subtle)] hover:border-[color:var(--outline-focus)] transition-colors">
              مشاهده مستندات
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
