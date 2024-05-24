import { CiSearch } from 'react-icons/ci';

import Container from '@/components/@base/container';
import DebounceInput from '@/components/shared/components/debounce-input';
import Props from '@/components/shared/components/search/type';

import ICON_SIZE from '@/constant/icon-size-color';

export default function Search({ onChange, placeholder }: Props) {
  return (
    <Container className='py-3'>
      <DebounceInput
        className='py-5'
        debounce={400}
        onChange={onChange}
        Icon={() => <CiSearch size={ICON_SIZE.lg} />}
        placeholder={placeholder}
      />
    </Container>
  );
}
