export default interface ReportModel {
  created_at: string;
  id: number;
  kilometer: number;
  price: number;
  sub_service: SWAP_SERVICE_TYPE;
  type: SERVICE_TYPE;
}

export enum SWAP_SERVICE_TYPE {
  TIRE = 'TIRE',
  TIMING_BELT = 'TIMING_BELT',
  DYNAMO_BELT = 'DYNAMO_BELT',
  OIL = 'OIL',
  BATTERY = 'BATTERY',
  OTHER = 'OTHER',
}

export enum SERVICE_TYPE {
  SERVICE = 'SERVICE',
  FUEL = 'FUEL',
}
