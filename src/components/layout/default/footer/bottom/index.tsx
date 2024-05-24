import Container from '@/components/@base/container';
import Downloads from '@/components/layout/default/footer/bottom/downloads';
import Links from '@/components/layout/default/footer/bottom/links-to-outside';
import Logos from '@/components/layout/default/footer/bottom/logos';
import Services from '@/components/layout/default/footer/bottom/services';

export default function Bottom() {
  return (
    <Container className='grid gap-5 bg-primary px-3 py-10'>
      <Services />
      <Links />
      <Downloads />
      <Logos />
    </Container>
  );
}
