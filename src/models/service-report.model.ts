import { Plate } from '@/models/car.model';

export default interface ServiceReportModel {
  attachments: string[];
  car: Plate;
  description: string;
  id: number;
  license: string;
  mileage: number;
  price: number;
  remind_at: string;
  reminder_option: number;
  service_types: string[];
  serviced_at: string;
  model_part: string;
}
