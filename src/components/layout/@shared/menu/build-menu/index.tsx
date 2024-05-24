'use client';

import Link from 'next/link';

import List, { ListItem } from '@/components/@base/list';
import Props from '@/components/layout/@shared/menu/build-menu/type';

import useMenuStore from '@/store/menu-store';

export function BuildMenu({ items, ...props }) {
  const { setShow } = useMenuStore();
  return (
    <List {...props}>
      {items.map((item) => {
        return <BuildMenuItem key={item.id} item={item} onClick={() => setShow(false)} />;
      })}
    </List>
  );
}

export function BuildMenuItem({ item, children, isParentMenu = false, ...props }: Props) {
  return (
    <ListItem key={item.id} {...props}>
      {isParentMenu ? (
        <p>{item.name}</p>
      ) : (
        <Link className='inline-flex w-full py-2.5' href={item.link}>
          {item.name}
        </Link>
      )}
      {children}
    </ListItem>
  );
}
