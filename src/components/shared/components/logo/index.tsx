import Link from 'next/link';

import Container from '@/components/@base/container';
import XImage from '@/components/@base/x-image';
import Props from '@/components/shared/components/logo/type';

import localization from '@/constant/localization';
import { HOME_PAGE } from '@/constant/routes';

export default function Logo({ logo, width = 80 }: Props) {
  return (
    <Container>
      <Link href={HOME_PAGE}>
        <XImage width={width} src={logo} alt={localization.app} />
      </Link>
    </Container>
  );
}
