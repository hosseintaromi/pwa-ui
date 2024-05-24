import { RiCloseFill } from 'react-icons/ri';

import Container from '@/components/@base/container';
import { Heading } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import Payment from '@/components/shared/components/payment';

import useCommonModalStore from '@/store/common-modal-store';

import localization from '@/constant/localization';
import InvoiceModel from '@/models/invoice.model';

export function usePaymentModal() {
  const { setShow } = useCommonModalStore();
  const show = (invoice: InvoiceModel) => {
    setShow(true, {
      DialogPanelProps: { className: 'h-[100vh] rounded-none' },
      Head: () => (
        <Container className='relative mb-5 border-b-2'>
          <Heading type={HEADING_TYPE.H5} className='text-right'>
            {localization.confirmAndPay}
          </Heading>
          <RiCloseFill onClick={hide} className='absolute left-0 top-1' />
        </Container>
      ),
      Body: () => <Payment invoice={invoice} />,
    });
  };
  const hide = () => setShow(false);
  return [show, hide];
}
