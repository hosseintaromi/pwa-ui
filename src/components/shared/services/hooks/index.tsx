import { useMutation, useQuery } from '@tanstack/react-query';

import { isLoggedIn } from '@/lib/helper';

import {
  deleteCar,
  getCar,
  getCarDetail,
  getCarPriceConfig,
  getProfile,
  postCars,
  postLogin,
  postOTP,
  postProfile,
  putCar,
} from '@/components/shared/services';
import {
  CarIdType,
  CarUpdateType,
  LicenseType,
  LoginType,
  MobilePhoneType,
  ProfileUpdateType,
} from '@/components/shared/services/types';

import {
  DELETE_CAR,
  GET_CAR,
  GET_CAR_DETAIL,
  GET_CAR_PRICE_CONFIG,
  GET_PROFILE,
  POST_CARS,
  POST_LOGIN,
  POST_OTP,
  POST_PROFILE,
  PUT_CAR,
} from '@/constant/query-key';

export function usePostLogin() {
  return useMutation({
    mutationKey: [POST_LOGIN],
    mutationFn: (body: LoginType) => postLogin(body),
  });
}
export const usePostProfile = () => {
  return useMutation({
    mutationKey: [POST_PROFILE],
    mutationFn: (body: ProfileUpdateType) => postProfile(body),
  });
};

export const useGetProfile = () => {
  return useQuery({
    queryKey: [GET_PROFILE],
    queryFn: () => getProfile(),
    enabled: isLoggedIn(),
  });
};

export function usePostOTP() {
  return useMutation({
    mutationKey: [POST_OTP],
    mutationFn: (mobilePhone: MobilePhoneType) => postOTP(mobilePhone),
  });
}

export function usePostCars() {
  return useMutation({
    mutationKey: [POST_CARS],
    mutationFn: (license: LicenseType) => postCars(license),
  });
}

export function useDeleteCar() {
  return useMutation({
    mutationKey: [DELETE_CAR],
    mutationFn: (id: CarIdType) => deleteCar(id),
  });
}
export function useGetCar(id: CarIdType) {
  return useQuery({
    queryFn: () => getCar(id),
    queryKey: [GET_CAR, id],
    enabled: !!id,
  });
}
export function useGetCarDetail(id: CarIdType) {
  return useQuery({
    queryFn: () => getCarDetail(id),
    queryKey: [GET_CAR_DETAIL, id],
    enabled: !!id,
  });
}

export function useGetCarPriceConfig(id: CarIdType) {
  return useQuery({
    queryFn: () => getCarPriceConfig(id),
    queryKey: [GET_CAR_PRICE_CONFIG, id],
    enabled: !!id,
  });
}
export function usePutCar(id?: CarIdType) {
  return useMutation({
    mutationFn: (body: CarUpdateType) => putCar(id || body.id || 0, body),
    mutationKey: [PUT_CAR],
  });
}
