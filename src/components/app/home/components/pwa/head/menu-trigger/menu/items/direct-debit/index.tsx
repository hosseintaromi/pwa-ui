import Link from 'next/link';

import Item from '@/components/app/home/components/pwa/head/menu-trigger/menu/items/@shared/item';

import localization from '@/constant/localization';
import { FRAME } from '@/constant/routes';
import { DIRECT_DEBIT } from '@/constant/site-routes';

import flash from '~/images/icons/menu/flash.svg';

export default function DirectDebit() {
  return (
    <Link href={FRAME(DIRECT_DEBIT, localization.directDebit)}>
      <Item
        className='rounded-lg border border-gray-200 py-5'
        name={localization.activeDirectDebit}
        src={flash}
      />
    </Link>
  );
}
