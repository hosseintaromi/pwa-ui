import { DocumentBagIdType } from '@/components/app/car-assist/services/types';

export type DocumentBagModel = {
  id: DocumentBagIdType;
  type: string;
  image: string;
};
export type DocumentBagMessageModel = {
  message: string;
};
export type CarInfoModel = {
  car_services: CarService;
  bag_completion_percentage: string;
  is_pin_set: boolean;
};
export type CarService = {
  BATTERY: Service;
  TIRE: Service;
  TIMING_BELT: Service;
  DYNAMO_BELT: Service;
  OIL: Service;
};
export type Service = {
  id: DocumentBagIdType;
  type: SERVICE_TYPE;
  icon: string;
  progress_percentage: string;
  status: string;
  description_detail: string;
};
export enum SERVICE_TYPE {
  BATTERY = 'BATTERY',
  TIRE = 'TIRE',
  TIMING_BELT = 'TIMING_BELT',
  DYNAMO_BELT = 'DYNAMO_BELT',
  OIL = 'OIL',
}
