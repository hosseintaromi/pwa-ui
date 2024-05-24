import Base from '@/components/@base/@helpers/types';

import { CarData } from '@/models/car.model';

type Props = {
  onInsert?: (data?: CarData) => any;
  loading?: boolean;
} & Base;

export default Props;
