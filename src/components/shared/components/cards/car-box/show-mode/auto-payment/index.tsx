import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { LuSettings2 } from 'react-icons/lu';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import Container from '@/components/@base/container';
import { Toggle } from '@/components/@base/input/check-box';
import Spinner from '@/components/@base/spinner';
import { Heading, Text } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import Props from '@/components/shared/components/cards/car-box/show-mode/auto-payment/type';
import { usePutCar } from '@/components/shared/services/hooks';

import useCommonModalStore from '@/store/common-modal-store';

import ICON_SIZE from '@/constant/icon-size-color';
import localization from '@/constant/localization';
import { GET_CAR_LIST } from '@/constant/query-key';

export default function AutoPayment({
  id,
  license,
  automatic_freeway_payment,
  automatic_tehran_payment,
}: Props) {
  const { setShow } = useCommonModalStore();
  if (!license || !id) {
    return null;
  }
  const handleClick = () => {
    setShow(true, {
      Head: () => {
        return (
          <Container center className='justify-start border-b pb-2'>
            <Heading type={HEADING_TYPE.H5}>{localization.autoPayment}</Heading>
          </Container>
        );
      },
      Body: () => {
        const queryClient = useQueryClient();
        const [automaticFreewayPayment, setAutomaticFreewayPayment] = useState(
          automatic_freeway_payment,
        );
        const [automaticTehranPayment, setAutomaticTehranPayment] = useState(
          automatic_tehran_payment,
        );

        const handleChange = (
          value: boolean,
          key: 'automatic_freeway_payment' | 'automatic_tehran_payment',
        ) => {
          updateCar(
            {
              license,
              [`has_${key}`]: value,
            },
            {
              onSuccess() {
                if (key === 'automatic_freeway_payment') {
                  setAutomaticFreewayPayment(value);
                } else {
                  setAutomaticTehranPayment(value);
                }
                //TODO: optimistic update
                queryClient.refetchQueries({ queryKey: [GET_CAR_LIST] });
              },
            },
          );
        };
        const { mutate: updateCar, isPending } = usePutCar(id);
        return (
          <Container center className='relative w-full flex-col pt-4 [&>*]:w-full'>
            {isPending && (
              <Container center className='absolute inset-0 z-10 bg-white/50'>
                <Spinner />
              </Container>
            )}
            <Container center className='justify-between'>
              <Text size={SIZE_ENUM.XS} color={COLOR_ENUM.LIGHT_GRAY}>
                {localization.tollAutoPayment}
              </Text>
              <Toggle
                checked={automaticFreewayPayment}
                onChange={(checked) => handleChange(checked, 'automatic_freeway_payment')}
              />
            </Container>
            <Container center className='justify-between'>
              <Text size={SIZE_ENUM.XS} color={COLOR_ENUM.LIGHT_GRAY}>
                {localization.trafficPlanAutoPayment}
              </Text>

              <Toggle
                checked={automaticTehranPayment}
                onChange={(checked) => handleChange(checked, 'automatic_tehran_payment')}
              />
            </Container>
          </Container>
        );
      },
    });
  };
  return (
    <>
      <Text size={SIZE_ENUM.XS}>{localization.autoPayment}:</Text>
      {automatic_freeway_payment || automatic_tehran_payment ? (
        <Container center className='gap-1.5' onClick={handleClick}>
          <Text size={SIZE_ENUM.XS} color={COLOR_ENUM.PRIMARY} medium>
            {localization.activeItem(
              automatic_freeway_payment && automatic_tehran_payment ? 2 : 1,
            )}
          </Text>
          <LuSettings2 size={ICON_SIZE.sm} />
        </Container>
      ) : (
        <Button color={COLOR_ENUM.PRIMARY} onClick={handleClick}>
          {localization.activeIt}
        </Button>
      )}
    </>
  );
}
