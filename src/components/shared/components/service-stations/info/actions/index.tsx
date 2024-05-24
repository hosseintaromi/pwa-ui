import Link from 'next/link';

import cn from '@/lib/clsxm';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import Container from '@/components/@base/container';
import Props from '@/components/shared/components/service-stations/info/actions/type';

import localization from '@/constant/localization';

export default function Actions({ latitude, longitude, className, children }: Props) {
  return (
    <Container
      center
      className={cn('absolute bottom-0 left-0 w-full gap-2.5 p-5 py-5', className)}
    >
      <Link href={`geo:${latitude},${longitude}`} className='w-full'>
        <Button size={SIZE_ENUM.XL} color={COLOR_ENUM.PRIMARY} className='w-full'>
          {localization.navigation}
        </Button>
      </Link>
      {children}
    </Container>
  );
}
