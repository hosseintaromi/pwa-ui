import { DEBT_TYPE_ENUM } from '@/models/_base.model';

export type GetDebtType = {
  type: DEBT_TYPE_ENUM;
  title: string;
  logo: string;
  main_detail: { text: string } | null;
  extra_detail: { text: string } | null;
  button: { uri: string; text: string };
  worthwhile: string;
};
