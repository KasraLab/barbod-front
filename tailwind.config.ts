import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': 'var(--bg-base)',
        'bg-dim': 'var(--bg-dim)',
        'surface-elevated': 'var(--surface-elevated)',
        'surface-card': 'var(--surface-card)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-inverse': 'var(--text-inverse)',
        'brand-cyan': 'var(--brand-cyan)',
        'brand-azure': 'var(--brand-azure)',
        'brand-indigo': 'var(--brand-indigo)',
        'brand-teal': 'var(--brand-teal)',
        'accent-cyan': 'var(--accent-cyan)',
      },
      fontFamily: {
        vazirmatn: ['Vazirmatn', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '56px',
        '5xl': '72px',
      },
    },
  },
  plugins: [],
};

export default config;
