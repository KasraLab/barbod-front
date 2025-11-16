'use client';

import { useState } from 'react';
import { Camera, RotateCcw, CheckCircle, AlertTriangle, Sun } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '../Button';
import { motion, AnimatePresence } from 'framer-motion';

type CaptureStatus = 'ready' | 'capturing' | 'captured' | 'too-dark' | 'glare' | 'out-of-frame';

const STATUS_MESSAGES: Record<CaptureStatus, string> = {
  ready: 'Align your face with the guide and keep your shoulders inside the frame.',
  capturing: 'Hold still while we check lighting, focus, and sharpness.',
  captured: 'Great lighting and symmetry detected. You can proceed.',
  'too-dark': 'Lighting is too low. Move closer to a soft light source.',
  glare: 'Glare detected on the face. Turn slightly away from harsh light.',
  'out-of-frame': 'Face left the guide. Recenter yourself before capturing again.',
};

const STATUS_ICONS: Partial<Record<CaptureStatus, LucideIcon>> = {
  ready: Camera,
  capturing: Camera,
  captured: CheckCircle,
  'too-dark': Sun,
  glare: AlertTriangle,
  'out-of-frame': AlertTriangle,
};

const SELFIE_PLACEHOLDER =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjAiIGhlaWdodD0iNDIwIiB2aWV3Qm94PSIwIDAgMzIwIDQyMCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSI0MjAiIHJ4PSIyNCIgZmlsbD0iIzBGMTcyQSIvPjxjaXJjbGUgY3g9IjE2MCIgY3k9IjE1MCIgcj0iNzAiIHN0cm9rZT0iIzM4QkRGOCIgc3Ryb2tlLXdpZHRoPSI2IiBvcGFjaXR5PSIwLjQiLz48cmVjdCB4PSIxMDAiIHk9IjI0MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHJ4PSI2MCIgZmlsbD0iIzM4QkRGOCIgb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==';

const CAPTURE_HINTS = [
  'Stand in front of a plain background and remove accessories that cover your face.',
  'Keep both shoulders inside the guide so the biometric comparison has enough context.',
  'Face a soft light source, such as a window, to avoid hard shadows or glare.',
];

export function SelfieCapture() {
  const [status, setStatus] = useState<CaptureStatus>('ready');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const setStatusSafely = (nextStatus: CaptureStatus) => {
    setStatus(nextStatus);
  };

  const handleCapture = () => {
    if (status === 'capturing') {
      return;
    }

    setStatusSafely('capturing');

    window.setTimeout(() => {
      setCapturedImage(SELFIE_PLACEHOLDER);
      setStatusSafely('captured');
    }, 1100);
  };

  const handleRetake = () => {
    setCapturedImage(null);
    setStatusSafely('ready');
  };

  const StatusIcon = STATUS_ICONS[status] ?? Camera;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[color:var(--surface-elevated)] rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] p-6">
        <div className="mb-6">
          <h3 className="text-xl mb-2">Selfie capture</h3>
          <p className="text-[color:var(--text-secondary)]">
            Capture a selfie that matches the biometric quality thresholds before proceeding to liveness
            and document checks.
          </p>
        </div>

        <div className="relative aspect-[4/3] bg-[color:var(--bg-dim)] rounded-[var(--radius-lg)] overflow-hidden mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--surface-card)] to-[color:var(--bg-dim)]" />

          <AnimatePresence>
            {capturedImage && status === 'captured' && (
              <motion.img
                key="preview"
                src={capturedImage}
                alt="Captured selfie preview"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
              />
            )}
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-64 h-80 opacity-60" viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse
                cx="100"
                cy="140"
                rx="80"
                ry="120"
                stroke={
                  status === 'captured'
                    ? 'var(--success)'
                    : status === 'capturing'
                    ? 'var(--brand-azure)'
                    : 'var(--brand-azure)'
                }
                strokeWidth="3"
                strokeDasharray="8 4"
                fill="none"
              />
              <line x1="100" y1="20" x2="100" y2="260" stroke="var(--border-subtle)" strokeWidth="1" opacity="0.3" />
              <line x1="20" y1="140" x2="180" y2="140" stroke="var(--border-subtle)" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>

          <AnimatePresence>
            <motion.div
              key={status}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-4 right-4"
            >
              <div
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-[var(--radius-md)] backdrop-blur-md border
                  ${
                    status === 'captured'
                      ? 'bg-[color:var(--success)] bg-opacity-20 border-[color:var(--success)]'
                      : status === 'ready' || status === 'capturing'
                      ? 'bg-[color:var(--brand-azure)] bg-opacity-20 border-[color:var(--brand-azure)]'
                      : 'bg-[color:var(--warning)] bg-opacity-20 border-[color:var(--warning)]'
                  }
                `}
              >
                <StatusIcon className="w-4 h-4" />
                <span className="text-sm">{STATUS_MESSAGES[status]}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 px-3 py-2 rounded-[var(--radius-md)] bg-[color:var(--bg-base)] bg-opacity-60 backdrop-blur-md border border-[color:var(--border-hairline)]">
              <Sun className="w-4 h-4 text-[color:var(--text-secondary)]" />
              <span className="text-xs text-[color:var(--text-secondary)]">
                Use indirect lighting and stand 0.5 meters from the camera to avoid exposure issues.
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6 p-4 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)]">
          <h4 className="text-sm mb-3 text-[color:var(--text-primary)]">Capture checklist</h4>
          <ul className="space-y-2 text-sm text-[color:var(--text-secondary)]">
            {CAPTURE_HINTS.map((hint) => (
              <li key={hint} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-[color:var(--success)] flex-shrink-0" />
                <span>{hint}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          {status !== 'captured' ? (
            <Button fullWidth size="lg" iconLeading={<Camera className="w-5 h-5" />} onClick={handleCapture}>
              Capture selfie
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
                Retake
              </Button>
              <Button size="lg" iconLeading={<CheckCircle className="w-5 h-5" />} fullWidth>
                Use this selfie
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
