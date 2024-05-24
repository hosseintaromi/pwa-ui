'use client';

import Wrapper from '@/components/app/home/components/pwa/@shared/banner/wrapper';
import { useGetBanner } from '@/components/app/home/services/hooks';

import useCarStore from '@/store/car-store';

export default function BodyBanner() {
  const { car, noCar } = useCarStore();
  const { data: bannerData } = useGetBanner(car?.carData?.id || 0, noCar);
  return <Wrapper banners={bannerData?.body} height={110} width={448} />;
}
