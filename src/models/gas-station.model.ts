export enum SUPER_GAS_PROBABILITY {
  STATUS_UNKNOWN = 'STATUS_UNKNOWN',
  STATUS_AVAILABLE = 'STATUS_AVAILABLE',
  STATUS_LIKELY_AVAILABLE = 'STATUS_LIKELY_AVAILABLE',
  STATUS_UNLIKELY_AVAILABLE = 'STATUS_UNLIKELY_AVAILABLE',
}

import { StationModel } from '@/models/_base.model';

export default interface GasStationModel extends StationModel {
  can_reported: boolean;
  probability_status: SUPER_GAS_PROBABILITY;
}
