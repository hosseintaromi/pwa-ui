import { useQueryClient } from '@tanstack/react-query';

import { toast } from '@/components/@base/toast';
import { Heading } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import InsertPlate from '@/components/shared/components/insert-plate';

import useCommonModalStore from '@/store/common-modal-store';

import localization from '@/constant/localization';
import { GET_CAR_LIST } from '@/constant/query-key';

export default function useShowInsertPlate() {
  const queryClient = useQueryClient();
  const { setShow: setModalShow } = useCommonModalStore();
  const handleInsert = () => {
    setModalShow(false);
    toast.success(localization.carAddedSuccessfully);
    queryClient.refetchQueries({ queryKey: [GET_CAR_LIST] });
  };
  const open = () => {
    setModalShow(true, {
      Head: () => (
        <Heading className='mb-2 text-center' type={HEADING_TYPE.H5}>
          {localization.insertYourPlate}
        </Heading>
      ),
      Body: () => <InsertPlate onInsert={handleInsert} />,
    });
  };

  return {
    open,
  };
}
