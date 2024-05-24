export default interface BrandModelModel {
  model_id: number;
  model_name: string;
  model_english_name: string;
  build_years: number[];
  car_brand_id: number;
  car_types: BrandModelTypeModel[];
}

export type BrandModelTypeModel = {
  car_id: number;
  car_model_id: number;
  car_type_english_name: string;
  automatic: 'automatic' | 'manual';
  car_type_id: number;
  car_type_name: string;
  car_year: number;
};
