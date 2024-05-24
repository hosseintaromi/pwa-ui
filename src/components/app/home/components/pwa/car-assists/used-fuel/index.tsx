import Link from 'next/link';
import { GoArrowUpLeft } from 'react-icons/go';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import EmptyMode from '@/components/app/home/components/pwa/car-assists/@shared/empty-mode';
import Props from '@/components/app/home/components/pwa/car-assists/used-fuel/type';

import localization from '@/constant/localization';
import { CAR_REPORT, CAR_REPORT_FUEL } from '@/constant/routes';

export default function UsedFuel({ price, liter, title, id }: Props) {
  return !price || liter === '۰' || !liter || !title ? (
    <EmptyMode
      text={localization.noFuelRecord}
      buttonText={localization.submitNewFuel}
      link={CAR_REPORT_FUEL(id)}
    />
  ) : (
    <Link href={CAR_REPORT(id)}>
      <Container className='relative flex justify-between'>
        <GoArrowUpLeft className='absolute -left-3 -top-3' />
        <Text bold size={SIZE_ENUM.XS}>
          {localization.inPastThreeMonth}
        </Text>
        <Text bold size={SIZE_ENUM.XS}>
          {localization.literPostfix(liter)}
        </Text>
      </Container>
      <Container center className='gap-2.5'>
        <Text bold size={SIZE_ENUM.SM}>
          {price}
        </Text>
        <Text size={SIZE_ENUM.SM}>{localization.toman}</Text>
      </Container>
    </Link>
  );
}
