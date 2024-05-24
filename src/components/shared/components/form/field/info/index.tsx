import { IoMdInformationCircleOutline } from 'react-icons/io';
import { RiCloseFill } from 'react-icons/ri';

import Button from '@/components/@base/button';
import Container from '@/components/@base/container';
import Props from '@/components/shared/components/form/field/info/type';

import useCommonModalStore from '@/store/common-modal-store';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import localization from '@/constant/localization';

export default function Info({ children }: Props) {
  const { setShow } = useCommonModalStore();
  const handleClose = () => {
    setShow(false);
  };
  const handleClick = () => {
    setShow(true, {
      Head: () => {
        return (
          <Container center className='justify-end border-b-2 pb-2'>
            <RiCloseFill onClick={handleClose} />
          </Container>
        );
      },
      Body: () => {
        return (
          <Container center className='flex-col'>
            {children}
            <Button className='mt-4 w-full' onClick={handleClose}>
              {localization.admit}
            </Button>
          </Container>
        );
      },
      center: true,
    });
  };
  return (
    <IoMdInformationCircleOutline
      size={ICON_SIZE.lg}
      color={ICON_COLOR.gray}
      onClick={handleClick}
    />
  );
}
