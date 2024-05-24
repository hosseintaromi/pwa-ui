import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import Toggle from '@/components/@base/input/check-box/toggle';
import { Text } from '@/components/@base/typography';

import localization from '@/constant/localization';

export default function Wallet({ invoice, credit, onChange }) {
  return (
    <Container center className='justify-between border-b-2'>
      <Container>
        <Text size={SIZE_ENUM.MD}>{localization.useAppWallet}</Text>
        <Text size={SIZE_ENUM.XS} color={COLOR_ENUM.LIGHT_GRAY}>
          {localization.credit}
          {invoice?.balance}
        </Text>
      </Container>
      <Toggle
        color={COLOR_ENUM.SUCCESS}
        checked={credit}
        onChange={(checked) => onChange(checked)}
      />
    </Container>
  );
}
