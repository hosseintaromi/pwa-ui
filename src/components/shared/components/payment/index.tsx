import { useState } from 'react';

import Details from '@/components/shared/components/payment/details';
import Props from '@/components/shared/components/payment/type';
import Wallet from '@/components/shared/components/payment/wallet';
export default function Payment({ invoice }: Props) {
  const [useCredit, setUseCredit] = useState(false);
  const handleChange = (value: boolean) => setUseCredit(value);
  return (
    <>
      <Wallet invoice={invoice} credit={useCredit} onChange={handleChange} />
      <Details invoice={invoice} credit={useCredit} />
    </>
  );
}
