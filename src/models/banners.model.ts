//v3/home/banners
export interface Banner {
  id: string;
  imageUrl: string;
  target: string;
  inApp: boolean;
}

export default interface BannersModel {
  body: Banner[];
  footer_top: Banner[];
  footer_bottom: Banner[];
}
