import { CardAction, CardContent, CardHeader } from '@/components/@base/card';
import Container from '@/components/@base/container';
import XImage from '@/components/@base/x-image';
import Add from '@/components/shared/components/cards/car-box/insert-mode/add';
import Plate from '@/components/shared/components/plate-builder/minimal';

import localization from '@/constant/localization';

import converedCar from '~/images/home/pwa/convered-car.svg';

export default function InsertMode() {
  return (
    <>
      <CardHeader>
        <Container center className='mt-4'>
          <Plate plateNumber={{ first: '--', char: '-', last: '---', state: '--' }} />
        </Container>
      </CardHeader>
      <CardContent className='justify-between py-1'>
        <Container center>
          <XImage src={converedCar} alt={localization.addNewCar} />
        </Container>
      </CardContent>
      <CardAction className='pt-0'>
        <Container center>
          <Add />
        </Container>
      </CardAction>
    </>
  );
}
