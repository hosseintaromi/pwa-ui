import Card, { CardMedia } from '@/components/@base/card';
import CardContent from '@/components/@base/card/content';
import Props from '@/components/shared/components/cards/banner-image/type';

export default function BannerImage({ src, alt, className, ...props }: Props) {
  return (
    <Card noShadow noBorder className={className}>
      <CardContent className='p-0'>
        <CardMedia src={src} alt={alt} className='w-full rounded-xl' placeholder {...props} />
      </CardContent>
    </Card>
  );
}
