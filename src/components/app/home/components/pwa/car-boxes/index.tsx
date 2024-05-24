'use client';
import { useEffect, useState } from 'react';
import { Swiper } from 'swiper/types';

import cn from '@/lib/clsxm';

import Carousel, { CarouselItem } from '@/components/@base/carousel';
import { useGetCarList } from '@/components/app/home/services/hooks';
import CarBox from '@/components/shared/components/cards/car-box';

import useCarStore from '@/store/car-store';
import useUserStore from '@/store/user-store';

export default function CarBoxes() {
  const { setCar, setNoCar } = useCarStore();
  const { user } = useUserStore();
  const [active, setActive] = useState(0);
  const { data: cars, isLoading } = useGetCarList();
  useEffect(() => {
    if (!isLoading) {
      if (cars?.length) {
        setCar(cars[0]);
      } else {
        setNoCar(true);
      }
    }
  }, [isLoading]);
  const handleActiveIndexChange = (index: Swiper) => {
    setActive(index.activeIndex);
  };

  useEffect(() => {
    if (active >= 0 && cars) {
      const car = cars[active];
      setCar(car);
      setNoCar(!car);
    }
  }, [active, cars?.length]);

  return (
    <Carousel
      slidesPerView='auto'
      className='!px-5'
      centeredSlidesBounds
      onActiveIndexChange={(index) => handleActiveIndexChange(index)}
    >
      {isLoading || !user
        ? [0, 1].map((item) => (
            <CarouselItem key={item} className='ml-3 !w-auto'>
              <CarBox skeleton />
            </CarouselItem>
          ))
        : cars && (
            <>
              {cars.map(
                (
                  {
                    carData: {
                      id,
                      car_image,
                      car,
                      license,
                      automatic_tehran_payment,
                      automatic_freeway_payment,
                    },
                    name,
                    description,
                  },
                  index,
                ) => (
                  <CarouselItem key={id} className='ml-3 !w-auto'>
                    <CarBox
                      id={id}
                      license={license}
                      selected={index === active}
                      plateNumber={car.plate}
                      name={name}
                      extraInfo={description}
                      image={car_image}
                      automatic_freeway_payment={automatic_freeway_payment}
                      automatic_tehran_payment={automatic_tehran_payment}
                    />
                  </CarouselItem>
                ),
              )}
              <CarouselItem className={cn('!w-auto', cars.length === 0 ? 'mx-auto' : 'ml-3')}>
                <CarBox selected={active >= cars.length} insert />
              </CarouselItem>
            </>
          )}
    </Carousel>
  );
}
