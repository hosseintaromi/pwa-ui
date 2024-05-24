'use client';
import { getMessaging, onMessage } from 'firebase/messaging';
import { useEffect } from 'react';

import useFcmToken from '@/components/layout/pwa/push-notification/use-fcm-token';



export default function FcmTokenComp() {
  const { notificationPermissionStatus } = useFcmToken();

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      if (notificationPermissionStatus === 'granted') {

        const unsubscribe = onMessage(messaging, (payload) =>
          console.log('Foreground push notification received:', payload),
        );
        return () => {
          unsubscribe();
        };
      }
    }
  }, [notificationPermissionStatus]);

  return null;
}
