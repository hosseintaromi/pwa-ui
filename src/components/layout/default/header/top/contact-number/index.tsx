import Link from 'next/link';
import { AiFillPhone } from 'react-icons/ai';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import { SUPPORT_NUMBER } from '@/constant/phones';

export default function ContactNumber() {
  return (
    <Container className='flex items-center gap-2.5'>
      <AiFillPhone size={ICON_SIZE.sm} color={ICON_COLOR.white} />
      <Link dir='ltr' href={`tel:${SUPPORT_NUMBER}`}>
        <Text bold color={COLOR_ENUM.INVERT} size={SIZE_ENUM.XS}>
          {SUPPORT_NUMBER}
        </Text>
      </Link>
    </Container>
  );
}
