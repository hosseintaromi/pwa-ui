import { HydrationBoundary } from '@tanstack/react-query';

import HomeComponents from '@/components/app/home/components';
import { metadata as homeMetadata } from '@/components/app/home/components/meta';

export const metadata = homeMetadata;
export default async function Home() {
  return (
    <HydrationBoundary state={await getData()}>
      <HomeComponents />
    </HydrationBoundary>
  );
}

async function getData() {
  return true;
}
