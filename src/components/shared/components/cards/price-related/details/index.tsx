import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import cn from '@/lib/clsxm';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import {
  covertToToman,
  formatDeltaToTwoDecimalPlaces,
} from '@/components/shared/components/cards/price-related/details/helper';
import type Props from '@/components/shared/components/cards/price-related/details/type';

import localization from '@/constant/localization';

export default function Details({ title, delta, price, up }: Props) {
  return (
    <Container className='flex-1'>
      <Container center className='justify-between'>
        <Text className='line-clamp-1'>{title}</Text>
        {!!+delta && (
          <Container
            center
            className={cn(
              'rounded bg-opacity-20 px-1',
              up ? 'bg-success text-success' : 'bg-error text-error',
            )}
          >
            <Text className='whitespace-nowrap text-inherit' size={SIZE_ENUM.XS}>
              {formatDeltaToTwoDecimalPlaces(delta)} %
            </Text>
            {up ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </Container>
        )}
      </Container>

      <Text bold>{localization.pricePostfix(covertToToman(price))}</Text>
    </Container>
  );
}
