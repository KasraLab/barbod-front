# 🚀 راهنمای استقرار Barbod با Next.js

این راهنما مراحل استقرار پروژه Barbod را در محیط‌های مختلف توضیح می‌دهد.

## 📋 پیش‌نیازها

- Node.js 18.0 یا بالاتر
- npm, yarn یا pnpm
- Git

## 🔧 تنظیمات اولیه

### 1. نصب Dependencies

```bash
npm install
```

### 2. تنظیم Environment Variables

فایل `.env.local` بسازید:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.barbod.io
NEXT_PUBLIC_APP_URL=https://barbod.io

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Feature Flags (optional)
NEXT_PUBLIC_ENABLE_BIOMETRIC=true
NEXT_PUBLIC_ENABLE_VOICE=true
```

### 3. Build برای Production

```bash
npm run build
```

## ☁️ استقرار در Vercel (توصیه می‌شود)

Vercel بهترین گزینه برای Next.js است.

### مراحل استقرار:

1. **ایجاد حساب Vercel**
   - به [vercel.com](https://vercel.com) بروید
   - Sign up با GitHub

2. **Import پروژه**
   ```bash
   # نصب Vercel CLI
   npm install -g vercel

   # Login
   vercel login

   # Deploy
   vercel
   ```

3. **تنظیمات در Dashboard**
   - Environment Variables را در Settings اضافه کنید
   - Domain سفارشی را متصل کنید
   - SSL خودکار فعال می‌شود

### تنظیمات پیشرفته Vercel:

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "framework": "nextjs",
  "regions": ["iad1"],
  "github": {
    "autoAlias": true
  }
}
```

## 🌐 استقرار در Netlify

### مراحل:

1. **Connect Repository**
   - وارد Netlify شوید
   - "New site from Git" را کلیک کنید
   - Repository خود را انتخاب کنید

2. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

3. **Environment Variables**
   - در Site settings → Environment variables
   - متغیرهای `.env.local` را اضافه کنید

### netlify.toml

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🐳 استقرار با Docker

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  barbod:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_API_URL=https://api.barbod.io
    restart: unless-stopped
```

### دستورات Docker:

```bash
# Build image
docker build -t barbod:latest .

# Run container
docker run -p 3000:3000 barbod:latest

# با docker-compose
docker-compose up -d
```

## 🚢 استقرار در AWS

### AWS Amplify

1. **Setup AWS Amplify**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   ```

3. **Deploy**
   ```bash
   amplify publish
   ```

### AWS EC2

1. **Launch EC2 Instance** (Ubuntu 22.04)

2. **Install Dependencies**
   ```bash
   # SSH to EC2
   ssh -i key.pem ubuntu@your-ip

   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Install PM2
   sudo npm install -g pm2
   ```

3. **Deploy Application**
   ```bash
   # Clone repository
   git clone https://github.com/your-org/barbod.git
   cd barbod

   # Install and build
   npm install
   npm run build

   # Start with PM2
   pm2 start npm --name "barbod" -- start
   pm2 save
   pm2 startup
   ```

4. **Setup Nginx**
   ```nginx
   # /etc/nginx/sites-available/barbod
   server {
       listen 80;
       server_name barbod.io www.barbod.io;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   ```bash
   # Enable site
   sudo ln -s /etc/nginx/sites-available/barbod /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

## 🔒 SSL با Let's Encrypt

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate SSL
sudo certbot --nginx -d barbod.io -d www.barbod.io

# Auto-renewal
sudo certbot renew --dry-run
```

## 📊 Monitoring & Analytics

### PM2 Monitoring

```bash
# Install PM2
npm install -g pm2

# Start with monitoring
pm2 start npm --name barbod -- start
pm2 monit

# Logs
pm2 logs barbod
```

### Google Analytics

در `app/layout.tsx`:

```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## ⚡ Performance Optimization

### 1. Image Optimization

```tsx
import Image from 'next/image';

<Image
  src="/hero-bg.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority
  quality={85}
/>
```

### 2. Font Optimization

```tsx
// app/layout.tsx
import { Vazirmatn } from 'next/font/google';

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  display: 'swap',
});
```

### 3. Bundle Analysis

```bash
# Install analyzer
npm install @next/bundle-analyzer

# Analyze
ANALYZE=true npm run build
```

```js
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // ... your config
});
```

## 🔄 CI/CD Pipeline

### GitHub Actions

`.github/workflows/deploy.yml`:

```yaml
name: Deploy Barbod

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_API_URL: ${{ secrets.API_URL }}

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🛠️ Troubleshooting

### مشکلات رایج:

1. **Build Failed**
   ```bash
   # Clear cache
   rm -rf .next
   npm run build
   ```

2. **Module Not Found**
   ```bash
   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Port Already in Use**
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   ```

4. **Font Not Loading**
   - Check CDN در `globals.css`
   - Verify font files در `/public/fonts`

## 📈 Performance Benchmarks

بعد از استقرار، این معیارها را بررسی کنید:

- **Lighthouse Score:** >90
- **First Contentful Paint:** <1.5s
- **Time to Interactive:** <3.5s
- **Cumulative Layout Shift:** <0.1

## 🔐 Security Checklist

- [ ] Environment variables در `.env.local` (not committed)
- [ ] HTTPS enabled (SSL certificate)
- [ ] Security headers configured
- [ ] CORS properly set
- [ ] Rate limiting enabled
- [ ] Input validation on all forms
- [ ] XSS protection
- [ ] CSRF tokens

## 📞 Support

برای مشکلات استقرار:
- **Email:** devops@barbod.io
- **Docs:** https://docs.barbod.io
- **Discord:** https://discord.gg/barbod

---

**به‌روزرسانی:** November 2025
**نسخه:** 1.0.0
