import { useState } from 'react';
import { SelfieCapture } from './biometric/SelfieCapture';
import { LivenessCheck } from './biometric/LivenessCheck';
import { DocumentCapture } from './biometric/DocumentCapture';
import { VoiceVerification } from './biometric/VoiceVerification';
import { VerificationStatus } from './biometric/VerificationStatus';
import { motion } from 'motion/react';

const demoTabs = [
  { id: 'selfie', label: 'ثبت سلفی', component: SelfieCapture },
  { id: 'liveness', label: 'تست زنده‌بودن', component: LivenessCheck },
  { id: 'document', label: 'OCR مدرک', component: DocumentCapture },
  { id: 'voice', label: 'احراز صوتی', component: VoiceVerification },
  { id: 'status', label: 'وضعیت احراز', component: VerificationStatus }
];

export function DemoSection() {
  const [activeTab, setActiveTab] = useState('selfie');

  const ActiveComponent = demoTabs.find(tab => tab.id === activeTab)?.component || SelfieCapture;

  return (
    <section className="py-20 lg:py-32 bg-[color:var(--bg-dim)]" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-subtle)] mb-6"
          >
            <span className="text-sm text-[color:var(--brand-azure)]">دمو تعاملی</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            قابلیت‌ها را <span className="text-brand-gradient">امتحان کنید</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            تجربه‌ای واقعی از فرآیند احراز هویت بیومتریک داشته باشید
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {demoTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-6 py-3 rounded-[var(--radius-md)] transition-all
                  ${activeTab === tab.id
                    ? 'bg-brand-gradient text-[color:var(--text-inverse)] shadow-[var(--shadow-md)]'
                    : 'bg-[color:var(--surface-elevated)] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] border border-[color:var(--border-hairline)] hover:border-[color:var(--border-subtle)]'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Component */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ActiveComponent />
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)]"
        >
          <p className="text-sm text-[color:var(--text-secondary)] mb-4">
            این یک نمایش تعاملی است. برای استفاده واقعی از API باربُد، ثبت‌نام کنید.
          </p>
          <button className="px-6 py-2 rounded-[var(--radius-md)] bg-brand-gradient text-[color:var(--text-inverse)] hover:opacity-90 transition-opacity">
            دریافت دسترسی API
          </button>
        </motion.div>
      </div>
    </section>
  );
}
