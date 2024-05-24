import Container from '@/components/@base/container';
import BaseSkeleton from '@/components/@base/skeleton';

export default function Skeleton({ width, height }) {
  return (
    <Container
      style={{ width: `${width}px`, height: `${height}px`, maxWidth: '100%' }}
      className='flex w-full flex-col rounded-xl px-5 py-1'
    >
      <BaseSkeleton count={1} height={100} baseColor='#ccc' />
    </Container>
  );
}
