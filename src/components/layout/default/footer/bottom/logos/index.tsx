import Link from 'next/link';

import cn from '@/lib/clsxm';

import Container from '@/components/@base/container';
import XImage from '@/components/@base/x-image';
import Links from '@/components/layout/default/footer/bottom/@shared/links';

import { ITOLL_LOGOS } from '@/constant/iterable-items';
import localization from '@/constant/localization';

export default function Services() {
  return (
    <Links title={localization.donwloadApp} className='grid-cols-5'>
      {ITOLL_LOGOS.map((item, index) => (
        <Link key={item.id} href={item.link}>
          <Container
            className={cn(
              'relative h-[60px] w-full',
              index !== ITOLL_LOGOS.length - 1 && 'w-[40px] rounded-xl bg-white',
            )}
          >
            <XImage src={item.src} fill alt={item.alt} />
          </Container>
        </Link>
      ))}
    </Links>
  );
}
