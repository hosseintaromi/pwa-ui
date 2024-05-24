import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

import {
  deleteLogout,
  getAssists,
  getBanner,
  getCarList,
  getDebt,
  getDebtList,
  postUserDevices,
} from '@/components/app/home/services';
import { CarIdType, LicenseType } from '@/components/shared/services/types';

import {
  GET_ASSISTS,
  GET_BANNER,
  GET_BANNER_FORCE,
  GET_CAR_LIST,
  GET_DEBT,
  GET_DEBT_LIST,
  POST_LOGOUT,
  POST_USER_DEVICES,
} from '@/constant/query-key';
import { DEBT_TYPE_ENUM } from '@/models/_base.model';

export function useGetCarList() {
  return useQuery({
    queryFn: () => getCarList(),
    queryKey: [GET_CAR_LIST],
  });
}

export function useGetBanner(id: CarIdType, force?: boolean) {
  return useQuery({
    queryFn: () => getBanner(id, force),
    queryKey: [GET_BANNER, force ? GET_BANNER_FORCE : ''],
    enabled: !!id || force,
  });
}
export function useGetDebtList(id: CarIdType) {
  return useQuery({
    queryFn: () => getDebtList(id),
    queryKey: [GET_DEBT_LIST],
    enabled: !!id,
  });
}
export function useGetDebt(license: LicenseType, debtType: DEBT_TYPE_ENUM) {
  return useQuery({
    queryFn: () => getDebt(license, debtType),
    queryKey: [GET_DEBT, license, debtType],
    enabled: !!license,
  });
}

export function useGetAssists(id: CarIdType) {
  return useQuery({
    queryFn: () => getAssists(id),
    queryKey: [GET_ASSISTS, id],
    enabled: !!id,
  });
}

export function useDeleteLogout() {
  return useMutation({
    mutationFn: (token_id: string) => deleteLogout(token_id),
    mutationKey: [POST_LOGOUT],
  });
}

export function usePostUserDevices() {
  return useMutation({
    mutationKey: [POST_USER_DEVICES],
    mutationFn: postUserDevices,
  });
}
