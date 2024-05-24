import axios from '@/lib/axios-instance';
import { APIUrlGenerator } from '@/lib/helper';

import { GetDebtType } from '@/components/app/home/services/types';
import auth from '@/components/shared/components/otp-login/auth';
import { CarIdType, LicenseType } from '@/components/shared/services/types';

import localization from '@/constant/localization';
import { API_ROUTES } from '@/constant/routes';
import { DEBT_TYPE_ENUM } from '@/models/_base.model';
import AssistsModel from '@/models/assists.model';
import BannersModel from '@/models/banners.model';
import CarModel from '@/models/car.model';
import DebtModel, { DEBT_STATUS_ENUM } from '@/models/debt.model';
import { DebtOrderModel } from '@/models/debt-order.model';

export const getCarList = auth(async (): Promise<CarModel[]> => {
  const { data }: { data: CarModel[] } = await axios.get(APIUrlGenerator(API_ROUTES.GET_CARS));
  return data;
});

export const deleteLogout = auth(async (token_id: string): Promise<CarModel[]> => {
  const { data }: { data: CarModel[] } = await axios.delete(
    APIUrlGenerator(API_ROUTES.DELETE_LOGOUT(token_id)),
  );
  return data;
});
export const getBanner = auth(
  async (id: CarIdType, force?: boolean): Promise<BannersModel> => {
    const {
      data: { data },
    }: { data: { data: BannersModel } } = await axios.get(
      APIUrlGenerator(API_ROUTES.GET_BANNER(id, force)),
    );
    return data;
  },
);
export const getDebt = auth(
  async (id: LicenseType, debtType: DEBT_TYPE_ENUM): Promise<DebtModel> => {
    const {
      data: { data: carDebt },
    }: { data: { data: GetDebtType } } = await axios.get(
      APIUrlGenerator(API_ROUTES.GET_DEBT(id, debtType)),
    );

    return {
      title: carDebt.title,
      type: carDebt.type,
      status: !carDebt.button
        ? DEBT_STATUS_ENUM.CLEARANCE
        : carDebt.button.text === localization.inquiry ||
            carDebt.button.text === localization.inquiryAgain
          ? DEBT_STATUS_ENUM.NO_DEBT
          : DEBT_STATUS_ENUM.HAS_DEBT,
      price: carDebt?.main_detail?.text,
      time: carDebt?.extra_detail?.text,
      link: carDebt?.button?.uri,
      linkText: carDebt?.button?.text,
    };
  },
);
export const getDebtList = auth(async (id: CarIdType): Promise<DebtOrderModel> => {
  const { data: list }: { data: DebtOrderModel } = await axios.get(
    APIUrlGenerator(API_ROUTES.GET_DEBT_LIST(id)),
  );
  return list;
});
export const getAssists = auth(async (id: CarIdType): Promise<AssistsModel> => {
  const {
    data: { data: assists },
  }: { data: { data: AssistsModel } } = await axios.get(
    APIUrlGenerator(API_ROUTES.GET_ASSISTS(id)),
  );
  return assists;
});

export const postUserDevices = auth(async (body): Promise<any> => {
  const { data }: { data: any } = await axios.post(
    APIUrlGenerator(API_ROUTES.POST_USER_DEVICES),
    body,
  );
  return data;
});
