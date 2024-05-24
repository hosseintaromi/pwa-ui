import Container from '@/components/@base/container';
import Menu from '@/components/layout/@shared/menu';
import Logo from '@/components/layout/default/header/bottom/logo';
import Profile from '@/components/layout/default/header/bottom/profile';

export default function Bottom() {
  return (
    <Container
      center
      className='border-b-gray h-14 justify-between border-b border-b-gray-200 bg-white px-3'
    >
      <Menu />
      <Logo />
      <Profile />
    </Container>
  );
}
