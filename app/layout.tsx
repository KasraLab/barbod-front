import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '../lib/store/StoreProvider';
import { ThemeProvider } from '../components/ThemeProvider';

export const metadata: Metadata = {
  title: 'باربُد | احراز هویت بیومتریک',
  description: 'پلتفرم احراز هویت بیومتریک سطح سازمانی با تشخیص چهره، تطبیق مدارک و تایید صوتی. ایمن، سریع و قابل اعتماد.',
  keywords: ['احراز هویت', 'بیومتریک', 'تشخیص چهره', 'KYC', 'eKYC'],
  authors: [{ name: 'Barbod Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0A1220',
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://barbod.io',
    title: 'باربُد | احراز هویت بیومتریک',
    description: 'پلتفرم احراز هویت بیومتریک سطح سازمانی',
    siteName: 'باربُد',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'باربُد | احراز هویت بیومتریک',
    description: 'پلتفرم احراز هویت بیومتریک سطح سازمانی',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <StoreProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
