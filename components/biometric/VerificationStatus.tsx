'use client';

import { CheckCircle2, Circle, Clock, XCircle, AlertTriangle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

type StepStatus = 'completed' | 'current' | 'pending' | 'failed';

interface Step {
  id: string;
  label: string;
  status: StepStatus;
  score?: number;
  timestamp?: string;
  note?: string;
}

const STEPS: Step[] = [
  { id: 'consent', label: 'Consent captured', status: 'completed', timestamp: '14:23:15' },
  { id: 'liveness', label: 'Liveness challenge', status: 'completed', score: 96, timestamp: '14:23:42' },
  { id: 'selfie', label: 'Selfie capture', status: 'completed', score: 98, timestamp: '14:24:08' },
  { id: 'face-match', label: 'Face match vs. ID', status: 'completed', score: 94, timestamp: '14:24:15' },
  { id: 'ocr', label: 'Document OCR', status: 'completed', score: 97, timestamp: '14:24:38' },
  {
    id: 'voice',
    label: 'Voice verification',
    status: 'current',
    score: 93,
    note: 'Awaiting analyst confirmation',
  },
];

const RISK_ALERTS = [
  {
    id: 'doc',
    title: 'Document authenticity',
    status: 'Cleared',
    description: 'No trace of tampering, glare, or mismatch with template registry.',
  },
  {
    id: 'device',
    title: 'Device integrity',
    status: 'Low risk',
    description: 'Hardware, location, and IP reputation are aligned with the customer profile.',
  },
  {
    id: 'velocity',
    title: 'Velocity',
    status: 'Cleared',
    description: 'No duplicate submissions detected in the past 30 days.',
  },
];

const metricCards = [
  { label: 'Verification ID', value: '#KYC-4095' },
  { label: 'Processing time', value: '01:32' },
  { label: 'Analyst SLA', value: '< 5 min' },
];

const statusIconMap: Record<StepStatus, LucideIcon> = {
  completed: CheckCircle2,
  current: Clock,
  pending: Circle,
  failed: XCircle,
};

export function VerificationStatus() {
  const completedSteps = STEPS.filter((step) => step.status === 'completed').length;
  const totalSteps = STEPS.length;
  const overallProgress = (completedSteps / totalSteps) * 100;

  const scoredSteps = STEPS.filter((step) => typeof step.score === 'number');
  const averageScore = scoredSteps.length
    ? scoredSteps.reduce((sum, step) => sum + (step.score ?? 0), 0) / scoredSteps.length
    : null;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[color:var(--surface-elevated)] rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] p-6">
        <div className="mb-6">
          <h3 className="text-xl mb-2">Verification status</h3>
          <p className="text-[color:var(--text-secondary)]">
            Monitor every biometric step, review the aggregated risk signals, and decide whether to approve or escalate.
          </p>
        </div>

        <div className="mb-8 p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-card)]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h4 className="mb-1">Overall progress</h4>
              <p className="text-sm text-[color:var(--text-secondary)]">
                {completedSteps} of {totalSteps} checks completed
              </p>
            </div>
            {averageScore && (
              <div className="text-right">
                <div className="text-3xl font-semibold text-brand-gradient">{Math.round(averageScore)}%</div>
                <p className="text-xs text-[color:var(--text-secondary)]">Average biometric confidence</p>
              </div>
            )}
          </div>
          <div className="h-3 bg-[color:var(--bg-dim)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress}%` }}
              transition={{ duration: 0.8 }}
              className="h-full bg-brand-gradient rounded-full"
            />
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {STEPS.map((step, index) => {
            const StatusIcon = statusIconMap[step.status];
            const accentClasses =
              step.status === 'completed'
                ? 'bg-[color:var(--success)] bg-opacity-10 border-[color:var(--success)]'
                : step.status === 'current'
                ? 'bg-[color:var(--brand-azure)] bg-opacity-10 border-[color:var(--brand-azure)]'
                : step.status === 'failed'
                ? 'bg-[color:var(--danger)] bg-opacity-10 border-[color:var(--danger)]'
                : 'bg-[color:var(--surface-card)] border-[color:var(--border-hairline)]';

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded-[var(--radius-lg)] border ${accentClasses}`}
              >
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-3 flex-1 min-w-[200px]">
                    <div
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center border
                        ${
                          step.status === 'completed'
                            ? 'border-[color:var(--success)] text-[color:var(--success)]'
                            : step.status === 'current'
                            ? 'border-[color:var(--brand-azure)] text-[color:var(--brand-azure)]'
                            : step.status === 'failed'
                            ? 'border-[color:var(--danger)] text-[color:var(--danger)]'
                            : 'border-[color:var(--border-subtle)] text-[color:var(--text-tertiary)]'
                        }
                      `}
                    >
                      <StatusIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">{step.label}</p>
                      <p className="text-xs text-[color:var(--text-secondary)]">
                        {step.timestamp ? `Completed at ${step.timestamp}` : step.note ?? 'Pending execution'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[color:var(--text-secondary)]">
                    <span className="text-xs uppercase tracking-wide text-[color:var(--text-tertiary)]">Score</span>
                    <span className="text-base font-semibold">
                      {typeof step.score === 'number' ? `${step.score}%` : step.status === 'completed' ? 'N/A' : '--'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
          {metricCards.map((metric) => (
            <div
              key={metric.label}
              className="p-4 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)]"
            >
              <p className="text-xs text-[color:var(--text-tertiary)] mb-1">{metric.label}</p>
              <p className="text-xl font-semibold text-[color:var(--text-primary)]">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <h4 className="text-sm uppercase tracking-wide text-[color:var(--text-tertiary)]">Risk summary</h4>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {RISK_ALERTS.map((alert) => (
              <div
                key={alert.id}
                className="p-4 rounded-[var(--radius-md)] bg-[color:var(--bg-base)] border border-[color:var(--border-hairline)]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-[color:var(--brand-azure)]" />
                  <p className="font-medium">{alert.title}</p>
                </div>
                <p className="text-xs text-[color:var(--text-tertiary)] mb-1">{alert.status}</p>
                <p className="text-sm text-[color:var(--text-secondary)]">{alert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
