import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

import cn from '@/lib/clsxm';

import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import XImage from '@/components/@base/x-image';
import Buttons from '@/components/shared/components/cards/car-box/actions/buttons';
import Props from '@/components/shared/components/cards/car-box/actions/type';

import ICON_SIZE from '@/constant/icon-size-color';
import localization from '@/constant/localization';

import blurCarBox from '~/images/common/blur-car-box.svg';

export default function Actions({ id }: Props) {
  const [active, setActive] = useState(false);
  if (!id) {
    return null;
  }

  return (
    <Container className='px-2' onClick={() => setActive(true)}>
      <BsThreeDotsVertical className='cursor-pointer' size={ICON_SIZE.md} />
      <XImage
        className={cn(!active && 'absolute hidden')}
        loading='eager'
        src={blurCarBox}
        alt={`${localization.edit} ${localization.remove}`}
        fill
      />
      {active && (
        <Container center className={cn('absolute inset-0')}>
          <Container
            center
            className='absolute top-0 z-10 w-full justify-between border-b px-6 py-2'
          >
            <Text bold>{localization.plateAndCarConfig}</Text>
            <MdClose
              size={ICON_SIZE.lg}
              className='cursor-pointer'
              onClick={(e) => {
                e.stopPropagation();
                setActive(false);
              }}
            />
          </Container>
          <Container center className='relative z-10 gap-2.5'>
            <Buttons id={id} />
          </Container>
        </Container>
      )}
    </Container>
  );
}
