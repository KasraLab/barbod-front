'use client';

import { useMemo, useState } from 'react';
import { Mic, Play, RotateCw, CheckCircle } from 'lucide-react';
import { Button } from '../Button';
import { motion, AnimatePresence } from 'framer-motion';

type RecordingState = 'idle' | 'recording' | 'recorded' | 'playing';

const PASS_PHRASE =
  'Barbod verifies my identity. My voice is my secure signature.';
const TRANSCRIPTION =
  'Barbod verifies my identity. My voice is my secure signature.';

const STATUS_COPY: Record<RecordingState, string> = {
  idle: 'Tap the microphone and read the passphrase at a natural pace.',
  recording: 'Recording... keep a steady tone until the ring completes.',
  recorded: 'Voiceprint captured. Review the transcription before submitting.',
  playing: 'Playing your sample back to check for noise.',
};

export function VoiceVerification() {
  const [recordingState, setRecordingState] = useState<RecordingState>('idle');
  const [similarityScore, setSimilarityScore] = useState<number | null>(null);

  const analysis = useMemo(
    () => [
      { label: 'Similarity', value: similarityScore ? `${similarityScore.toFixed(1)}%` : '--', emphasis: 'success' },
      { label: 'Signal-to-noise', value: recordingState === 'idle' ? '--' : '23 dB', emphasis: 'neutral' },
      { label: 'Duration', value: recordingState === 'recorded' || recordingState === 'playing' ? '6.2 s' : '--', emphasis: 'neutral' },
    ],
    [recordingState, similarityScore],
  );

  const handleRecord = () => {
    if (recordingState === 'recording') {
      return;
    }
    setRecordingState('recording');
    window.setTimeout(() => {
      setRecordingState('recorded');
      setSimilarityScore(94.7);
    }, 3000);
  };

  const handlePlay = () => {
    if (recordingState !== 'recorded') {
      return;
    }
    setRecordingState('playing');
    window.setTimeout(() => {
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
        <div className="mb-6">
          <h3 className="text-xl mb-2">Voice verification</h3>
          <p className="text-[color:var(--text-secondary)]">
            Capture a short passphrase so we can compare the voiceprint to the template enrolled during onboarding.
          </p>
        </div>

        <div className="mb-6 p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-card)] border-2 border-[color:var(--border-subtle)]">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0">
              <Mic className="w-5 h-5 text-[color:var(--text-inverse)]" />
            </div>
            <div>
              <h4 className="mb-2 text-[color:var(--text-primary)]">Passphrase</h4>
              <p className="text-lg leading-relaxed">{PASS_PHRASE}</p>
            </div>
          </div>
          <div className="text-xs text-[color:var(--text-tertiary)] bg-[color:var(--bg-dim)] rounded px-3 py-2">
            Use a conversational tone. Speaking too fast or too soft can reduce the similarity score.
          </div>
        </div>

        <div className="mb-6">
          <div className="relative aspect-[2/1] bg-[color:var(--bg-dim)] rounded-[var(--radius-lg)] overflow-hidden p-8">
            <div className="h-full flex flex-col items-center justify-center gap-6">
              <motion.button
                type="button"
                onClick={handleRecord}
                disabled={recordingState === 'recording'}
                whileHover={{ scale: recordingState === 'recording' ? 1 : 1.05 }}
                whileTap={{ scale: recordingState === 'recording' ? 1 : 0.95 }}
                className={`
                  relative w-24 h-24 rounded-full flex items-center justify-center transition-all
                  ${recordingState === 'recording' ? 'bg-[color:var(--danger)] animate-pulse-slow' : 'bg-brand-gradient'}
                  ${recordingState === 'recording' ? 'cursor-not-allowed' : ''}
                `}
              >
                <Mic className="w-10 h-10 text-[color:var(--text-inverse)]" />
                {recordingState === 'recording' && (
                  <motion.div
                    initial={{ scale: 1, opacity: 0.4 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-[color:var(--danger)]"
                  />
                )}
              </motion.button>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  iconLeading={<Play className="w-4 h-4" />}
                  onClick={handlePlay}
                  disabled={recordingState !== 'recorded'}
                >
                  Play sample
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconLeading={<RotateCw className="w-4 h-4" />}
                  onClick={handleRetry}
                  disabled={recordingState === 'recording'}
                >
                  Start over
                </Button>
              </div>

              <div className="w-full h-20">
                <svg viewBox="0 0 320 80" className="w-full h-full text-[color:var(--brand-azure)]">
                  {[...Array(40)].map((_, index) => {
                    const height = 10 + Math.abs(Math.sin(index)) * 30;
                    return (
                      <rect
                        key={index}
                        x={index * 8}
                        width="4"
                        y={(80 - height) / 2}
                        height={height}
                        rx="2"
                        className="fill-current opacity-60"
                      />
                    );
                  })}
                </svg>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={recordingState}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-sm text-[color:var(--text-secondary)] text-center min-h-[1.5rem]"
                >
                  {STATUS_COPY[recordingState]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {recordingState === 'recorded' && (
          <div className="mb-6 p-4 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)]">
            <h4 className="mb-2 text-[color:var(--text-primary)]">Transcription</h4>
            <p className="text-sm text-[color:var(--text-secondary)]">{TRANSCRIPTION}</p>
          </div>
        )}

        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {analysis.map((metric) => (
            <div
              key={metric.label}
              className={`
                p-4 rounded-[var(--radius-md)] border text-center
                ${
                  metric.emphasis === 'success'
                    ? 'border-[color:var(--success)] text-[color:var(--success)]'
                    : 'border-[color:var(--border-hairline)] text-[color:var(--text-primary)]'
                }
              `}
            >
              <p className="text-xs text-[color:var(--text-tertiary)] mb-1">{metric.label}</p>
              <p className="text-lg font-semibold">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <Button variant="secondary" size="lg" onClick={handleRetry} fullWidth>
            Retake recording
          </Button>
          <Button
            size="lg"
            iconLeading={<CheckCircle className="w-5 h-5" />}
            disabled={recordingState !== 'recorded'}
            fullWidth
          >
            Approve voice match
          </Button>
        </div>
      </div>
    </div>
  );
}
