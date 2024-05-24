import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { addToTime } from '@/lib/date';
import { convertToEnglishNumber, getAxiosErrorMessageText, isIOS } from '@/lib/helper';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import { BUTTON_TYPE } from '@/components/@base/button/type';
import { Input } from '@/components/@base/input';
import { INPUT_TYPES } from '@/components/@base/input/text/type';
import { Text } from '@/components/@base/typography';
import { usePostOTP } from '@/components/shared/services/hooks';

import useOTPAuthStore, { STEP } from '@/store/otp-auth-store';

import localization from '@/constant/localization';
import { mobile } from '@/constant/validation-rules';

export const PostSchema = Yup.object().shape({
  mobilePhone: mobile.required(localization.fieldIsMandatory)
});

export default function PhoneNumber() {
  const { setStep, setRequestTime, setMobilePhone } = useOTPAuthStore();
  const { mutate: requestOTP, isPending, isError, error } = usePostOTP();
  const isIos = isIOS();
  return (
    <Formik
      validateOnBlur={false}
      initialValues={{
        mobilePhone: '',
      }}
      validationSchema={PostSchema}
      onSubmit={(params) => {
        if (isPending) {
          return;
        }
        const mobilePhone = isIos ? `${params.mobilePhone}` : `0${params.mobilePhone}`;
        requestOTP(convertToEnglishNumber(mobilePhone), {
          onSuccess() {
            setStep(STEP.OTP);
            setMobilePhone(convertToEnglishNumber(mobilePhone));
            setRequestTime(addToTime(new Date(), 2, { unit: 'MINUTES' }));
          },
        });
      }}
    >
      {({ handleChange, values, errors }) => {
        const persianNumToEnNumChange = (e)=> {
          e.target.value = convertToEnglishNumber(e.target.value);
          handleChange(e);
        }
        return (
          <Form className='grid gap-10' dir='ltr' autoComplete='off'>
            {isError && (
              <Text
                size={SIZE_ENUM.XS}
                semiBold
                color={COLOR_ENUM.ERROR}
                className='text-center'
              >
                {getAxiosErrorMessageText(error) || localization.errorWhileRequestOtp}
              </Text>
            )}
            <Input
              id='mobilePhone'
              className='py-4'
              errorMessage={errors.mobilePhone}
              value={values.mobilePhone}
              onChange={isIos ? persianNumToEnNumChange : handleChange}
              placeholder={localization.phoneNumber}
              size={SIZE_ENUM.XL}
              type={isIos ? INPUT_TYPES.TEXT : INPUT_TYPES.NUMBER}
            />
            <Button
              color={COLOR_ENUM.PRIMARY}
              isLoading={isPending}
              type={BUTTON_TYPE.SUBMIT}
              size={SIZE_ENUM.XL}
              className='w-full'
              disabled={!values.mobilePhone || !!errors.mobilePhone}
            >
              {localization.registerOrLogin}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}
