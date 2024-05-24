import Container from '@/components/@base/container';
import XImage from '@/components/@base/x-image';
import Props from '@/components/shared/components/service-stations/info/picture/type';

export default function Picture({ titleText, headerImage }: Props) {
  if (!headerImage) {
    return null;
  }
  return (
    <Container center className='relative min-h-[144px] w-full overflow-hidden py-5'>
      <XImage
        alt={titleText}
        src={headerImage}
        blur
        width={480}
        height={144}
        className='max-h-[230px] w-auto rounded-xl'
      />
    </Container>
  );
}
