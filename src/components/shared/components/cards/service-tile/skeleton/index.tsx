import cn from '@/lib/clsxm';

import Card from '@/components/@base/card';
import BaseSkeleton from '@/components/@base/skeleton';

export default function Skeleton({ className }) {
  return (
    <Card
      noShadow
      className={cn(
        'flex aspect-square flex-col items-center justify-center bg-gray-50 p-4 px-4 py-3',
        className,
      )}
    >
      <BaseSkeleton className='w-full' count={1} height={40} width={40} baseColor='#ccc' />
      <BaseSkeleton count={1} height={10} width={50} baseColor='#ccc' />
    </Card>
  );
}
