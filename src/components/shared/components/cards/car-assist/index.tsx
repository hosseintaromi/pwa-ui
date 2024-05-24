import Image from 'next/image';

import Card, { CardHeader } from '@/components/@base/card';
import CardContent from '@/components/@base/card/content';
import Container from '@/components/@base/container';
import { Heading } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import Skeleton from '@/components/shared/components/cards/car-assist/skeleton';
import Props from '@/components/shared/components/cards/car-assist/type';

export default function CarAssist({ title, icon, skeleton, children, ...props }: Props) {
  return (
    <Card noShadow className='h-[81px] w-[275px]' {...props}>
      {skeleton ? (
        <Skeleton />
      ) : (
        <>
          <CardHeader className='absolute -top-2.5 right-2 bg-white'>
            <Container center className='gap-2.5'>
              <Image src={icon} alt={title} />
              <Heading type={HEADING_TYPE.H5}>{title}</Heading>
            </Container>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </>
      )}
    </Card>
  );
}

export { Skeleton };
