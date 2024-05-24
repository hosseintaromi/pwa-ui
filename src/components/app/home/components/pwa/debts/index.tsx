'use client';
import { useLayoutEffect, useState } from 'react';

import Carousel, { CarouselItem } from '@/components/@base/carousel';
import { useGetDebtList } from '@/components/app/home/services/hooks';
import Debt from '@/components/shared/components/cards/debt';
import Skeleton from '@/components/shared/components/cards/debt/skeleton';

import useCarStore from '@/store/car-store';

import { DEBT_TYPE_ENUM } from '@/models/_base.model';

export default function Debts() {
  const { car, noCar } = useCarStore();
  const id = car?.carData?.id || 0;
  const license = car?.carData?.license || '';
  const { data: debtList, isLoading: debtListLoading } = useGetDebtList(id);
  const [notAvailableDebts, setNotAvailableDebts] = useState<DEBT_TYPE_ENUM[]>([]);

  useLayoutEffect(() => {
    if (!noCar) {
      setNotAvailableDebts([]);
    }
  }, [id, noCar]);
  if (noCar) {
    return null;
  }
  return (
    <Carousel
      className='!px-5 !py-4'
      slidesPerView='auto'
      spaceBetween={12}
      observeSlideChildren
    >
      {!debtList || debtListLoading
        ? [1, 2].map((item) => (
            <CarouselItem key={item} className='ml-3 !w-auto'>
              <Skeleton />
            </CarouselItem>
          ))
        : debtList
            .filter((debtType) => notAvailableDebts.indexOf(debtType) === -1)
            .map((debtType) => {
              return (
                <CarouselItem key={debtType} className='ml-3 !w-auto'>
                  <Debt
                    license={license}
                    type={debtType}
                    setNotAvailableDebts={setNotAvailableDebts}
                  />
                </CarouselItem>
              );
            })}
    </Carousel>
  );
}
