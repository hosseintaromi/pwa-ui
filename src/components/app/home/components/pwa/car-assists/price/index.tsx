import Link from 'next/link';
import { GoArrowUpLeft } from 'react-icons/go';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import EmptyMode from '@/components/app/home/components/pwa/car-assists/@shared/empty-mode';
import Props from '@/components/app/home/components/pwa/car-assists/price/type';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import localization from '@/constant/localization';
import { CAR, PRICE } from '@/constant/routes';

export default function Price({ priceDelta, price, up, id }: Props) {
  return !priceDelta || !price ? (
    <EmptyMode
      link={CAR(id)}
      text={localization.carInfoIsNotComplete}
      buttonText={localization.completeCarInfo}
    />
  ) : (
    <Link href={PRICE(id)}>
      <Container center className='relative w-full flex-col'>
        <GoArrowUpLeft className='absolute -left-3 -top-3' />
        <Container center className='gap-2.5'>
          <Text bold>{price}</Text>
          <Text size={SIZE_ENUM.XS}>{localization.toman}</Text>
        </Container>

        <Container center className='w-fit rounded-lg bg-primary/5 px-2.5'>
          <Text bold size={SIZE_ENUM.XS} color={COLOR_ENUM.PRIMARY}>
            {localization.pricePostfix(priceDelta)}
          </Text>
          {up ? (
            <IoMdArrowDropup size={ICON_SIZE.lg} color={ICON_COLOR.primary} />
          ) : (
            <IoMdArrowDropdown size={ICON_SIZE.lg} color={ICON_COLOR.primary} />
          )}

          <Text size={SIZE_ENUM.XS} color={COLOR_ENUM.PRIMARY}>
            {localization.inTwoWeeks}
          </Text>
        </Container>
      </Container>
    </Link>
  );
}
