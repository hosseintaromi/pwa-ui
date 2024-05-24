import { useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';

import cn from '@/lib/clsxm';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import Spinner from '@/components/@base/spinner';
import { Text } from '@/components/@base/typography';
import Item from '@/components/shared/components/service-stations/list/item';
import Props from '@/components/shared/components/service-stations/list/type';

import localization from '@/constant/localization';
const TEHRAN_DEFAULT_LOCATION = {
  lat: 35.7219,
  long: 51.3347,
};

export default function List({
  apiData,
  className,
  onResult,
  ROUTE,
  setLocation,
  location,
  ExtraButton,
  CustomLink,
  height = 310,
  ...props
}: Props) {
  const { data, isPending, isFetchingNextPage, isError, fetchNextPage, hasNextPage } = apiData;
  const stations = data?.pages?.map((data) => data.data).flat();
  const noResult = !stations?.length;

  useEffect(() => {
    if (onResult) {
      onResult(stations || []);
    }
  }, [isPending, isFetchingNextPage]);
  useEffect(() => {
    //TODO: use user location unless if it is out of bound
    navigator.geolocation.getCurrentPosition(
      async (/*position*/) => {
        /*const { latitude, longitude } = position.coords;*/
        setLocation(TEHRAN_DEFAULT_LOCATION);
      },
      () => {
        setLocation(TEHRAN_DEFAULT_LOCATION);
      },
    );
  }, []);
  return (
    <Container center className='flex-col'>
      {isPending ? (
        <Spinner />
      ) : isError || noResult ? (
        <Text
          bold
          size={SIZE_ENUM.XS}
          color={isError ? COLOR_ENUM.ERROR : COLOR_ENUM.TEXT}
          className='py-7'
        >
          {isError ? localization.errorWhileGettingData : localization.noResult}
        </Text>
      ) : (
        <Virtuoso
          className={cn('w-full gap-3', className)}
          style={{ height: `calc(100vh - ${height}px)` }}
          endReached={() =>
            hasNextPage && !isFetchingNextPage && !isPending && fetchNextPage()
          }
          fixedItemHeight={108}
          overscan={200}
          data={stations}
          components={{
            Footer: () =>
              (isFetchingNextPage || !location?.lat) && (
                <Container center>
                  <Spinner />
                </Container>
              ),
          }}
          itemContent={(index, station) => (
            <Item
              key={station.id}
              data={station}
              redirectTo={ROUTE(station.id)}
              ExtraButton={ExtraButton}
              CustomLink={CustomLink}
              {...props}
            />
          )}
        />
      )}
    </Container>
  );
}
