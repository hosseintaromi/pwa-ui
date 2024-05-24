import NeshanMapClass from '@neshan-maps-platform/mapbox-gl';
import { MapComponent, MapTypes } from '@neshan-maps-platform/mapbox-gl-react';
import { Map, Marker } from 'mapbox-gl';
import { useEffect, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import '@neshan-maps-platform/mapbox-gl-react/dist/style.css';

import Container from '@/components/@base/container';

const NESHAN_API_KEY = process.env.NEXT_PUBLIC_NESHAN_API_KEY;

function getMyLocationMarkerImage(): HTMLElement {
  const string = renderToStaticMarkup(
    <Container className='absolute left-0 top-0 inline-flex h-3 w-3 rounded-full border-2 border-white bg-primary-50' />,
  );
  const div = document.createElement('div');
  div.innerHTML = string;
  return div.firstChild as HTMLElement;
}

export async function isInBound(long: number, lat: number) {
  try {
    const southWest = new NeshanMapClass.LngLat(35.595112, 51.106942);
    const northEast = new NeshanMapClass.LngLat(35.81715, 51.674153);
    const bounds = new NeshanMapClass.LngLatBounds(southWest, northEast);
    return bounds.contains([long, lat]);
  } catch (e) {
    return true;
  }
}

export default function Pins({ locations }: { locations?: [number, number][] }) {
  const [mapInstance, setMapInstance] = useState<Map>();
  const [isClient, setIsClient] = useState(false);
  const [markers, setMarkers] = useState<Marker[]>([]);
  useEffect(() => {
    if (mapInstance && locations) {
      markers.forEach((marker) => marker?.remove());
      const newMarkers: Marker[] = [];
      locations.map((location) => {
        newMarkers.push(
          new NeshanMapClass.Marker().setLngLat(location).addTo(mapInstance as Map),
        );
      });
      setMarkers([...markers, ...newMarkers]);
    }
  }, [mapInstance, locations]);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        if (mapInstance && (await isInBound(longitude, latitude))) {
          new NeshanMapClass.Marker({ element: getMyLocationMarkerImage() })
            .setLngLat([longitude, latitude])
            .addTo(mapInstance as Map);
          mapInstance.setCenter([latitude, longitude]);
        }
      });
    }
  }, [mapInstance]);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient || typeof window === 'undefined') {
    return null;
  }

  return (
    <MapComponent
      className='rounded [&_.mapboxgl-control-container]:hidden [&_.wm-container]:!hidden'
      mapSetter={(mapref: any) => setMapInstance(mapref)}
      options={{
        mapKey: NESHAN_API_KEY || '',
        mapType: MapTypes.neshanRaster,
        zoom: 8.8,
        center: [51.389, 35.6892],
        trafficControllerOptions: { show: false },
        mapTypeControllerOptions: { show: false },
      }}
    />
  );
}
