import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import XImage from '@/components/@base/x-image';
import Info from '@/components/shared/components/form/field/info';
import { Props } from '@/components/shared/components/form/field/type';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';

export default function Field({
  Icon,
  title,
  info,
  children,
  iconColor = ICON_COLOR.gray,
}: Props) {
  return (
    <Container center className='flex-col items-start gap-2 [&>*]:w-full'>
      <Container center className='w-full justify-between'>
        <Container center className='gap-2'>
          {Icon &&
            (typeof Icon === 'object' ? (
              <XImage src={Icon} alt={title} />
            ) : (
              <Icon size={ICON_SIZE.lg} color={iconColor} />
            ))}
          <Text size={SIZE_ENUM.SM} color={COLOR_ENUM.BLACK} className='text-center' bold>
            {title}
          </Text>
        </Container>
        {info && <Info>{info}</Info>}
      </Container>
      {children}
    </Container>
  );
}

export {};
