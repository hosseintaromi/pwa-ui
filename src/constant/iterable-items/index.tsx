import { IconType } from 'react-icons';
import { BsPerson } from 'react-icons/bs';
import { CiCreditCard1, CiLocationOn } from 'react-icons/ci';
import { FaLinkedin, FaRegAddressCard, FaTwitter } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiInstagramFill, RiWheelchairLine } from 'react-icons/ri';

import { makePWARoute } from '@/lib/helper';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import { INPUT_TYPES } from '@/components/@base/input/text/type';
import { TIME_FILTER_TYPE } from '@/components/app/car/components/[id]/[report]/filters/modal/type';

import generator from '@/constant/iterable-items/generator';
import {
  SERVICES_FLAG,
  ServiceType,
  SideBarMenuItemType,
  STEP_TYPE,
} from '@/constant/iterable-items/type';
import localization, { pageLevelLocalization } from '@/constant/localization';
import {
  ABOUT_US,
  BLOG,
  CONTACT,
  GAS_STATION,
  INSTAGRAM,
  LINKEDIN,
  TWITTER,
} from '@/constant/routes';
import {
  ANNUAL_TOLLS,
  BODY_INSURANCE,
  BUY_BATTERY,
  BUY_OIL_AND_FILTER,
  CARPARDAZ_TECHNICAL_INSPECTION,
  CARWASH,
  CONTACT_WITH_SUPPORT,
  FREEWAY_TOLL,
  HISTORY_TRANSACTIONS,
  INQUIRY_CAR_AND_DOCUMENTS,
  INQUIRY_CAR_HISTORY,
  INQUIRY_DRIVER_LICENSE_STATUS,
  INQUIRY_KHALAFI,
  INQUIRY_LICENCE_NEGATIVE_POINT,
  INQUIRY_LICENSES,
  KHLAFY,
  SERVICE_SUBSCRIPTION,
  THIRD_PARTY_INSURANCE,
  TRAFFIC_PLAN,
  TRANSFER_TAX,
} from '@/constant/site-routes';
import { FUEL_SUB_SERVICE } from '@/models/fuel-report.model';
import InvoiceModel from '@/models/invoice.model';
import { SWAP_SERVICE_TYPE } from '@/models/report.model';

import hampad from '~/images/common/hampad.svg';
import mojavezFaaliat from '~/images/common/mojavez-faaliat.svg';
import samandehi from '~/images/common/samandehi.svg';
import allServices from '~/images/icons/all-services.svg';
import annualTax from '~/images/icons/annual-tax.svg';
import battery from '~/images/icons/battery.svg';
import bodyInsurance from '~/images/icons/body-insurance.svg';
import carAssist from '~/images/icons/car-assist.svg';
import carDocumentsInquery from '~/images/icons/car-documents-inquery.svg';
import carInsurance from '~/images/icons/car-insurance.svg';
import carPlateInquery from '~/images/icons/car-plate-inquery.svg';
import carTransferTax from '~/images/icons/car-transfer-tax.svg';
import carwash from '~/images/icons/car-washing.svg';
import documentInquiry from '~/images/icons/document-inquiry.svg';
import driverLicenseNegativePoint from '~/images/icons/driver-license-negative-point.svg';
import drivingLicenseInquiry from '~/images/icons/driving-license-inquiry.svg';
import estelamSavabegh from '~/images/icons/estelam-savabegh.svg';
import fuelStation from '~/images/icons/fuel-station.svg';
import insuranceService from '~/images/icons/insurance-service.svg';
import karpardaz from '~/images/icons/karpardaz.svg';
import logoutCurve from '~/images/icons/menu/logout-curve.svg';
import messageNotifMenu from '~/images/icons/menu/message-notif.svg';
import messages from '~/images/icons/menu/messages.svg';
import receipt from '~/images/icons/menu/receipt.svg';
import messageNotif from '~/images/icons/message-notif.svg';
import motorcycleInsurance from '~/images/icons/motorcycle-insurance.svg';
import myTehran from '~/images/icons/my-tehran.svg';
import policePenalty from '~/images/icons/police-penalty.svg';
import queryTechnicalInspection from '~/images/icons/query-technical-inspection.svg';
import shopOil from '~/images/icons/shop-oil.svg';
import technicalInspection from '~/images/icons/technical-inspection.svg';
import toll from '~/images/icons/toll.svg';
import totalInvoices from '~/images/icons/total-invoice.svg';
import android from '~/images/layout/footer/android.svg';
import bazar from '~/images/layout/footer/bazar.svg';
import enamad from '~/images/layout/footer/enamad.svg';
import kian from '~/images/layout/footer/kian.svg';
import myket from '~/images/layout/footer/myket.svg';

const {
  tire,
  timingBelt,
  dynamicBelt,
  battery: theBattery,
  oil,
  other,
  previous1Month,
  previous3Month,
  previous6Month,
} = localization;

const {
  carServices: {
    petrol1500,
    petrol3000,
    petrol3500,
    sabaBattery,
    sepahanBattery,
    dornaBattery,
    nirogostaranBattery,
    vaiaBattery,
    bornaBattery,
    bestForeignBattery,
    economicForeignBattery,
    otherBatteries,
  },
} = pageLevelLocalization;

export const SIDEBAR_MENU_ITEMS = () =>
  generator<SideBarMenuItemType>(
    [
      [localization.aboutUs, ABOUT_US],
      [localization.contactUs, CONTACT],
      [localization.aboutUs, ABOUT_US],
      [localization.news, BLOG],
    ],
    ['name', 'link', 'subMenu'],
  );


export const SOCIALS = generator<{
  Icon: IconType;
  link: string;
}>(
  [
    [RiInstagramFill, INSTAGRAM],
    [FaTwitter, TWITTER],
    [FaLinkedin, LINKEDIN],
  ],
  ['Icon', 'link'],
);



export const STEP_TYPES = generator<{
  id: number;
  name: string;
  value: string;
}>(
  [
    ['1', localization.submitInfo, STEP_TYPE.SUBMIT_INFO],
    ['2', localization.authentication, STEP_TYPE.AUTHENTICATION],
    ['3', localization.view, STEP_TYPE.VIEW],
  ],
  ['id', 'name', 'value', 'isActive'],
);
