import BaseCard, { CardContent as BaseCardContent } from '@/components/@base/card';
import Props from '@/components/app/terms/components/@shared/blocks/card/type';

export default function Card({ children }: Props) {
  return (
    <BaseCard>
      <BaseCardContent>{children}</BaseCardContent>
    </BaseCard>
  );
}
