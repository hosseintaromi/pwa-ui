import { useQueryClient } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import { BUTTON_TYPE } from '@/components/@base/button/type';
import Container from '@/components/@base/container';
import { Input } from '@/components/@base/input';
import { INPUT_TYPES } from '@/components/@base/input/text/type';
import { toast } from '@/components/@base/toast';
import { Heading, Text } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import XImage from '@/components/@base/x-image';
import Props from '@/components/shared/components/insert-kilometer/type';
import { usePutCar } from '@/components/shared/services/hooks';

import useCommonModalStore from '@/store/common-modal-store';

import localization from '@/constant/localization';
import { GET_ASSISTS, GET_CAR } from '@/constant/query-key';

import odoMeter from '~/images/home/pwa/odometer.svg';

export const PutSchema = Yup.object().shape({
  kilometer: Yup.string()
    .min(1, localization.minLengthIs(1))
    .max(6, localization.maxLengthIs(6))
    .required(localization.fieldIsMandatory),
});

export default function InsertKilometer({ color, id, license }: Props) {
  const { setShow } = useCommonModalStore();
  if (!id || !license) {
    return null;
  }
  const handleClick = () => {
    setShow(true, {
      Body: () => {
        const { mutate: updateCar, isPending } = usePutCar(id);
        const queryClient = useQueryClient();
        return (
          <Formik
            initialValues={{
              kilometer: '',
            }}
            validationSchema={PutSchema}
            onSubmit={(params) => {
              updateCar(
                { license, kilometer: params.kilometer },
                {
                  onSuccess(data) {
                    toast.success(localization.kilometerUpdateSuccessfully);
                    queryClient.refetchQueries({ queryKey: [GET_ASSISTS, data.id] });
                    queryClient.refetchQueries({ queryKey: [GET_CAR, data.id] });
                    setShow(false);
                  },
                },
              );
            }}
          >
            {({ values, handleChange, errors }) => {
              return (
                <Form className='flex flex-col gap-5'>
                  <Container center className='justify-start gap-2.5'>
                    <XImage
                      src={odoMeter}
                      width={24}
                      height={24}
                      alt={localization.kilometer}
                    />
                    <Heading type={HEADING_TYPE.H5}>{localization.kilometer}</Heading>
                  </Container>
                  <Container center className='w-full flex-col gap-2.5 [&>*]:w-full'>
                    <Input
                      id='kilometer'
                      placeholder={localization.enterKilometerNumber}
                      maxLength={6}
                      onChange={handleChange}
                      type={INPUT_TYPES.NUMBER}
                      value={values.kilometer}
                      error={!!errors.kilometer}
                      errorMessage={errors.kilometer}
                      size={SIZE_ENUM.XL}
                      stickyText={localization.kilometer}
                    />
                    <Button
                      type={BUTTON_TYPE.SUBMIT}
                      isLoading={isPending}
                      size={SIZE_ENUM.XL}
                    >
                      {localization.updateKilometer}
                    </Button>
                  </Container>
                </Form>
              );
            }}
          </Formik>
        );
      },
    });
  };
  return (
    <Text
      bold
      size={SIZE_ENUM.SM}
      color={color}
      onClick={handleClick}
      className='whitespace-nowrap'
    >
      {localization.updateKilometer}
    </Text>
  );
}
