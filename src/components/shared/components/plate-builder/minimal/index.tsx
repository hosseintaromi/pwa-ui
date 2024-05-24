import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import XImage from '@/components/@base/x-image';
import Props from '@/components/shared/components/plate-builder/minimal/type';

import localization from '@/constant/localization';

import iranWordPlate from '~/images/common/iran-word-plate.svg';

export default function Minimal({ plateNumber }: Props) {
  return (
    <Container
      center
      className='h-[36px] w-[144px] justify-between rounded bg-white px-2 py-3 shadow'
    >
      <Container center className='flex-col border-l pl-2 pt-2'>
        <XImage
          loading='eager'
          src={iranWordPlate}
          alt={localization.plate}
          width={21}
          height={4}
        />
        <Text bold>{plateNumber.state}</Text>
      </Container>
      <Container center className='gap-2.5'>
        <Text bold>{plateNumber.last}</Text>
        <Text bold>{plateNumber.char}</Text>
        <Text bold>{plateNumber.first}</Text>
      </Container>
    </Container>
  );
}
