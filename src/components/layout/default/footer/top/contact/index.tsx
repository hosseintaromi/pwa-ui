import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import { Text } from '@/components/@base/typography';
import { TEXT_TYPE } from '@/components/@base/typography/text/type';

import localization from '@/constant/localization';
import { SUPPORT_NUMBER } from '@/constant/phones';

export default function Contact() {
  return (
    <>
      <Text size={SIZE_ENUM.XS} color={COLOR_ENUM.PRIMARY}>
        <Text type={TEXT_TYPE.SPAN} bold color={COLOR_ENUM.PRIMARY}>
          {localization.supportOffice}:
        </Text>{' '}
        {localization.supportOfficeAddress}
      </Text>
      <Text size={SIZE_ENUM.XS} color={COLOR_ENUM.PRIMARY}>
        <Text type={TEXT_TYPE.SPAN} color={COLOR_ENUM.PRIMARY} bold>
          {localization.supportPhoneNumber}:
        </Text>{' '}
        {SUPPORT_NUMBER}
      </Text>
    </>
  );
}
