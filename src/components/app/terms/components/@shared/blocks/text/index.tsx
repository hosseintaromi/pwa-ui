import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import { Text as TextBase } from '@/components/@base/typography';
import Props from '@/components/app/terms/components/@shared/blocks/text/type';

export default function Text({ children, key }: Props) {
  return (
    <TextBase size={SIZE_ENUM.XS} className='leading-8' key={key}>
      {children}
    </TextBase>
  );
}
