import { HydrationBoundary } from '@tanstack/react-query';

import { metadata as homeMetadata } from '@/components/app/home/components/meta';
import SplashComponents from '@/components/app/splash/components';

export const metadata = homeMetadata;
export default async function Splash() {
  return (
    <HydrationBoundary state={await getData()}>
      <SplashComponents />
    </HydrationBoundary>
  );
}

async function getData() {
  return true;
}
