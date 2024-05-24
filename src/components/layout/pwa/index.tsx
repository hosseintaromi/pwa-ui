import { getPathname } from '@nimpl/getters/get-pathname';

import DisableZoom from '@/components/layout/pwa/disable-zoom';
import Header from '@/components/layout/pwa/header';
import PushNotification from '@/components/layout/pwa/push-notification';

import { HOME_PAGE, SPLASH } from '@/constant/routes';

export default function PWA({ children }) {
  return (
    <>
      <Header show={getPathname() !== HOME_PAGE && getPathname() !== SPLASH} />
      <PushNotification />
      <DisableZoom />
      {children}
    </>
  );
}
