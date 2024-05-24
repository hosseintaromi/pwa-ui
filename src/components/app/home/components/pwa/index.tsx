import Container from '@/components/@base/container';
import BodyBanner from '@/components/app/home/components/pwa/body-banner';
import CarAssists from '@/components/app/home/components/pwa/car-assists';
import CarBoxes from '@/components/app/home/components/pwa/car-boxes';
import Debts from '@/components/app/home/components/pwa/debts';
import FooterBanner from '@/components/app/home/components/pwa/footer-banner';
import Head from '@/components/app/home/components/pwa/head';
import Tiles from '@/components/app/home/components/pwa/tiles';
import UserDevices from '@/components/app/home/components/pwa/user-devices';
import StickyTiles from '@/components/shared/components/sticky-tiles';

export default function PWA() {
  return (
    <Container className='select-none'>
      <Head />
      <CarBoxes />
      <CarAssists />
      <Debts />
      <BodyBanner />
      <Tiles />
      <FooterBanner />
      <StickyTiles />
      <UserDevices />
    </Container>
  );
}
