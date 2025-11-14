'use client';

import { useEffect, useMemo, useState } from 'react';
import { Smile, Eye, MoveHorizontal, CheckCircle2, XCircle, RotateCw } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '../Button';
import { motion, AnimatePresence } from 'framer-motion';

type LivenessStepId = 'turn-right' | 'turn-left' | 'blink' | 'smile';
type LivenessResult = 'pass' | 'inconclusive' | 'retry' | null;

interface LivenessStep {
  id: LivenessStepId;
  label: string;
  helper: string;
  icon: LucideIcon;
}

const STEPS: LivenessStep[] = [
  {
    id: 'turn-right',
    label: 'Turn your head to the right',
    helper: 'Keep your chin level and stay inside the guide.',
    icon: MoveHorizontal,
  },
  {
    id: 'turn-left',
    label: 'Turn your head to the left',
    helper: 'Move slowly so the system can compare profiles.',
    icon: MoveHorizontal,
  },
  {
    id: 'blink',
    label: 'Blink twice',
    helper: 'Close both eyes naturally without tilting your head.',
    icon: Eye,
  },
  {
    id: 'smile',
    label: 'Smile naturally',
    helper: 'Hold the smile for one second to capture micro expressions.',
    icon: Smile,
  },
];

export function LivenessCheck() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [result, setResult] = useState<LivenessResult>(null);

  const currentStep = STEPS[currentStepIndex];
  const isComplete = currentStepIndex >= STEPS.length;

  const progress = useMemo(() => {
    if (result === 'pass' || isComplete) {
      return 100;
    }
    return (currentStepIndex / STEPS.length) * 100;
  }, [currentStepIndex, isComplete, result]);

  useEffect(() => {
    if (result || isComplete) {
      return;
    }
    setCountdown(3);
  }, [currentStepIndex, result, isComplete]);

  useEffect(() => {
    if (result || isComplete) {
      return;
    }
    if (countdown === 0) {
      setCurrentStepIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= STEPS.length) {
          setResult('pass');
          return STEPS.length;
        }
        return nextIndex;
      });
      return;
    }
    const timer = window.setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [countdown, result, isComplete]);

  const handleNextStep = () => {
    setCurrentStepIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex >= STEPS.length) {
        setResult('pass');
        return STEPS.length;
      }
      return nextIndex;
    });
  };

  const handleRetry = () => {
    setCurrentStepIndex(0);
    setCountdown(3);
    setResult(null);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[color:var(--surface-elevated)] rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] p-6">
        <div className="mb-6">
          <h3 className="text-xl mb-2">Liveness challenge</h3>
          <p className="text-[color:var(--text-secondary)]">
            Perform a short sequence of actions so we can confirm that a real person is in front of the camera, not a
            spoof attempt.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[color:var(--text-secondary)]">Progress</span>
            <span className="text-sm text-[color:var(--brand-azure)]">
              {Math.min(currentStepIndex, STEPS.length)}/{STEPS.length}
            </span>
          </div>
          <div className="h-2 bg-[color:var(--surface-card)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-brand-gradient rounded-full"
            />
          </div>
        </div>

        {!result && !isComplete && currentStep ? (
          <div className="relative aspect-[4/3] bg-[color:var(--bg-dim)] rounded-[var(--radius-lg)] overflow-hidden mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--surface-card)] to-[color:var(--bg-dim)]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-48 h-64 rounded-full border-4 border-[color:var(--brand-azure)] border-dashed opacity-40"
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 flex flex-col items-center justify-center px-6"
              >
                <div className="bg-[color:var(--bg-base)] bg-opacity-90 backdrop-blur-md rounded-[var(--radius-lg)] p-6 border border-[color:var(--border-subtle)] max-w-sm text-center">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center">
                    <currentStep.icon className="w-8 h-8 text-[color:var(--text-inverse)]" />
                  </div>
                  <h4 className="text-lg mb-1">{currentStep.label}</h4>
                  <p className="text-sm text-[color:var(--text-secondary)] mb-4">{currentStep.helper}</p>
                  <div className="text-3xl font-semibold text-[color:var(--brand-azure)] mb-2">{countdown}s</div>
                  <p className="text-xs text-[color:var(--text-tertiary)] mb-4">Hold the pose until the timer finishes.</p>
                  <Button variant="secondary" size="sm" onClick={handleNextStep}>
                    Mark as done
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <div className="mb-6 p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)]">
            <div className="flex flex-col items-center text-center gap-4">
              {result === 'pass' ? (
                <CheckCircle2 className="w-12 h-12 text-[color:var(--success)]" />
              ) : (
                <XCircle className="w-12 h-12 text-[color:var(--danger)]" />
              )}
              <div>
                <h4 className="text-lg mb-1">
                  {result === 'pass' ? 'Liveness confirmed' : 'Manual review required'}
                </h4>
                <p className="text-sm text-[color:var(--text-secondary)]">
                  {result === 'pass'
                    ? 'All micro-movements and depth signals look authentic.'
                    : 'We could not collect enough variation. Please retry the sequence.'}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 w-full text-sm">
                {[
                  { label: 'Frames analysed', value: '62' },
                  { label: 'Depth signal', value: 'Strong' },
                  { label: 'Spoof probability', value: '0.4%' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-3 rounded-[var(--radius-md)] bg-[color:var(--bg-base)] border border-[color:var(--border-hairline)]"
                  >
                    <p className="text-[color:var(--text-tertiary)] text-xs">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3 md:flex-row">
          <Button
            variant="secondary"
            size="lg"
            iconLeading={<RotateCw className="w-5 h-5" />}
            onClick={handleRetry}
            fullWidth
          >
            Restart flow
          </Button>
          <Button
            size="lg"
            iconLeading={<CheckCircle2 className="w-5 h-5" />}
            disabled={!result}
            fullWidth
          >
            Continue verification
          </Button>
        </div>
      </div>
    </div>
  );
}
