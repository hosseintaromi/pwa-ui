import axios from '@/lib/axios-instance';
import { APIUrlGenerator } from '@/lib/helper';

import AUTH from '@/constant/auth';
import { API_ROUTES } from '@/constant/routes';
import UserModel from '@/models/user.model';

export const postProfile = async (body: any): Promise<UserModel> => {
  const { data }: { data: UserModel } = await axios.post(
    APIUrlGenerator(API_ROUTES.GET_SERVICES),
    { ...AUTH, ...body },
  );
  return data;
};
