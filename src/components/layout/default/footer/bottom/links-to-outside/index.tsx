import Links from '@/components/layout/default/footer/bottom/@shared/links';

import { App_LINKS } from '@/constant/iterable-items';
import localization from '@/constant/localization';

export default function LinksToOutside() {
  return <Links items={App_LINKS} title={localization.appServices} />;
}
