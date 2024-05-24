'use client';
import { useParams } from 'next/navigation';
import { RiWheelchairLine } from 'react-icons/ri';

import cn from '@/lib/clsxm';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import XImage from '@/components/@base/x-image';
import Skeleton from '@/components/shared/components/car-plate-details/skeleton';
import { useGetCarDetail } from '@/components/shared/services/hooks';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import localization from '@/constant/localization';

import iranWordPlate from '~/images/common/iran-word-plate.svg';
import plateLeftSide from '~/images/common/plate-left-side.svg';

export default function CarPlateDetails() {
  const params = useParams();
  const { data: carData } = useGetCarDetail(Number(params.id));

  if (!carData) {
    return <Skeleton />;
  }
  const { car_image, year, formatted_plate, plate, title, type } = carData;
  const showInfo = year && type;
  return (
    <Container
      center
      className='relative w-full justify-end overflow-hidden border-b-2 border-t-2 border-gray-200 bg-[#e5edfd] pb-1 pl-5 pt-3'
    >
      <XImage
        src={car_image}
        alt='222'
        width={80}
        height={110}
        className='absolute -right-1 top-5'
      />
      <Container className={cn('mr-24 flex w-full flex-col gap-2', !showInfo && 'pb-2')}>
        <Container
          className='flex h-14 w-full items-center justify-between gap-5 rounded-lg border-2 border-gray-200 bg-white'
          dir='ltr'
        >
          <XImage src={plateLeftSide} alt={localization.plate} height={50} />
          <Text color={COLOR_ENUM.BLACK} bold size={SIZE_ENUM.MD}>
            {formatted_plate?.first}
          </Text>
          <Container center className='cursor-pointer justify-center gap-1'>
            {plate.slice(2, 4) === '33' ? (
              <RiWheelchairLine color={ICON_COLOR.black} size={ICON_SIZE.lg} />
            ) : (
              <Text color={COLOR_ENUM.BLACK} bold size={SIZE_ENUM.MD}>
                {formatted_plate?.char}
              </Text>
            )}
          </Container>
          <Text color={COLOR_ENUM.BLACK} bold size={SIZE_ENUM.MD}>
            {formatted_plate?.last}
          </Text>

          <Container center className='max-w-14'>
            <Container className='h-8 w-[1px] border-l border-i-light-gray' />
            <Container center className='flex-col px-2 text-center'>
              <XImage src={iranWordPlate} alt={localization.plate} width={36} height={7} />
              <Text color={COLOR_ENUM.BLACK} bold size={SIZE_ENUM.MD}>
                {formatted_plate?.state}
              </Text>
            </Container>
          </Container>
        </Container>
        {showInfo && (
          <Container center className='justify-between'>
            <Text size={SIZE_ENUM.MD} color={COLOR_ENUM.BLACK} bold>
              {localization.model} {year}
            </Text>
            <Text size={SIZE_ENUM.MD} color={COLOR_ENUM.BLACK} bold>
              {title} {type}
            </Text>
          </Container>
        )}
      </Container>
    </Container>
  );
}

export { Skeleton };
