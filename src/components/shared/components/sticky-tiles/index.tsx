'use client';
import * as React from 'react';

import cn from '@/lib/clsxm';
import { makePWARoute } from '@/lib/helper';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Card, { CardContent } from '@/components/@base/card';
import Container from '@/components/@base/container';
import {
  getServiceByFlag,
  isCarProfile,
  isFreewayTollsService,
  needsLicencePlate,
} from '@/components/app/home/helpers';
import ServiceTile from '@/components/shared/components/cards/service-tile';
import Skeleton from '@/components/shared/components/cards/service-tile/skeleton';

import useCarStore from '@/store/car-store';

import { PWA_SERVICES } from '@/constant/iterable-items';
import { SERVICES_FLAG } from '@/constant/iterable-items/type';
import { CAR_PROFILE } from '@/constant/routes';
import { DEBTS } from '@/constant/site-routes';
import { DEBT_TYPE_ENUM } from '@/models/_base.model';

export default function StickyTiles() {
  const { car, noCar } = useCarStore();
  return (
    <Container
      center
      className='sticky bottom-0 z-10 h-[140px] w-full bg-gradient-to-t from-white from-90% to-transparent'
    >
      <Card className='m-auto w-[320px]'>
        <CardContent className='m-auto grid grid-cols-3 gap-2'>
          {!car && !noCar
            ? [0, 1, 2].map((num) => <Skeleton key={num} className='h-[80px] w-[80px]' />)
            : getServiceByFlag(SERVICES_FLAG.STICKY, PWA_SERVICES).map(
                ({ id, link, flag, name, icon }, index) => (
                  <ServiceTile
                    key={id}
                    iconSize={32}
                    textSize={SIZE_ENUM.XXS}
                    className={cn(
                      'h-[80px] w-[80px] border-primary-50',
                      index === 0 && 'border-[#ff7e29]',
                    )}
                    flag={flag}
                    link={
                      isCarProfile(name)
                        ? makePWARoute(CAR_PROFILE(car?.carData?.id || 0, 'time=6MONTH'))
                        : isFreewayTollsService(name)
                          ? DEBTS(car?.carData?.license || '', DEBT_TYPE_ENUM.FREEWAYS)
                          : link
                    }
                    needCar={(name) => needsLicencePlate(name) && !car?.carData?.id}
                    textClassName={index === 0 ? 'text-[#ff7e29]' : ''}
                    icon={icon}
                    text={name}
                  />
                ),
              )}
        </CardContent>
      </Card>
    </Container>
  );
}
