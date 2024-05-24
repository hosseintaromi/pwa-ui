import cn from '@/lib/clsxm';

import Container from '@/components/@base/container';
import ServiceTileSkeleton from '@/components/shared/components/cards/service-tile/skeleton';
import Props from '@/components/shared/components/service-tiles/skeleton/type';

export default function Skeleton({ className, number, tileClassName }: Props) {
  return (
    <Container className={cn('grid grid-cols-3 gap-3 px-5 py-3', className)}>
      {Array.from(Array(number || 6).keys()).map((item) => (
        <ServiceTileSkeleton key={item} className={tileClassName} />
      ))}
    </Container>
  );
}
