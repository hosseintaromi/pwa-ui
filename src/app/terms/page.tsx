import { metadata as homeMetadata } from '@/components/app/home/components/meta';
import TermsComponents from '@/components/app/terms/components';

export const metadata = homeMetadata;
export default async function Terms() {
  return <TermsComponents />;
}
