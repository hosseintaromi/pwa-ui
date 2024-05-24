import { Dispatch, SetStateAction } from 'react';

import Base from '@/components/@base/@helpers/types';
import { LicenseType } from '@/components/shared/services/types';

import { DEBT_TYPE_ENUM } from '@/models/_base.model';

type Props = {
  license: LicenseType;
  type: DEBT_TYPE_ENUM;
  setNotAvailableDebts: Dispatch<SetStateAction<DEBT_TYPE_ENUM[]>>;
} & Base;
export default Props;
