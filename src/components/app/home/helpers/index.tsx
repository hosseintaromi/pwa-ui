import { ITOLL_SERVICES, PWA_SERVICES } from '@/constant/iterable-items';
import {
  GeneratorReturnType,
  SERVICES_FLAG,
  ServiceType,
} from '@/constant/iterable-items/type';
import localization from '@/constant/localization';

export function getServiceByFlag(
  flag: SERVICES_FLAG,
  services: GeneratorReturnType<ServiceType>[] = ITOLL_SERVICES,
) {
  return services.filter((service) => service.flag === flag);
}

export function getMainServiceTiles() {
  return PWA_SERVICES.slice(0, 6);
}

export function getSubServices() {
  return PWA_SERVICES.slice(6, PWA_SERVICES.length);
}

export function isCarProfile(name: string) {
  return name === localization.carAssist;
}

export function isFreewayTollsService(name: string) {
  return name === localization.freewayTolls;
}

export function isAllService(name: string) {
  return name === localization.allService;
}

export function isOverAllInquiryService(name: string) {
  return name === localization.overallInquiry;
}

export function needsLicencePlate(name: string) {
  return [
    localization.carAssist,
    localization.overallInquiry,
    localization.freewayTolls,
    localization.trafficPlan,
    localization.annualTolls,
  ].includes(name);
}
