import { StaticImageData } from 'next/image';

import Base from '@/components/@base/@helpers/types';

import { CarData, Plate } from '@/models/car.model';

type Props = {
  id?: CarData['id'];
  license?: Plate['license'];
  name?: string;
  extraInfo?: string;
  image?: string | StaticImageData;
  plateNumber?: Plate['plate'];
  selected?: boolean;
  insert?: boolean;
  skeleton?: boolean;
  automatic_tehran_payment?: CarData['automatic_tehran_payment'];
  automatic_freeway_payment?: CarData['automatic_freeway_payment'];
} & Base;
export default Props;
