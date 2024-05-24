import { ReactNode } from 'react';

import { StationModel } from '@/models/_base.model';

type Props = {
  station?: StationModel;
  actionsClassName?: string;
  actionsChildren?: ReactNode;
  infoChildren?: ReactNode;
};
export default Props;
