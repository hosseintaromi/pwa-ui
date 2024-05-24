import Link from 'next/link';

import Container from '@/components/@base/container';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import { SOCIALS } from '@/constant/iterable-items';

export default function Socials() {
  return (
    <Container className='flex flex-row-reverse gap-2.5'>
      {SOCIALS.map((item) => (
        <Link key={item.id} href={item.link}>
          <item.Icon color={ICON_COLOR.secondary} size={ICON_SIZE.lg} />
        </Link>
      ))}
    </Container>
  );
}
