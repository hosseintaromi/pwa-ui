import Card, { CardContent } from '@/components/@base/card';
import CarImage from '@/components/shared/components/cards/price-related/car-image';
import Details from '@/components/shared/components/cards/price-related/details';
import type Props from '@/components/shared/components/cards/price-related/type';

export function PriceRelatedCard({ title, price, delta, up, image }: Props) {
  return (
    <Card className='h-[93px] w-[290px]'>
      <CardContent className='flex items-center gap-2.5'>
        <CarImage src={image} alt={title} />
        <Details title={title} delta={delta} price={price} up={up} />
      </CardContent>
    </Card>
  );
}
