import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';

import localization from '@/constant/localization';

export default function Item({ size, text, price, color }) {
  return (
    <Container center className='w-full justify-between'>
      <Text size={size}>{text}</Text>
      <Text size={size} color={color}>
        {price}
        {localization.toman}
      </Text>
    </Container>
  );
}
