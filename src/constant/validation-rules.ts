import * as Yup from 'yup';

import localization from '@/constant/localization';

export const mobile = Yup.string()
  .matches(
    /(0|\+98)?( |-|[()]){0,2}9[1|02349]( |-|[()]){0,2}(?:[0-9]( |-|[()]){0,2}){8}/,
    localization.invalidPhoneNumber,
  )
  .max(11, localization.invalidNumberCount);
export const digit = Yup.string().matches(/^([۰-۹]|[0-9])+$/, localization.pleaseInsertNumber);
