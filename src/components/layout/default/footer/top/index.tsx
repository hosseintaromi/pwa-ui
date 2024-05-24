import Container from '@/components/@base/container';
import Contact from '@/components/layout/default/footer/top/contact';
import Logo from '@/components/layout/default/footer/top/logo';
import Socials from '@/components/layout/default/footer/top/socials';

export default function Top() {
  return (
    <Container className='flex flex-col p-3 py-8'>
      <Logo />
      <Contact />
      <Socials />
    </Container>
  );
}
