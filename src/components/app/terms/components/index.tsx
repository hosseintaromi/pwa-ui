import Container from '@/components/@base/container';
import CarpardazTerms from '@/components/app/terms/components/carpardaz-terms';
import ItollTerms from '@/components/app/terms/components/itoll-terms';

export default function About() {
  return (
    <Container className='flex flex-col gap-y-5 p-3'>
      <ItollTerms />
      <CarpardazTerms />
    </Container>
  );
}
