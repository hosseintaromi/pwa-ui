import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import Props from '@/components/app/terms/components/@shared/blocks/content/type';
import HeadingContent from '@/components/shared/components/heading-content';

export default function Content({ title, children }: Props) {
  return (
    <HeadingContent type={HEADING_TYPE.H2} title={title}>
      {children}
    </HeadingContent>
  );
}
