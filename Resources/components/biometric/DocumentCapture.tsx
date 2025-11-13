import { useState } from 'react';
import { CreditCard, FileText, Plane, Camera, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '../Button';
import { motion } from 'motion/react';

type DocumentType = 'id-card' | 'passport' | 'driver-license';
type CaptureState = 'front' | 'back' | 'review';

const documentTypes = [
  { id: 'id-card' as DocumentType, label: 'کارت ملی', icon: CreditCard },
  { id: 'passport' as DocumentType, label: 'گذرنامه', icon: Plane },
  { id: 'driver-license' as DocumentType, label: 'گواهینامه', icon: FileText }
];

export function DocumentCapture() {
  const [selectedDoc, setSelectedDoc] = useState<DocumentType>('id-card');
  const [captureState, setCaptureState] = useState<CaptureState>('front');
  const [hasGlare, setHasGlare] = useState(false);
  const [isSkewed, setIsSkewed] = useState(false);

  const ocrResults = [
    { field: 'نام و نام خانوادگی', value: 'علی احمدی', confidence: 98 },
    { field: 'کد ملی', value: '0123456789', confidence: 99 },
    { field: 'تاریخ تولد', value: '1370/05/15', confidence: 97 },
    { field: 'تاریخ انقضا', value: '1410/05/15', confidence: 96 }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-[color:var(--surface-elevated)] rounded-[var(--radius-lg)] border border-[color:var(--border-hairline)] p-6">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl mb-2">ثبت مدرک هویتی</h3>
          <p className="text-[color:var(--text-secondary)]">
            نوع مدرک را انتخاب کرده و تصویر آن را ثبت کنید
          </p>
        </div>

        {/* Document Type Selector */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {documentTypes.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setSelectedDoc(doc.id)}
              className={`
                p-4 rounded-[var(--radius-md)] border-2 transition-all
                ${selectedDoc === doc.id
                  ? 'border-[color:var(--brand-azure)] bg-[color:var(--brand-azure)] bg-opacity-10'
                  : 'border-[color:var(--border-hairline)] hover:border-[color:var(--border-subtle)]'
                }
              `}
            >
              <doc.icon className={`w-6 h-6 mx-auto mb-2 ${selectedDoc === doc.id ? 'text-[color:var(--brand-azure)]' : ''}`} />
              <span className="text-sm">{doc.label}</span>
            </button>
          ))}
        </div>

        {/* Capture State Indicator */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`flex-1 h-1 rounded-full ${captureState === 'front' || captureState === 'back' || captureState === 'review' ? 'bg-[color:var(--success)]' : 'bg-[color:var(--surface-card)]'}`}></div>
          <div className={`flex-1 h-1 rounded-full ${selectedDoc !== 'passport' && (captureState === 'back' || captureState === 'review') ? 'bg-[color:var(--success)]' : 'bg-[color:var(--surface-card)]'}`}></div>
          <div className={`flex-1 h-1 rounded-full ${captureState === 'review' ? 'bg-[color:var(--success)]' : 'bg-[color:var(--surface-card)]'}`}></div>
        </div>

        {captureState !== 'review' ? (
          <>
            {/* Camera View */}
            <div className="relative aspect-[3/2] bg-[color:var(--bg-dim)] rounded-[var(--radius-lg)] overflow-hidden mb-6">
              {/* Mock camera background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--surface-card)] to-[color:var(--bg-dim)]"></div>

              {/* Document frame overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full max-w-md aspect-[1.6/1] border-2 border-dashed border-[color:var(--brand-azure)] rounded-[var(--radius-md)]">
                  {/* Corner brackets */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[color:var(--brand-azure)] rounded-tr-[var(--radius-md)]"></div>
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[color:var(--brand-azure)] rounded-tl-[var(--radius-md)]"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[color:var(--brand-azure)] rounded-br-[var(--radius-md)]"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[color:var(--brand-azure)] rounded-bl-[var(--radius-md)]"></div>

                  {/* Center text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-[color:var(--text-secondary)]">
                      {captureState === 'front' ? 'روی مدرک را قرار دهید' : 'پشت مدرک را قرار دهید'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Warning badges */}
              <div className="absolute top-4 right-4 left-4 space-y-2">
                {hasGlare && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-[var(--radius-md)] bg-[color:var(--warning)] bg-opacity-20 border border-[color:var(--warning)] backdrop-blur-md"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">تابش نور روی مدرک</span>
                  </motion.div>
                )}
                {isSkewed && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-[var(--radius-md)] bg-[color:var(--warning)] bg-opacity-20 border border-[color:var(--warning)] backdrop-blur-md"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">مدرک را صاف نگه دارید</span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-6 p-4 rounded-[var(--radius-md)] bg-[color:var(--surface-card)]">
              <h4 className="text-sm mb-3">نکات مهم:</h4>
              <ul className="space-y-2 text-sm text-[color:var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-[color:var(--success)] flex-shrink-0" />
                  <span>مدرک را کاملاً داخل کادر قرار دهید</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-[color:var(--success)] flex-shrink-0" />
                  <span>از نور مستقیم روی مدرک خودداری کنید</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-[color:var(--success)] flex-shrink-0" />
                  <span>تصویر باید واضح و خوانا باشد</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                fullWidth
                size="lg"
                iconLeading={<Camera className="w-5 h-5" />}
                onClick={() => {
                  if (captureState === 'front' && selectedDoc !== 'passport') {
                    setCaptureState('back');
                  } else {
                    setCaptureState('review');
                  }
                }}
              >
                ثبت تصویر
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* OCR Results */}
            <div className="mb-6">
              <h4 className="mb-4">اطلاعات استخراج شده:</h4>
              <div className="space-y-3">
                {ocrResults.map((result) => (
                  <div key={result.field} className="p-4 rounded-[var(--radius-md)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)]">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm text-[color:var(--text-secondary)]">{result.field}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        result.confidence >= 95 
                          ? 'bg-[color:var(--success)] bg-opacity-10 text-[color:var(--success)]'
                          : 'bg-[color:var(--warning)] bg-opacity-10 text-[color:var(--warning)]'
                      }`}>
                        {result.confidence}% اطمینان
                      </span>
                    </div>
                    <div className="mb-2" dir="ltr" style={{ textAlign: 'right' }}>{result.value}</div>
                    <div className="h-1 bg-[color:var(--bg-dim)] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[color:var(--brand-cyan)] to-[color:var(--success)] rounded-full"
                        style={{ width: `${result.confidence}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirmation */}
            <div className="mb-6 p-4 rounded-[var(--radius-md)] bg-[color:var(--info)] bg-opacity-10 border border-[color:var(--info)]">
              <p className="text-sm">
                لطفاً اطلاعات استخراج شده را بررسی کرده و در صورت صحیح بودن تأیید کنید.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setCaptureState('front')}
              >
                ثبت مجدد
              </Button>
              <Button
                fullWidth
                size="lg"
                iconLeading={<CheckCircle className="w-5 h-5" />}
              >
                تأیید اطلاعات
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
