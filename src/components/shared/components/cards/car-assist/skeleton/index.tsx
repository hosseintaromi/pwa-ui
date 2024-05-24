import Container from '@/components/@base/container';
import BaseSkeleton from '@/components/@base/skeleton';

export default function Skeleton() {
  return (
    <Container className='flex h-full flex-col p-4'>
      <BaseSkeleton count={1} baseColor='#ccc' />
      <Container className='grid flex-grow grid-cols-2 items-end'>
        <BaseSkeleton count={1} baseColor='#ccc' />
      </Container>
    </Container>
  );
}
