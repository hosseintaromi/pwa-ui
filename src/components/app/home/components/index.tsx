import { isPWA } from '@/lib/helper';

import Default from '@/components/app/home/components/default';
import PWA from '@/components/app/home/components/pwa';

export default function Home() {
  return isPWA() ? <PWA /> : <Default />;
}
