'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';

import Menu from '@/components/app/home/components/pwa/head/menu-trigger/menu';

import useMenuStore from '@/store/menu-store';

import ICON_SIZE from '@/constant/icon-size-color';

export default function MenuTrigger() {
  const { setShow, show } = useMenuStore();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const hasMenu = searchParams.has('menu');
  const onMenuClose = (show) => {
    !show && router.back();
  };
  useEffect(() => {
    if (hasMenu || !mounted) {
      hasMenu && router.replace(pathname);
      !mounted && setMounted(true);
    }
    return () => {
      setShow(false);
    };
  }, []);
  useEffect(() => {
    mounted && show !== hasMenu && setShow(hasMenu, onMenuClose);
  }, [hasMenu]);
  useEffect(() => {
    mounted && !show && hasMenu && router.back();
  }, [show]);
  return (
    <>
      <Menu />
      <MdOutlineMenu
        size={ICON_SIZE.lg}
        className='cursor-pointer'
        onClick={(e) => {
          e.preventDefault();
          e.nativeEvent.stopImmediatePropagation();
          router.push('?menu');
          setShow(true);
        }}
      />
    </>
  );
}
