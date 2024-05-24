'use client';
import { useEffect } from 'react';
import { UAParser } from 'ua-parser-js';

import { getFromLocalStorage, setToLocalStorage } from '@/lib/helper';

import { usePostUserDevices } from '@/components/app/home/services/hooks';

import StorageKey from '@/constant/storage-key';

export default function UserDevices() {
  const { mutate: postUserDevice } = usePostUserDevices();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const UADetails = UAParser(window.navigator.userAgent);

    if (
      getFromLocalStorage(StorageKey.USER_DEVICE_POSTED) ||
      !UADetails?.device ||
      UADetails?.device?.type !== 'mobile'
    ) {
      return;
    }
    const {
      device: { model, vendor },
      os: { name, version },
    } = UADetails;
    postUserDevice(
      {
        fcm_token:
          'unknown.cSapC4wjQl6JTOYRdo9K3G:APA91bE-DxUgl-lfqr9WRcHXLeNgujfZmhyinFqv1EdSKdsgsdfgsxb5iFRiHa22bJjIQMIKP2dxcEKba9zfPmsZRQRVbQhsHp6z0o1w9Pqk1FRoTvUzq8sASr1RG9cnizZ3cKhVbzz',
        device_type: 'PWA',
        meta: {
          brand: vendor,
          model,
          manufacture: vendor,
          os_name: name,
          os_version: version,
        },
      },
      {
        onSuccess() {
          setToLocalStorage(
            StorageKey.USER_DEVICE_POSTED,
            StorageKey.USER_DEVICE_POSTED_VALUE,
          );
        },
      },
    );
  }, []);
  return null;
}
