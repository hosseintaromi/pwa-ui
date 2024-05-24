import Link from 'next/link';
import { GoArrowUpLeft } from 'react-icons/go';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import EmptyMode from '@/components/app/home/components/pwa/car-assists/@shared/empty-mode';
import Props from '@/components/app/home/components/pwa/car-assists/service-period/type';

import localization from '@/constant/localization';
import { CAR_REPORT, CAR_REPORT_SERVICE } from '@/constant/routes';

export default function ServicePeriod({ services, time, kilometer, id }: Props) {
  return !services || !time || !kilometer ? (
    <EmptyMode
      link={CAR_REPORT_SERVICE(id)}
      text={localization.noServiceRecord}
      buttonText={localization.submitNewService}
    />
  ) : (
    <Link href={CAR_REPORT(id)}>
      <Container className='relative'>
        <GoArrowUpLeft className='absolute -left-3 -top-3' />
        <Container>
          <Text>{services}</Text>
        </Container>

        <Container center className='justify-between'>
          <Text bold size={SIZE_ENUM.XS}>
            {time}
          </Text>
          <Text bold size={SIZE_ENUM.XS}>
            {localization.kilometerPostfix(kilometer)}
          </Text>
        </Container>
      </Container>
    </Link>
  );
}
