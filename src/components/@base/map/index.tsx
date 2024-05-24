import { Icon } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { Props } from '@/components/@base/map/type';

export default function Map({ ...props }: Props) {
  const icon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
    iconSize: [25, 41], // size of the icon
    shadowSize: [41, 41], // size of the shadow
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 41], // the same for the shadow
  });
  return (
    <MapContainer {...props}>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker icon={icon} position={props.center || [35.7282989, 51.5202669]} />
    </MapContainer>
  );
}
