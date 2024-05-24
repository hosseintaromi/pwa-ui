import Container from '@/components/@base/container';
import Mobile from '@/components/layout/@shared/menu/mobile';
import TriggerButton from '@/components/layout/@shared/menu/trigger-button';

import { SIDEBAR_MENU_ITEMS } from '@/constant/iterable-items';

export default function Menu() {
  return (
    <Container id='menu'>
      <TriggerButton />

      <Mobile menus={SIDEBAR_MENU_ITEMS()} />
    </Container>
  );
}
