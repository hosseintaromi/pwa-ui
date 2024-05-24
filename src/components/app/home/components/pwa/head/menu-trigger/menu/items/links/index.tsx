import Link from 'next/link';

import Container from '@/components/@base/container';
import Item from '@/components/app/home/components/pwa/head/menu-trigger/menu/items/@shared/item';
import LogOut from '@/components/app/home/components/pwa/head/menu-trigger/menu/items/links/log-out';

import { PWA_MENU_LINKS } from '@/constant/iterable-items';
import localization from '@/constant/localization';
import { FRAME } from '@/constant/routes';

export default function Links() {
  return (
    <Container className='flex flex-col gap-4'>
      {PWA_MENU_LINKS.map(({ id, link, icon, name }) => {
        if (name === localization.logout) {
          return <LogOut key={id} src={icon} />;
        }
        return (
          <Link key={id} href={FRAME(link, name)}>
            <Item name={name} src={icon} />
          </Link>
        );
      })}
    </Container>
  );
}
