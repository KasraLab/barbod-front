import { Book, Code2, Zap, Shield, FileText, PlayCircle, Github, MessageCircle } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';

const docCategories = [
  {
    icon: Zap,
    title: 'شروع سریع',
    description: 'در عرض ۵ دقیقه اولین احراز هویت خود را پیاده‌سازی کنید',
    link: '#quick-start',
    color: 'var(--warning)'
  },
  {
    icon: Code2,
    title: 'راهنمای API',
    description: 'مستندات کامل تمامی endpoint‌ها و پارامترها',
    link: '#api-reference',
    color: 'var(--brand-azure)'
  },
  {
    icon: Book,
    title: 'آموزش‌های گام به گام',
    description: 'راهنماهای جامع برای پیاده‌سازی هر قابلیت',
    link: '#tutorials',
    color: 'var(--brand-teal)'
  },
  {
    icon: Shield,
    title: 'امنیت و بهترین شیوه‌ها',
    description: 'توصیه‌های امنیتی و استانداردهای صنعت',
    link: '#security',
    color: 'var(--success)'
  },
  {
    icon: FileText,
    title: 'نمونه‌های کد',
    description: 'کدهای آماده برای زبان‌های مختلف',
    link: '#examples',
    color: 'var(--brand-indigo)'
  },
  {
    icon: PlayCircle,
    title: 'ویدیوهای آموزشی',
    description: 'آموزش تصویری قابلیت‌های مختلف',
    link: '#videos',
    color: 'var(--danger)'
  }
];

const sdkLanguages = [
  { name: 'JavaScript / TypeScript', icon: '🟨', popularity: 95 },
  { name: 'Python', icon: '🐍', popularity: 90 },
  { name: 'Java', icon: '☕', popularity: 85 },
  { name: 'PHP', icon: '🐘', popularity: 80 },
  { name: 'Ruby', icon: '💎', popularity: 75 },
  { name: 'Go', icon: '🔷', popularity: 85 },
  { name: 'C# / .NET', icon: '🔵', popularity: 80 },
  { name: 'Swift', icon: '🍎', popularity: 70 }
];

const popularGuides = [
  {
    title: 'پیاده‌سازی تشخیص چهره',
    description: 'راهنمای کامل برای افزودن قابلیت تشخیص چهره به اپلیکیشن',
    time: '۱۰ دقیقه',
    level: 'مبتدی'
  },
  {
    title: 'تست زنده‌بودن پیشرفته',
    description: 'پیاده‌سازی liveness detection برای جلوگیری از حملات spoofing',
    time: '۱۵ دقیقه',
    level: 'متوسط'
  },
  {
    title: 'OCR و استخراج اطلاعات',
    description: 'نحوه استخراج خودکار اطلاعات از مدارک هویتی',
    time: '۱۲ دقیقه',
    level: 'مبتدی'
  },
  {
    title: 'ادغام با سیستم‌های موجود',
    description: 'اتصال باربُد به زیرساخت فعلی سازمان شما',
    time: '۲۰ دقیقه',
    level: 'پیشرفته'
  }
];

