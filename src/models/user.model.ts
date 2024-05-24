import { PersonModel } from '@/models/_base.model';

export default interface UserModel extends PersonModel {
  id: number;
  balance: number;
  balance_currency_formatted: string;
  city: null | string;
  direct_debit: null | string;
  direct_debit_activated: boolean;
  direct_debit_amount: null | string;
  direct_debit_amount_currency_formatted: null | string;
  email: null | string;
  has_app: boolean;
  iban: string;
  is_reseller: boolean;
  mobile: string;
  national_code: null | string;
  profile_completed: boolean;
  user_onboarding_level_description: string;
  user_onboarding_logo: string;
  notifications_count: string;
}
