'use client';
import Container from '@/components/@base/container';
import Carpardaz from '@/components/app/home/components/default/services/carpardaz';
import Debt from '@/components/app/home/components/default/services/debt';
import Inquiry from '@/components/app/home/components/default/services/inquiry';
import Insurance from '@/components/app/home/components/default/services/insurance';
import Maintenance from '@/components/app/home/components/default/services/maintenance';
export default function Services() {
  return (
    <Container className='flex flex-col gap-10'>
      <Debt />
      <Insurance />
      <Inquiry />
      <Carpardaz />
      <Maintenance />
    </Container>
  );
}
