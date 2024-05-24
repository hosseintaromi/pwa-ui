import Container from '@/components/@base/container';
import ContactNumber from '@/components/layout/default/header/top/contact-number';

export default function Top() {
  return (
    <Container className='bg-i-gray h-10 px-3 py-2'>
      {/*   <Support />*/}
      <ContactNumber />
    </Container>
  );
}
