import axios from '@/lib/axios-instance';
import { APIUrlGenerator } from '@/lib/helper';

import { PaymentType } from '@/components/shared/components/payment/services/type';

import { API_ROUTES } from '@/constant/routes';

export async function postPayment(body: PaymentType) {
  const { data } = await axios.post(APIUrlGenerator(API_ROUTES.POST_PAYMENT, body));
  return data;
}
