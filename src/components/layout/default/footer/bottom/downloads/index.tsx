import Link from 'next/link';

import XImage from '@/components/@base/x-image';
import Links from '@/components/layout/default/footer/bottom/@shared/links';

import { APP_DOWNLOADS } from '@/constant/iterable-items';
import localization from '@/constant/localization';

export default function Downloads() {
  return (
    <Links title={'links'} className='grid-cols-2'>
      {APP_DOWNLOADS.map((item) => (
        <Link key={item.id} href={item.link}>
          <XImage src={item.src} width={185} height={89} alt={item.alt} />
        </Link>
      ))}
    </Links>
  );
}
