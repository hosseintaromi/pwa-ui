import Button from '@/components/@base/button';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';

import Props from './type';

export default function ShortcutCard({ title, buttonText, price, elapssedTime }: Props) {
  return (
    <Container>
      <Container>
        <Text bold>{title}</Text>
        <Button>{buttonText}</Button>
      </Container>
      <Container>
        {price && <Text>{price}</Text>}
        <Text>{elapssedTime}</Text>
      </Container>
    </Container>
  );
}
