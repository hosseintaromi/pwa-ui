import Base from '@/components/@base/@helpers/types';

import { GeneratorReturnType, ServiceType } from '@/constant/iterable-items/type';

type Props = {
  services: GeneratorReturnType<ServiceType>[];
  needCar?: (service: string) => boolean;
  tileClassName?: Base['className'] | ((text: string) => string);
} & Base;

export default Props;
