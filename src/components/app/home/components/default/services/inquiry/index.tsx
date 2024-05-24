import ServicesCarousel from '@/components/app/home/components/default/@shared/services-carousel';
import { getServiceByFlag } from '@/components/app/home/helpers';

import { SERVICES_FLAG } from '@/constant/iterable-items/type';
import localization from '@/constant/localization';
export default function Inquiry() {
  return (
    <ServicesCarousel
      title={localization.inquiryDocumentAndCar}
      items={getServiceByFlag(SERVICES_FLAG.INQUIRY)}
    />
  );
}
