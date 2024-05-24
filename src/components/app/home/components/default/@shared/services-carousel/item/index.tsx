import Link from 'next/link';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Badge from '@/components/@base/badge';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import XImage from '@/components/@base/x-image';
import Props from '@/components/app/home/components/default/@shared/services-carousel/item/type';

export default function Item({ icon, text, badge, href }: Props) {
  return (
    <Link href={href}>
      <Container
        center
        className='border-gray pointer relative h-[89px] w-[124px] flex-col rounded-xl border px-3 py-4 text-center'
      >
        {badge && <Badge text={badge} className='absolute -left-4 -top-4' />}
        <XImage src={icon} alt={text} />
        <Text bold size={SIZE_ENUM.XS} className='h-[34px] leading-normal'>
          {text}
        </Text>
      </Container>
    </Link>
  );
}
