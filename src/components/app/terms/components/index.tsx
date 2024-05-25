import Container from '@/components/@base/container';
import CarpardazTerms from '@/components/app/terms/components/carpardaz-terms';

export default function About() {
  return (
    <Container className='flex flex-col gap-y-5 p-3'>
      <CarpardazTerms />
    </Container>
  );
}
