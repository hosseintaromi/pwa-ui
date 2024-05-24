import Link from 'next/link';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import { VARIANT_ENUM } from '@/components/@base/button/type';
import Remove from '@/components/shared/components/cards/car-box/actions/buttons/remove';

import useCommonModalStore from '@/store/common-modal-store';

import localization from '@/constant/localization';
import { CAR } from '@/constant/routes';

export default function Buttons({ id }) {
  const { setShow: setModalShow } = useCommonModalStore();
  const handleRemoveClick = () => {
    setModalShow(true, { Body: () => <Remove id={id} /> });
  };

  return (
    <>
      <Link href={CAR(id, true)}>
        <Button
          variant={VARIANT_ENUM.OUTLINED}
          color={COLOR_ENUM.PRIMARY}
          Icon={() => <CiEdit size={SIZE_ENUM.LG} />}
        >
          {localization.edit}
        </Button>
      </Link>
      <Button
        variant={VARIANT_ENUM.OUTLINED}
        color={COLOR_ENUM.PRIMARY}
        onClick={() => handleRemoveClick()}
        Icon={() => <MdDeleteOutline size={SIZE_ENUM.LG} />}
      >
        {localization.remove}
      </Button>
    </>
  );
}
