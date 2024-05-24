import KianComponents from '@/components/app/about/components/[kian]';
import { metadata as aboutMetadata } from '@/components/app/about/components/[kian]/meta';

export const metadata = aboutMetadata;
export default async function Kian() {
  return <KianComponents />;
}
