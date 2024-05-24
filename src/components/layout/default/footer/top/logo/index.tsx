import Container from '@/components/@base/container';
import SharedLogo from '@/components/shared/components/logo';

import logo from '~/images/common/logo.svg';
export default function Logo() {
  return (
    <Container className='py-6'>
      <SharedLogo width={180} logo={logo} />
    </Container>
  );
}
