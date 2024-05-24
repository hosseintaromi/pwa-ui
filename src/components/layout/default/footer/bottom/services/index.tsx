import Links from '@/components/layout/default/footer/bottom/@shared/links';

import { FOOTER_ITOLL_SERVICES } from '@/constant/iterable-items';
import localization from '@/constant/localization';

export default function Services() {
  return <Links items={FOOTER_ITOLL_SERVICES} title={localization.itollServices} />;
}
