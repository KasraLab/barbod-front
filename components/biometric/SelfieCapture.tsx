import { useState, useRef } from 'react';
import { Camera, RotateCcw, CheckCircle, AlertTriangle, Sun } from 'lucide-react';
import { Button } from '../Button';
import { motion, AnimatePresence } from 'framer-motion';

type CaptureStatus = 'ready' | 'capturing' | 'captured' | 'too-dark' | 'glare' | 'out-of-frame';

export function SelfieCapture() {
  const [status, setStatus] = useState<CaptureStatus>('ready');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleCapture = () => {
    setStatus('captured');
    setCapturedImage('data:image/svg+xml;base64,...'); // Mock
  };

  const handleRetake = () => {
    setStatus('ready');
    setCapturedImage(null);
  };

  const statusMessages = {
    'ready': 'چهره خود را در داخل کادر قرار دهید',
    'capturing': 'در حال ثبت...',
    'captured': 'تصویر با موفقیت ثبت شد',
    'too-dark': 'نور محیط کافی نیست',
    'glare': 'تابش نور زیاد است',
    'out-of-frame': 'چهره خارج از کادر است'
  };

  const statusIcons = {
    'ready': Camera,
    'captured': CheckCircle,
    'too-dark': Sun,
    'glare': AlertTriangle,
    'out-of-frame': AlertTriangle
  };

  const StatusIcon = statusIcons[status] || Camera;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[color:var(--surface-elevated)] rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] p-6">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl mb-2">ثبت تصویر سلفی</h3>
          <p className="text-[color:var(--text-secondary)]">
            لطفاً چهره خود را در داخل کادر بیضی قرار داده و دکمه ثبت را فشار دهید
          </p>
        </div>

        {/* Camera Preview */}
        <div className="relative aspect-[4/3] bg-[color:var(--bg-dim)] rounded-[var(--radius-lg)] overflow-hidden mb-6">
          {/* Mock camera feed background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--surface-card)] to-[color:var(--bg-dim)]"></div>

          {/* Face guide overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-64 h-80 opacity-60"
              viewBox="0 0 200 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Oval guide */}
              <ellipse
                cx="100"
                cy="140"
                rx="80"
                ry="120"
                stroke={status === 'captured' ? 'var(--success)' : status === 'ready' ? 'var(--brand-azure)' : 'var(--warning)'}
                strokeWidth="3"
                strokeDasharray="8 4"
                fill="none"
              />
              
              {/* Grid lines */}
              <line x1="100" y1="20" x2="100" y2="260" stroke="var(--border-subtle)" strokeWidth="1" opacity="0.3" />
              <line x1="20" y1="140" x2="180" y2="140" stroke="var(--border-subtle)" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>

          {/* Status badge */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-4 right-4"
            >
              <div className={`
                flex items-center gap-2 px-3 py-2 rounded-[var(--radius-md)] backdrop-blur-md
                ${status === 'captured' ? 'bg-[color:var(--success)] bg-opacity-20 border border-[color:var(--success)]' : 
                  status === 'ready' ? 'bg-[color:var(--brand-azure)] bg-opacity-20 border border-[color:var(--brand-azure)]' :
                  'bg-[color:var(--warning)] bg-opacity-20 border border-[color:var(--warning)]'}
              `}>
                <StatusIcon className="w-4 h-4" />
                <span className="text-sm">{statusMessages[status]}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Lighting tips */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 px-3 py-2 rounded-[var(--radius-md)] bg-[color:var(--bg-base)] bg-opacity-60 backdrop-blur-md border border-[color:var(--border-hairline)]">
              <Sun className="w-4 h-4 text-[color:var(--text-secondary)]" />
              <span className="text-xs text-[color:var(--text-secondary)]">
                اطمینان حاصل کنید نور کافی دارید
              </span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-6 p-4 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)]">
          <h4 className="text-sm mb-3">راهنمای ثبت تصویر:</h4>
          <ul className="space-y-2 text-sm text-[color:var(--text-secondary)]">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 text-[color:var(--success)] flex-shrink-0" />
              <span>چهره خود را در مرکز کادر بیضی قرار دهید</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 text-[color:var(--success)] flex-shrink-0" />
              <span>عینک آفتابی، کلاه یا ماسک استفاده نکنید</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 text-[color:var(--success)] flex-shrink-0" />
              <span>از نور طبیعی یا نور کافی اتاق استفاده کنید</span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {status !== 'captured' ? (
            <Button
              fullWidth
              size="lg"
              iconLeading={<Camera className="w-5 h-5" />}
              onClick={handleCapture}
            >
              ثبت تصویر
            </Button>
          ) : (
            <>
              <Button
                variant="secondary"
                size="lg"
                iconLeading={<RotateCcw className="w-5 h-5" />}
                onClick={handleRetake}
                fullWidth
              >
                ثبت مجدد
              </Button>
              <Button
                size="lg"
                iconLeading={<CheckCircle className="w-5 h-5" />}
                fullWidth
              >
                تأیید و ادامه
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
