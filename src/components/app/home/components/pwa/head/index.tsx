'use client';

import Link from 'next/link';
import { Suspense, useEffect } from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import { MdOutlineMenu } from 'react-icons/md';

import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import MenuTrigger from '@/components/app/home/components/pwa/head/menu-trigger';

import useUserStore from '@/store/user-store';

import ICON_SIZE from '@/constant/icon-size-color';
import { NOTIFICATION } from '@/constant/routes';

export default function Head() {
  const { user } = useUserStore();

  return (
    <Container
      center
      className='sticky top-0 z-20 mb-2 h-12 justify-between bg-white px-5 shadow'
    >
      <Suspense fallback={<MdOutlineMenu size={ICON_SIZE.lg} />}>
        <MenuTrigger />
      </Suspense>
      <Link href={NOTIFICATION()} className='relative'>
        {user?.notifications_count && (
          <Text className='absolute -right-2 -top-1 h-5 rounded-full border-2 border-white bg-red-500 px-1 leading-5 text-white '>
            {user?.notifications_count}
          </Text>
        )}
        <HiOutlineBell size={ICON_SIZE.lg} />
      </Link>
    </Container>
  );
}
