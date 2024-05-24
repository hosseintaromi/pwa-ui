export type PaymentType = {
  amount: number;
  callback: string;
  direct: boolean;
  invoice_id: number;
  payment_type: string;
  reference_code?: number;
};
