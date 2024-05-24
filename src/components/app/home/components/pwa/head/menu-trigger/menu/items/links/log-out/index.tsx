import { useRouter } from 'next/navigation';
import { RiCloseFill } from 'react-icons/ri';

import { clearTokens, getFromLocalStorage } from '@/lib/helper';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';
import Item from '@/components/app/home/components/pwa/head/menu-trigger/menu/items/@shared/item';
import { useDeleteLogout } from '@/components/app/home/services/hooks';

import useCommonModalStore from '@/store/common-modal-store';
import useUserStore from '@/store/user-store';

import ICON_SIZE from '@/constant/icon-size-color';
import localization from '@/constant/localization';
import { SPLASH } from '@/constant/routes';
import StorageKey from '@/constant/storage-key';

export default function LogOut({ src }) {
  const { setShow } = useCommonModalStore();

  const handleClose = () => {
    setShow(false);
  };

  const openLogoutModal = () => {
    setShow(true, {
      Head: () => (
        <Container center className='border-b-2 pb-2'>
          <Text color={COLOR_ENUM.BLACK} bold className='m-auto'>
            {localization.exit}
          </Text>
          <RiCloseFill onClick={handleClose} size={ICON_SIZE.md} />
        </Container>
      ),
      Body: () => {
        const { mutate: logout, isPending } = useDeleteLogout();
        const { clear } = useUserStore();
        const router = useRouter();
        const handleClick = async () => {
          const tokenId = getFromLocalStorage(StorageKey.TOKEN);
          if (tokenId) {
            clear();
            logout(tokenId);
            router.push(SPLASH);
            clearTokens();
          }
        };
        return (
          <Container center className='w-full justify-between pt-4'>
            <Text size={SIZE_ENUM.MD} color={COLOR_ENUM.BLACK}>
              {localization.areYouSureAboutYourExit}
            </Text>
            <Button
              className='px-16 py-4'
              size={SIZE_ENUM.LG}
              onClick={handleClick}
              isLoading={isPending}
            >
              {localization.yes}
            </Button>
          </Container>
        );
      },
    });
  };

  return (
    <Container onClick={openLogoutModal}>
      <Item name={localization.logout} src={src} />
    </Container>
  );
}
