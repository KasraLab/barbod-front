'use client';

import { useMemo, useState } from 'react';
import { CreditCard, FileText, Plane, Camera, AlertCircle, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '../Button';
import { motion } from 'framer-motion';

type DocumentType = 'national-id' | 'passport' | 'driver-license';
type CaptureState = 'front' | 'back' | 'review';

interface DocumentOption {
  id: DocumentType;
  label: string;
  description: string;
  icon: LucideIcon;
}

const DOCUMENT_OPTIONS: DocumentOption[] = [
  { id: 'national-id', label: 'National ID card', description: 'Smart card with two sides', icon: CreditCard },
  { id: 'passport', label: 'Passport', description: 'Booklet with MRZ page', icon: Plane },
  { id: 'driver-license', label: 'Driver license', description: 'Plastic card with barcode', icon: FileText },
];

const OCR_RESULTS = [
  { field: 'Full name', value: 'Laleh Nazari', confidence: 98 },
  { field: 'Document number', value: 'IR-45899312', confidence: 99 },
  { field: 'Date of birth', value: '1993-05-15', confidence: 97 },
  { field: 'Expiry date', value: '2033-05-14', confidence: 96 },
];

const stagePrompts: Record<Exclude<CaptureState, 'review'>, string> = {
  front: 'Place the front of the document inside the guide and hold the camera parallel to it.',
  back: 'Flip the document and capture the backside so the barcode and hologram remain sharp.',
};

export function DocumentCapture() {
  const [selectedDoc, setSelectedDoc] = useState<DocumentType>('national-id');
  const [captureState, setCaptureState] = useState<CaptureState>('front');

  const requiresBack = selectedDoc !== 'passport';

  const progressValue = useMemo(() => {
    const stepIndex =
      captureState === 'front' ? 1 : captureState === 'back' ? (requiresBack ? 2 : 3) : 3;
    return (stepIndex / 3) * 100;
  }, [captureState, requiresBack]);

  const qualityFlags = [
    {
      id: 'glare',
      title: 'Glare detected',
      message: 'Tilt the card slightly or move away from direct sunlight.',
      active: captureState !== 'review' && selectedDoc !== 'passport',
    },
    {
      id: 'skew',
      title: 'Perspective issue',
      message: 'Hold the device parallel so that all edges are visible.',
      active: captureState === 'back' && requiresBack,
    },
  ];

  const getStageStatus = (stage: 'front' | 'back' | 'review'): 'completed' | 'current' | 'pending' => {
    if (stage === 'front') {
      return captureState === 'front' ? 'current' : 'completed';
    }

    if (stage === 'back') {
      if (!requiresBack) {
        return 'completed';
      }
      if (captureState === 'front') {
        return 'pending';
      }
      if (captureState === 'back') {
        return 'current';
      }
      return 'completed';
    }

    return captureState === 'review' ? 'current' : 'pending';
  };

  const handleCapture = () => {
    if (captureState === 'front' && requiresBack) {
      setCaptureState('back');
      return;
    }
    setCaptureState('review');
  };

  const handleRestart = () => {
    setCaptureState('front');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-[color:var(--surface-elevated)] rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] p-6">
        <div className="mb-6">
          <h3 className="text-xl mb-2">Document capture</h3>
          <p className="text-[color:var(--text-secondary)]">
            Select the document type, follow the guide, and confirm the OCR output before pushing the data to the
            verification pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-6 md:grid-cols-3">
          {DOCUMENT_OPTIONS.map((doc) => {
            const Icon = doc.icon;
            const isActive = selectedDoc === doc.id;
            return (
              <button
                key={doc.id}
                type="button"
                onClick={() => {
                  setSelectedDoc(doc.id);
                  setCaptureState('front');
                }}
                className={`
                  text-left p-4 rounded-[var(--radius-md)] border-2 transition-all
                  ${
                    isActive
                      ? 'border-[color:var(--brand-azure)] bg-[color:var(--brand-azure)] bg-opacity-10'
                      : 'border-[color:var(--border-hairline)] hover:border-[color:var(--border-subtle)]'
                  }
                `}
              >
                <Icon
                  className={`w-6 h-6 mb-3 ${isActive ? 'text-[color:var(--brand-azure)]' : 'text-[color:var(--text-secondary)]'}`}
                />
                <p className="font-medium">{doc.label}</p>
                <p className="text-xs text-[color:var(--text-secondary)] mt-1">{doc.description}</p>
              </button>
            );
          })}
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between text-xs uppercase tracking-wide text-[color:var(--text-tertiary)] mb-2">
            <span>Capture progress</span>
            <span>{Math.round(progressValue)}%</span>
          </div>
          <div className="h-2 bg-[color:var(--surface-card)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressValue}%` }}
              transition={{ duration: 0.4 }}
              className="h-full bg-brand-gradient rounded-full"
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-[color:var(--text-secondary)]">
            {(['front', 'back', 'review'] as const).map((stage) => {
              const status = getStageStatus(stage);
              return (
                <div
                  key={stage}
                  className={`
                    px-3 py-2 rounded-[var(--radius-sm)] border text-center
                    ${
                      status === 'completed'
                        ? 'border-[color:var(--success)] text-[color:var(--success)]'
                        : status === 'current'
                        ? 'border-[color:var(--brand-azure)] text-[color:var(--brand-azure)]'
                        : 'border-[color:var(--border-hairline)]'
                    }
                  `}
                >
                  {stage === 'back' && !requiresBack ? 'Back (N/A)' : stage.charAt(0).toUpperCase() + stage.slice(1)}
                </div>
              );
            })}
          </div>
        </div>

        {captureState !== 'review' ? (
          <>
            <div className="relative aspect-[3/2] bg-[color:var(--bg-dim)] rounded-[var(--radius-lg)] overflow-hidden mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--surface-card)] to-[color:var(--bg-dim)]" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full max-w-md aspect-[1.6/1] border-2 border-dashed border-[color:var(--brand-azure)] rounded-[var(--radius-md)]">
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[color:var(--brand-azure)] rounded-tr-[var(--radius-md)]" />
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[color:var(--brand-azure)] rounded-tl-[var(--radius-md)]" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[color:var(--brand-azure)] rounded-br-[var(--radius-md)]" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[color:var(--brand-azure)] rounded-bl-[var(--radius-md)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-[color:var(--text-secondary)]">
                      {captureState === 'front'
                        ? stagePrompts.front
                        : requiresBack
                        ? stagePrompts.back
                        : 'Front side captured. Move to the review step.'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 right-4 space-y-2">
                {qualityFlags
                  .filter((flag) => flag.active)
                  .map((flag) => (
                    <motion.div
                      key={flag.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-[var(--radius-md)] bg-[color:var(--warning)] bg-opacity-15 border border-[color:var(--warning)] backdrop-blur-md"
                    >
                      <AlertCircle className="w-4 h-4 text-[color:var(--warning)]" />
                      <div>
                        <p className="text-xs font-medium text-[color:var(--text-primary)]">{flag.title}</p>
                        <p className="text-xs text-[color:var(--text-secondary)]">{flag.message}</p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>

            <div className="mb-6 space-y-3 text-sm text-[color:var(--text-secondary)]">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[color:var(--success)] mt-0.5" />
                <span>Keep the document edges inside the guide to avoid cropping critical fields.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[color:var(--success)] mt-0.5" />
                <span>Disable flash if you notice hologram glare on metallic elements.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[color:var(--success)] mt-0.5" />
                <span>Hold steady for one second so the autofocus can lock on the text.</span>
              </div>
            </div>

            <div className="flex">
              <Button fullWidth size="lg" iconLeading={<Camera className="w-5 h-5" />} onClick={handleCapture}>
                {captureState === 'front' && requiresBack ? 'Capture front side' : 'Continue'}
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-6">
              <h4 className="mb-4 text-[color:var(--text-primary)]">OCR summary</h4>
              <div className="space-y-3">
                {OCR_RESULTS.map((result) => (
                  <div
                    key={result.field}
                    className="p-4 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)]"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm text-[color:var(--text-secondary)]">{result.field}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          result.confidence >= 95
                            ? 'bg-[color:var(--success)] bg-opacity-10 text-[color:var(--success)]'
                            : 'bg-[color:var(--warning)] bg-opacity-10 text-[color:var(--warning)]'
                        }`}
                      >
                        {result.confidence}% confidence
                      </span>
                    </div>
                    <div className="mb-2 font-medium text-[color:var(--text-primary)]" dir="ltr">
                      {result.value}
                    </div>
                    <div className="h-1 bg-[color:var(--bg-dim)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[color:var(--brand-cyan)] to-[color:var(--success)] rounded-full"
                        style={{ width: `${result.confidence}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 p-4 rounded-[var(--radius-md)] bg-[color:var(--info)] bg-opacity-10 border border-[color:var(--info)]">
              <p className="text-sm text-[color:var(--text-secondary)]">
                Confirm the captured data before submission. If a field looks incorrect, retake the corresponding side
                to refresh the OCR output.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row">
              <Button variant="secondary" size="lg" onClick={handleRestart} fullWidth>
                Retake photos
              </Button>
              <Button size="lg" iconLeading={<CheckCircle className="w-5 h-5" />} fullWidth>
                Approve document
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

