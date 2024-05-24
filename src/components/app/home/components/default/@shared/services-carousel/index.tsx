'use client';

import cn from '@/lib/clsxm';

import Carousel, { CarouselItem } from '@/components/@base/carousel';
import Container from '@/components/@base/container';
import { Heading } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import Props from '@/components/app/home/components/default/@shared/services-carousel/type';
import ServiceTile from '@/components/shared/components/cards/service-tile';

export default function ServicesCarousel({ title, items }: Props) {
  return (
    <Container>
      <Container className='flex items-center px-2.5'>
        <Container className='ml-3 h-1 w-1 rounded-full bg-primary' />
        <Heading type={HEADING_TYPE.H2} className='text-md font-medium leading-7'>
          {title}
        </Heading>
      </Container>

      <Carousel slidesPerView='auto' spaceBetween={12} className='!px-3'>
        {items.map((item) => (
          <CarouselItem key={item.id} className='ml-3 !w-auto pt-3'>
            <ServiceTile
              text={item.name}
              icon={item.icon}
              hasMore={item.hasMore}
              link={item.hasMore ? undefined : item.link}
              badge={item.badge || ''}
              flag={item.flag}
              className={cn('h-28 max-w-32 bg-gray-50')}
            />
          </CarouselItem>
        ))}
      </Carousel>
    </Container>
  );
}