export function DocsSection() {
  return (
    <section className="py-20 lg:py-32 bg-[color:var(--bg-dim)]" id="docs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-subtle)] mb-6"
          >
            <span className="text-sm text-[color:var(--brand-azure)]">مستندات</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            همه چیز برای <span className="text-brand-gradient">شروع سریع</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            مستندات جامع، نمونه کدها و پشتیبانی برای پیاده‌سازی سریع
          </motion.p>
        </div>

        {/* Quick Start Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="angular-cut bg-[color:var(--surface-elevated)] border border-[color:var(--border-subtle)] p-6 shadow-[var(--shadow-xl)]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-[color:var(--brand-azure)]" />
                <span className="text-sm">نصب و راه‌اندازی</span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded bg-[color:var(--surface-card)] text-xs hover:bg-[color:var(--bg-dim)] transition-colors">
                  کپی کد
                </button>
              </div>
            </div>
            <pre className="text-sm overflow-x-auto" dir="ltr">
              <code className="text-[color:var(--text-secondary)]">
{`# نصب SDK
npm install @barbod/sdk

# یا
yarn add @barbod/sdk

# استفاده
import { Barbod } from '@barbod/sdk';

const client = new Barbod({
  apiKey: process.env.BARBOD_API_KEY,
  environment: 'production'
});

// احراز هویت چهره
const result = await client.face.verify({
  image: imageData,
  livenessCheck: true,
  threshold: 0.95
});

if (result.success) {
  console.log('✓ Verified:', result.confidence);
}`}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Documentation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {docCategories.map((category, index) => (
            <motion.a
              key={category.title}
              href={category.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group block"
            >
              <div className="h-full p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] hover:border-[color:var(--brand-azure)] transition-all">
                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6" style={{ color: category.color }} />
                </div>
                <h3 className="text-lg mb-2">{category.title}</h3>
                <p className="text-sm text-[color:var(--text-secondary)]">{category.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* SDK Languages */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl text-center mb-12"
          >
            SDK برای زبان‌های محبوب
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sdkLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] hover:border-[color:var(--brand-azure)] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{lang.icon}</span>
                  <span className="text-sm">{lang.name}</span>
                </div>
                <div className="h-1.5 bg-[color:var(--surface-card)] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-brand-gradient rounded-full"
                    style={{ width: `${lang.popularity}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Popular Guides */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl text-center mb-12"
          >
            راهنماهای محبوب
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {popularGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] hover:border-[color:var(--brand-azure)] transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg">{guide.title}</h4>
                  <Book className="w-5 h-5 text-[color:var(--brand-azure)] flex-shrink-0" />
                </div>
                <p className="text-sm text-[color:var(--text-secondary)] mb-4">{guide.description}</p>
                <div className="flex items-center gap-4 text-xs text-[color:var(--text-tertiary)]">
                  <span className="flex items-center gap-1">
                    ⏱️ {guide.time}
                  </span>
                  <span className={`px-2 py-1 rounded ${
                    guide.level === 'مبتدی' ? 'bg-[color:var(--success)] bg-opacity-10 text-[color:var(--success)]' :
                    guide.level === 'متوسط' ? 'bg-[color:var(--warning)] bg-opacity-10 text-[color:var(--warning)]' :
                    'bg-[color:var(--danger)] bg-opacity-10 text-[color:var(--danger)]'
                  }`}>
                    {guide.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Support Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] text-center">
            <Github className="w-10 h-10 mx-auto mb-4 text-[color:var(--brand-azure)]" />
            <h4 className="mb-2">نمونه‌های GitHub</h4>
            <p className="text-sm text-[color:var(--text-secondary)] mb-4">
              پروژه‌های آماده و کاملاً کارآمد
            </p>
            <Button variant="ghost" size="sm">مشاهده مخزن</Button>
          </div>

          <div className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] text-center">
            <MessageCircle className="w-10 h-10 mx-auto mb-4 text-[color:var(--brand-teal)]" />
            <h4 className="mb-2">انجمن توسعه‌دهندگان</h4>
            <p className="text-sm text-[color:var(--text-secondary)] mb-4">
              سوالات خود را بپرسید و تجربه بگیرید
            </p>
            <Button variant="ghost" size="sm">عضویت در انجمن</Button>
          </div>

          <div className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] text-center">
            <PlayCircle className="w-10 h-10 mx-auto mb-4 text-[color:var(--danger)]" />
            <h4 className="mb-2">پشتیبانی زنده</h4>
            <p className="text-sm text-[color:var(--text-secondary)] mb-4">
              مستقیم با تیم پشتیبانی صحبت کنید
            </p>
            <Button variant="ghost" size="sm">شروع گفتگو</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
