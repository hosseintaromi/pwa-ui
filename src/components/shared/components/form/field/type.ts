import { ReactNode } from 'react';
import { IconType } from 'react-icons';

import Base from '@/components/@base/@helpers/types';

export type Props = {
  title: string;
  Icon?: IconType | string;
  info?: ReactNode;
  placeholder?: string;
  iconColor?: string;
} & Base;
