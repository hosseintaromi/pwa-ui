import { DEBT_TYPE_ENUM } from '@/models/_base.model';

export enum DEBT_STATUS_ENUM {
  NO_DEBT = 'NO_DEBT',
  CLEARANCE = 'CLEARANCE',
  HAS_DEBT = 'HAS_DEBT',
}
export default interface DebtModel {
  title: string;
  type: DEBT_TYPE_ENUM;
  status: DEBT_STATUS_ENUM;
  price: string | undefined;
  time: string | undefined;
  link: string | undefined;
  linkText: string | undefined;
}
