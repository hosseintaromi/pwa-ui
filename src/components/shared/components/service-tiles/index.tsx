import cn from '@/lib/clsxm';

import Container from '@/components/@base/container';
import ServiceTile from '@/components/shared/components/cards/service-tile';
import Props from '@/components/shared/components/service-tiles/type';

export default function ServiceTiles({ services, needCar, className, tileClassName }: Props) {
  return (
    <Container className={cn('grid grid-cols-3 gap-3 px-5 py-3', className)}>
      {services.map((service) => (
        <ServiceTile
          key={service.id}
          text={service.name}
          icon={service.icon}
          hasMore={service.hasMore}
          link={service.hasMore ? undefined : service.link}
          badge={service.badge || ''}
          flag={service.flag}
          className={cn(
            'bg-gray-50',
            typeof tileClassName === 'function' ? tileClassName(service.name) : tileClassName,
          )}
          needCar={needCar}
        />
      ))}
    </Container>
  );
}
