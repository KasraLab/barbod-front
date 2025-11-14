'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../../lib/store/store';
import { LivenessCheck } from '../../components/biometric/LivenessCheck';
import { SelfieCapture } from '../../components/biometric/SelfieCapture';
import { DocumentCapture } from '../../components/biometric/DocumentCapture';
import { VoiceVerification } from '../../components/biometric/VoiceVerification';

export default function VerificationPage() {
  const step = useSelector((state: RootState) => state.biometric.step);

  const renderStep = () => {
    switch (step) {
      case 'liveness':
        return <LivenessCheck />;
      case 'selfie':
        return <SelfieCapture />;
      case 'document':
        return <DocumentCapture />;
      case 'voice':
        return <VoiceVerification />;
      case 'complete':
        return <div>Verification Complete!</div>;
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <div>
      <h1>Biometric Verification</h1>
      {renderStep()}
    </div>
  );
}
