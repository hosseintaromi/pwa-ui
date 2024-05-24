import dynamic from 'next/dynamic';

import Container from '@/components/@base/container';

const Pins = dynamic(
  () => import('@/components/shared/components/service-stations/location/pins'),
  {
    loading: () => <Container center className='h-[180px] w-full rounded bg-gray-100' />,
    ssr: false,
  },
);
export default function Map({ locations }: { locations?: [number, number][] }) {
  return (
    <Container className='pb-4'>
      <Container className='relative h-[180px] min-h-[180px] w-full rounded bg-gray-50'>
        {!locations || !locations.length ? (
          <Container className='relative h-[160px] min-h-[160px] w-full rounded bg-white' />
        ) : (
          <Pins locations={locations} />
        )}
      </Container>
    </Container>
  );
}
