import { useQueryClient } from '@tanstack/react-query';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import { VARIANT_ENUM } from '@/components/@base/button/type';
import Container from '@/components/@base/container';
import { toast } from '@/components/@base/toast';
import { Heading } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import { useDeleteCar } from '@/components/shared/services/hooks';

import useCommonModalStore from '@/store/common-modal-store';

import localization from '@/constant/localization';
import { GET_CAR_LIST } from '@/constant/query-key';
import CarModel from '@/models/car.model';

export default function Action({ id }) {
  const queryClient = useQueryClient();
  const { mutate: deleteCar, isPending } = useDeleteCar();
  const { setShow: setModalShow } = useCommonModalStore();
  const handleRemove = () => {
    deleteCar(id, {
      onSuccess() {
        setModalShow(false);
        toast.success(localization.carRemovedSuccessfully);
        queryClient.setQueryData([GET_CAR_LIST], (data: CarModel[]) => {
          const newData = [...data];
          const index = data.findIndex((data) => data.carData.id === id);
          if (index === -1) {
            return data;
          }
          newData.splice(index, 1);
          return newData;
        });
      },
      onError() {
        setModalShow(false);
      },
    });
  };
  return (
    <Container center className='flex-col gap-4'>
      <Heading type={HEADING_TYPE.H5} className='mt-2'>
        {localization.areYouSureAboutRemovingCar}؟
      </Heading>
      <Container className='mb-2 grid w-full grid-cols-2 gap-2.5'>
        <Button
          size={SIZE_ENUM.LG}
          variant={VARIANT_ENUM.OUTLINED}
          onClick={() => handleRemove()}
          isLoading={isPending}
        >
          {localization.remove}
        </Button>
        <Button
          size={SIZE_ENUM.LG}
          variant={VARIANT_ENUM.OUTLINED}
          onClick={() => setModalShow(false)}
          disabled={isPending}
        >
          {localization.cancel}
        </Button>
      </Container>
    </Container>
  );
}
