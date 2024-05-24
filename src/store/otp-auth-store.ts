import { create } from 'zustand';

import UserModel from '@/models/user.model';

export enum STEP {
  PHONE_NUMBER = 'phone-number',
  OTP = 'OTP',
  PLATE = 'PLATE',
}

interface OTPAuthStore {
  step: STEP;
  show: boolean;
  requestTime: Date | null;
  mobilePhone: string;
  callBack: (isFailed?: boolean, user?: UserModel) => void | null;
  reset: () => void;
  setMobilePhone: (mobilePhone: string) => void;
  setRequestTime: (requestTime: Date) => void;
  setShow: (show: boolean, callBack?: (isFailed?: boolean) => void) => void;
  setStep: (step: STEP) => void;
}

const useOTPAuthStore = create<OTPAuthStore>((set) => ({
  step: STEP.PHONE_NUMBER,
  show: false,
  requestTime: null,
  mobilePhone: '',
  callBack: () => null,
  reset: () =>
    set({
      mobilePhone: '',
      callBack: undefined,
      requestTime: null,
      show: false,
      step: STEP.PHONE_NUMBER,
    }),
  setMobilePhone: (mobilePhone) => set({ mobilePhone }),
  setRequestTime: (requestTime) => set({ requestTime }),
  setShow: (show, callBack) => set({ show, callBack: callBack || undefined }),
  setStep: (step) => set({ step }),
}));
export default useOTPAuthStore;
