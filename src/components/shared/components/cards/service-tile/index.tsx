import Link from 'next/link';

import cn from '@/lib/clsxm';
import { getPWARoute, isPWA, isPWARoute } from '@/lib/helper';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Badge from '@/components/@base/badge';
import Card, { CardContent } from '@/components/@base/card';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import XImage from '@/components/@base/x-image';
import HasMore from '@/components/shared/components/cards/service-tile/has-more';
import Props from '@/components/shared/components/cards/service-tile/type';
import useShowInsertPlate from '@/components/shared/hooks/show-insert-plate';

import { FRAME } from '@/constant/routes';

export default function ServiceTile({
  icon,
  text,
  badge,
  hasMore,
  flag,
  link,
  className,
  textClassName,
  iconSize = 40,
  textSize = SIZE_ENUM.XS,
  needCar,
}: Props) {
  const { open } = useShowInsertPlate();
  const handleClick = (e) => {
    if (needCar?.(text)) {
      e.preventDefault();
      open();
    }
  };
  let correctLink = link || '';
  if (isPWA()) {
    if (isPWARoute(correctLink)) {
      correctLink = getPWARoute(correctLink);
    } else {
      correctLink = FRAME(correctLink, text);
    }
  }
  return (
    <Card
      noShadow
      className={cn(
        'aspect-square overflow-visible text-center',
        (badge || hasMore) && 'relative',
        className,
      )}
    >
      {badge && <Badge text={badge} className='absolute -left-2.5 -top-2.5' />}
      {hasMore && flag && <HasMore flag={flag} name={text} />}

      <CardContent className='h-full gap-1 p-0'>
        <Link onClick={handleClick} href={needCar?.(text) ? '' : correctLink}>
          <Container center className='h-full flex-col py-1'>
            <XImage src={icon} alt={text} width={iconSize} height={iconSize} />
            <Text bold size={textSize} className={cn('mt-2 leading-5', textClassName)}>
              {text}
            </Text>
          </Container>
        </Link>
      </CardContent>
    </Card>
  );
}
