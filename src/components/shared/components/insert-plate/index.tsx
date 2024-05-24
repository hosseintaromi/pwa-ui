import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import { BUTTON_TYPE } from '@/components/@base/button/type';
import Container from '@/components/@base/container';
import Props from '@/components/shared/components/insert-plate/type';
import { Insert } from '@/components/shared/components/plate-builder';
import { usePostCars } from '@/components/shared/services/hooks';

import localization from '@/constant/localization';

export const PostSchema = Yup.object().shape({
  license: Yup.string().min(9).max(9).required(),
});

export default function InsertPlate({ onInsert, loading = false, children }: Props) {
  const { mutate: postCar, isPending } = usePostCars();
  return (
    <Container>
      <Formik
        initialValues={{
          license: '',
        }}
        validationSchema={PostSchema}
        onSubmit={(params) => {
          if (isPending || loading) {
            return;
          }
          postCar(params.license, {
            onSuccess(data) {
              onInsert?.(data);
            },
          });
        }}
      >
        {({ values, setFieldValue, errors }) => {
          return (
            <Form
              className='flex flex-col items-center justify-center gap-2.5'
              dir='ltr'
              autoComplete='off'
            >
              <Insert
                onComplete={(license) => {
                  values.license !== license && setFieldValue('license', license);
                }}
              />
              {children}
              <Button
                disabled={!values.license || !!errors.license}
                color={COLOR_ENUM.PRIMARY}
                size={SIZE_ENUM.XL}
                isLoading={isPending}
                type={BUTTON_TYPE.SUBMIT}
                className='w-full'
              >
                {localization.submit}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}
