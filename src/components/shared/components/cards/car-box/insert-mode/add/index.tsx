import { MdAdd } from 'react-icons/md';

import { COLOR_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import useShowInsertPlate from '@/components/shared/hooks/show-insert-plate';

import ICON_SIZE from '@/constant/icon-size-color';
import localization from '@/constant/localization';

export default function Add() {
  const { open } = useShowInsertPlate();

  return (
    <Button
      color={COLOR_ENUM.PRIMARY}
      className='flex items-center justify-center gap-2'
      onClick={open}
    >
      <MdAdd size={ICON_SIZE.lg} />
      {localization.addNewCar}
    </Button>
  );
}
