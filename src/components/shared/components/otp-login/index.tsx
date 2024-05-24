'use client';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import cn from '@/lib/clsxm';
import { clearTokens } from '@/lib/helper';

import Container from '@/components/@base/container';
import Head from '@/components/shared/components/otp-login/head';
import OTP from '@/components/shared/components/otp-login/otp';
import PhoneNumber from '@/components/shared/components/otp-login/phone-number';
import Plate from '@/components/shared/components/otp-login/plate';
import { useGetProfile } from '@/components/shared/services/hooks';

import useCommonModalStore from '@/store/common-modal-store';
import useOTPAuthStore, { STEP } from '@/store/otp-auth-store';
import useUserStore from '@/store/user-store';

import { SPLASH } from '@/constant/routes';
import StorageKey from '@/constant/storage-key';

export default function OtpLogin() {
  const { setShow: setModalShow, show: modalShow } = useCommonModalStore();
  const { show, setShow, step, callBack } = useOTPAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const { setUser, setToken } = useUserStore();
  const { data: user, error: profileGetError } = useGetProfile();
  useEffect(() => {
    if (show) {
      setModalShow(show, {
        DialogPanelProps: { className: 'rounded-none p-0 bg-[#E6E6E6]' },
        onDemandClose: true,
        noBackDrop: pathname === SPLASH,
        Body: () => (
          <Container>
            <Head />
            <Container className={cn('px-5 py-4', step === STEP.PHONE_NUMBER && 'pt-8')}>
              {step === STEP.PLATE ? <Plate /> : step === STEP.OTP ? <OTP /> : <PhoneNumber />}
            </Container>
          </Container>
        ),
      });
    } else {
      setModalShow(false);
    }
  }, [show, step]);
  useEffect(() => {
    if (!modalShow) {
      setShow(false);
      callBack?.(true);
    }
  }, [modalShow]);
  useEffect(() => {
    if (user) {
      setUser(user);
      setToken(Cookies.get(StorageKey.TOKEN));
    }
  }, [user]);
  useEffect(() => {
    if (profileGetError) {
      if ((profileGetError as AxiosError)?.response?.status === 401) {
        clearTokens();
        router.push(SPLASH);
      }
    }
  }, [profileGetError]);
  return null;
}
