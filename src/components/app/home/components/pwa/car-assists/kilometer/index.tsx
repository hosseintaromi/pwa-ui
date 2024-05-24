import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import Numbers from '@/components/app/home/components/pwa/car-assists/kilometer/numbers';
import Props from '@/components/app/home/components/pwa/car-assists/kilometer/type';
import InsertKilometer from '@/components/shared/components/insert-kilometer';

import useCarStore from '@/store/car-store';

import localization from '@/constant/localization';

export default function Kilometer({ time, number }: Props) {
  const { car } = useCarStore();

  return (
    <>
      <Container center className='gap-2.5'>
        <Numbers number={number || '000000'} />
        <InsertKilometer
          color={COLOR_ENUM.PRIMARY}
          id={car?.carData.id}
          license={car?.carData.license}
        />
      </Container>
      <Container center>
        <Text size={SIZE_ENUM.XS}>
          {localization.latestUpdate}: {time || '-'}
        </Text>
      </Container>
    </>
  );
}
