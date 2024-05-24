import { MdOutlineArrowForward } from 'react-icons/md';

import cn from '@/lib/clsxm';

import Container from '@/components/@base/container';
import { Heading } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';

import useOTPAuthStore, { STEP } from '@/store/otp-auth-store';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import localization from '@/constant/localization';

export default function Head() {
  const { step, setStep, mobilePhone } = useOTPAuthStore();
  return (
    <Container
      center
      className={cn(
        'h-[70px] justify-start gap-2.5 bg-white px-5',
        (step === STEP.OTP || step === STEP.PLATE) && 'h-[56px]',
        step === STEP.OTP && 'justify-between',
        step === STEP.PLATE && 'justify-start',
      )}
    >
      {(step === STEP.OTP || step === STEP.PLATE) && (
        <MdOutlineArrowForward
          className='cursor-pointer'
          color={ICON_COLOR.primary}
          size={ICON_SIZE.lg}
          onClick={() => setStep(step === STEP.PLATE ? STEP.OTP : STEP.PHONE_NUMBER)}
        />
      )}
      <Heading type={HEADING_TYPE.H5} className='text-right text-sm'>
        {step === STEP.PHONE_NUMBER
          ? `${localization.pleaseEnterPhoneNumber}:`
          : step === STEP.PLATE
            ? `${localization.insertYourPlateNumber}:`
            : mobilePhone}
      </Heading>
    </Container>
  );
}
