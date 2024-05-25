import Links from '@/components/layout/default/footer/bottom/@shared/links';

import { FOOTER_IApp_AppSERVICES } from '@/constant/iterable-items';
import localization from '@/constant/localization';

export default function Services() {
  return <Links items={FOOTER_IApp_SERVICES} title={localization.iAppServices} />;
}
