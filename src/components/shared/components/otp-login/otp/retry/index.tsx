import { useState } from 'react';
import { useTimer } from 'react-timer-hook';

import cn from '@/lib/clsxm';
import { addToTime } from '@/lib/date';
import { addZeroIfUnder10 } from '@/lib/helper';

import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import { usePostOTP } from '@/components/shared/services/hooks';

import useOTPAuthStore from '@/store/otp-auth-store';

import localization from '@/constant/localization';

export default function Retry() {
  const { requestTime, mobilePhone, setRequestTime } = useOTPAuthStore();
  const [active, setActive] = useState(false);
  const { mutate: requestOTP } = usePostOTP();
  const { minutes, seconds, restart } = useTimer({
    expiryTimestamp: requestTime || new Date(),
    onExpire: () => !active && setActive(true),
  });
  const request = () => {
    requestOTP(mobilePhone);
    const time = addToTime(new Date(), 2, { unit: 'MINUTES' });
    restart(time);
    setActive(false);
    setRequestTime(time);
  };
  return (
    <Container center className='justify-between'>
      <Text
        bold
        onClick={active ? request : undefined}
        className={cn(active && 'cursor-pointer text-primary')}
      >
        {active
          ? localization.requestOTPAgain
          : `${addZeroIfUnder10(minutes)}:${addZeroIfUnder10(seconds)}`}
      </Text>
    </Container>
  );
}
