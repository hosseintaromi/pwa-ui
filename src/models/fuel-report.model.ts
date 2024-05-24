import { Plate } from '@/models/car.model';

export default interface FuelReportModel {
  id: number;
  car: Plate;
  car_user_id: number;
  created_at: string;
  fuel_liter: number;
  fuel_liter_price: number;
  fuel_total_price: number;
  fuel_total_price_formatted: string;
  license: string;
  mileage: number;
  submitted_at: string;
  updated_at: string;
}

export enum FUEL_SUB_SERVICE {
  FREE_QUOTA = 'FREE_QUOTA',
  SUPER_PETROL = 'SUPER_PETROL',
  GOVERNMENT_QUOTA = 'GOVERNMENT_QUOTA',
}
