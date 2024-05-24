'use client';
import { makePWARoute } from '@/lib/helper';

import {
  getMainServiceTiles,
  isAllService,
  isOverAllInquiryService,
  needsLicencePlate,
} from '@/components/app/home/helpers';
import ServiceTiles from '@/components/shared/components/service-tiles';
import Skeleton from '@/components/shared/components/service-tiles/skeleton';

import useCarStore from '@/store/car-store';

import { ALL_SERVICES } from '@/constant/routes';
import { DEBTS } from '@/constant/site-routes';

export default function Tiles() {
  const { car, noCar } = useCarStore();
  if (!car && !noCar) {
    return <Skeleton />;
  }
  const services = getMainServiceTiles();

  const editedServices = services.map((item) =>
    isAllService(item.name)
      ? { ...item, link: makePWARoute(ALL_SERVICES(car?.carData?.id || 0)) }
      : isOverAllInquiryService(item.name)
        ? { ...item, link: DEBTS(car?.carData?.license || '') }
        : item,
  );
  return (
    <ServiceTiles
      services={editedServices}
      needCar={(name) => needsLicencePlate(name) && noCar}
      tileClassName={(text) => (isAllService(text) ? 'bg-[#E6EBFB]' : '')}
    />
  );
}
