import ImageModel from '@/models/image.model';

export default interface ServiceModel {
  _id: string;
  name: string;
  nameEn: string;
  description: string;
  shortDescription: string;
  basePrice: number;
  thumbnail: string;
  images: ImageModel[];
}
