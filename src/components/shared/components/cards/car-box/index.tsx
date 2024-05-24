import cn from '@/lib/clsxm';

import Card from '@/components/@base/card';
import Container from '@/components/@base/container';
import InsertMode from '@/components/shared/components/cards/car-box/insert-mode';
import ShowMode from '@/components/shared/components/cards/car-box/show-mode';
import Skeleton from '@/components/shared/components/cards/car-box/skeleton';
import Props from '@/components/shared/components/cards/car-box/type';

export default function CarBox({
  id,
  license,
  name,
  extraInfo,
  image,
  plateNumber,
  selected,
  insert,
  skeleton,
  automatic_tehran_payment,
  automatic_freeway_payment,
  ...props
}: Props) {
  const showModeProps = {
    id,
    license,
    name,
    extraInfo,
    image,
    plateNumber,
    automatic_tehran_payment,
    automatic_freeway_payment,
  };
  return (
    <Card
      noShadow
      className={cn(
        'relative h-[160px] w-[275px] bg-[#F2F2F2]',
        selected ? 'border-2 border-primary-200' : 'relative',
      )}
      {...props}
    >
      {!selected && !skeleton && (
        <Container className='absolute inset-0 z-10 bg-gray-200/50' />
      )}
      {skeleton ? <Skeleton /> : insert ? <InsertMode /> : <ShowMode {...showModeProps} />}
    </Card>
  );
}

export { Skeleton };
