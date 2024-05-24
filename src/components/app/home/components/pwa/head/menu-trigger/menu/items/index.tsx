import Container from '@/components/@base/container';
import DirectDebit from '@/components/app/home/components/pwa/head/menu-trigger/menu/items/direct-debit';
import Links from '@/components/app/home/components/pwa/head/menu-trigger/menu/items/links';
import UserProfile from '@/components/app/home/components/pwa/head/menu-trigger/menu/items/user-profile';
import Wallet from '@/components/app/home/components/pwa/head/menu-trigger/menu/items/wallet';

export default function Items() {
  return (
    <Container className='flex flex-col gap-2.5 p-5'>
      <UserProfile />
      <Wallet />
      <DirectDebit />
      <Links />
    </Container>
  );
}
