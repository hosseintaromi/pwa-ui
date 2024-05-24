import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import { Text } from '@/components/@base/typography';
import InsertPlate from '@/components/shared/components/insert-plate';

import useOTPAuthStore from '@/store/otp-auth-store';

import localization from '@/constant/localization';
import { HOME_PAGE } from '@/constant/routes';

export default function Plate() {
  const { setShow, reset } = useOTPAuthStore();
  const router = useRouter();
  const [homeLoading, setHomeLoading] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === '/') {
      setHomeLoading(false);
      reset();
    }
  }, [pathname]);
  return (
    <InsertPlate
      loading={homeLoading}
      onInsert={() => {
        setHomeLoading(true);
        setTimeout(() => {
          router.push(HOME_PAGE + '?direct');
        }, 100);
      }}
    >
      <Link
        href={HOME_PAGE + '?direct'}
        className='mb-8 mt-5 place-self-end'
        onClick={() => setShow(false)}
      >
        <Text size={SIZE_ENUM.SM} color={COLOR_ENUM.PRIMARY} bold>
          {localization.gotoAppWithoutPlate}
        </Text>
      </Link>
    </InsertPlate>
  );
}
