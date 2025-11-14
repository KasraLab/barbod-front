import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'محمد رضایی',
    role: 'مدیر فناوری',
    company: 'بانک ملی',
    avatar: '👨‍💼',
    rating: 5,
    text: 'باربُد تحولی عظیم در فرآیند افتتاح حساب ما ایجاد کرد. زمان احراز هویت از ۲۰ دقیقه به کمتر از ۳۰ ثانیه رسید.',
    metric: { value: '۹۰٪', label: 'کاهش زمان' }
  },
  {
    name: 'سارا احمدی',
    role: 'مدیر محصول',
    company: 'دیجی‌کالا',
    avatar: '👩‍💼',
    rating: 5,
    text: 'امنیت و دقت تشخیص چهره باربُد بی‌نظیر است. نرخ کلاهبرداری ما ۷۵٪ کاهش یافت.',
    metric: { value: '۷۵٪', label: 'کاهش تقلب' }
  },
  {
    name: 'علی کریمی',
    role: 'CTO',
    company: 'اسنپ',
    avatar: '👨‍💻',
    rating: 5,
    text: 'یکپارچه‌سازی فوق‌العاده آسان بود. تیم پشتیبانی باربُد در تمام مراحل کنار ما بودند.',
    metric: { value: '۳ روز', label: 'زمان پیاده‌سازی' }
  },
  {
    name: 'فاطمه موسوی',
    role: 'مدیر عملیات',
    company: 'بانک پاسارگاد',
    avatar: '👩‍💼',
    rating: 5,
    text: 'مقیاس‌پذیری باربُد بی‌نظیر است. در ایام پیک ۱۰ برابر درخواست را بدون مشکل پردازش می‌کنیم.',
    metric: { value: '۱۰M+', label: 'احراز ماهانه' }
  },
  {
    name: 'حسین نوری',
    role: 'مدیر امنیت',
    company: 'تپسی',
    avatar: '👨‍💼',
    rating: 5,
    text: 'استانداردهای امنیتی و رعایت قوانین حریم خصوصی در باربُد در سطح جهانی است.',
    metric: { value: '۱۰۰٪', label: 'انطباق' }
  },
  {
    name: 'مریم صادقی',
    role: 'Product Manager',
    company: 'بانک ملت',
    avatar: '👩‍💼',
    rating: 5,
    text: 'هزینه‌های عملیاتی ما با استفاده از باربُد ۶۵٪ کاهش یافت. ROI فوق‌العاده بود.',
    metric: { value: '۶۵٪', label: 'کاهش هزینه' }
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-subtle)] mb-6"
          >
            <span className="text-sm text-[color:var(--brand-azure)]">نظرات مشتریان</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            اعتماد <span className="text-brand-gradient">سازمان‌های پیشرو</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            بیش از ۵۰۰ سازمان به باربُد اعتماد کرده‌اند
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] hover:border-[color:var(--brand-azure)] transition-all"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-[color:var(--brand-azure)] opacity-20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[color:var(--warning)] text-[color:var(--warning)]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[color:var(--text-secondary)] mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Metric */}
              <div className="p-3 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)] mb-6">
                <div className="text-2xl text-brand-gradient mb-1">{testimonial.metric.value}</div>
                <div className="text-xs text-[color:var(--text-tertiary)]">{testimonial.metric.label}</div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-gradient bg-opacity-10 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="mb-1">{testimonial.name}</div>
                  <div className="text-xs text-[color:var(--text-secondary)]">
                    {testimonial.role} - {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-[var(--radius-lg)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)]">
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-[color:var(--warning)] text-[color:var(--warning)]" />
              ))}
            </div>
            <div>
              <div className="text-3xl mb-2">۴.۹ از ۵</div>
              <div className="text-sm text-[color:var(--text-secondary)]">بر اساس +۵۰۰ نظر</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
