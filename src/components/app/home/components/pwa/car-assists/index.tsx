'use client';
import Carousel, { CarouselItem } from '@/components/@base/carousel';
import Kilometer from '@/components/app/home/components/pwa/car-assists/kilometer';
import Price from '@/components/app/home/components/pwa/car-assists/price';
import ServicePeriod from '@/components/app/home/components/pwa/car-assists/service-period';
import UsedFuel from '@/components/app/home/components/pwa/car-assists/used-fuel';
import { useGetAssists } from '@/components/app/home/services/hooks';
import CarAssist from '@/components/shared/components/cards/car-assist';

import useCarStore from '@/store/car-store';

import localization from '@/constant/localization';

import gasStation from '~/images/home/pwa/gas-station.svg';
import odoMeter from '~/images/home/pwa/odometer.svg';
import priceUp from '~/images/home/pwa/price-up.svg';
import wrench from '~/images/home/pwa/wrench.svg';

const kilometerService = {
  id: '',
  title: localization.carOdometer,
  icon: odoMeter,
};
const priceService = {
  id: '',
  title: localization.carPrices,
  icon: priceUp,
};
const usedFuelService = {
  id: '',
  title: localization.usedFuel,
  icon: gasStation,
};
const servicesPeriod = {
  id: '',
  title: localization.services,
  icon: wrench,
};

export default function CarAssists() {
  const { car, noCar } = useCarStore();
  const { data: carAssists } = useGetAssists(car?.carData.id || 0);
  const { title: kilometerTitle, icon: kilometerIcon } = kilometerService;
  const { title: priceTitle, icon: priceIcon } = priceService;
  const { title: usedFuelTitle, icon: usedFuelIcon } = usedFuelService;
  const { title: servicesPeriodTitle, icon: servicePeriodIcon } = servicesPeriod;
  if (noCar) {
    return null;
  }
  return (
    <Carousel className='!px-5 !py-4' slidesPerView='auto' spaceBetween={12}>
      {carAssists ? (
        <>
          <CarouselItem className='ml-3 !w-auto'>
            <CarAssist title={kilometerTitle} icon={kilometerIcon}>
              <Kilometer
                time={carAssists.kilometer?.updated_at}
                number={carAssists.kilometer?.driving_distance}
              />
            </CarAssist>
          </CarouselItem>
          <CarouselItem className='ml-3 !w-auto'>
            <CarAssist title={priceTitle} icon={priceIcon}>
              <Price
                id={car?.carData.id || 0}
                price={carAssists.price?.price}
                priceDelta={carAssists.price?.price_change}
                up={carAssists.price?.up}
              />
            </CarAssist>
          </CarouselItem>
          <CarouselItem className='ml-3 !w-auto'>
            <CarAssist title={usedFuelTitle} icon={usedFuelIcon}>
              <UsedFuel
                id={car?.carData.id || 0}
                liter={carAssists.used_fuel?.description}
                title={carAssists.used_fuel?.title}
                price={carAssists.used_fuel?.price}
              />
            </CarAssist>
          </CarouselItem>
          <CarouselItem className='ml-3 !w-auto'>
            <CarAssist title={servicesPeriodTitle} icon={servicePeriodIcon}>
              <ServicePeriod
                id={car?.carData.id || 0}
                services={carAssists.services?.title}
                time={carAssists.services?.updated_at}
                kilometer={carAssists.services?.kilometer}
              />
            </CarAssist>
          </CarouselItem>
        </>
      ) : (
        [0, 1].map((item) => (
          <CarouselItem key={item} className='ml-3 !w-auto'>
            <CarAssist skeleton title='' icon='' />
          </CarouselItem>
        ))
      )}
    </Carousel>
  );
}
