export default interface CarPriceConfigModel {
  config: Config;
  constants: {
    body_change_list: {
      label: string;
      value: BODY_CHANGE_LIST_ENUM;
    }[];
    body_status_list: {
      label: string;
      value: BODY_STATUS_LIST_ENUM;
    }[];
    color_list: { label: string; value: COLOR_LIST_ENUM }[];
  };
}

export enum BODY_CHANGE_LIST_ENUM {
  FenderFrontRight = 'FenderFrontRight',
  FenderBackRight = 'FenderBackRight',
  FenderFrontLeft = 'FenderFrontLeft',
  FenderBackLeft = 'FenderBackLeft',
  DoorFrontRight = 'DoorFrontRight',
  DoorFrontLeft = 'DoorFrontLeft',
  DoorBackRight = 'DoorBackRight',
  DoorBackLeft = 'DoorBackLeft',
  Hood = 'Hood',
  Roof = 'Roof',
  Trunk = 'Trunk',
}

export enum BODY_STATUS_LIST_ENUM {
  FenderFrontRight = 'FenderFrontRight',
  FenderBackRight = 'FenderBackRight',
  FenderFrontLeft = 'FenderFrontLeft',
  FenderBackLeft = 'FenderBackLeft',
  DoorFrontRight = 'DoorFrontRight',
  DoorFrontLeft = 'DoorFrontLeft',
}
export enum COLOR_LIST_ENUM {
  ColorWhite = 'ColorWhite',
  ColorBlack = 'ColorBlack',
  ColorRed = 'ColorRed',
  ColorSilver = 'ColorSilver',
  ColorGray = 'ColorGray',
  ColorOther = 'ColorOther',
}

export interface Config {
  car_model: string | null;
  car_type: string | null;
  remind_every: 'DISABLED';
  car_type_id: string | null;
  build_year: string | null;
  kilometer: number | null;
  color: string | null;
  body_status: string | null;
  replaced_parts: string | null;
}
