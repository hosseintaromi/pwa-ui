export const API_GATE_WAY = process.env.NEXT_PUBLIC_API_URL;
export const SITE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
export const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;
export const PWA_HOST = 'pwa.app.com';
export const API_ROUTES = {
  GET_SERVICES: '/services',
  DELETE_SERVICE: (id: any) => `/v1/service/${id}`,
};
export const HOME_PAGE = '/';
export const ABOUT_US = '/about/';
