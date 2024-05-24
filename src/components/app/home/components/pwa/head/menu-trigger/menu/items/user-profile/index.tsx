import Link from 'next/link';

import Item from '@/components/app/home/components/pwa/head/menu-trigger/menu/items/@shared/item';

import useUserStore from '@/store/user-store';

import localization from '@/constant/localization';
import { PROFILE } from '@/constant/routes';

export default function UserProfile() {
  const { user } = useUserStore();
  if (!user) {
    return null;
  }
  return (
    <Link href={PROFILE}>
      <Item
        name={user.first_name ? `${user.first_name} ${user.last_name}` : localization.noName}
        subName={user.mobile}
        hasMore
        imageWrapperClassName='w-[32px] h-[32px]'
        className='py-6 pr-0'
        src={user.user_onboarding_logo}
      />
    </Link>
  );
}
