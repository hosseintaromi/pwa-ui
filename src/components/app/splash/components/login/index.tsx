'use client';
import { useEffect } from 'react';

import Container from '@/components/@base/container';
import XImage from '@/components/@base/x-image';
import Logo from '@/components/shared/components/logo';

import useOTPAuthStore, { STEP } from '@/store/otp-auth-store';

import localization from '@/constant/localization';

import logo from '~/images/common/logo-white.svg';
import carServices from '~/images/splash/car-services.svg';
import insertPlate from '~/images/splash/insert-plate.svg';
import simcard from '~/images/splash/simcard.svg';

export default function Login() {
  const { setShow, step } = useOTPAuthStore();
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Container center className='min-h-[100vh] flex-col justify-start bg-primary'>
      <Container center className='flex-col gap-10 py-7'>
        <Logo logo={logo} />
        <XImage
          src={
            step === STEP.PLATE
              ? insertPlate
              : step === STEP.PHONE_NUMBER
                ? simcard
                : carServices
          }
          width={325}
          height={100}
          alt={localization.itoll}
        />
      </Container>
    </Container>
  );
}
