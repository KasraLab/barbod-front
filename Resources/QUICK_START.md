# ⚡ راهنمای سریع Barbod

شروع کار با پروژه Barbod در کمتر از 5 دقیقه!

## 🚀 نصب سریع

```bash
# 1. Clone repository
git clone https://github.com/your-org/barbod.git
cd barbod

# 2. نصب dependencies
npm install

# 3. کپی environment variables
cp .env.example .env.local

# 4. اجرای development server
npm run dev
```

✅ پروژه در `http://localhost:3000` اجرا شد!

## 📁 ساختار پروژه (خلاصه)

```
barbod/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout اصلی + Metadata
│   └── page.tsx           # صفحه اصلی
│
├── components/            # کامپوننت‌های React
│   ├── Hero3D.tsx        # بخش Hero با افکت 3D
│   ├── Features3D.tsx    # قابلیت‌ها با کارت‌های 3D
│   ├── Pricing3D.tsx     # قیمت‌گذاری با Tilt Effect
│   ├── Navbar.tsx        # نوار ناوبری
│   ├── Footer.tsx        # فوتر
│   └── biometric/        # کامپوننت‌های بیومتریک
│       ├── LivenessCheck.tsx
│       ├── SelfieCapture.tsx
│       ├── DocumentCapture.tsx
│       └── VoiceVerification.tsx
│
├── lib/                   # Utilities
│   ├── translations.ts   # ترجمه‌های فارسی/انگلیسی
│   └── language-context.tsx
│
├── styles/
│   └── globals.css       # استایل‌های global + Tailwind
│
└── public/               # فایل‌های static
```

## 🎨 دستورات اصلی

```bash
# Development
npm run dev              # اجرا در حالت توسعه

# Production
npm run build           # Build برای production
npm start               # اجرای production build

# Linting
npm run lint            # چک کردن کد
```

## 🔧 تنظیمات محیط (.env.local)

```env
# API
NEXT_PUBLIC_API_URL=https://api.barbod.io

# Analytics (اختیاری)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Feature Flags (اختیاری)
NEXT_PUBLIC_ENABLE_BIOMETRIC=true
```

## 📦 Stack فناوری

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 4.0
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Language:** TypeScript
- **Font:** Vazirmatn (فارسی)

## 🎯 صفحات اصلی

- `/` - صفحه اصلی با Hero3D
- Navigation state-based (قابل تبدیل به file-based)

## 💡 مثال‌های سریع کد

### ایجاد کامپوننت جدید

```tsx
// components/MyComponent.tsx
'use client';

import { motion } from 'motion/react';

export function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 bg-[color:var(--surface-card)]"
    >
      محتوای شما
    </motion.div>
  );
}
```

### استفاده از Translations

```tsx
import { useLanguage } from '@/lib/language-context';

export function MyComponent() {
  const { t } = useLanguage();
  
  return <h1>{t('hero.title')}</h1>;
}
```

### استفاده از Button

```tsx
import { Button } from '@/components/Button';

<Button size="lg" variant="primary">
  شروع کنید
</Button>
```

## 🎨 رنگ‌ها و Design Tokens

```css
/* استفاده از CSS Variables */
background: var(--bg-base);           /* #0A1220 */
color: var(--text-primary);           /* #E6F0FF */
border: var(--border-subtle);         /* #2D3A4F */

/* Tailwind Classes */
className="bg-[color:var(--surface-card)]"
className="text-[color:var(--text-secondary)]"
```

### Gradients

```tsx
{/* Text Gradient */}
<span className="text-brand-gradient">
  متن با گرادیانت
</span>

{/* Background Gradient */}
<div className="bg-brand-gradient">
  بک‌گراند با گرادیانت
</div>
```

## 🔄 Hot Reload

فایل‌های زیر تغییرات realtime دارند:
- ✅ Components (`/components`)
- ✅ Pages (`/app`)
- ✅ Styles (`/styles`)
- ⚠️ Config files نیاز به restart دارند

## 🐛 حل مشکلات سریع

### پورت ۳۰۰۰ در حال استفاده است

