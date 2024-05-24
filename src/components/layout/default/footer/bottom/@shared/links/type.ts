import { ReactNode } from 'react';

type Props = {
  title: string;
  children?: ReactNode | null;
  className?: string;
  items?:
    | {
        id: string;
        name: string;
        link: string;
      }[]
    | null;
};

export default Props;
