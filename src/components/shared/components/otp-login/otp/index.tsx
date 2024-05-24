import { useQueryClient } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import * as Yup from 'yup';

import { getAxiosErrorMessageText } from '@/lib/helper';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import { BUTTON_TYPE } from '@/components/@base/button/type';
import Container from '@/components/@base/container';
import { Input } from '@/components/@base/input';
import { INPUT_TYPES } from '@/components/@base/input/text/type';
import { Heading, Text } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import { isStagingApi } from '@/components/shared/components/otp-login/helper';
import Retry from '@/components/shared/components/otp-login/otp/retry';
import { usePostLogin, usePostProfile } from '@/components/shared/services/hooks';

import useOTPAuthStore, { STEP } from '@/store/otp-auth-store';
import useUserStore from '@/store/user-store';

import localization from '@/constant/localization';
import { GET_CAR_LIST } from '@/constant/query-key';
import { HOME_PAGE, SPLASH } from '@/constant/routes';
import StorageKey from '@/constant/storage-key';
import TokenModel from '@/models/token.model';

const isStage = isStagingApi();
const otpInputsCount = isStage ? 5 : 4;
export const PostSchema = Yup.object().shape({
  OTP: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(otpInputsCount, localization.invalidNumberCount)
    .max(otpInputsCount, localization.invalidNumberCount),
});

function buildOTP(params: object): string {
  return Object.values(params).join('');
}

export default function OTP() {
  const [switchingPage, setSwitchingPage] = useState(false);
  const { setUser, setToken } = useUserStore();
  const { callBack, mobilePhone, setShow, reset, step } = useOTPAuthStore();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: login, isPending, isError, error } = usePostLogin();
  const { mutate: profile, isPending: profilePending } = usePostProfile();
  const pathname = usePathname();
  const onSuccess = (token: TokenModel) => {
    if (token) {
      localStorage.setItem(StorageKey.TOKEN, token.access_token);
      Cookies.set(StorageKey.TOKEN, token.access_token, { expires: 365 });
      setToken(token);
      profile(
        {},
        {
          onSuccess(user) {
            setSwitchingPage(true);
            router.push(HOME_PAGE + '?direct');
            callBack?.(false, user);
            setUser(user);
            reset();
          },
        },
      );
    }
  };
  useEffect(() => {
    if (step === STEP.OTP) {
      queryClient.invalidateQueries({ queryKey: [GET_CAR_LIST] });
      queryClient.removeQueries({ queryKey: [GET_CAR_LIST] });
    }
  }, [step]);
  useEffect(() => {
    if (pathname !== SPLASH && switchingPage) {
      setShow(false);
      setSwitchingPage(false);
    }
  }, [pathname]);
  const loading = isPending || profilePending || switchingPage;
  return (
    <Container className='flex flex-col gap-2.5'>
      <Container center className='justify-between'>
        <Heading type={HEADING_TYPE.H5} className='text-sm'>
          {localization.pleaseEnterOTP}:
        </Heading>
        <Retry />
      </Container>

      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          OTP: '',
        }}
        validationSchema={PostSchema}
        onSubmit={(params) => {
          if (loading) {
            return;
          }
          login({ password: buildOTP(params), username: mobilePhone }, { onSuccess });
        }}
      >
        {({ values, setFieldValue, errors }) => {
          return (
            <>
              {(isError || errors) && (
                <Text
                  size={SIZE_ENUM.XXS}
                  semiBold
                  color={COLOR_ENUM.ERROR}
                  className='text-center'
                >
                  {(error && getAxiosErrorMessageText(error)) || errors.OTP}
                </Text>
              )}
              <Form className='flex flex-col gap-5' dir='ltr' autoComplete='off'>
                <OTPInput
                  shouldAutoFocus
                  value={values.OTP}
                  containerStyle='justify-between'
                  inputStyle='!w-12'
                  onChange={(value) => setFieldValue('OTP', value)}
                  numInputs={otpInputsCount}
                  inputType={INPUT_TYPES.NUMBER}
                  renderSeparator={<Container>-</Container>}
                  renderInput={(props) => <Input size={SIZE_ENUM.XL} {...props} />}
                />
                <Button
                  color={COLOR_ENUM.PRIMARY}
                  size={SIZE_ENUM.XL}
                  isLoading={loading}
                  type={BUTTON_TYPE.SUBMIT}
                  disabled={!values.OTP || values.OTP.length < 4}
                >
                  {localization.login}
                </Button>
                {switchingPage && <Text>{localization.enteringHomePagePleaseWait}</Text>}
              </Form>
            </>
          );
        }}
      </Formik>
    </Container>
  );
}
