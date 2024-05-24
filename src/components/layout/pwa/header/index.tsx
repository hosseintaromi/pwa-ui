'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import { MdOutlineArrowForward } from 'react-icons/md';

import cn from '@/lib/clsxm';

import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';

import ICON_SIZE from '@/constant/icon-size-color';
import { GAS_STATION, HOME_PAGE, SPLASH } from '@/constant/routes';
const Title = dynamic(() => import('@/components/layout/pwa/header/title'), {
  ssr: false,
});

export default function Header({ show }) {
  const pathname = usePathname();
  const [active, setActive] = useState(show);
  useLayoutEffect(() => {
    setActive(pathname !== HOME_PAGE && pathname !== SPLASH);
  }, [pathname]);

  if (!active) {
    return null;
  }
  return (
    <Container
      center
      className={cn(
        'sticky top-0 z-10 h-16 max-h-16 justify-start gap-2 border-b border-gray-200 bg-white px-5',
        pathname === GAS_STATION && 'z-[101]',
      )}
    >
      <Link href={HOME_PAGE}>
        <Container center className='gap-2.5'>
          <MdOutlineArrowForward size={ICON_SIZE.lg} className='cursor-pointer' />

          <Text bold>
            <Title />
          </Text>
        </Container>
      </Link>
    </Container>
  );
}