```bash
# پیدا کردن و kill کردن process
lsof -ti:3000 | xargs kill -9

# یا استفاده از پورت دیگر
PORT=3001 npm run dev
```

### Module not found

```bash
# حذف و نصب مجدد
rm -rf node_modules package-lock.json
npm install
```

### Tailwind classes کار نمی‌کنند

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Typescript errors

```bash
# بررسی tsconfig.json
# اطمینان از وجود paths alias:
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## 📱 Responsive Breakpoints

```tsx
{/* Mobile First Approach */}
<div className="
  p-4              /* mobile */
  md:p-8           /* tablet: 768px+ */
  lg:p-12          /* laptop: 1024px+ */
  xl:p-16          /* desktop: 1280px+ */
">
  محتوا
</div>
```

## 🎭 افکت‌های 3D

### Floating Animation

```tsx
<div className="animate-float">
  المان شناور
</div>
```

### Tilt Effect با Motion

```tsx
<motion.div
  whileHover={{ 
    scale: 1.05,
    rotateY: 5,
    rotateX: -5 
  }}
  className="preserve-3d"
>
  کارت با Tilt
</motion.div>
```

### Glow Effect

```tsx
<div className="relative">
  {/* Glow layer */}
  <div className="absolute -inset-2 bg-brand-gradient blur-xl opacity-30" />
  
  {/* Content */}
  <div className="relative">محتوا</div>
</div>
```

## 🌍 RTL Support

پروژه به صورت پیش‌فرض RTL است:

```tsx
// در layout.tsx
<html lang="fa" dir="rtl">
```

برای تغییر به LTR:
```tsx
<html lang="en" dir="ltr">
```

## 📊 Production Build

```bash
# Build
npm run build

# تست production build locally
npm start

# بررسی bundle size
ANALYZE=true npm run build
```

## 🚢 Deploy سریع

### Vercel (آسان‌ترین)

```bash
# نصب Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build image
docker build -t barbod .

# Run
docker run -p 3000:3000 barbod
```

## 📚 Documentation کامل

- 📖 [README.md](./README.md) - مستندات کامل
- 🚀 [DEPLOYMENT.md](./DEPLOYMENT.md) - راهنمای استقرار
- 🔄 [MIGRATION_TO_NEXTJS.md](./MIGRATION_TO_NEXTJS.md) - راهنمای migration
- 🎨 [FIGMA_DESIGN_GUIDE.md](./FIGMA_DESIGN_GUIDE.md) - راهنمای طراحی Figma
- 🎬 [DIGITAL_ART_GUIDE.md](./DIGITAL_ART_GUIDE.md) - راهنمای گرافیک 3D

## 🤝 کمک به پروژه

```bash
# ایجاد branch جدید
git checkout -b feature/my-feature

# Commit
git commit -m "Add: my feature"

# Push
git push origin feature/my-feature

# Create Pull Request در GitHub
```

## ⚡ Performance Tips

1. **Images:** استفاده از Next.js Image component
2. **Fonts:** استفاده از next/font
3. **Components:** استفاده از dynamic import برای components سنگین
4. **State:** استفاده از Server Components تا جایی که ممکن است

## 🔐 Security Best Practices

- ✅ Environment variables در `.env.local`
- ✅ هرگز API keys را commit نکنید
- ✅ استفاده از HTTPS در production
- ✅ Validation برای input های کاربر

## 📞 پشتیبانی

- **Email:** dev@barbod.io
- **Docs:** https://docs.barbod.io
- **GitHub Issues:** https://github.com/your-org/barbod/issues

## ✨ Features اصلی

- ✅ احراز هویت بیومتریک
- ✅ تشخیص چهره و Liveness
- ✅ OCR مدارک
- ✅ تایید صوتی
- ✅ افکت‌های 3D و انیمیشن
- ✅ پشتیبانی کامل RTL
- ✅ Dark/Light theme
- ✅ Responsive design

---

**موفق باشید! 🚀**

برای سوالات بیشتر، [مستندات کامل](./README.md) را بخوانید.
