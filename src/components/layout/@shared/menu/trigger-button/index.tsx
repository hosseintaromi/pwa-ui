'use client';

import React from 'react';
import { MdOutlineMenu } from 'react-icons/md';

import useMenuStore from '@/store/menu-store';

import ICON_SIZE from '@/constant/icon-size-color';

export default function TriggerButton() {
  const { show, setShow } = useMenuStore();
  return (
    <MdOutlineMenu
      size={ICON_SIZE.xl}
      className='cursor-pointer'
      onClick={() => !show && setShow(true)}
    />
  );
}
