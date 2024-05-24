import AboutComponents from '@/components/app/about/components';
import { metadata as aboutMetadata } from '@/components/app/about/components/meta';

export const metadata = aboutMetadata;
export default async function About() {
  return <AboutComponents />;
}
