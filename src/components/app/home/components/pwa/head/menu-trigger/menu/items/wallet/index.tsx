import Link from 'next/link';

import { COLOR_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import Item from '@/components/app/home/components/pwa/head/menu-trigger/menu/items/@shared/item';

import useUserStore from '@/store/user-store';

import localization from '@/constant/localization';
import { FRAME } from '@/constant/routes';
import { INCREASE_BALANCE } from '@/constant/site-routes';

import carAdd from '~/images/icons/menu/card-add.svg';
import ticketDiscount from '~/images/icons/menu/ticket-discount.svg';
import wallet from '~/images/icons/menu/wallet.svg';

export default function Wallet() {
  const { user } = useUserStore();
  if (!user) {
    return null;
  }
  return (
    <Container className='flex flex-col gap-2.5 rounded-lg border border-gray-200 p-2'>
      <Container>
        <Item name={localization.wallet} src={wallet} className='p-0' hasMore />
        <Text bold color={COLOR_ENUM.SECONDARY}>
          {user.balance_currency_formatted} {localization.toman}
        </Text>
      </Container>

      <Container className='w-full border-t border-gray-100' />
      <Container className='flex flex-col gap-4'>
        <Link href={FRAME(INCREASE_BALANCE(), localization.increaseBalance)}>
          <Item name={localization.increaseBalance} className='p-0' src={carAdd} />
        </Link>
        <Link href={FRAME(INCREASE_BALANCE(true), localization.submitGiftCard)}>
          <Item name={localization.submitGiftCard} className='p-0' src={ticketDiscount} />
        </Link>
      </Container>
    </Container>
  );
}
