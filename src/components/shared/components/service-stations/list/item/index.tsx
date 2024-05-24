import Link from 'next/link';
import { BiGasPump } from 'react-icons/bi';

import cn from '@/lib/clsxm';
import { getLocationStandardURL } from '@/lib/helper';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import { VARIANT_ENUM } from '@/components/@base/button/type';
import Card from '@/components/@base/card';
import CardContent from '@/components/@base/card/content';
import Container from '@/components/@base/container';
import { Heading, Text } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import { sendRouteFuelEvent, sendViewFuelEvent } from '@/components/app/gas-station/helpers';
import Props from '@/components/shared/components/service-stations/list/item/type';

import ICON_SIZE from '@/constant/icon-size-color';
import localization from '@/constant/localization';

export default function Item({
  data,
  redirectTo,
  ExtraButton,
  CustomLink,
  selected,
  ...props
}: Props) {
  const id = `station-${data?.id}`;

  return (
    <Card
      noShadow
      id={id}
      className={cn('my-3 h-[104px] w-full', selected && 'relative z-[101] bg-white')}
      {...props}
    >
      <CardContent>
        <Container center className='justify-between'>
          <Container className='w-[calc(100%-95px)]'>
            <Container className='flex gap-2.5'>
              <BiGasPump size={ICON_SIZE.lg} />
              <Heading type={HEADING_TYPE.H5} className='truncate text-sm'>
                {data.title}
              </Heading>
            </Container>

            {ExtraButton ? (
              <ExtraButton data={data} />
            ) : (
              data.distance && (
                <Text color={COLOR_ENUM.LIGHT_GRAY} size={SIZE_ENUM.XS}>
                  {localization.estimatedDistanceToStation}:{data.distance}
                </Text>
              )
            )}
          </Container>
          <Container center className='w-[93px] flex-col gap-3'>
            {CustomLink ? (
              <CustomLink data={data} />
            ) : (
              <>
                <Link
                  href={redirectTo as string}
                  onClick={() => sendViewFuelEvent(data.title)}
                  className='w-full'
                >
                  <Button
                    color={COLOR_ENUM.PRIMARY}
                    variant={VARIANT_ENUM.OUTLINED}
                    className='w-full'
                  >
                    {localization.view}
                  </Button>
                </Link>
                <a
                  className='w-full'
                  href={getLocationStandardURL(data.latitude, data.longitude)}
                  onClick={() => sendRouteFuelEvent(data.title)}
                >
                  <Button color={COLOR_ENUM.PRIMARY} className='w-full'>
                    {localization.navigation}
                  </Button>
                </a>
              </>
            )}
          </Container>
        </Container>
      </CardContent>
    </Card>
  );
}
