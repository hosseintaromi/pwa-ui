import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import { ACCOUNT } from '@/constant/routes';
export default function Profile() {
  return (
    <Link href={ACCOUNT}>
      <CgProfile size={ICON_SIZE.lg} color={ICON_COLOR.black} />
    </Link>
  );
}
