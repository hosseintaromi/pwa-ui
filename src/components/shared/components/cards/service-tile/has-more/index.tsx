'use client';
import { BsThreeDots } from 'react-icons/bs';

import Container from '@/components/@base/container';
import { Heading } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import { getServiceByFlag, getSubServices } from '@/components/app/home/helpers';
import Props from '@/components/shared/components/cards/service-tile/has-more/type';
import ServiceTiles from '@/components/shared/components/service-tiles';

import useCommonModalStore from '@/store/common-modal-store';

export default function HasMore({ flag, name }: Props) {
  const { setShow: setModalShow } = useCommonModalStore();
  const handleClick = () => {
    setModalShow(true, {
      Body: () => <ServiceTiles services={getServiceByFlag(flag, getSubServices())} />,
      Head: () => (
        <Container center className='border-b pb-2'>
          <Heading type={HEADING_TYPE.H5}>{name}</Heading>
        </Container>
      ),
    });
  };

  return (
    <Container className='absolute inset-0' onClick={handleClick}>
      <Container
        center
        className='absolute -bottom-[3px] -left-[3px] h-[13px] w-[28px] rounded-bl-xl rounded-tr-xl border-2 border-white bg-gray-50'
      >
        <BsThreeDots height={17} color='#909090' />
      </Container>
    </Container>
  );
}
