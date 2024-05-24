import Links from '@/components/layout/default/footer/bottom/@shared/links';

import { ITOLL_LINKS } from '@/constant/iterable-items';
import localization from '@/constant/localization';

export default function LinksToOutside() {
  return <Links items={ITOLL_LINKS} title={localization.itollServices} />;
}
