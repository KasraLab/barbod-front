import { CheckCircle2, Circle, Clock, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

type StepStatus = 'completed' | 'current' | 'pending' | 'failed';

interface Step {
  id: string;
  label: string;
  status: StepStatus;
  score?: number;
  timestamp?: string;
}

const steps: Step[] = [
  { id: 'consent', label: 'موافقتنامه', status: 'completed', timestamp: '14:23:15' },
  { id: 'liveness', label: 'تست زنده‌بودن', status: 'completed', score: 96, timestamp: '14:23:42' },
  { id: 'selfie', label: 'ثبت سلفی', status: 'completed', score: 98, timestamp: '14:24:08' },
  { id: 'face-match', label: 'تطابق چهره', status: 'completed', score: 94, timestamp: '14:24:15' },
  { id: 'ocr', label: 'OCR مدرک', status: 'completed', score: 97, timestamp: '14:24:38' },
  { id: 'voice', label: 'احراز صوتی', status: 'current', score: 93 }
];

export function VerificationStatus() {
  const completedSteps = steps.filter(s => s.status === 'completed').length;
  const totalSteps = steps.length;
  const overallProgress = (completedSteps / totalSteps) * 100;
  
  const averageScore = steps
    .filter(s => s.score !== undefined)
    .reduce((acc, s) => acc + (s.score || 0), 0) / steps.filter(s => s.score !== undefined).length;

  const getStatusIcon = (status: StepStatus) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-[color:var(--success)]" />;
      case 'current':
        return <Clock className="w-5 h-5 text-[color:var(--brand-azure)]" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-[color:var(--danger)]" />;
      default:
        return <Circle className="w-5 h-5 text-[color:var(--text-tertiary)]" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[color:var(--surface-elevated)] rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] p-6">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl mb-2">وضعیت احراز هویت</h3>
          <p className="text-[color:var(--text-secondary)]">
            پیشرفت فرآیند احراز هویت بیومتریک
          </p>
        </div>

        {/* Overall Progress */}
        <div className="mb-8 p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-card)]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="mb-1">پیشرفت کلی</h4>
              <p className="text-sm text-[color:var(--text-secondary)]">
                {completedSteps} از {totalSteps} مرحله تکمیل شده
              </p>
            </div>
            <div className="text-left">
              <div className="text-2xl text-brand-gradient mb-1">{Math.round(averageScore)}٪</div>
              <div className="text-xs text-[color:var(--text-secondary)]">میانگین امتیاز</div>
            </div>
          </div>
          <div className="h-3 bg-[color:var(--bg-dim)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-brand-gradient rounded-full"
            ></motion.div>
          </div>
        </div>

        {/* Steps Timeline */}
        <div className="space-y-4 mb-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative pr-12 pb-4
                ${index !== steps.length - 1 ? 'border-r-2' : ''}
                ${step.status === 'completed' ? 'border-[color:var(--success)]' : 
                  step.status === 'current' ? 'border-[color:var(--brand-azure)]' :
                  'border-[color:var(--border-hairline)]'}
              `}
            >
              {/* Icon */}
              <div className="absolute right-0 top-0 -mr-[13px]">
                <div className={`
                  w-6 h-6 rounded-full flex items-center justify-center
                  ${step.status === 'completed' ? 'bg-[color:var(--success)] bg-opacity-20' :
                    step.status === 'current' ? 'bg-[color:var(--brand-azure)] bg-opacity-20' :
                    'bg-[color:var(--surface-card)]'}
                `}>
                  {getStatusIcon(step.status)}
                </div>
              </div>

              {/* Content */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className={
                      step.status === 'completed' ? 'text-[color:var(--text-primary)]' :
                      step.status === 'current' ? 'text-[color:var(--brand-azure)]' :
                      'text-[color:var(--text-tertiary)]'
                    }>
                      {step.label}
                    </h4>
                    {step.status === 'completed' && (
                      <span className="px-2 py-0.5 rounded text-xs bg-[color:var(--success)] bg-opacity-10 text-[color:var(--success)]">
                        تکمیل شده
                      </span>
                    )}
                    {step.status === 'current' && (
                      <span className="px-2 py-0.5 rounded text-xs bg-[color:var(--brand-azure)] bg-opacity-10 text-[color:var(--brand-azure)]">
                        در حال انجام
                      </span>
                    )}
                  </div>
                  
                  {step.timestamp && (
                    <p className="text-xs text-[color:var(--text-tertiary)] mb-2" dir="ltr" style={{ textAlign: 'right' }}>
                      {step.timestamp}
                    </p>
                  )}

                  {step.score !== undefined && (
                    <div className="max-w-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-[color:var(--text-secondary)]">امتیاز اطمینان</span>
                        <span className={`text-xs ${
                          step.score >= 95 ? 'text-[color:var(--success)]' :
                          step.score >= 85 ? 'text-[color:var(--brand-azure)]' :
                          'text-[color:var(--warning)]'
                        }`}>
                          {step.score}٪
                        </span>
                      </div>
                      <div className="h-1.5 bg-[color:var(--bg-dim)] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${step.score}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                          className={`h-full rounded-full ${
                            step.score >= 95 ? 'bg-gradient-to-r from-[color:var(--brand-cyan)] to-[color:var(--success)]' :
                            step.score >= 85 ? 'bg-brand-gradient' :
                            'bg-gradient-to-r from-[color:var(--warning)] to-[color:var(--brand-azure)]'
                          }`}
                        ></motion.div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Verdict */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--success)] bg-opacity-10 border-2 border-[color:var(--success)]"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[color:var(--success)] bg-opacity-20 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[color:var(--success)]" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg mb-2">احراز هویت موفق</h4>
              <p className="text-sm text-[color:var(--text-secondary)] mb-4">
                هویت شما با موفقیت تأیید شد. تمامی مراحل احراز هویت بیومتریک با امتیاز بالا تکمیل شده است.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1.5 rounded bg-[color:var(--surface-card)] text-xs">
                  <span className="text-[color:var(--text-secondary)]">شناسه تراکنش: </span>
                  <code className="text-[color:var(--brand-azure)]" dir="ltr">TXN-2024-A7B3C9</code>
                </div>
                <div className="px-3 py-1.5 rounded bg-[color:var(--surface-card)] text-xs">
                  <span className="text-[color:var(--text-secondary)]">زمان: </span>
                  <span dir="ltr">2024-10-30 14:24:45</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
