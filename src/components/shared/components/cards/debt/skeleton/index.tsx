import Card from '@/components/@base/card';
import Container from '@/components/@base/container';
import BaseSkeleton from '@/components/@base/skeleton';
import { Heading } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import Props from '@/components/shared/components/cards/debt/skeleton/type';

import localization from '@/constant/localization';
import { DEBT_TYPE_ENUM } from '@/models/_base.model';

export default function Skeleton({ type }: Props) {
  return (
    <Card noShadow className='flex h-[81px] w-[275px] flex-col p-4 px-4 py-3'>
      <Container className='grid flex-grow grid-cols-2 items-end'>
        <Heading type={HEADING_TYPE.H5}>
          {type === DEBT_TYPE_ENUM.TEHRAN ? (
            localization.trafficPlan
          ) : type === DEBT_TYPE_ENUM.ANNUAL_TOLL ? (
            localization.annualTolls
          ) : type === DEBT_TYPE_ENUM.FREEWAYS ? (
            localization.freewayTolls
          ) : (
            <BaseSkeleton count={1} baseColor='#ccc' />
          )}
        </Heading>

        <Container className='col-span-2 max-w-20'>
          <BaseSkeleton count={1} baseColor='#ccc' />
        </Container>
      </Container>
    </Card>
  );
}
