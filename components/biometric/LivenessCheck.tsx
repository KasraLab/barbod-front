import { useState } from 'react';
import { Smile, Eye, MoveHorizontal, CheckCircle2, XCircle, RotateCw } from 'lucide-react';
import { Button } from '../Button';
import { motion, AnimatePresence } from 'framer-motion';

type LivenessStep = 'turn-left' | 'turn-right' | 'blink' | 'smile';
type LivenessResult = 'pass' | 'inconclusive' | 'retry' | null;

const steps: { id: LivenessStep; label: string; icon: any }[] = [
  { id: 'turn-right', label: 'سر خود را به راست بچرخانید', icon: MoveHorizontal },
  { id: 'turn-left', label: 'سر خود را به چپ بچرخانید', icon: MoveHorizontal },
  { id: 'blink', label: 'چشم بزنید', icon: Eye },
  { id: 'smile', label: 'لبخند بزنید', icon: Smile }
];

export function LivenessCheck() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [result, setResult] = useState<LivenessResult>(null);
  const [progress, setProgress] = useState(0);

  const currentStep = steps[currentStepIndex];
  const isComplete = currentStepIndex >= steps.length;

  const handleNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      setProgress(((currentStepIndex + 1) / steps.length) * 100);
    } else {
      setResult('pass');
      setProgress(100);
    }
  };

  const handleRetry = () => {
    setCurrentStepIndex(0);
    setResult(null);
    setProgress(0);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[color:var(--surface-elevated)] rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] p-6">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl mb-2">تست زنده‌بودن</h3>
          <p className="text-[color:var(--text-secondary)]">
            لطفاً دستورات زیر را برای تأیید زنده بودن انجام دهید
          </p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[color:var(--text-secondary)]">پیشرفت</span>
            <span className="text-sm text-[color:var(--brand-azure)]">{currentStepIndex}/{steps.length}</span>
          </div>
          <div className="h-2 bg-[color:var(--surface-card)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-brand-gradient rounded-full"
            ></motion.div>
          </div>
        </div>

        {/* Camera Preview */}
        {!result && (
          <div className="relative aspect-[4/3] bg-[color:var(--bg-dim)] rounded-[var(--radius-lg)] overflow-hidden mb-6">
            {/* Mock camera background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--surface-card)] to-[color:var(--bg-dim)]"></div>

            {/* Face outline */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-48 h-64 rounded-full border-4 border-[color:var(--brand-azure)] border-dashed opacity-40"
              ></motion.div>
            </div>

            {/* Current instruction overlay */}
            <AnimatePresence mode="wait">
              {!isComplete && (
                <motion.div
                  key={currentStepIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <div className="bg-[color:var(--bg-base)] bg-opacity-90 backdrop-blur-md rounded-[var(--radius-lg)] p-6 border border-[color:var(--border-subtle)] max-w-sm mx-4">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center">
                        <currentStep.icon className="w-8 h-8 text-[color:var(--text-inverse)]" />
                      </div>
                      <h4 className="text-lg">{currentStep.label}</h4>
                      
                      {/* Mock countdown */}
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 transform -rotate-90">
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="var(--surface-card)"
                            strokeWidth="4"
                            fill="none"
                          />
                          <motion.circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="var(--brand-azure)"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 28}`}
                            initial={{ strokeDashoffset: 0 }}
                            animate={{ strokeDashoffset: 2 * Math.PI * 28 }}
                            transition={{ duration: 3, ease: 'linear' }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-xl">
                          {countdown}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className={`
              p-6 rounded-[var(--radius-lg)] border
              ${result === 'pass' 
                ? 'bg-[color:var(--success)] bg-opacity-10 border-[color:var(--success)]'
                : 'bg-[color:var(--warning)] bg-opacity-10 border-[color:var(--warning)]'
              }
            `}>
              <div className="flex items-center gap-4">
                {result === 'pass' ? (
                  <CheckCircle2 className="w-12 h-12 text-[color:var(--success)]" />
                ) : (
                  <XCircle className="w-12 h-12 text-[color:var(--warning)]" />
                )}
                <div>
                  <h4 className="text-lg mb-1">
                    {result === 'pass' ? 'تست با موفقیت انجام شد' : 'نیاز به تلاش مجدد'}
                  </h4>
                  <p className="text-sm text-[color:var(--text-secondary)]">
                    {result === 'pass' 
                      ? 'شما یک فرد واقعی هستید. می‌توانید به مرحله بعد بروید.'
                      : 'لطفاً دوباره تلاش کنید و دستورات را به دقت دنبال کنید.'
                    }
                  </p>
                </div>
              </div>

              {/* Anti-spoof hints */}
              {result !== 'pass' && (
                <div className="mt-4 pt-4 border-t border-[color:var(--border-hairline)]">
                  <p className="text-xs text-[color:var(--text-secondary)] mb-2">نکات:</p>
                  <ul className="text-xs text-[color:var(--text-secondary)] space-y-1">
                    <li>• از نور کافی اطمینان حاصل کنید</li>
                    <li>• دوربین را ثابت نگه دارید</li>
                    <li>• دستورات را سریع و واضح انجام دهید</li>
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Steps checklist */}
        {!result && (
          <div className="mb-6 p-4 rounded-[var(--radius-md)] bg-[color:var(--surface-card)]">
            <h4 className="text-sm mb-3">مراحل:</h4>
            <div className="space-y-2">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center gap-3 text-sm ${
                    index < currentStepIndex ? 'text-[color:var(--success)]' :
                    index === currentStepIndex ? 'text-[color:var(--brand-azure)]' :
                    'text-[color:var(--text-tertiary)]'
                  }`}
                >
                  {index < currentStepIndex ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : index === currentStepIndex ? (
                    <div className="w-4 h-4 rounded-full border-2 border-[color:var(--brand-azure)] border-t-transparent animate-spin"></div>
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-[color:var(--border-subtle)]"></div>
                  )}
                  <span>{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          {result === 'pass' ? (
            <Button
              fullWidth
              size="lg"
              iconLeading={<CheckCircle2 className="w-5 h-5" />}
            >
              تأیید و ادامه
            </Button>
          ) : result ? (
            <Button
              fullWidth
              size="lg"
              variant="secondary"
              iconLeading={<RotateCw className="w-5 h-5" />}
              onClick={handleRetry}
            >
              تلاش مجدد
            </Button>
          ) : (
            <Button
              fullWidth
              size="lg"
              onClick={handleNextStep}
            >
              {isComplete ? 'اتمام تست' : 'مرحله بعد'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
