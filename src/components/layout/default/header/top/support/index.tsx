import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';

import localization from '@/constant/localization';

export default function Support() {
  return (
    <Button className='h-[25px] min-w-12 rounded-full bg-gray-600 px-6' size={SIZE_ENUM.XS}>
      {localization.contactWithSupport}
    </Button>
  );
}
