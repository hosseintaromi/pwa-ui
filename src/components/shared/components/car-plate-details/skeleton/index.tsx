import Container from '@/components/@base/container';
import BaseSkeleton from '@/components/@base/skeleton';

export default function Skeleton() {
  return (
    <Container
      center
      className='flex min-h-24 justify-between gap-8 border-b-2 border-t-2 border-gray-200 bg-[#e5edfd] px-4 py-3'
    >
      <Container className='min-w-4 max-w-14 flex-grow'>
        <BaseSkeleton count={1} baseColor='#ccc' className='h-12' />
      </Container>

      <Container className='flex min-w-24 max-w-80 flex-grow flex-col'>
        <BaseSkeleton count={1} baseColor='#ccc' className='h-12' />
        <Container center className='justify-between pt-2'>
          <Container className='w-14'>
            <BaseSkeleton count={1} baseColor='#ccc' className='h-4' />
          </Container>
          <Container className='w-24'>
            <BaseSkeleton count={1} baseColor='#ccc' className='h-4' />
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
