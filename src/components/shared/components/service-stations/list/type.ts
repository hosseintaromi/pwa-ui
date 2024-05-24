import { Dispatch, ElementType, SetStateAction } from 'react';

import Base from '@/components/@base/@helpers/types';

type Props = {
  superGasMode?: boolean;
  onResult?: (stations: any[]) => void;
  apiData: APICallType;
  ROUTE: (id: string | number) => string;
  setLocation: Dispatch<SetStateAction<{ lat: undefined | number; long: undefined | number }>>;
  location?: { lat: number | undefined; long: number | undefined };
  ExtraButton?: ElementType;
  CustomLink?: ElementType;
  height?: number;
} & Base;
export type APICallType = {
  data: { pages: any[] | undefined };
  isPending: boolean;
  isFetchingNextPage: boolean;
  isError: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
};
export default Props;
