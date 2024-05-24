export default interface InvoiceModel {
  id: number;
  paid: boolean;
  invoice_id: number;
  total_price: number;
  total_price_currency_formatted: string;
  discount: number;
  discount_currency_formatted: number;
  final_price: number;
  final_price_currency_formatted: number;
  final_price_with_wallet_currency_formatted: number;
  balance: number;
  balance_currency_formatted: string;
  amount_to_charge: number;
  amount_to_charge_currency_formatted: number;
  gift_price: number;
  gift_price_currency_formatted: number;
  price_changed: boolean;
  has_minimum_price_limit: boolean;
  warning_text: string;
  data: [];
  can_use_wallet: boolean;
  can_use_direct_debit: boolean;
  has_discount: boolean;
  is_vpn_enabled: boolean;
  discount_settlement_type: [];
}
