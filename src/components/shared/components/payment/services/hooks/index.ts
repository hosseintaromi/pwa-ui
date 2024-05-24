import { useMutation } from '@tanstack/react-query';

import { postPayment } from '@/components/shared/components/payment/services';
import { PaymentType } from '@/components/shared/components/payment/services/type';

import { POST_PAYMENT } from '@/constant/query-key';
export function usePostPayment() {
  return useMutation({
    mutationFn: (body: PaymentType) => postPayment(body),
    mutationKey: [POST_PAYMENT],
  });
}
