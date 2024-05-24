import Container from '@/components/@base/container';
import { CONTAINER_TAG_TYPE } from '@/components/@base/container/type';
import Bottom from '@/components/layout/default/header/bottom';
import Top from '@/components/layout/default/header/top';

export default function Header() {
  return (
    <Container type={CONTAINER_TAG_TYPE.HEADER}>
      <Top />
      <Bottom />
    </Container>
  );
}
