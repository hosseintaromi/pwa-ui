import { Props as ListItemProps } from '@/components/@base/list/item/type';

import { GeneratorReturnType, SideBarMenuItemType } from '@/constant/iterable-items/type';

export default interface Props extends ListItemProps {
  item: GeneratorReturnType<SideBarMenuItemType>;
  isParentMenu?: boolean;
}
