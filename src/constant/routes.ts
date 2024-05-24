import {
  FuelIdType,
  serviceIdType,
  singleFuelIdType,
  singleServiceIdType,
} from '@/components/app/car/services/types';
import { DocumentBagIdType } from '@/components/app/car-assist/services/types';
import { InvoiceIdType } from '@/components/app/debts/services/type';
import { carPlateType, FuelStationIdType } from '@/components/app/gas-station/services/type';
import { CarIdType, LicenseType } from '@/components/shared/services/types';

import { PATH, TITLE } from '@/constant/search-params';
import { DEBT_TYPE_ENUM } from '@/models/_base.model';

export const API_GATE_WAY = process.env.NEXT_PUBLIC_API_URL;
export const SITE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
export const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;
export const PWA_HOST = 'pwa.app.com';
export const API_ROUTES = {
  GET_SERVICES: '/services',
  DELETE_SERVICE: (id: serviceIdType) => `/v1/service/${id}`,
};
export const HOME_PAGE = '/';
export const ACCOUNT = '/account/';
export const ABOUT_US = '/about/';
export const CONTACT = '/contact/';
export const BLOG = '/blog/';

export const INSTAGRAM = 'https://www.instagram.com/app.ir';
export const LINKEDIN = 'https://www.linkedin.com/company/app';
export const TWITTER = 'https://twitter.com/app_ir';
