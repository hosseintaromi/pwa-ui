import Card from '@/components/@base/card';
import Container from '@/components/@base/container';
import BaseSkeleton from '@/components/@base/skeleton';

export default function Skeleton() {
  return (
    <Card className='h-[93px] w-[290px] p-3'>
      <Container center className='justify-start gap-2.5'>
        <BaseSkeleton count={1} height={60} width={60} />
        <Container center className='flex-col justify-start'>
          <BaseSkeleton count={1} width={60} />
          <BaseSkeleton count={1} width={120} />
        </Container>
      </Container>
    </Card>
  );
}
