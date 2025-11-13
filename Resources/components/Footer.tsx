import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Logo } from './Logo';

const footerLinks = {
  product: {
    title: 'محصول',
    links: [
      { label: 'قابلیت‌ها', href: '#features' },
      { label: 'قیمت‌گذاری', href: '#pricing' },
      { label: 'مستندات', href: '#docs' },
      { label: 'وضعیت سرویس', href: '#status' }
    ]
  },
  company: {
    title: 'شرکت',
    links: [
      { label: 'درباره ما', href: '#about' },
      { label: 'بلاگ', href: '#blog' },
      { label: 'فرصت‌های شغلی', href: '#careers' },
      { label: 'تماس', href: '#contact' }
    ]
  },
  resources: {
    title: 'منابع',
    links: [
      { label: 'راهنمای توسعه‌دهندگان', href: '#dev-guide' },
      { label: 'API Reference', href: '#api' },
      { label: 'امنیت و حریم خصوصی', href: '#security' },
      { label: 'انطباق با قوانین', href: '#compliance' }
    ]
  },
  legal: {
    title: 'قوانین',
    links: [
      { label: 'شرایط استفاده', href: '#terms' },
      { label: 'حریم خصوصی', href: '#privacy' },
      { label: 'سیاست کوکی', href: '#cookies' },
      { label: 'مجوزها', href: '#licenses' }
    ]
  }
};

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border-hairline)] bg-[color:var(--bg-dim)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="mb-4">
              <Logo size="small" />
            </div>
            <p className="text-sm text-[color:var(--text-secondary)] mb-6 max-w-xs">
              پلتفرم احراز هویت بیومتریک پیشرفته برای سازمان‌های پیشرو. امن، سریع و قابل اعتماد.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] hover:bg-[color:var(--surface-elevated)] flex items-center justify-center transition-colors"
                aria-label="Github"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] hover:bg-[color:var(--surface-elevated)] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] hover:bg-[color:var(--surface-elevated)] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] hover:bg-[color:var(--surface-elevated)] flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[color:var(--border-hairline)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[color:var(--text-secondary)]">
              © ۱۴۰۳ باربُد. تمامی حقوق محفوظ است.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors">
                فارسی
              </button>
              <div className="w-px h-4 bg-[color:var(--border-hairline)]"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[color:var(--success)] animate-pulse-slow"></div>
                <span className="text-sm text-[color:var(--text-secondary)]">تمامی سیستم‌ها عملیاتی</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
