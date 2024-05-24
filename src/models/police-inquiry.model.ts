export enum TYPE_POLICE_INQUIRY {
  CAR_HISTORY = 'car_history',
  VEHICLE_DOCUMENT = 'vehicle_document',
  TECHNICAL_INSPECTION = 'technical_inspection',
  NEGATIVE_POINT = 'negative_point',
  DRIVER_LICENSE_STATUS = 'driver_license_status',
  LICENSES = 'license',
}

export enum STATUS_PAYMENT {
  STATUS_PAYMENT_PENDING = 'PAYMENT_PENDING',
  STATUS_PAID = 'PAID',
}
  
export default interface PoliceInquiryModel {
  data: any;
  id: number;
  created_at: string;
  type: TYPE_POLICE_INQUIRY;
  type_fa: string;
  status: STATUS_PAYMENT;
  status_fa: string;
  otp_required: boolean;
}
  