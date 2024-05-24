import Link from 'next/link';

import Skeleton from '@/components/app/home/components/pwa/@shared/banner/skeleton';
import BannerImage from '@/components/shared/components/cards/banner-image';

export default function Banner({ src, text, width, height, link }) {
  return (
    <Link href={link}>
      <BannerImage className='px-5 py-3' src={src} alt={text} width={width} height={height} />
    </Link>
  );
}

export { Skeleton };
