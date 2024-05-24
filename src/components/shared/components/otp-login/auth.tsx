import useOTPAuthStore from '@/store/otp-auth-store';
const isServer = typeof window === 'undefined';

import localization from '@/constant/localization';
import StorageKey from '@/constant/storage-key';

//just let it to be and don't touch it until better solution
export default function auth<T extends Function>(request: T): T {
  const requestBackup = request;

  // @ts-expect-error nothing we can do right now
  request = function (...params: any[]) {
    return new Promise((resolve, reject) => {
      const request = async () => {
        try {
          const result = await requestBackup.apply(null, [...params]);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      };

      if (!isServer) {
        if (window.localStorage.getItem(StorageKey.TOKEN)) {
          return request();
        }
      }
      useOTPAuthStore.getState().setShow(true, async (isFailed) => {
        useOTPAuthStore.getState().reset();
        if (isFailed) {
          return reject({
            hasError: true,
            message: localization.loginProcedureFailed,
          });
        }
        await request();
      });
    });
  };
  return request;
}
