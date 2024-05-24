export default interface CarModel {
  carData: CarData;
  name: string;
  description: string;
  carSettings: CarSettings;
}

export interface CarData {
  id: number;
  title: string;
  license: string;
  vin: string;
  barcode: null;
  barcode_status: string;
  status: string;
  created_at: string;
  automatic_freeway_payment: boolean;
  automatic_tehran_payment: boolean;
  automatic_police_penalty_inquiry_payment: boolean;
  car: Plate;
  national_code: string | null;
  owner_mobile: string | null;
  vehicle_model: string | null;
  vehicle_model_id: string | null;
  vehicle_brand: string | null;
  vehicle_brand_id: string | null;
  kilometer: number | null;
  car_image: string;
  car_type_id: string | null;
  build_year: string | null;
  color: string;
  body_status: string | null;
  replaced_parts: string | null;
  remind_every: string | null;
}
export interface CarDetailData {
  car_id: number;
  car_image: string;
  formatted_plate: { first: string; last: string; char: string; state: string };
  has_automatic_freeway_payment: boolean;
  has_automatic_tehran_payment: boolean;
  plate: string;
  title: string;
  type: string;
  year: string;
}

export interface CarSettings {
  key: 'automatic_freeway_payment' | 'automatic_tehran_payment';
  name: string;
  helpText: string;
  enabled: boolean;
}

export interface Plate {
  license: string;
  plate_string: string;
  plate: PlateType;
}
export type PlateType = {
  first: string;
  last: string;
  char: string;
  state: string;
};
