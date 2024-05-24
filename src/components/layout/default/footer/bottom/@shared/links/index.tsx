import Link from 'next/link';

import cn from '@/lib/clsxm';

import { COLOR_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import Props from '@/components/layout/default/footer/bottom/@shared/links/type';
import HeadingContent from '@/components/shared/components/heading-content';

export default function Links({ title, items, className, children }: Props) {
  return (
    <HeadingContent
      type={HEADING_TYPE.H5}
      title={title}
      className='text-sm text-xs leading-7 text-secondary'
    >
      <Container
        className={cn(
          'grid grid-cols-4 justify-between gap-x-3 gap-y-2 text-[10px]',
          className,
        )}
      >
        {children
          ? children
          : items?.map((item) => (
              <Link key={item.id} href={item.link}>
                <Text className='leading-loose' color={COLOR_ENUM.INVERT}>
                  {item.name}
                </Text>
              </Link>
            ))}
      </Container>
    </HeadingContent>
  );
}
