import Container from '@/components/@base/container';
import { CONTAINER_TAG_TYPE } from '@/components/@base/container/type';
import Bottom from '@/components/layout/default/footer/bottom';
import Top from '@/components/layout/default/footer/top';

export default function Footer() {
  return (
    <Container type={CONTAINER_TAG_TYPE.FOOTER}>
      <Top />
      <Bottom />
    </Container>
  );
}
