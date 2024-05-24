import Container from '@/components/@base/container';
import Bottom from '@/components/app/home/components/pwa/footer-banner/bottom';
import Top from '@/components/app/home/components/pwa/footer-banner/top';

export default function FooterBanner() {
  return (
    <Container center className='flex-col gap-2.5'>
      <Top />
      <Bottom />
    </Container>
  );
}
