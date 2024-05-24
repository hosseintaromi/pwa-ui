import Container from '@/components/@base/container';
import XImage from '@/components/@base/x-image';

// import DesktopHero from '~/images/home/desktop.webp';
import localization from '@/constant/localization';

import homepageMobile from '~/images/home/homepage-mobile.webp';

export default function Hero() {
  return (
    <Container>
      <XImage src={homepageMobile} alt={localization.itollHero} height={260} />
    </Container>
  );
}
