# باربُد (Barbod) - پلتفرم احراز هویت بیومتریک

> **Enterprise-grade biometric verification platform with face recognition, liveness detection, document OCR, and voice verification.**

پلتفرم احراز هویت بیومتریک سطح سازمانی با تشخیص چهره، تطبیق مدارک و تایید صوتی. ایمن، سریع و قابل اعتماد.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 4.0
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Language:** TypeScript
- **UI Components:** Shadcn/ui
- **Font:** Vazirmatn (Persian)

## 📦 Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

## 🏃 Running the Project

### Development Mode

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
barbod/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── biometric/          # Biometric verification components
│   │   ├── LivenessCheck.tsx
│   │   ├── SelfieCapture.tsx
│   │   ├── DocumentCapture.tsx
│   │   └── VoiceVerification.tsx
│   ├── ui/                 # Shadcn UI components
│   ├── Hero3D.tsx          # 3D Hero section
│   ├── Features3D.tsx      # 3D Features section
│   ├── Pricing3D.tsx       # 3D Pricing cards
│   ├── CTA3D.tsx           # 3D Call-to-action
│   ├── ParticleBackground.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/                    # Utilities and contexts
│   ├── language-context.tsx
│   └── translations.ts
├── styles/                 # Global styles
│   └── globals.css         # Tailwind + Custom CSS
├── public/                 # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Design System

### Colors

**Dark Theme (Default):**
- Background: `#0A1220`, `#0F172A`, `#1E293B`
- Text: `#E6F0FF`, `#A9B4C8`, `#6B7A92`
- Brand: Cyan (`#0EA5E9`) → Azure (`#3B82F6`) → Indigo (`#1E40AF`)

**Light Theme:**
- Background: `#FFFFFF`, `#F8FAFC`
- Text: `#0A1220`, `#5B6B85`

### Typography

- **Font:** Vazirmatn (Persian), JetBrains Mono (Code)
- **Headings:** 72px (H1) to 20px (H6)
- **Body:** 18px (Large), 16px (Regular), 14px (Small)

### Spacing

- `xs`: 4px
- `sm`: 8px
- `md`: 12px
- `lg`: 16px
- `xl`: 24px
- `2xl`: 32px
- `3xl`: 40px
- `4xl`: 56px
- `5xl`: 72px

## ✨ Features

### 🔐 Biometric Verification
- **Face Recognition:** Advanced AI algorithms with 99.4% accuracy
- **Liveness Detection:** Anti-spoofing with random challenges
- **Document OCR:** Extract information from passports, IDs, licenses
- **Voice Verification:** Voice biometrics with speech pattern recognition

### 🎨 3D Design Elements
- **Hero3D:** Floating cards and rotating cubes with parallax
- **Features3D:** Interactive feature cards with tilt effects
- **Pricing3D:** 3D pricing cards with hover animations
- **ParticleBackground:** Canvas-based particle system

### 🌍 RTL Support
- Full Persian (Farsi) language support
- Right-to-left layout
- Dual language (FA/EN) with context switching

### 🎯 Performance
- Server-side rendering with Next.js
- Optimized images and assets
- Code splitting and lazy loading
- CSS-in-JS with Tailwind

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=https://api.barbod.io
```

### Tailwind CSS

The project uses Tailwind CSS 4.0 with custom configuration in `tailwind.config.ts`:
- Custom colors from design system
- Extended spacing scale
- Custom border radius
- Shadow utilities

### Next.js

Configuration in `next.config.js`:
- Image optimization for Unsplash
- React strict mode
- CSS optimization (experimental)

## 📱 Responsive Design

Breakpoints:
- **Mobile:** 375px
- **Tablet:** 768px
- **Laptop:** 1024px
- **Desktop:** 1440px

## 🧩 Component Usage

### Basic Components

```tsx
import { Button } from '@/components/Button';
import { Hero3D } from '@/components/Hero3D';

export default function Page() {
  return (
    <div>
      <Hero3D />
      <Button size="lg">شروع کنید</Button>
    </div>
  );
}
```

### Biometric Components

```tsx
import { LivenessCheck } from '@/components/biometric/LivenessCheck';
import { SelfieCapture } from '@/components/biometric/SelfieCapture';

export default function VerificationPage() {
  return (
    <div>
      <LivenessCheck />
      <SelfieCapture />
    </div>
  );
}
```

## 🎭 Animations

The project uses Motion (Framer Motion) for animations:

```tsx
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## 📚 Documentation

- [Figma Design Guide](/FIGMA_DESIGN_GUIDE.md) - Complete design system documentation
- [Digital Art Guide](/DIGITAL_ART_GUIDE.md) - 3D graphics and effects guide

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 🙏 Credits

- Design System: Inspired by JetBrains
- Icons: Lucide React
- Font: Vazirmatn by Saber Rastikerdar
- Animations: Motion (Framer Motion)

---

**Made with ❤️ by Barbod Team**

**پشتیبانی:** support@barbod.io
**وب‌سایت:** https://barbod.io
