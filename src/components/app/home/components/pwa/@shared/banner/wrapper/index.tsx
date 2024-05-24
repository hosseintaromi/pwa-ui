'use client';

import Carousel, { CarouselItem } from '@/components/@base/carousel';
import Container from '@/components/@base/container';
import Banner, { Skeleton } from '@/components/app/home/components/pwa/@shared/banner';

import localization from '@/constant/localization';
import { FRAME, GAS_STATION } from '@/constant/routes';
import { Banner as BannerModel } from '@/models/banners.model';

const LINK_MAP = {
  GasStationIntroPageScreen: GAS_STATION,
};

export default function Wrapper({
  banners,
  width,
  height,
}: {
  banners?: BannerModel[];
  width: number;
  height: number;
}) {
  if (!banners) {
    return <Skeleton width={width} height={height} />;
  }
  const isMultiple = banners.length > 1;
  const singleItem = banners[0];
  const { target, imageUrl, inApp } = singleItem;
  return (
    <Container>
      {isMultiple ? (
        <Carousel slidesPerView='auto'>
          {banners.map(({ target, imageUrl, inApp }) => (
            <CarouselItem key={target}>
              <Banner
                src={imageUrl}
                height={height}
                width={width}
                text={target}
                link={inApp ? LINK_MAP[target] : FRAME(target, localization.back)}
              />
            </CarouselItem>
          ))}
        </Carousel>
      ) : (
        <Banner
          src={singleItem.imageUrl}
          width={width}
          height={height}
          text={imageUrl}
          link={inApp ? LINK_MAP[target] : FRAME(target, localization.back)}
        />
      )}
    </Container>
  );
}
