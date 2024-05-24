import { ElementType } from 'react';

import Base from '@/components/@base/@helpers/types';

import { StationModel as CardDataModel } from '@/models/_base.model';

type Props = {
  superGasMode?: boolean;
  reportMode?: boolean;
  data: CardDataModel;
  redirectTo?: string;
  ExtraButton?: ElementType;
  CustomLink?: ElementType;
  selected?: boolean;
} & Base;
export default Props;
