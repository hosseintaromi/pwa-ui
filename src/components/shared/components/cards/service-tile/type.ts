import Base, { SIZE_ENUM } from '@/components/@base/@helpers/types';

import { SERVICES_FLAG } from '@/constant/iterable-items/type';

type Props = {
  icon: string;
  text: string;
  badge?: string;
  hasMore?: boolean;
  link?: string;
  flag: SERVICES_FLAG;
  iconSize?: number;
  textSize?: SIZE_ENUM;
  textClassName?: Base['className'];
  needCar?: (name: string) => boolean;
} & Base;
export default Props;
