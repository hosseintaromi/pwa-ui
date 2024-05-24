import cn from '@/lib/clsxm';

import Container from '@/components/@base/container';
import { CONTAINER_TAG_TYPE } from '@/components/@base/container/type';
import { Heading } from '@/components/@base/typography';
import Props from '@/components/shared/components/heading-content/type';

export default function HeadingContent({
  wrapperClassName,
  className,
  title,
  children,
  ...props
}: Props) {
  return (
    <Container type={CONTAINER_TAG_TYPE.SECTION} className={wrapperClassName}>
      <Heading className={cn('flex items-start', className)} {...props}>
        {title}
      </Heading>
      {children}
    </Container>
  );
}
