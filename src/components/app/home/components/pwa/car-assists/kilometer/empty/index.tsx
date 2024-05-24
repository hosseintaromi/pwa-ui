import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import Numbers from '@/components/app/home/components/pwa/car-assists/kilometer/numbers';

import localization from '@/constant/localization';

export default function Empty() {
  return (
    <Container center className='flex-col'>
      <Numbers number={566666} />
      <Text bold size={SIZE_ENUM.SM} color={COLOR_ENUM.PRIMARY}>
        {localization.updateKilometer}
      </Text>
    </Container>
  );
}
