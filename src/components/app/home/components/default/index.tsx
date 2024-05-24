import Banner from '@/components/app/home/components/default/banner';
import Hero from '@/components/app/home/components/default/hero';
import ItollDescription from '@/components/app/home/components/default/itoll-description';
import Services from '@/components/app/home/components/default/services';

export default function Default() {
  return (
    <>
      <Hero />
      {/*<PlateInput />*/}
      <Services />
      <Banner />
      <ItollDescription />
    </>
  );
}
