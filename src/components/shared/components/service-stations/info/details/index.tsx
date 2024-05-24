import { CiLocationOn } from 'react-icons/ci';
import { PiPhoneLight } from 'react-icons/pi';

import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import Props from '@/components/shared/components/service-stations/info/details/type';

import ICON_SIZE from '@/constant/icon-size-color';
import localization from '@/constant/localization';

export default function Details({ address, phone, children }: Props) {
  return (
    <>
      {children}
      <Container center className='justify-start gap-2.5'>
        <CiLocationOn size={ICON_SIZE.lg} />
        <Text>{localization.address}:</Text>
        <Text>{address}</Text>
      </Container>
      {phone && (
        <Container center className='justify-start gap-2.5'>
          <PiPhoneLight size={ICON_SIZE.lg} />
          <Text>{localization.contactPhone}:</Text>
          <Text>{phone}</Text>
        </Container>
      )}
    </>
  );
}
