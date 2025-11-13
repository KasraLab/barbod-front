import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const faqs = [
  {
    question: 'باربُد چگونه کار می‌کند؟',
    answer: 'باربُد از الگوریتم‌های پیشرفته هوش مصنوعی برای تشخیص چهره، تست زنده‌بودن و OCR مدارک استفاده می‌کند. کاربر یک سلفی و تصویر مدرک هویتی خود را ارسال می‌کند، سیستم ما به صورت خودکار اصالت مدرک و مطابقت چهره را تأیید می‌کند.'
  },
  {
    question: 'چقدر زمان برای پیاده‌سازی نیاز است؟',
    answer: 'با مستندات جامع و SDK‌های آماده ما، می‌توانید در کمتر از ۵ دقیقه اولین تست خود را انجام دهید. برای پیاده‌سازی کامل در محیط production، معمولاً ۲-۳ روز کاری کافی است. تیم پشتیبانی ما در تمام مراحل کنار شما خواهد بود.'
  },
  {
    question: 'امنیت داده‌ها چگونه تضمین می‌شود؟',
    answer: 'ما از رمزنگاری end-to-end، ذخیره‌سازی امن با استانداردهای بین‌المللی ISO 27001 و SOC 2، و انطباق کامل با قوانین حریم خصوصی استفاده می‌کنیم. تمام داده‌های بیومتریک به صورت هش‌شده ذخیره می‌شوند و امکان بازیابی اطلاعات اصلی وجود ندارد.'
  },
  {
    question: 'آیا باربُد با قوانین ایران سازگار است؟',
    answer: 'بله، باربُد کاملاً با قوانین و مقررات ایران مطابقت دارد. ما با مراجع قانونی مرتبط همکاری نزدیک داریم و تمام استانداردهای لازم را رعایت می‌کنیم. همچنین امکان استقرار on-premise در سرورهای داخل کشور فراهم است.'
  },
  {
    question: 'دقت تشخیص چهره چقدر است؟',
    answer: 'دقت سیستم تشخیص چهره باربُد بیش از ۹۹.۹۸٪ است. ما از مدل‌های deep learning پیشرفته و داده‌های آموزشی گسترده استفاده می‌کنیم. سیستم ما همچنین قابلیت تشخیص حملات spoofing مانند استفاده از عکس یا ویدیو را دارد.'
  },
  {
    question: 'چه زبان‌های برنامه‌نویسی پشتیبانی می‌شوند؟',
    answer: 'ما SDK برای JavaScript/TypeScript، Python، Java، PHP، Ruby، Go و C# ارائه می‌دهیم. همچنین API RESTful ما با هر زبان برنامه‌نویسی که قابلیت HTTP request دارد، سازگار است. برای موبایل نیز SDK های Native و Cross-platform (React Native، Flutter) در دسترس هستند.'
  },
  {
    question: 'آیا امکان تست رایگان وجود دارد؟',
    answer: 'بله، شما می‌توانید با ثبت‌نام رایگان، تا ۱۰۰۰ احراز هویت در ماه به صورت کاملاً رایگان از باربُد استفاده کنید. برای حجم بالاتر، پلان‌های مقرون به صرفه‌ای ارائه می‌دهیم.'
  },
  {
    question: 'پشتیبانی چگونه ارائه می‌شود؟',
    answer: 'ما پشتیبانی ۲۴/۷ از طریق چت آنلاین، ایمیل و تیکت ارائه می‌دهیم. برای مشتریان Enterprise، پشتیبانی اختصاصی و مدیر حساب در نظر گرفته شده است. همچنین مستندات جامع و انجمن توسعه‌دهندگان در دسترس است.'
  },
  {
    question: 'آیا می‌توان باربُد را سفارشی‌سازی کرد؟',
    answer: 'بله، باربُد قابلیت سفارشی‌سازی گسترده‌ای دارد. شما می‌توانید رابط کاربری، فرآیند احراز هویت، آستانه‌های امنیتی و گزارش‌ها را متناسب با نیاز خود تنظیم کنید. برای نیازهای خاص، امکان توسعه ویژگی‌های اختصاصی نیز فراهم است.'
  },
  {
    question: 'در صورت قطعی سرویس چه اتفاقی می‌افتد؟',
    answer: 'باربُد با معماری High-availability و uptime بالای ۹۹.۹۹٪ طراحی شده است. در صورت بروز مشکل، سیستم‌های backup و failover به صورت خودکار فعال می‌شوند. ما SLA قوی ارائه می‌دهیم و در صورت عدم رعایت، جبران خسارت پیش‌بینی شده است.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-subtle)] mb-6"
          >
            <span className="text-sm text-[color:var(--brand-azure)]">سوالات متداول</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            پاسخ <span className="text-brand-gradient">سوالات شما</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            همه چیزی که باید درباره باربُد بدانید
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-6 text-right hover:bg-[color:var(--surface-card)] transition-colors"
              >
                <span className="text-lg">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[color:var(--surface-card)] flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[color:var(--brand-azure)]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[color:var(--brand-azure)]" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-[color:var(--border-hairline)] text-[color:var(--text-secondary)] leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 rounded-[var(--radius-lg)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)]"
        >
          <h3 className="text-xl mb-3">سوال دیگری دارید؟</h3>
          <p className="text-[color:var(--text-secondary)] mb-6">
            تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-6 py-3 rounded-[var(--radius-md)] bg-brand-gradient text-[color:var(--text-inverse)] hover:opacity-90 transition-opacity">
              شروع گفتگو
            </button>
            <button className="px-6 py-3 rounded-[var(--radius-md)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] hover:border-[color:var(--brand-azure)] transition-colors">
              ارسال ایمیل
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
