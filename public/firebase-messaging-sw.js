importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging-compat.js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDY40G9_2f9fb50mVrx4AxCSCl8ts05Th0',
  authDomain: 'mycar-49a61.firebaseapp.com',
  databaseURL: 'https://mycar-49a61.firebaseio.com',
  projectId: 'mycar-49a61',
  storageBucket: 'mycar-49a61.appspot.com',
  messagingSenderId: '203227373373',
  appId: '1:203227373373:web:a8fbcf907f91a7cf69ef54',
  measurementId: 'G-5D5F1D5TMM',
};

firebase.initializeApp(firebaseConfig);

class CustomPushEvent extends Event {
  constructor(data) {
    super('push');
    Object.assign(this, data);
    this.custom = true;
  }
}
self.addEventListener('push', (e) => {
  if (e.custom) {
    return;
  }
  const oldData = e.data;
  const newEvent = new CustomPushEvent({
    data: {
      ehheh: oldData.json(),
      json() {
        const newData = oldData.json();
        newData.data = {
          ...newData.data,
          ...newData.notification,
        };
        delete newData.notification;
        return newData;
      },
    },
    waitUntil: e.waitUntil.bind(e),
  });
  e.stopImmediatePropagation();
  dispatchEvent(newEvent);
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body, image, icon, ...restPayload } = payload.data;
  const notificationOptions = {
    body,
    icon: image || '/icons/firebase-logo.png',
    data: restPayload,
  };
  return self.registration.showNotification(title, notificationOptions);
});

self.addEventListener('notificationclick', (event) => {
  if (event?.notification?.data && event?.notification?.data?.link) {
    self.clients.openWindow(event.notification.data.link);
  }
  event.notification.close();
});
