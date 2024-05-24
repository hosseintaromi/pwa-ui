import XImage from '@/components/@base/x-image';
import type Props from '@/components/shared/components/cards/price-related/car-image/type';

export default function CarImage({ src, alt }: Props) {
  return <XImage src={src} alt={alt} width={100} height={60} />;
}
