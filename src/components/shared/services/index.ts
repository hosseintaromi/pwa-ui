import { sha1 } from 'js-sha1';

import axios from '@/lib/axios-instance';
import { APIUrlGenerator } from '@/lib/helper';

import auth from '@/components/shared/components/otp-login/auth';
import {
  CarIdType,
  CarUpdateType,
  LicenseType,
  LoginType,
  MobilePhoneType,
  ProfileUpdateType,
} from '@/components/shared/services/types';

import AUTH from '@/constant/auth';
import { API_ROUTES } from '@/constant/routes';
import { CarData, CarDetailData } from '@/models/car.model';
import CarPriceConfigModel from '@/models/car-price-config.model';
import TokenModel from '@/models/token.model';
import UserModel from '@/models/user.model';

export async function postOTP(mobile: MobilePhoneType): Promise<string> {
  const date = new Date();
  const { data }: { data: string } = await axios.post(
    APIUrlGenerator(API_ROUTES.POST_OTP),
    {
      mobile,
    },
    {
      headers: {
        'x-login-token': sha1(
          `${mobile}${date.getUTCFullYear()}${mobile}${date.getUTCMonth() + 1}${mobile}${date.getUTCDate()}`,
        ),
      },
    },
  );
  return data;
}

export async function postLogin(body: LoginType): Promise<TokenModel> {
  const { data }: { data: TokenModel } = await axios.post(
    APIUrlGenerator(API_ROUTES.POST_LOGIN),
    { ...AUTH, ...body },
  );
  return data;
}

export const postProfile = auth(async (body: ProfileUpdateType): Promise<UserModel> => {
  const { data }: { data: UserModel } = await axios.post(
    APIUrlGenerator(API_ROUTES.POST_PROFILE),
    { ...AUTH, ...body },
  );
  return data;
});

export const getProfile = auth(async (): Promise<UserModel> => {
  const { data }: { data: UserModel } = await axios.get(
    APIUrlGenerator(API_ROUTES.POST_PROFILE),
  );
  return data;
});

export const postCars = auth(async (license: LicenseType): Promise<CarData> => {
  const { data }: { data: CarData } = await axios.post(APIUrlGenerator(API_ROUTES.POST_CARS), {
    license,
  });
  return data;
});

export const deleteCar = auth(async (id: CarIdType): Promise<any> => {
  const { data }: { data: any } = await axios.delete(
    APIUrlGenerator(API_ROUTES.DELETE_CARS(id)),
  );
  return data;
});

export const putCar = auth(async (id: CarIdType, body: CarUpdateType): Promise<CarData> => {
  const {
    data: { data: carData },
  }: { data: { data: CarData } } = await axios.put(
    APIUrlGenerator(API_ROUTES.PUT_CAR(id)),
    body,
  );
  return carData;
});

export const getCar = auth(async (id: CarIdType): Promise<CarData> => {
  const { data }: { data: { data: CarData } } = await axios.get(
    APIUrlGenerator(API_ROUTES.GET_CAR(id)),
  );
  return data?.data;
});

export const getCarPriceConfig = auth(async (id: CarIdType): Promise<CarPriceConfigModel> => {
  const { data }: { data: CarPriceConfigModel } = await axios.get(
    APIUrlGenerator(API_ROUTES.GET_CAR_PRICE_CONFIG(id)),
  );
  return data;
});
export const getCarDetail = auth(async (id: CarIdType): Promise<CarDetailData> => {
  const { data }: { data: { data: CarDetailData } } = await axios.get(
    APIUrlGenerator(API_ROUTES.GET_CAR_DETAILS(id)),
  );
  return data?.data;
});
