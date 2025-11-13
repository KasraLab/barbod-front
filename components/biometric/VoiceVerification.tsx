import { useState } from 'react';
import { Mic, Play, RotateCw, CheckCircle } from 'lucide-react';
import { Button } from '../Button';
import { motion, AnimatePresence } from 'framer-motion';

type RecordingState = 'idle' | 'recording' | 'recorded' | 'playing';

export function VoiceVerification() {
  const [recordingState, setRecordingState] = useState<RecordingState>('idle');
  const [similarityScore, setSimilarityScore] = useState<number | null>(null);
  
  const passphrase = "باربُد سیستم احراز هویت بیومتریک شماره ۷۸۴۳";
  const transcription = "باربُد سیستم احراز هویت بیومتریک شماره ۷۸۴۳";

  const handleRecord = () => {
    setRecordingState('recording');
    setTimeout(() => {
      setRecordingState('recorded');
      setSimilarityScore(94.7);
    }, 3000);
  };

  const handlePlay = () => {
    setRecordingState('playing');
    setTimeout(() => {
      setRecordingState('recorded');
    }, 2000);
  };

  const handleRetry = () => {
    setRecordingState('idle');
    setSimilarityScore(null);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[color:var(--surface-elevated)] rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] p-6">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl mb-2">احراز هویت صوتی</h3>
          <p className="text-[color:var(--text-secondary)]">
            عبارت زیر را با صدای بلند و واضح بخوانید
          </p>
        </div>

        {/* Passphrase Card */}
        <div className="mb-6 p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-card)] border-2 border-[color:var(--border-subtle)]">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0">
              <Mic className="w-5 h-5 text-[color:var(--text-inverse)]" />
            </div>
            <div>
              <h4 className="mb-2">عبارت تأیید:</h4>
              <p className="text-lg leading-relaxed">{passphrase}</p>
            </div>
          </div>
          <div className="text-xs text-[color:var(--text-tertiary)] bg-[color:var(--bg-dim)] rounded px-3 py-2">
            💡 عبارت به صورت تصادفی تولید شده و در هر بار متفاوت است
          </div>
        </div>

        {/* Recording Interface */}
        <div className="mb-6">
          <div className="relative aspect-[2/1] bg-[color:var(--bg-dim)] rounded-[var(--radius-lg)] overflow-hidden p-8">
            <div className="h-full flex flex-col items-center justify-center gap-4">
              {/* Mic button */}
              <motion.button
                onClick={recordingState === 'idle' ? handleRecord : undefined}
                disabled={recordingState !== 'idle' && recordingState !== 'recorded'}
                whileHover={{ scale: recordingState === 'idle' ? 1.05 : 1 }}
                whileTap={{ scale: recordingState === 'idle' ? 0.95 : 1 }}
                className={`
                  relative w-24 h-24 rounded-full flex items-center justify-center transition-all
                  ${recordingState === 'recording' 
                    ? 'bg-[color:var(--danger)] animate-pulse-slow' 
                    : 'bg-brand-gradient hover:opacity-90'
                  }
                  ${recordingState !== 'idle' && recordingState !== 'recorded' ? 'cursor-not-allowed' : ''}
                `}
              >
                <Mic className="w-10 h-10 text-[color:var(--text-inverse)]" />
                
                {recordingState === 'recording' && (
                  <motion.div
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-[color:var(--danger)]"
                  ></motion.div>
                )}
              </motion.button>

              {/* Status text */}
              <div className="text-center">
                <p className="text-sm text-[color:var(--text-secondary)]">
                  {recordingState === 'idle' && 'روی دکمه ضبط کلیک کنید'}
                  {recordingState === 'recording' && 'در حال ضبط...'}
                  {recordingState === 'recorded' && 'ضبط کامل شد'}
                  {recordingState === 'playing' && 'در حال پخش...'}
                </p>
              </div>

              {/* Waveform visualization */}
              {recordingState === 'recording' && (
                <div className="flex items-center gap-1 h-12">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-[color:var(--brand-azure)] rounded-full"
                      animate={{
                        height: [8, Math.random() * 40 + 10, 8]
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.05
                      }}
                    ></motion.div>
                  ))}
                </div>
              )}

              {/* VU Meter */}
              {recordingState === 'recording' && (
                <div className="w-full max-w-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-[color:var(--text-tertiary)]">سطح صدا</span>
                    <span className="text-xs text-[color:var(--success)]">عالی</span>
                  </div>
                  <div className="h-2 bg-[color:var(--surface-card)] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[color:var(--success)] to-[color:var(--brand-azure)] rounded-full"
                      animate={{ width: ['60%', '85%', '70%'] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    ></motion.div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Transcription */}
        {recordingState === 'recorded' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)]"
          >
            <h4 className="text-sm mb-2 text-[color:var(--text-secondary)]">رونویسی صوت:</h4>
            <p className="text-sm mb-3">{transcription}</p>
            
            {similarityScore !== null && (
              <div className="pt-3 border-t border-[color:var(--border-hairline)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[color:var(--text-secondary)]">میزان تطابق</span>
                  <span className={`text-xs ${similarityScore >= 85 ? 'text-[color:var(--success)]' : 'text-[color:var(--warning)]'}`}>
                    {similarityScore}٪
                  </span>
                </div>
                <div className="h-2 bg-[color:var(--bg-dim)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${similarityScore}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full rounded-full ${
                      similarityScore >= 85 
                        ? 'bg-gradient-to-r from-[color:var(--brand-cyan)] to-[color:var(--success)]'
                        : 'bg-gradient-to-r from-[color:var(--warning)] to-[color:var(--brand-cyan)]'
                    }`}
                  ></motion.div>
                </div>
                <p className="text-xs text-[color:var(--text-tertiary)] mt-2">
                  آستانه قبولی: ۸۵٪ {similarityScore >= 85 ? '✓' : '✗'}
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Result */}
        {similarityScore !== null && similarityScore >= 85 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-[var(--radius-md)] bg-[color:var(--success)] bg-opacity-10 border border-[color:var(--success)]"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-[color:var(--success)]" />
              <div>
                <h4 className="mb-1">احراز هویت صوتی موفق</h4>
                <p className="text-sm text-[color:var(--text-secondary)]">
                  صدای شما با الگوی ذخیره شده مطابقت دارد
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Instructions */}
        <div className="mb-6 p-4 rounded-[var(--radius-md)] bg-[color:var(--surface-card)]">
          <h4 className="text-sm mb-3">نکات:</h4>
          <ul className="space-y-2 text-sm text-[color:var(--text-secondary)]">
            <li>• در محیط آرام و بدون صدای پس‌زمینه باشید</li>
            <li>• عبارت را با صدای طبیعی و واضح بخوانید</li>
            <li>• نزدیک میکروفون صحبت کنید ولی خیلی نزدیک نباشید</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {recordingState === 'recorded' && (
            <>
              <Button
                variant="ghost"
                size="lg"
                iconLeading={<Play className="w-5 h-5" />}
                onClick={handlePlay}
              >
                پخش
              </Button>
              <Button
                variant="secondary"
                size="lg"
                iconLeading={<RotateCw className="w-5 h-5" />}
                onClick={handleRetry}
              >
                ضبط مجدد
              </Button>
            </>
          )}
          {similarityScore !== null && similarityScore >= 85 && (
            <Button
              fullWidth
              size="lg"
              iconLeading={<CheckCircle className="w-5 h-5" />}
            >
              تأیید و ادامه
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
