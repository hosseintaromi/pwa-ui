import Container from '@/components/@base/container';
import Rate from '@/components/@base/rate';
import { Heading } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import Props from '@/components/shared/components/service-stations/info/head/type';

export default function Head({ rate, titleText }: Props) {
  return (
    <Container center className='justify-between py-5'>
      <Heading type={HEADING_TYPE.H1} className='truncate'>
        {titleText}
      </Heading>
      <Rate readOnly value={rate || 0} items={5} halfFillMode='svg' style={{ maxWidth: 90 }} />
    </Container>
  );
}
