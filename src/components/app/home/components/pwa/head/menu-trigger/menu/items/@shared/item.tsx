import { BiChevronLeft } from 'react-icons/bi';

import cn from '@/lib/clsxm';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import XImage from '@/components/@base/x-image';
import Props from '@/components/app/home/components/pwa/head/menu-trigger/menu/items/@shared/type';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';

export default function Item({
  name,
  subName,
  src,
  hasMore,
  className,
  imageWrapperClassName,
}: Props) {
  return (
    <Container center className={cn('h-[22px] justify-between px-2', className)}>
      <Container center className='gap-2.5'>
        <Container className={cn('relative h-5 w-5', imageWrapperClassName)}>
          <XImage src={src} alt={name} fill />
        </Container>
        <Container center className='flex-col items-start'>
          <Text medium size={SIZE_ENUM.SM}>
            {name}
          </Text>
          {subName && <Text size={SIZE_ENUM.XS}>{subName}</Text>}
        </Container>
      </Container>
      {hasMore && <BiChevronLeft size={ICON_SIZE.lg} color={ICON_COLOR.secondary} />}
    </Container>
  );
}
