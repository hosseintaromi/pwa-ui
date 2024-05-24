import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import Container from '@/components/@base/container';
import { Heading } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import Item from '@/components/shared/components/payment/details/Item';
import Props from '@/components/shared/components/payment/details/type';
import { usePostPayment } from '@/components/shared/components/payment/services/hooks';

import { PAYMENT_ITEMS } from '@/constant/iterable-items';
import localization from '@/constant/localization';
const PAYMENT_GATEWAY_MINIMUM_AMOUNT = 30000;
export default function Details({ invoice, credit }: Props) {
  const { mutate: postPayment, isPending: isPending } = usePostPayment();
  const amount = (): number => {
    if (credit) {
      return invoice?.total_price - invoice?.balance > 0
        ? invoice?.total_price - invoice?.balance
        : 0;
    } else {
      return invoice?.total_price > 0 && invoice.total_price < PAYMENT_GATEWAY_MINIMUM_AMOUNT
        ? PAYMENT_GATEWAY_MINIMUM_AMOUNT
        : invoice?.total_price;
    }
  };
  const handlePay = () =>
    postPayment({
      amount: amount(),
      callback: `/query/car-history?id=${invoice.invoice_id}`,
      direct: credit,
      invoice_id: invoice.invoice_id,
      payment_type: 'IPG',
    });
  const paymentItems = PAYMENT_ITEMS.filter((item) => item.label !== localization.useCredit);
  return (
    <>
      <Container className='mb-6 flex flex-col items-start gap-2.5'>
        <Heading className='my-2' type={HEADING_TYPE.H5}>
          {localization.paymentDetails}
        </Heading>
        {credit
          ? PAYMENT_ITEMS.map(({ id, label, size, value, color }) => (
              <Item key={id} size={size} text={label} price={value} color={color} />
            ))
          : paymentItems.map(({ id, label, size, value, color }) => (
              <Item key={id} size={size} text={label} price={value} color={color} />
            ))}
      </Container>
      <Container className='border-t-2'>
        <Button
          color={COLOR_ENUM.SUCCESS}
          isLoading={isPending}
          size={SIZE_ENUM.XL}
          className='mt-6 w-full'
          onClick={handlePay}
        >
          {localization.pay}
        </Button>
      </Container>
    </>
  );
}
