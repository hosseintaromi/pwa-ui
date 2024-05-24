'use client';
import { getMessaging, getToken } from 'firebase/messaging';
import { useEffect, useState } from 'react';


export default function useFcmToken() {
  const [token, setToken] = useState('');
  const [notificationPermissionStatus, setNotificationPermissionStatus] = useState('');

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {

          const permission = await Notification.requestPermission();
          setNotificationPermissionStatus(permission);
          if (permission === 'granted') {
            const currentToken = await getToken(messaging, {
            });
            if (currentToken) {
              setToken(currentToken);
            }
          }
        }
      } catch (error) {}
    };

    retrieveToken();
  }, []);

  return { token, notificationPermissionStatus };
}
