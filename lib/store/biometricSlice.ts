import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type VerificationStep = 'liveness' | 'selfie' | 'document' | 'voice' | 'complete';

interface BiometricState {
  step: VerificationStep;
}

const initialState: BiometricState = {
  step: 'liveness',
};

const biometricSlice = createSlice({
  name: 'biometric',
  initialState,
  reducers: {
    setVerificationStep(state, action: PayloadAction<VerificationStep>) {
      state.step = action.payload;
    },
  },
});

export const { setVerificationStep } = biometricSlice.actions;
export default biometricSlice.reducer;
