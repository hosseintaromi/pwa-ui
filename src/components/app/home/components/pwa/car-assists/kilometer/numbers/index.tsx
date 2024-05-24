import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import Props from '@/components/app/home/components/pwa/car-assists/kilometer/numbers/type';

export default function Numbers({ number }: Props) {
  const snumber = `${number}`;
  return (
    <Container center className='rounded border border-gray-400 py-0.5'>
      {Array.from(Array(6).keys()).map((value, index) => (
        <Container center key={value} className='h-[24px] w-[20px] border-l font-sans'>
          <Text bold>{snumber[snumber.length - 1 - index]}</Text>
        </Container>
      ))}
    </Container>
  );
}
