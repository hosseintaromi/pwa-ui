import Container from '@/components/@base/container';
import Actions from '@/components/shared/components/service-stations/info/actions';
import Details from '@/components/shared/components/service-stations/info/details';
import Head from '@/components/shared/components/service-stations/info/head';
import Picture from '@/components/shared/components/service-stations/info/picture';
import Props from '@/components/shared/components/service-stations/info/type';

export default function StationInfo({
  station,
  actionsClassName,
  actionsChildren,
  infoChildren,
}: Props) {
  if (!station) {
    return null;
  }
  const { rate, image, title, address, latitude, longitude, phone } = station;
  return (
    <Container className='px-5'>
      <Head rate={rate} titleText={title} />
      <Picture headerImage={image} titleText={title} />
      <Details address={address} phone={phone}>
        {infoChildren && infoChildren}
      </Details>
      <Actions latitude={latitude} longitude={longitude} className={actionsClassName}>
        {actionsChildren && actionsChildren}
      </Actions>
    </Container>
  );
}
