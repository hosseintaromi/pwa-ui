import Link from 'next/link';
import { MdAdd } from 'react-icons/md';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import { VARIANT_ENUM } from '@/components/@base/button/type';
import { CardAction, CardContent, CardHeader } from '@/components/@base/card';
import Container from '@/components/@base/container';
import { Heading, Text } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import XImage from '@/components/@base/x-image';
import Actions from '@/components/shared/components/cards/car-box/actions';
import AutoPayment from '@/components/shared/components/cards/car-box/show-mode/auto-payment';
import Props from '@/components/shared/components/cards/car-box/show-mode/type';
import Plate from '@/components/shared/components/plate-builder/minimal';

import localization from '@/constant/localization';
import { CAR } from '@/constant/routes';

export default function ShowMode({
  id,
  image,
  name,
  extraInfo,
  plateNumber,
  license,
  automatic_tehran_payment,
  automatic_freeway_payment,
}: Props) {
  return (
    <>
      <Container className='absolute -left-5 top-[45px]'>
        {image && name && (
          <XImage
            placeholder
            src={image}
            alt={name + extraInfo}
            width={115}
            height={70}
            loading='eager'
            className='scale-x-[-1]'
          />
        )}
      </Container>
      <CardHeader>
        <Container center>
          <Plate plateNumber={plateNumber || { first: '', last: '', state: '', char: '' }} />
          <Actions id={id} />
        </Container>
      </CardHeader>
      <CardContent className='justify-between py-0'>
        <Container>
          <Heading type={HEADING_TYPE.H5}>{name}</Heading>
          <Text color={COLOR_ENUM.TEXT} size={SIZE_ENUM.XS}>
            {extraInfo}
          </Text>
          {!name && id && (
            <Container center>
              <Link href={CAR(id)}>
                <Button
                  Icon={MdAdd}
                  color={COLOR_ENUM.PRIMARY}
                  variant={VARIANT_ENUM.OUTLINED}
                >
                  {localization.completeCarInfo}
                </Button>
              </Link>
            </Container>
          )}
        </Container>
      </CardContent>
      <CardAction className='flex justify-between p-4 pb-1'>
        <AutoPayment
          id={id}
          license={license}
          automatic_tehran_payment={automatic_tehran_payment}
          automatic_freeway_payment={automatic_freeway_payment}
        />
      </CardAction>
    </>
  );
}
