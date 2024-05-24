'use client';

import { Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';

import Container from '@/components/@base/container';
import { BuildMenu } from '@/components/layout/@shared/menu/build-menu';

import useMenuStore from '@/store/menu-store';

export default function Mobile({ menus }) {
  const { show, setShow } = useMenuStore();
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : '';
  }, [show]);
  return (
    <Transition show={show} className='absolute inset-0 z-[500] h-[100vh] overflow-hidden'>
      <Transition.Child
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-x-full'
        enterTo='opacity-100 translate-x-0'
        leave='transition ease-in duration-50'
        leaveFrom='translate-x-full'
        leaveTo='translate-x-full'
      >
        <div
          className='absolute inset-y-0 right-0 z-10 flex  w-full'
          onClick={() => setShow(false)}
        >
          <Container className='w-[80%] flex-col gap-2 overflow-y-auto bg-white'>
            <BuildMenu className='flex flex-col gap-2 p-4' items={menus} />
          </Container>
        </div>
      </Transition.Child>
      <Transition.Child
        enter='transition ease-out duration-200'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div
          className='absolute inset-0 z-0 h-[100vh] bg-dark-overlay'
          onClick={() => setShow(false)}
        />
      </Transition.Child>
    </Transition>
  );
}
